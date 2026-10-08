/* =============================================================
   main.js: the BEHAVIOR of the page.

   It reads your content (data/content.js and data/projects.js),
   builds each section, and makes the project "View details"
   buttons open and close. You normally don't need to edit this.
   ============================================================= */

/* ---------- Small helper functions ---------- */

// Makes text safe to put in HTML (so characters like & or < display correctly).
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// True when a value is a "TODO" reminder.
function isTodo(value) {
  return typeof value === "string" && value.trim().toUpperCase().startsWith("TODO");
}

// True when a value has real content (not empty).
function hasValue(value) {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "string") return value.trim() !== "";
  return Boolean(value);
}

// A highlighted reminder box, so missing info is easy to spot.
function todoNote(text, inline = false) {
  const tag = inline ? "span" : "p";
  return `<${tag} class="todo">${escapeHtml(text)}</${tag}>`;
}

// Text becomes a paragraph; a list becomes bullet points.
function textBlock(value) {
  if (isTodo(value)) return todoNote(value);
  if (Array.isArray(value)) {
    const items = value
      .map((item) => `<li>${isTodo(item) ? todoNote(item, true) : escapeHtml(item)}</li>`)
      .join("");
    return `<ul class="bullets">${items}</ul>`;
  }
  return `<p>${escapeHtml(value)}</p>`;
}

// Builds a button-style link. Empty links are hidden; TODO links show a reminder
// instead of a broken link.
function linkButton({ label, href, style = "primary", external = false, download = false }) {
  if (isTodo(href)) return todoNote(href, true);
  if (!hasValue(href)) return "";

  const newTab = external ? ' target="_blank" rel="noopener noreferrer"' : "";
  const downloadAttr = download ? " download" : "";
  // Screen readers announce that the link opens a new tab.
  const hint = external ? '<span class="visually-hidden"> (opens in a new tab)</span>' : "";

  return `<a class="btn btn-${style}" href="${escapeHtml(href)}"${newTab}${downloadAttr}>${escapeHtml(label)}${hint}</a>`;
}

// Puts HTML inside the element with the given id.
function fill(id, html) {
  const element = document.getElementById(id);
  if (element) element.innerHTML = html;
}

/* ---------- Sections ---------- */

function renderHero(content) {
  document.querySelectorAll('[data-fill="name"]').forEach((el) => {
    el.textContent = content.name;
  });
  fill("hero-label", escapeHtml(content.heroLabel));
  fill("hero-tagline", escapeHtml(content.tagline));
  fill("hero-skills", content.topSkills.map((skill) => `<li class="tag">${escapeHtml(skill)}</li>`).join(""));

  // Photo is optional: only shown when photo.src is filled in.
  if (hasValue(content.photo.src) && !isTodo(content.photo.src)) {
    fill(
      "hero-photo",
      `<img class="hero-photo" src="${escapeHtml(content.photo.src)}" alt="${escapeHtml(content.photo.alt)}" width="160" height="160">`
    );
  }

  fill("hero-actions", contactButtons(content.links));
}

// The same row of buttons is used at the top and bottom of the page,
// so they always stay in the same order.
function contactButtons(links) {
  return (
    linkButton({ label: "Download Resume (PDF)", href: links.resume, download: true }) +
    linkButton({ label: "LinkedIn", href: links.linkedin, style: "secondary", external: true }) +
    linkButton({ label: "GitHub", href: links.github, style: "secondary", external: true }) +
    linkButton({ label: "Email", href: `mailto:${links.email}`, style: "secondary" })
  );
}

function renderAbout(content) {
  fill("about-text", content.about.map((sentence) => textBlock(sentence)).join(""));
}

// The five parts of every project's detail panel, in order.
const DETAIL_SECTIONS = [
  { key: "question", heading: "Question" },
  { key: "data", heading: "Data" },
  { key: "whatIDid", heading: "What I did" },
  { key: "findings", heading: "Findings" },
  { key: "role", heading: "My role" },
];

function renderProjectCard(project) {
  const panelId = `details-${project.id}`;

  // Use a placeholder image until a real screenshot is added.
  const hasImage = hasValue(project.image.src) && !isTodo(project.image.src);
  const imageSrc = hasImage ? project.image.src : "assets/images/placeholder.svg";
  const imageAlt = hasImage ? project.image.alt : `Screenshot coming soon for ${project.title}`;

  const meta = [project.context, project.date]
    .filter(hasValue)
    .map((part) => (isTodo(part) ? todoNote(part, true) : escapeHtml(part)))
    .join(" · ");

  const tags = project.tags.map((tag) => `<li class="tag">${escapeHtml(tag)}</li>`).join("");

  const links =
    linkButton({ label: "View on GitHub", href: project.links.github, style: "secondary", external: true }) +
    linkButton({ label: "View on Tableau", href: project.links.tableau, style: "secondary", external: true });

  // Sections left empty ("") are skipped entirely.
  const details = DETAIL_SECTIONS.filter((section) => hasValue(project.details[section.key]))
    .map(
      (section) => `
        <div class="detail-block detail-${section.key}">
          <h4>${section.heading}</h4>
          ${textBlock(project.details[section.key])}
        </div>`
    )
    .join("");

  return `
    <article class="project-card" id="project-${escapeHtml(project.id)}">
      <div class="project-main">
        ${
          hasImage
            ? `<button type="button" class="project-image-button"
                       data-full="${escapeHtml(project.image.full || project.image.src)}"
                       data-alt="${escapeHtml(imageAlt)}"
                       aria-label="Enlarge screenshot: ${escapeHtml(project.title)}">
                 <img class="project-image" src="${escapeHtml(imageSrc)}" alt="${escapeHtml(imageAlt)}"
                      width="1600" height="1000" loading="lazy">
                 <span class="enlarge-hint" aria-hidden="true">Click to enlarge</span>
               </button>`
            : `<img class="project-image" src="${escapeHtml(imageSrc)}" alt="${escapeHtml(imageAlt)}"
                    width="1600" height="1000" loading="lazy">`
        }
        <div class="project-body">
          <p class="project-meta">${meta}</p>
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-description">${escapeHtml(project.description)}</p>
          ${hasValue(project.highlight) ? `<p class="project-highlight"><strong>Key result:</strong> ${escapeHtml(project.highlight)}</p>` : ""}
          <ul class="tag-list" aria-label="Tools used">${tags}</ul>
          <div class="button-row">
            <button type="button" class="btn btn-primary project-toggle"
                    aria-expanded="false" aria-controls="${panelId}">
              <span class="toggle-label">View details</span>
              <span class="chevron" aria-hidden="true"></span>
            </button>
            ${links}
          </div>
        </div>
      </div>
      <div class="project-details" id="${panelId}" hidden>
        ${details}
      </div>
    </article>`;
}

