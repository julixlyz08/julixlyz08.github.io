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

  tagline: "Curious by nature. I take one question and follow it all the way down.",

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

  // Each line is one paragraph. Written from Julie's own answers.
  about: [
    "I came to data through curiosity. After business school in France, I realized there was a gap in what I could understand without it, so I started learning. It challenged me in a way nothing had in years, in the best way.",
    "My first real project was a deep dive into AMC Theatres. One question about attendance turned into four projects, from the box office to the balance sheet, and showed me what I can do when I keep asking \"so what?\" instead of stopping at the first result.",
    "I'm finishing my MS in Business Analytics at CSUN (May 2027). Entertainment is my childhood dream, but I'd be just as happy at any company where I can ask good questions of data and find a way to answer them.",
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

  // Only skills backed by the projects or experience above. Keep each group short.
  skills: [
    {
      group: "Programming & Data",
      items: ["Python", "pandas", "SQL", "scikit-learn", "statsmodels", "REST APIs"],
    },
    {
      group: "Analysis",
      items: ["Regression", "Forecasting & time series", "Machine learning", "Statistical testing", "Financial modeling & valuation", "Text analysis", "Spatial analysis"],
    },
    {
      group: "Visualization & Tools",
      items: ["Tableau", "Excel", "matplotlib"],
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
