/* =============================================================
   projects.js: ALL your projects live here.

   To ADD a project: copy one whole { ... } block (from its opening
   brace to its closing brace and comma), paste it, and edit the text.
   To REMOVE one: delete its block. Projects appear in this order.

   Field guide:
   - id:          short unique name, no spaces (used internally)
   - context:     e.g. "Team capstone · CSUN"
   - highlight:   one key result shown on the card ("" to hide)
   - image.src:   screenshot path, e.g. "assets/images/credit-risk.png"
   - image.full:  optional bigger version shown when the screenshot is clicked
                  (leave "" to show a "coming soon" placeholder)
   - links:       leave "" to hide a button; links.extra is an optional list
                  of extra buttons: [{ label: "...", href: "..." }]
   - details.parts: optional list of parts for a project series:
                  [{ title: "...", finding: "...", github: "..." }]
   - details:     text ("...") becomes a paragraph,
                  a list (["...", "..."]) becomes bullet points,
                  "" hides that section completely
   - Anything starting with "TODO" shows as a highlighted reminder.
   ============================================================= */

const PROJECTS = [
  {
    // Sources: the READMEs of the four repos below, and CONCLUSION.md in amc-debt-and-survival.
    id: "amc-series",
    tier: "featured",
    title: "AMC: From Box Office to Balance Sheet",
    context: "Personal project series · 4 parts",
    date: "Fall 2026",
    description: "Four connected projects that follow AMC from how many people go to its theatres, to why its stock collapsed, how it makes money, and whether it can carry its debt. Built from every AMC 10-Q and 10-K, with an interactive Tableau dashboard.",
    highlight: "AMC needs about 168 million U.S. guests a year to stop burning cash. It has 165 million, and $3.2bn of debt falls due in 2029.",
    tags: ["Python", "pandas", "statsmodels", "Tableau", "SEC XBRL", "Forecasting", "Financial modeling", "Statistical testing"],
    image: {
      src: "assets/images/amc-series.png",
      alt: "Bar chart of AMC's U.S. attendance from 2015 to the last four quarters (165 million), against break-even lines at 168 million to stop burning cash and 184 million to report a profit",
    },
    links: {
      github: "",
      tableau: "",
      // Extra buttons, shown in this order.
      extra: [
        { label: "Read the conclusion", href: "https://github.com/julixlyz08/amc-debt-and-survival/blob/main/CONCLUSION.md" },
        { label: "Dashboard: AMC's debt", href: "https://public.tableau.com/app/profile/julie.loyez/viz/AMCCanitcarryitsdebt/AMCdebtandsurvival" },
        { label: "Related: movie profitability", href: "https://github.com/julixlyz08/movie_profitability_analysis" },
      ],
    },
    details: {
      question: "AMC is the world's largest cinema chain, and its guests spend more per visit than ever. So why did its share price fall 97%, and can the company survive on what its theatres earn?",
      parts: [
        { title: "Attendance forecast & subscription model", finding: "About 170 million U.S. guests next year (8-in-10 range 151 to 215 million); knowing the film slate did not improve the forecast.", github: "https://github.com/julixlyz08/amc-attendance-forecast-subscription" },
        { title: "Stock vs attendance", finding: "No link: share issuance (70 to 86 times more shares) explains the whole 97% fall in the price.", github: "https://github.com/julixlyz08/amc-stock-vs-attendance" },
        { title: "How AMC makes money", finding: "Snacks now earn AMC as much as tickets; the theatres roughly break even, and interest turns that into large losses.", github: "https://github.com/julixlyz08/amc-how-it-makes-money" },
        { title: "Debt and survival", finding: "Debt now costs about 12% a year; shares paid the interest since 2020; break-even is about 168 million guests at today's rates.", github: "https://github.com/julixlyz08/amc-debt-and-survival" },
      ],
      data: "Every AMC and Cinemark 10-Q and 10-K from 2015 to mid-2026, parsed directly from SEC XBRL files (debt by instrument, cash flows, leases, costs); daily share prices; Treasury, SOFR and corporate bond yields from FRED, the U.S. Treasury and the New York Fed; release data for 5,971 films from TMDB, reused from my movie profitability project.",
      whatIDid: [
        "Collected and cleaned the data with Python, including a parser for full SEC XBRL filings that recovers figures the standard SEC API leaves out, checked against reported totals.",
        "Tested 28 attendance forecast variations on 18 rolling out-of-sample tests, and turned past forecast misses into low, base, high and stress scenarios.",
        "Ran correlation and event-study tests (with permutation tests) of AMC's stock against attendance, and broke AMC's costs into fixed and variable parts.",
        "Built a debt ledger, AMC's true cost of borrowing against market rates, a cash sources-and-uses breakdown, and a survival model that links all four AMC projects.",
        "Built an interactive Tableau Public dashboard: a survival map where you can pick any attendance and interest rate.",
      ],
      findings: [
        "The stock collapsed because of dilution, not lost guests: from 2020 to mid-2026, AMC sold $3.9bn of shares, covering $2.3bn of interest, and swapped debt for about 36% of today's shares.",
        "The losses come from interest, not operations: AMC's interest rate rose from 5 to 6% before 2020 to about 12%, close to what the riskiest (CCC) borrowers pay.",
        "Two break-even lines: about 168 million U.S. guests a year to stop burning cash, and about 184 million to report a profit (AMC had 250 million in 2019).",
        "The levers AMC controls matter more than the film slate: 5% more spend per guest is worth about $129m a year, and 5% lower fixed costs about $102m, against $78m for 5 million more guests.",
        "The test comes in 2029, when $3.2bn of debt falls due: in the low attendance scenario, AMC runs out of cash by the end of 2028.",
      ],
      role: "Independent series: I designed the questions and did all the data collection, analysis, modeling and dashboards.",
    },
  },

  {
    // Source: github.com/julixlyz08/seven-eleven-japan-who-pays (README)
    id: "seven-eleven",
    tier: "main",
    title: "7-Eleven Japan: Who Pays?",
    context: "Personal project",
    date: "Fall 2026",
    description: "Where does 7-Eleven Japan's edge come from, who pays for it, and what is it worth? A four-part analysis built only from public data: Seven & i's filings, government statistics and OpenStreetMap.",
    highlight: "Rising wages land on store owners, not head office: by FY2030 an owner's profit roughly halves while head office's take grows 14%.",
    tags: ["Python", "pandas", "statsmodels", "Spatial analysis", "Panel regression", "Monte Carlo", "Valuation"],
    image: {
      src: "assets/images/seven-eleven.png",
      alt: "Line chart, FY2019 = 100: by FY2030 the minimum wage reaches 164, sales per store 118, head office's take 114, and the owner's profit falls to 46",
    },
    links: {
      github: "https://github.com/julixlyz08/seven-eleven-japan-who-pays",
      tableau: "",
    },
    details: {
      question: "7-Eleven is often called the best-run convenience-store chain in the world. Where does its edge come from, who pays for it, and what is it worth?",
      data: "48,973 convenience stores from OpenStreetMap, the 2020 census population on a 1 km grid and railway station passengers; Seven & i's monthly sales, annual reports and franchise contract terms; Japan Franchise Association, METI retail and consumer price statistics; minimum wages by prefecture; daily share prices.",
      whatIDid: [
        "Measured whether 7-Eleven clusters its stores (250 m to 20 km) against random chain labels, and built a Poisson site-selection model that flags 153 'white-space' areas.",
        "Removed 7-Eleven from industry totals, built a convenience-store price index from CPI items to split sales into price and volume, tested drugstore competition with a region-by-month panel regression, and compared real sales with an ARIMA pre-2020 trend.",
        "Built a franchise profit-and-loss model calibrated to Seven & i's accounts, with 2,000 Monte Carlo simulations of uncertain store costs.",
        "Valued the Japanese stores with a sum-of-the-parts analysis, and measured the share price's reaction to the takeover bid with an event study.",
      ],
      findings: [
        "The famous clustering is regional, not local: within 250 m, a 7-Eleven's neighbours are 7-Elevens only 0.75 times as often as its market share predicts.",
        "Sales growth since 2019 is all price: in real terms, stores sell about 16% less (11% fewer customers, each buying 6% less), and 7-Eleven has lost its lead over rivals.",
        "Head office collects about 49% of gross profit, not the 62% its fee schedule implies, yet rising wages fall on owners: a typical new store no longer pays its owner a minimum wage under the current contract.",
        "The share price values the Japanese stores at about 5x EBITDA (9x earnings), against about 20x earnings paid for Lawson. The shares rose 17% on Couche-Tard's bid and fell 12.5% when it was withdrawn.",
      ],
      role: "Independent project: I designed the questions and did all the data collection, analysis and modeling.",
    },
  },

  {
    // Source: github.com/julixlyz08/airbnb-who-the-hosts-are (README)
    id: "airbnb",
    tier: "main",
    title: "Airbnb in Los Angeles: Who the Hosts Are",
    context: "Personal project",
    date: "Fall 2026",
    description: "How does the type of host change what guests pay, what they experience, and when they travel? Four parts using Inside Airbnb data for the City of Los Angeles and Airbnb's own SEC filings.",
    highlight: "Large hosts' 15% price premium mostly reflects bigger homes: like-for-like, it shrinks to 2–5%, within what could be chance.",
    tags: ["SQL", "SQLite", "Python", "statsmodels", "Regression", "Text analysis", "Time series"],
    image: {
      src: "assets/images/airbnb.png",
      alt: "Bar chart: single-listing hosts are 67% of short-term hosts with 40% of listings, while hosts with 6+ listings are 11% of hosts with 37% of listings",
    },
    links: {
      github: "https://github.com/julixlyz08/airbnb-who-the-hosts-are",
      tableau: "",
    },
    details: {
      question: "How does the type of host (1 listing, 2–5, or 6+) change what guests pay, what they experience, and when they travel?",
      data: "Inside Airbnb listings and reviews for the City of Los Angeles: four snapshots from December 2025 to September 2026 and about 230,000 English reviews (licensed CC BY 4.0). Airbnb's quarterly revenue and nights booked from its 10-Q and 10-K filings, 2023–2025.",
      whatIDid: [
        "Built a SQLite database from four listing snapshots and answered the market-structure questions in SQL: concentration, neighbourhoods and turnover.",
        "Estimated the price gap by host size on 4,376 listings with regressions that add controls step by step, standard errors clustered by host, and robustness checks.",
        "Analyzed about 230,000 reviews with keyword topics and a 'mentions a problem' marker, comparing similar homes in the same neighbourhood.",
        "Built seasonal indexes from monthly reviews, caught a pattern that came from how the data is built, and compared LA's seasons with Airbnb's quarterly results.",
      ],
      findings: [
        "11% of short-term hosts have 6+ listings and hold 37% of short-term listings; in Koreatown, Hollywood and Downtown, it is 67–71%.",
        "About three-quarters of LA listings require stays of 30 nights or more, in every host group.",
        "Large hosts charge about 15% more before adjustment, about zero once home size is accounted for, and 2–5% with every control: within what could be chance in most versions of the model.",
        "Guests mention problems more often at large hosts' listings (about 5% of reviews vs 2%) and rate them slightly lower, even when comparing similar homes.",
        "Every host size follows the same seasons, and LA's year is much flatter than Airbnb's worldwide year: a 23% swing in stays vs 80% in revenue.",
      ],
      role: "Independent project: I designed the questions and did all the data work, SQL, modeling and text analysis.",
    },
  },

  {
    // Source: team memo and github.com/julixlyz08/credit-risk-classification-model (README)
    id: "credit-risk",
    tier: "main",
    title: "Credit Risk Classification Model",
    context: "Team capstone · CSUN",
    date: "Spring 2026",
    description: "A machine learning model that flags higher-risk Lending Club loan applicants using only the information available when they apply, so risky loans can be caught before any money goes out.",
    highlight: "Raised the share of risky loans caught from 22% to 86% with a cost-based threshold, cutting total error cost by more than half.",
    tags: ["Python", "scikit-learn", "Machine learning", "Logistic Regression"],
    image: {
      src: "assets/images/credit-risk.png",
      alt: "Bar chart of test-set ROC-AUC: Random Forest 0.79, Logistic Regression 0.77 (recommended), Decision Tree 0.72, Neural Network 0.71",
    },
    links: {
      github: "https://github.com/julixlyz08/credit-risk-classification-model",
      tableau: "",
    },
    details: {
      question: "Using only information available at the time of application, can we predict which borrowers Lending Club will grade higher-risk (D–G) rather than prime (A–C), and where should the cutoff be set when funding a bad loan costs about 10 times more than declining a good one?",
      data: "10,000 Lending Club loan applications from early 2018, with 55 fields such as income, credit history, debt load, and loan purpose. About 18.5% of loans are higher-risk, so the classes are imbalanced.",
      whatIDid: [
        "Built an end-to-end scikit-learn pipeline: cleaning, leakage removal, feature engineering (including a credit utilization rate built from the raw data), and a ColumnTransformer for reproducible preprocessing.",
        "Trained and compared four classifiers (Logistic Regression, Decision Tree, Neural Network, Random Forest) on the same pipeline, looking at both training and test performance.",
        "Ran a cost sweep across thresholds from 0.10 to 0.70, counting each missed risky loan as 10 cost units and each wrongly declined good loan as 1.",
      ],
      findings: [
        "Recommended Logistic Regression: a strong ROC-AUC of 0.77 and by far the smallest gap between training and test results, so it is the most reliable on new applicants.",
        "Random Forest had a slightly higher AUC (0.79) but overfit badly, dropping from a training F1 of 1.00 to a test F1 of 0.21.",
        "Loan term was the strongest predictor: borrowers requesting 60-month loans are more likely to be graded higher-risk.",
        "A 0.10 threshold had the lowest total cost: 1,362 cost units vs. 2,962 at the default 0.5 threshold, with recall rising from 22% to 86%.",
        "Suggested using the model as an automatic pre-screen that flags applications for underwriter review, retrained at least every quarter.",
      ],
      role: "Team of two, with Hannah Rika-Villasis. We each wrote the full pipeline independently, then compared our approaches and combined the strongest parts of both. I also wrote the project memo.",
    },
  },

  // Future: add the AI agents class project here when it is finished.
];

/* =============================================================
   MORE_PROJECTS: smaller projects, shown as a compact list under
   the main projects. One line each: no screenshot, no details.
   ============================================================= */

const MORE_PROJECTS = [
  {
    title: "Movie Profitability Analysis",
    summary: "Which films earn the best return? 5,651 releases from the TMDB API, analyzed in Python and SQL, with a Tableau dashboard.",
    tools: ["Python", "SQL", "Tableau"],
    date: "Fall 2026",
    links: [
      { label: "GitHub", href: "https://github.com/julixlyz08/movie_profitability_analysis" },
      { label: "Tableau", href: "https://public.tableau.com/app/profile/julie.loyez/viz/WhatMakesaMovieProfitable_17913327259050/MovieProfitabilityDashboard" },
    ],
  },
  {
    title: "Stock Data Pipeline",
    summary: "A Python pipeline that pulls 100 days of Intel stock prices from a REST API, scores volatility and buy/sell/hold signals, and stores them in SQLite.",
    tools: ["Python", "REST API", "SQLite"],
    date: "Spring 2026",
    links: [
      { label: "GitHub", href: "https://github.com/julixlyz08/stock-data-pipeline" },
    ],
  },
];