function renderProjects(projects) {
  fill("project-list", projects.map(renderProjectCard).join(""));
}

function renderExperience(content) {
  const items = content.experience
    .map(
      (job) => `
      <li class="timeline-item">
        <p class="timeline-date">${escapeHtml(job.dates)}</p>
        <h3 class="timeline-role">${escapeHtml(job.role)}</h3>
        <p class="timeline-org">${escapeHtml(job.organization)} · ${escapeHtml(job.location)}</p>
        ${textBlock(job.bullets)}
      </li>`
    )
    .join("");
  fill("experience-list", items);
}

function renderEducation(content) {
  const cards = content.education
    .map(
      (school) => `
      <article class="card">
        <p class="card-date">${escapeHtml(school.dates)}</p>
        <h3 class="card-title">${escapeHtml(school.degree)}</h3>
        <p class="card-subtitle">${[school.school, school.location].filter(hasValue).map(escapeHtml).join(" · ")}</p>
        ${hasValue(school.gpa) ? `<p class="card-gpa">GPA ${escapeHtml(school.gpa)}</p>` : ""}
        ${isTodo(school.details) ? todoNote(school.details) : ""}
        ${hasValue(school.details) && !isTodo(school.details) ? `<p class="card-details">${escapeHtml(school.details)}</p>` : ""}
      </article>`
    )
    .join("");
  fill("education-list", cards);
}

function renderSkills(content) {
  const groups = content.skills
    .map(
      (group) => `
      <div class="skill-group">
        <h3>${escapeHtml(group.group)}</h3>
        <ul class="tag-list">
          ${group.items.map((item) => `<li class="tag">${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>`
    )
    .join("");
  fill("skills-list", groups);
}

function renderContact(content) {
  fill("contact-text", escapeHtml(content.contact.text));
  fill("contact-actions", contactButtons(content.links));
  fill("footer-year", String(new Date().getFullYear()));
}

/* ---------- Project panels: open / close ---------- */

function setupProjectToggles() {
  document.querySelectorAll(".project-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const isOpen = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isOpen));
      button.querySelector(".toggle-label").textContent = isOpen ? "View details" : "Hide details";
      panel.hidden = isOpen;
    });
  });
}

/* ---------- Screenshot viewer: click a screenshot to see it full-size ---------- */

function setupImageViewer() {
  const viewer = document.getElementById("image-viewer");
  const viewerImage = document.getElementById("image-viewer-img");
  if (!viewer || !viewerImage) return; // viewer missing from index.html: skip safely

  document.querySelectorAll(".project-image-button").forEach((button) => {
    button.addEventListener("click", () => {
      viewerImage.src = button.dataset.full;
      viewerImage.alt = button.dataset.alt;
      viewer.showModal(); // the Escape key also closes it
    });
  });

  // Close with the button, or by clicking the dark area around the image.
  document.getElementById("image-viewer-close").addEventListener("click", () => viewer.close());
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
  });
}

/* ---------- Experience: one circle that follows your scrolling ---------- */

function setupTimelineMarker() {
  const wrap = document.getElementById("timeline-wrap");
  const marker = document.getElementById("timeline-marker");
  const items = document.querySelectorAll(".timeline-item");
  if (!wrap || !marker || items.length === 0) return;

  wrap.classList.add("has-marker"); // hides the per-job circles (see styles.css)

  function update() {
    // The "reading line" is 40% down the screen. The circle sits where that
    // line crosses the timeline, but never above the first job or below the last.
    const readingLine = window.innerHeight * 0.4;
    const first = items[0].offsetTop;
    const last = items[items.length - 1].offsetTop;
    const position = readingLine - wrap.getBoundingClientRect().top;
    const y = Math.min(Math.max(position, first), last);

    marker.style.transform = `translateY(${y + 5}px)`;

    // Highlight the job the circle has reached.
    items.forEach((item, index) => {
      const next = items[index + 1];
      const reached = y >= item.offsetTop - 1;
      const notPastNext = !next || y < next.offsetTop - 1;
      item.classList.toggle("is-active", reached && notPastNext);
    });
  }

  // Run at most once per screen refresh while scrolling.
  let waiting = false;
  function onScroll() {
    if (waiting) return;
    waiting = true;
    requestAnimationFrame(() => {
      update();
      waiting = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}

/* ---------- Build the page ---------- */

renderHero(SITE_CONTENT);
renderAbout(SITE_CONTENT);
renderProjects(PROJECTS);
renderExperience(SITE_CONTENT);
renderEducation(SITE_CONTENT);
renderSkills(SITE_CONTENT);
renderContact(SITE_CONTENT);
setupProjectToggles();
setupImageViewer();
setupTimelineMarker();
