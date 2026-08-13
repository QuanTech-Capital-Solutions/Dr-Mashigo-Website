/**
 * Kidney health education library.
 * Short, plain-language articles. Add new entries here — no component
 * changes are required for the listing or article pages.
 */

export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  readingTime: string;
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "understanding-kidney-function",
    title: "Understanding kidney function",
    category: "Kidney basics",
    summary:
      "What your kidneys actually do, and what the numbers on a kidney blood test mean.",
    readingTime: "4 min read",
    sections: [
      {
        heading: "What your kidneys do",
        paragraphs: [
          "Your kidneys help remove waste and excess fluid from your blood. Most people have two, each about the size of a fist, sitting towards the back of the abdomen.",
        ],
        bullets: [
          "Filter waste products and excess water into the urine",
          "Help control blood pressure",
          "Keep salts and minerals such as sodium, potassium and calcium in balance",
          "Support the production of red blood cells",
          "Help keep bones healthy through vitamin D activation",
        ],
      },
      {
        heading: "What eGFR means",
        paragraphs: [
          "eGFR stands for estimated glomerular filtration rate. It is a calculation based on a blood test called creatinine, and it estimates how much blood your kidneys filter each minute.",
          "A single eGFR result is a snapshot. Trends over time are usually more informative than one value, and results can be affected by hydration, muscle mass and recent illness.",
        ],
      },
      {
        heading: "What the urine test adds",
        paragraphs: [
          "A urine test looks for protein and blood. Protein in the urine can be one of the earliest signs of kidney damage, sometimes appearing before the eGFR changes at all. This is why both tests are usually done together.",
        ],
      },
    ],
  },
  {
    slug: "chronic-kidney-disease-explained",
    title: "Chronic kidney disease explained",
    category: "Conditions",
    summary:
      "Why CKD is often silent early on, what the stages mean, and what can be done about it.",
    readingTime: "5 min read",
    sections: [
      {
        heading: "A long-term condition, not a sudden one",
        paragraphs: [
          "Chronic kidney disease means reduced kidney function or signs of kidney damage that have been present for three months or more. Because it develops slowly, many people feel completely well in the early stages.",
        ],
      },
      {
        heading: "What the stages describe",
        paragraphs: [
          "Doctors describe CKD in stages based on eGFR and on how much protein is in the urine. The stage helps guide how closely kidney function should be monitored and which treatments are likely to help.",
          "A stage is a description, not a prediction. Many people remain stable for many years.",
        ],
      },
      {
        heading: "What helps",
        bullets: [
          "Treating the underlying cause, such as diabetes or high blood pressure",
          "Keeping blood pressure within an agreed target",
          "Reviewing medicines regularly, since some need dose adjustment",
          "Reducing salt intake and staying physically active where possible",
          "Attending follow-up appointments so trends can be tracked",
        ],
      },
    ],
  },
  {
    slug: "blood-pressure-and-kidney-health",
    title: "Blood pressure and kidney health",
    category: "Prevention",
    summary:
      "The two-way relationship between blood pressure and the kidneys, and why home readings matter.",
    readingTime: "4 min read",
    sections: [
      {
        heading: "A relationship that works both ways",
        paragraphs: [
          "High blood pressure can damage the small blood vessels in the kidneys over time. Reduced kidney function can in turn raise blood pressure. Each can worsen the other, which is why they are managed together.",
        ],
      },
      {
        heading: "Measuring at home",
        bullets: [
          "Sit quietly for five minutes before measuring",
          "Rest your arm on a table at roughly heart height",
          "Use a validated upper-arm monitor with the correct cuff size",
          "Take two readings a minute apart and record both",
          "Measure at the same times of day and bring the record to your appointment",
        ],
      },
      {
        heading: "Targets are individual",
        paragraphs: [
          "There is no single blood pressure target that suits everyone. Age, other medical conditions, protein in the urine and how well treatment is tolerated all influence what is appropriate for you. Discuss your target with your doctor.",
        ],
      },
    ],
  },
  {
    slug: "protein-in-the-urine",
    title: "Protein in the urine",
    category: "Kidney basics",
    summary: "Why proteinuria matters, how it is measured, and what it can mean.",
    readingTime: "3 min read",
    sections: [
      {
        heading: "What it means",
        paragraphs: [
          "Healthy kidney filters keep protein in the bloodstream. When protein appears in the urine, it can indicate that the filters are leaking. Frothy urine is sometimes the first thing people notice.",
        ],
      },
      {
        heading: "How it is measured",
        paragraphs: [
          "A dipstick test gives a quick indication. A more precise result comes from measuring the ratio of protein or albumin to creatinine in a urine sample, which accounts for how concentrated the urine is.",
        ],
      },
      {
        heading: "Not always kidney disease",
        paragraphs: [
          "Temporary protein in the urine can follow fever, strenuous exercise or a urinary infection. Persistent protein on repeated testing is what prompts further assessment.",
        ],
      },
    ],
  },
  {
    slug: "kidney-stones",
    title: "Kidney stones",
    category: "Conditions",
    summary: "Why stones form, how they present, and what reduces the chance of recurrence.",
    readingTime: "4 min read",
    sections: [
      {
        heading: "How stones form",
        paragraphs: [
          "Kidney stones form when minerals in the urine become concentrated enough to crystallise. Several types exist, and the type influences the advice given afterwards.",
        ],
      },
      {
        heading: "Common symptoms",
        bullets: [
          "Severe pain in the side or back that may move towards the groin",
          "Blood in the urine",
          "Nausea and vomiting",
          "Pain or urgency on passing urine",
          "Fever with pain, which needs urgent medical attention",
        ],
      },
      {
        heading: "Reducing the chance of another stone",
        bullets: [
          "Drinking enough fluid so that urine stays pale through the day",
          "Reducing dietary salt",
          "Following individual dietary advice based on the stone type",
          "Metabolic testing after repeated stones to look for a treatable cause",
        ],
      },
    ],
  },
  {
    slug: "acute-kidney-injury-basics",
    title: "Acute kidney injury: the basics",
    category: "Conditions",
    summary: "A sudden fall in kidney function, and why follow-up afterwards matters.",
    readingTime: "3 min read",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Acute kidney injury is a sudden reduction in kidney function, usually over hours or days. It most often happens during another illness, after surgery, or in response to dehydration or certain medicines.",
        ],
      },
      {
        heading: "Medicines and sick days",
        paragraphs: [
          "During illnesses with vomiting, diarrhoea or fever, some medicines may temporarily need to be paused. Ask your doctor in advance which of your medicines this applies to, so that you know what to do.",
        ],
      },
      {
        heading: "After recovery",
        paragraphs: [
          "Kidney function should be rechecked after an episode, because the risk of longer-term kidney disease is higher afterwards, even when the initial recovery seems complete.",
        ],
      },
    ],
  },
  {
    slug: "understanding-dialysis",
    title: "Understanding dialysis",
    category: "Treatment",
    summary: "The two main types of dialysis, and what each involves day to day.",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Haemodialysis",
        paragraphs: [
          "Blood is passed through a machine that filters it before returning it to the body. It is usually done at a dialysis unit, several times a week, and requires access to the bloodstream, most often through a fistula created in the arm.",
        ],
      },
      {
        heading: "Peritoneal dialysis",
        paragraphs: [
          "A sterile fluid is placed into the abdomen through a soft tube. The lining of the abdomen acts as the filter, and the fluid is drained after a period of time. This is generally done at home, either during the day or overnight.",
        ],
      },
      {
        heading: "Choosing between them",
        paragraphs: [
          "Both are effective. The choice depends on your medical situation, home circumstances, work and personal preferences, and it is made together with your specialist.",
        ],
      },
    ],
  },
  {
    slug: "kidney-transplantation-overview",
    title: "Kidney transplantation: an overview",
    category: "Treatment",
    summary: "What the assessment involves and what long-term care after a transplant looks like.",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Before a transplant",
        paragraphs: [
          "A detailed assessment looks at general health, heart health, infection risk and cancer screening, along with blood and tissue typing. The aim is to establish whether a transplant is likely to be safe and beneficial.",
        ],
      },
      {
        heading: "After a transplant",
        bullets: [
          "Medicines to prevent rejection, taken long term and monitored with blood tests",
          "Attention to infection prevention, including vaccination",
          "Management of blood pressure, diabetes and cholesterol",
          "Regular clinic visits, more frequent at first and then spaced out",
        ],
      },
      {
        heading: "A treatment, not a cure",
        paragraphs: [
          "A transplanted kidney needs ongoing care to keep working well. Reporting new symptoms promptly and attending follow-up appointments are an important part of protecting it.",
        ],
      },
    ],
  },
  {
    slug: "electrolytes-explained",
    title: "Electrolytes explained",
    category: "Kidney basics",
    summary: "What sodium, potassium and other minerals do, and why imbalances are investigated.",
    readingTime: "3 min read",
    sections: [
      {
        heading: "What they are",
        paragraphs: [
          "Electrolytes are minerals in the blood such as sodium, potassium, calcium, magnesium and phosphate. They help nerves and muscles work, including the heart, and control fluid balance.",
        ],
      },
      {
        heading: "Why levels change",
        bullets: [
          "Medicines, particularly diuretics",
          "Kidney disease affecting the balance of salts",
          "Vomiting, diarrhoea or heavy sweating",
          "Hormonal conditions",
          "How much fluid a person drinks or loses",
        ],
      },
      {
        heading: "Why the cause matters",
        paragraphs: [
          "Correcting a level without understanding why it changed often means the problem returns. Investigating the cause is usually part of treatment.",
        ],
      },
    ],
  },
  {
    slug: "medication-and-kidney-health",
    title: "Medication and kidney health",
    category: "Prevention",
    summary: "How reduced kidney function changes the way medicines behave in the body.",
    readingTime: "3 min read",
    sections: [
      {
        heading: "Why doses can change",
        paragraphs: [
          "Many medicines are removed from the body by the kidneys. When kidney function is reduced, some medicines stay in the body longer and need a lower dose, while others are better avoided.",
        ],
      },
      {
        heading: "Worth mentioning at every visit",
        bullets: [
          "All prescribed medicines and their doses",
          "Anything bought over the counter, including pain relief",
          "Traditional, herbal or complementary remedies",
          "Vitamins and supplements",
        ],
      },
      {
        heading: "Never stop a medicine on your own",
        paragraphs: [
          "If you are concerned that a medicine may be affecting your kidneys, speak to your doctor before stopping it. Stopping some medicines suddenly carries its own risks.",
        ],
      },
    ],
  },
  {
    slug: "lifestyle-and-kidney-health",
    title: "Lifestyle and kidney health",
    category: "Prevention",
    summary: "Practical, realistic measures that support kidney and cardiovascular health.",
    readingTime: "3 min read",
    sections: [
      {
        heading: "Everyday measures",
        bullets: [
          "Reducing salt, which helps blood pressure as well as fluid balance",
          "Staying physically active in a way that is realistic for you",
          "Stopping smoking, which benefits both kidneys and heart",
          "Moderating alcohol",
          "Attending regular check-ups if you have diabetes or high blood pressure",
        ],
      },
      {
        heading: "Fluid intake",
        paragraphs: [
          "There is no single amount of fluid that suits everyone. People with some kidney conditions are advised to drink more, and others are advised to limit fluid. Ask what applies to you rather than following general advice.",
        ],
      },
      {
        heading: "Small changes, sustained",
        paragraphs: [
          "Changes that can be maintained over years tend to help more than short periods of strict effort. It is reasonable to agree one or two priorities at a time with your doctor.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
