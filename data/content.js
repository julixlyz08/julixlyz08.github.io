/* =============================================================
   content.js: ALL the personal text on the website lives here.

   How to edit:
   - Change the text between the quotes "like this".
   - Keep the commas at the end of each line.
   - Anything starting with "TODO" shows up on the page as a
     highlighted reminder, so you can see what is still missing.
   - Projects are NOT here: they live in data/projects.js.
   ============================================================= */

const SITE_CONTENT = {
  name: "Julie Loyez",

  // Small line shown above your name in the hero.
  heroLabel: "Seeking data analyst roles · Los Angeles, CA · Available May 2027",

  // Short row of tags under the tagline (your strongest tools).
  topSkills: ["Python", "SQL", "Tableau", "pandas", "scikit-learn", "Excel"],

  // DRAFT: Julie to review.
  tagline: "Business Analytics graduate student turning data into clear, actionable decisions.",

  // Optional photo. To add one later: put the image in assets/images/
  // and write its path here, e.g. "assets/images/julie.jpg".
  photo: {
    src: "",
    alt: "Portrait of Julie Loyez",
  },

  links: {
    email: "loyez.julie08@gmail.com",
    linkedin: "https://www.linkedin.com/in/julie-loyez",
    github: "https://github.com/julixlyz08",
    // Web-safe version (no phone number). To update it, replace this file
    // with a new PDF using the exact same name.
    resume: "assets/resume/Julie_Loyez_Resume.pdf",
  },

  // DRAFT: Julie to review. Each line is one sentence/paragraph.
  about: [
    "I'm a Master of Science in Business Analytics student at California State University, Northridge, graduating in May 2027.",
    "I like taking data all the way from raw to a clear answer: cleaning it, modeling it in Python and SQL, and presenting it in Tableau so people can act on it.",
    "Before analytics, I worked in sales, marketing, and team leadership in Los Angeles and France, which taught me to connect numbers to real business goals.",
    "I'm a native French speaker, fluent in English, and I'm looking for a data analyst role where I can keep learning and make a measurable impact.",
  ],

  // Most recent first.
  experience: [
    {
      role: "Marketing Assistant",
      organization: "WOC Therapy",
      location: "Los Angeles, CA",
      dates: "Apr 2025 – Dec 2025",
      bullets: [
        "Developed, presented, and implemented a new financial plan identifying avoidable expenses, contributing to an estimated 5–8% increase in net revenue.",
        "Grew attendance for newly launched classes from a standing start to roughly 10 students per class through local community outreach, and secured 3 rental partnerships.",
      ],
    },
    {
      role: "Sales Representative",
      organization: "SMB Marketing",
      location: "Los Angeles, CA",
      dates: "Jul 2024 – Feb 2025",
      bullets: [
        "Managed a team of 10 sales representatives against KPIs, driving approximately 400 new client acquisitions per month and an estimated $20,000–$50,000 in new monthly recurring revenue.",
        "Drove $500,000+ in sales revenue for Fortune 500 companies and nonprofits.",
      ],
    },
    {
      role: "Manager & Vice President",
      organization: "BNEM",
      location: "Lille, France",
      dates: "Mar 2021 – Dec 2024",
      bullets: [
        "Commission Manager: designed and analyzed quantitative surveys, presenting findings and policy recommendations directly to government stakeholders for the organization's largest studies.",
        "Internal Vice President: led internal communications and HR processes, including recruitment, improving employee retention and cross-team collaboration.",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Science, Business Analytics",
      school: "California State University, Northridge",
      location: "",
      dates: "Expected May 2027",
      gpa: "3.95",
      details: "Key courses: Database Management, Data Visualization & Communication, Data Mining & Predictive Analytics, Programming, AI Governance, Prescriptive Analytics for Business.",
    },
    {
      degree: "Certificate, Digital Marketing & Business and Management of Entertainment",
      school: "University of California, Los Angeles",
      location: "",
      dates: "2023 – 2024",
      gpa: "3.7",
      details: "Key courses: Digital Analytics, Digital Marketing, Entertainment Financing, Business of Entertainment.",
    },
    {
      degree: "Master in Management",
      school: "SKEMA Business School",
      location: "Lille, France",
      dates: "2020 – 2024",
      gpa: "3.5",
      details: "Key courses: Big Data Analysis, Finance, Geopolitics, Global Governance.",
    },
  ],

  // Shown under Education. Most recent first. Leave link "" if there is none.
  certifications: [
    {
      name: "Data Analysis and Visualization with Python",
      issuer: "Microsoft · Coursera",
      date: "Jul 2026",
      link: "https://www.coursera.org/account/accomplishments/verify/49FYT8IU7RAW",
    },
    {
      name: "Python Programming Fundamentals",
      issuer: "Microsoft · Coursera",
      date: "Jun 2026",
      link: "https://www.coursera.org/account/accomplishments/verify/Z90XOXYYFHFG",
    },
  ],

  skills: [
    {
      group: "Programming & Data",
      items: ["Python", "pandas", "scikit-learn", "SQL", "SQLite", "REST APIs", "Data pipelines"],
    },
    {
      group: "Analytics & Visualization",
      items: ["Machine learning", "Tableau", "Excel", "Data visualization", "Data analysis", "Quantitative surveys", "Market research"],
    },
    {
      group: "Marketing",
      items: ["Social media marketing", "Content creation"],
    },
    {
      group: "Languages",
      items: ["French (Native)", "English (Bilingual)"],
    },
    {
      group: "Currently learning",
      items: ["AI agents"],
    },
  ],

  contact: {
    text: "I'm open to data analyst opportunities. The best way to reach me is by email, and I'm happy to connect on LinkedIn too.",
  },
};
