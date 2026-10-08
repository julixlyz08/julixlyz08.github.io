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
   - links:       leave "" to hide a button
   - details:     text ("...") becomes a paragraph,
                  a list (["...", "..."]) becomes bullet points,
                  "" hides that section completely
   - Anything starting with "TODO" shows as a highlighted reminder.
   ============================================================= */

const PROJECTS = [
  {
    // Source: github.com/julixlyz08/movie_profitability_analysis (README)
    id: "movie-profitability",
    title: "Movie Profitability Analysis",
    context: "Personal project",
    date: "Fall 2026",
    description: "Which movies earn the best return, and when should they be released? An end-to-end analysis of 5,651 theatrical releases (2000–2025), from API data collection to an interactive Tableau dashboard.",
    highlight: "Franchise films earned 3.3x their budget vs. 1.4x for standalone films, at every budget level.",
    tags: ["Python", "pandas", "SQL", "SQLite", "Tableau", "TMDB API"],
    image: {
      src: "assets/images/movie-profitability.png",
      full: "assets/images/movie-profitability-full.png", // shown when the screenshot is clicked
      alt: "Tableau dashboard titled What makes a movie profitable, showing 5,651 movies analyzed, a 1.81x typical return, and a bar chart where franchise films out-earn standalone films at every budget size",
    },
    links: {
      github: "https://github.com/julixlyz08/movie_profitability_analysis",
      tableau: "https://public.tableau.com/app/profile/julie.loyez/viz/WhatMakesaMovieProfitable_17913327259050/MovieProfitabilityDashboard",
    },
    details: {
      question: "A studio choosing what to make and when to release it wants to know which choices pay off: which movies earn the best return on investment, and when should they be released?",
      data: "15,599 movies collected from the TMDB API (the 600 most-voted films per year, 2000–2025, going 30 pages deep so results aren't skewed toward hits). After cleaning, 5,651 theatrical releases with reported budgets and revenue were analyzed. This product uses the TMDB API but is not endorsed or certified by TMDB.",
      whatIDid: [
        "Collected the data with Python from the TMDB API, with error handling and retries, and stored it in SQLite.",
        "Cleaned the data: removed movies with missing or tiny budgets or revenue, and flagged 178 likely streaming or limited releases so they wouldn't look like flops.",
        "Compared median return on investment (box office ÷ budget) by genre, release month, budget size, franchise status, and year.",
        "Built an interactive Tableau Public dashboard to tell the story.",
      ],
      findings: [
        "Franchise status matters more than budget: franchise films earned a median 3.3x return vs. 1.4x for standalone films, and the gap holds at every budget level.",
        "Spending more doesn't buy a much better return. Blockbusters look strong mainly because about two-thirds of them are franchise films.",
        "Horror stands out among large genres: 2.6x median return across 458 films, with a typical budget of about $10M.",
        "Timing matters: July (2.3x), June (2.2x), and December (2.1x) perform best; September and October (about 1.4x) perform worst despite having the most releases.",
        "2020 broke the market: median return fell from 2.3x in 2019 to 0.8x, and had only recovered to about 1.7x by 2025.",
      ],
      role: "Solo project: I did everything from data collection and cleaning to analysis and the dashboard.",
    },
  },

  {
    // Source: team memo and github.com/julixlyz08/credit-risk-classification-model (README)
    id: "credit-risk",
    title: "Credit Risk Classification Model",
    context: "Team capstone · CSUN",
    date: "Spring 2026",
    description: "A machine learning model that flags higher-risk Lending Club loan applicants using only the information available when they apply, so risky loans can be caught before any money goes out.",
    highlight: "Raised the share of risky loans caught from 22% to 86% with a cost-based threshold, cutting total error cost by more than half.",
    tags: ["Python", "scikit-learn", "Machine learning", "Logistic Regression"],
    image: {
      src: "assets/images/credit-risk.png",
      alt: "ROC curves for the four models on the test set: Random Forest AUC 0.788, Logistic Regression 0.771, Decision Tree 0.722, Neural Network 0.711",
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
        "Recommended Logistic Regression: ROC-AUC of 0.77, the best test F1 (0.31) and recall (0.22), and by far the smallest gap between training and test results.",
        "Random Forest had a slightly higher AUC (0.79) but overfit badly, dropping from a training F1 of 1.00 to a test F1 of 0.21.",
        "Loan term was the strongest predictor: borrowers requesting 60-month loans are more likely to be graded higher-risk.",
        "A 0.10 threshold had the lowest total cost: 1,362 cost units vs. 2,962 at the default 0.5 threshold, with recall rising from 22% to 86%.",
        "Suggested using the model as an automatic pre-screen that flags applications for underwriter review, retrained at least every quarter.",
      ],
      role: "Team of two, with Hannah Rika-Villasis. We each wrote the full pipeline independently, then compared our approaches and combined the strongest parts of both. I also wrote the project memo.",
    },
  },

  {
    // Source: Stock pipeline project/Final Project - Intel.pdf and INTC_python.py
    id: "stock-pipeline",
    title: "Stock Data Pipeline",
    context: "Python project · CSUN",
    date: "Spring 2026",
    description: "A Python system that pulls 100 days of Intel (INTC) stock prices from the Alpha Vantage API, labels each day's volatility, generates buy/sell/hold signals, and stores the results in SQLite for SQL reporting.",
    highlight: "Flagged a Hold on INTC despite a 200%+ rally, because volatility stayed too high.",
    tags: ["Python", "REST API", "Alpha Vantage", "SQL", "SQLite"],
    image: {
      src: "assets/images/stock-pipeline.jpg",
      alt: "100-day database insights for Intel: price surged from $39.37 to $124.92; 52 high-volatility days; 49 Hold, 35 Sell, and 16 Buy signals",
    },
    links: {
      github: "https://github.com/julixlyz08/stock-data-pipeline",
      tableau: "",
    },
    details: {
      question: "Can a simple, rules-based system tell non-technical stakeholders what Intel's stock is doing, and whether to buy, sell, or hold?",
      data: "The 100 most recent trading days of Intel (INTC) prices, ending May 8, 2026, from the Alpha Vantage TIME_SERIES_DAILY endpoint: open, high, low, close, and volume, returned as JSON.",
      whatIDid: [
        "Built the API request with error handling for connection errors, timeouts, bad status codes, and invalid JSON, so the program stops cleanly instead of crashing.",
        "Calculated daily percent change, daily range, and annualized volatility (standard deviation × √252).",
        "Designed the business rules: a day gets a Buy signal only if the price rose more than 1% and volatility wasn't high, a risk-control layer that blocks buying on large swings.",
        "Stored every record in SQLite (with a primary key to prevent duplicates), ran eight SQL queries, and printed a plain-language report for stakeholders.",
      ],
      findings: [
        "INTC more than tripled over the period, closing at $124.92 on May 8, while 52 of 100 trading days were high volatility.",
        "The system generated 49 Hold, 35 Sell, and 16 Buy signals. The risk-control rule kept all five best-performing days at Hold because their intraday swings were too large.",
        "Final recommendation: Hold. Price momentum was positive, but volatility was too high to justify the risk.",
      ],
      role: "Individual project: I designed the rules, wrote the Python and SQL, and wrote the final report.",
    },
  },

  // Future: add the AI agents class project here when it is finished.
];
