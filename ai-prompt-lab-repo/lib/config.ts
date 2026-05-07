export const config = {
  // The main Microsoft Form URL teams submit prompts through
  submissionFormUrl: "PASTE_MICROSOFT_FORM_URL_HERE",

  // The four case PDF URLs (uploaded to /public/cases/ in the repo)
  cases: [
    {
      team: "Team 1",
      function: "Marketing",
      theme: "Sustainable Product Launch",
      hook: "Northwind Apparel needs a credible launch campaign for their first sustainable line.",
      pdfUrl: "/cases/case-01-marketing.pdf",
    },
    {
      team: "Team 2",
      function: "Operations",
      theme: "Supply Chain Carbon Analysis",
      hook: "Meridian Foods must map carbon hotspots across 240 suppliers before disclosure deadline.",
      pdfUrl: "/cases/case-02-operations.pdf",
    },
    {
      team: "Team 3",
      function: "Finance",
      theme: "Board ESG Disclosure Summary",
      hook: "Halberd Industrial needs a 2-page board ESG summary that won't get torn apart by investors.",
      pdfUrl: "/cases/case-03-finance.pdf",
    },
    {
      team: "Team 4",
      function: "HR",
      theme: "Workforce Sustainability Training",
      hook: "Cobalt Logistics must train 4,200 employees with no in-house sustainability capability.",
      pdfUrl: "/cases/case-04-hr.pdf",
    },
  ],

  // Presenter and module info
  presenters: ["Bhumika", "Deepika", "Erinda", "Vrishruthi"],
  support: ["Sahid", "Waseem", "Ashmin"],
  mentor: "Raj",
  mentorRole: "Founder, SwipeUp AI Society",
  module: "Artificial Intelligence, Innovation and Transformation",
  institution: "University of Law",

  // Timer
  timerDurationSeconds: 600, // 10 minutes
};
