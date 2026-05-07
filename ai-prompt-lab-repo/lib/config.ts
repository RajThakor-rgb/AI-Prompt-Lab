export const config = {
  submissionFormUrl:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=8eZDEXRsh0Sw-0hOVesskAF2F0JKfTVIkUehncTWm4VUMUhRQVg5WjlSRlQxSTNNQlkyWFYxMEJIOC4u",

  cases: [
    {
      team: "Team 1",
      function: "Marketing",
      sector: "Fashion Retail",
      company: "Northwind Apparel",
      theme: "Sustainable Product Launch",
      context:
        "Northwind Apparel is a mid-tier UK fashion brand with 2.4 million customers. They are launching 'Renew' — their first sustainable clothing line using 30% recycled materials and carbon-neutral shipping. A 2022 greenwashing controversy means their core 25–40 audience is deeply sceptical of corporate sustainability claims.",
      challenge:
        "Generic claims ('we care about the planet') will be dismissed outright. The campaign needs specific, evidenced messaging that rebuilds credibility without sounding like corporate spin.",
      task:
        "Use RISEN to prompt an AI to draft a positioning statement and three distinct campaign messages for the Renew line launch. Each message must target a different audience concern.",
      pdfUrl: "/cases/case-01-marketing.pdf",
    },
    {
      team: "Team 2",
      function: "Operations",
      sector: "Food Manufacturing",
      company: "Meridian Foods",
      theme: "Supply Chain Carbon Analysis",
      context:
        "Meridian Foods is a UK food manufacturer with 240 suppliers across 18 countries. New CSRD disclosure requirements take effect in Q1. They hold partial emissions data from 60% of suppliers — the rest is estimated or missing entirely. The board needs a carbon hotspot analysis before any public disclosure.",
      challenge:
        "The data is inconsistent across suppliers. The procurement team needs to know which supplier relationships carry the highest carbon risk, in language they can act on — not a spreadsheet they'll ignore.",
      task:
        "Use RISEN to prompt an AI to structure a carbon hotspot analysis framework and draft a one-page supplier briefing that tells procurement exactly what to prioritise and why.",
      pdfUrl: "/cases/case-02-operations.pdf",
    },
    {
      team: "Team 3",
      function: "Finance",
      sector: "Heavy Manufacturing",
      company: "Halberd Industrial",
      theme: "Board ESG Disclosure Summary",
      context:
        "Halberd Industrial is a FTSE 250 heavy machinery manufacturer. The AGM is six weeks away. Institutional investors are pushing hard for ESG disclosure. The CFO has raw data — emissions figures, energy usage, governance metrics — but the previous board summary attempt was rejected as 'too technical and too long'.",
      challenge:
        "The board summary must be readable by non-technical directors, credible enough for institutional investors, and short enough to survive the AGM pack. The last version failed all three tests.",
      task:
        "Use RISEN to prompt an AI to draft a 2-page board ESG summary. It must tell a clear story, be grounded in data, and be written for a board member who has 90 seconds to form a view.",
      pdfUrl: "/cases/case-03-finance.pdf",
    },
    {
      team: "Team 4",
      function: "HR",
      sector: "Logistics",
      company: "Cobalt Logistics",
      theme: "Workforce Sustainability Training",
      context:
        "Cobalt Logistics operates 35 depots across the UK with 4,200 employees — depot drivers, warehouse staff, and office-based managers. Sustainability KPIs have been added to all roles from next quarter. HR has 8 weeks to deliver training. There is no in-house sustainability expertise and the training budget is limited.",
      challenge:
        "Three completely different audiences. A depot driver has no desk and no interest in ESG jargon. A warehouse operative needs practical, shift-compatible content. A manager needs context to cascade it. One-size-fits-all will fail all three.",
      task:
        "Use RISEN to prompt an AI to design a training framework for one specific audience segment, then draft the opening module. Make it feel relevant to their actual job, not a compliance checkbox.",
      pdfUrl: "/cases/case-04-hr.pdf",
    },
  ],

  presenters: ["Bhumika", "Deepika", "Erinda", "Vrishruthi"],
  support: ["Sahid", "Waseem", "Ashmin"],
  mentor: "Raj",
  mentorRole: "Founder, SwipeUp AI Society",
  module: "Artificial Intelligence, Innovation and Transformation",
  institution: "University of Law",

  timerDurationSeconds: 600,
};
