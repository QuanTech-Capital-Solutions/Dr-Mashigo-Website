/**
 * Condition content used by /conditions and each /conditions/<slug> page.
 * Written in patient-friendly, educational language.
 * All clinical content should be reviewed and approved by the
 * specialist before publication.
 */

export type Condition = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  what: string[];
  causes: string[];
  symptoms: string[];
  diagnosis: string[];
  management: { heading: string; body: string }[];
  seekCare: string[];
  questions: string[];
};

export const conditions: Condition[] = [
  {
    slug: "chronic-kidney-disease",
    title: "Chronic Kidney Disease",
    summary:
      "Long-term reduction in kidney function, often silent in its early stages, where careful monitoring and treatment of the underlying cause matter most.",
    intro:
      "Chronic kidney disease means the kidneys have been working less well than usual for three months or longer. It is common, and with the right care many people live full lives with it for many years.",
    what: [
      "Your kidneys filter waste and excess fluid out of your blood, help control blood pressure, balance salts and minerals, and support healthy bones and red blood cells.",
      "In chronic kidney disease (CKD), this filtering ability is reduced over a long period. Doctors describe CKD in stages, based on how well the kidneys filter and whether protein or blood is leaking into the urine.",
      "The stage is a guide, not a prediction. Many people with early CKD remain stable for years, particularly when the underlying cause is treated.",
    ],
    causes: [
      "Diabetes, which over time can damage the small filters inside the kidney",
      "High blood pressure, especially when it has been raised for a long time",
      "Inflammation of the kidney filters (glomerular disease)",
      "Inherited conditions such as polycystic kidney disease",
      "Long-term use of certain medicines, or repeated episodes of acute kidney injury",
      "Obstruction to the flow of urine, for example from the prostate or from kidney stones",
    ],
    symptoms: [
      "Early chronic kidney disease often causes no symptoms at all, which is why it is frequently picked up on a routine blood or urine test.",
      "As kidney function falls further, some people notice tiredness, poor appetite, swelling of the ankles or around the eyes, difficulty sleeping, itching, or a change in how often they pass urine.",
      "These symptoms have many possible causes. They do not by themselves mean that kidney disease is present.",
    ],
    diagnosis: [
      "Blood tests to measure creatinine and estimate how well the kidneys are filtering (eGFR)",
      "Urine tests to look for protein or blood, which can be an early sign of kidney damage",
      "Blood pressure assessment, often including readings taken at home",
      "Ultrasound or other imaging to look at the size, structure and drainage of the kidneys",
      "Occasionally a kidney biopsy, where a very small sample of kidney tissue is examined, when the cause is unclear",
    ],
    management: [
      {
        heading: "Treating the underlying cause",
        body: "Where CKD is driven by diabetes, blood pressure, an immune condition or an obstruction, treating that cause is usually the most important step.",
      },
      {
        heading: "Blood pressure control",
        body: "Keeping blood pressure within an agreed target helps protect kidney function. Your specialist will discuss what target is appropriate for you.",
      },
      {
        heading: "Medication review",
        body: "Some medicines need dose adjustment when kidney function is reduced, and others are best avoided. Bringing a full medication list to each visit helps.",
      },
      {
        heading: "Lifestyle measures",
        body: "Salt intake, hydration, smoking, weight and physical activity all influence kidney and cardiovascular health. Advice is tailored to your situation.",
      },
      {
        heading: "Monitoring and complications",
        body: "Regular tests track kidney function and look for related problems such as anaemia, bone and mineral changes, or high potassium.",
      },
      {
        heading: "Planning ahead where appropriate",
        body: "If kidney function is expected to decline substantially, there is time to discuss options such as dialysis or transplantation calmly and well in advance.",
      },
    ],
    seekCare: [
      "A blood or urine test has shown reduced kidney function, protein in the urine or blood in the urine",
      "Kidney function is falling over successive tests",
      "You have diabetes or high blood pressure together with an abnormal kidney result",
      "The cause of the kidney problem is not clear",
      "You would like a specialist opinion on your long-term kidney health",
    ],
    questions: [
      "What is my current level of kidney function, and what does it mean?",
      "What is likely to be causing my kidney disease?",
      "How often should my kidney function be checked?",
      "Are any of my current medicines affecting my kidneys?",
      "What blood pressure target is right for me?",
      "What changes should prompt me to contact the practice sooner?",
    ],
  },
  {
    slug: "resistant-hypertension",
    title: "Resistant Hypertension",
    summary:
      "Blood pressure that stays high despite several medicines, where a specialist review can uncover a treatable underlying cause.",
    intro:
      "Blood pressure is described as resistant when it remains above target despite treatment with anti-hypertensives taken correctly. It deserves careful assessment.",
    what: [
      "Blood pressure is the force of blood against the walls of your arteries. When it stays high over years, it can quietly damage the kidneys, heart, brain and eyes.",
      "Resistant hypertension usually means blood pressure remains above the agreed target while taking three or more blood pressure medicines, typically including a diuretic (water tablet).",
      "The kidneys and blood pressure are closely linked: kidney problems can raise blood pressure, and high blood pressure can damage the kidneys.",
    ],
    causes: [
      "Readings that are genuinely different at home compared with the clinic",
      "Medicines not being taken as prescribed, often because of side effects",
      "Kidney disease or narrowing of the arteries supplying the kidneys",
      "Hormonal conditions, such as excess aldosterone produced by the adrenal glands",
      "Obstructive sleep apnoea",
      "Salt intake, alcohol, and some medicines including certain anti-inflammatories and decongestants",
    ],
    symptoms: [
      "High blood pressure usually causes no symptoms, which is why it is often found during a routine check.",
      "Some people experience headaches, breathlessness or nosebleeds, but these are not reliable indicators.",
      "Because it is usually silent, measurement rather than how you feel is what guides treatment.",
    ],
    diagnosis: [
      "Careful blood pressure measurement using correct technique and cuff size",
      "Home readings or 24-hour ambulatory blood pressure monitoring",
      "Blood and urine tests to assess kidney function and salt balance",
      "Hormone tests where a secondary cause is suspected",
      "Imaging of the kidneys and their blood vessels in selected cases",
      "Screening for sleep apnoea where the history suggests it",
    ],
    management: [
      {
        heading: "Confirming the diagnosis",
        body: "Out-of-office readings are used to confirm that blood pressure is genuinely raised outside the consulting room.",
      },
      {
        heading: "Reviewing treatment",
        body: "Medicine choice, dose, timing and combinations are reviewed, along with anything that may be working against them.",
      },
      {
        heading: "Looking for a secondary cause",
        body: "Where tests point to a specific underlying cause, treating it directly can substantially improve control.",
      },
      {
        heading: "Lifestyle and salt",
        body: "Reducing dietary salt, moderating alcohol, physical activity and weight management can each make a measurable difference.",
      },
      {
        heading: "Ongoing monitoring",
        body: "Regular review of blood pressure, kidney function and potassium is part of safe long-term treatment.",
      },
    ],
    seekCare: [
      "Blood pressure remains above target despite three or more medicines",
      "Blood pressure control is worsening without an obvious explanation",
      "There is evidence of kidney damage, protein in the urine or reduced kidney function",
      "Blood pressure became high at a young age, or very suddenly",
      "Side effects are making treatment difficult to continue",
    ],
    questions: [
      "What blood pressure target should I be aiming for?",
      "Should I be measuring my blood pressure at home, and how?",
      "Could there be an underlying cause for my high blood pressure?",
      "Are any of my other medicines raising my blood pressure?",
      "How much salt is reasonable for me?",
      "How will we know whether the treatment is working?",
    ],
  },
  {
    slug: "glomerular-disease",
    title: "Glomerular Disease",
    summary:
      "Conditions affecting the tiny filters within the kidney, often signalled by protein or blood in the urine.",
    intro:
      "Glomerular diseases affect the glomeruli, the microscopic filtering units inside the kidney. They are an important group of conditions because many respond well to treatment when identified early.",
    what: [
      "Each kidney contains around a million tiny filters called glomeruli. They allow waste and excess water to pass into the urine while keeping blood cells and protein in the bloodstream.",
      "When these filters become inflamed or damaged, protein or blood can leak into the urine, and the kidneys may filter less effectively.",
      "There are many different glomerular diseases. Identifying which one is present guides treatment, because they behave and respond quite differently.",
    ],
    causes: [
      "Immune conditions in which the body's immune system affects the kidney filters",
      "Systemic diseases such as lupus or vasculitis",
      "Diabetes, which is a very common cause of filter damage over time",
      "Certain infections",
      "Some inherited conditions",
      "In some cases no cause is identified despite thorough assessment",
    ],
    symptoms: [
      "Frothy urine, which can be a sign of protein loss",
      "Visible blood in the urine, or blood detected only on testing",
      "Swelling of the ankles, legs, hands or around the eyes",
      "Raised blood pressure",
      "Some people have no symptoms at all and the condition is found on a routine urine test",
    ],
    diagnosis: [
      "Urine testing to measure how much protein is being lost and to look for blood cells",
      "Blood tests to assess kidney function and look for immune or inflammatory conditions",
      "Blood pressure assessment",
      "Ultrasound imaging of the kidneys",
      "Kidney biopsy in many cases, which is often the only way to identify the exact condition",
    ],
    management: [
      {
        heading: "Reducing protein loss",
        body: "Specific medicines can reduce the amount of protein leaking into the urine, which helps protect the kidneys over time.",
      },
      {
        heading: "Blood pressure control",
        body: "Careful blood pressure management is a central part of treatment for almost all glomerular diseases.",
      },
      {
        heading: "Treating inflammation",
        body: "Where the immune system is driving the damage, treatment that reduces immune activity may be considered, with the benefits and risks discussed in detail.",
      },
      {
        heading: "Managing swelling",
        body: "Fluid retention may be treated with diuretics and advice on salt intake.",
      },
      {
        heading: "Long-term follow-up",
        body: "Regular monitoring detects relapse early and allows treatment to be adjusted.",
      },
    ],
    seekCare: [
      "Protein has been found in your urine on more than one occasion",
      "There is blood in your urine that has no other explanation",
      "You have unexplained swelling together with an abnormal urine test",
      "Kidney function is declining alongside an abnormal urine result",
      "You have a systemic immune condition and a new kidney abnormality",
    ],
    questions: [
      "How much protein is being lost in my urine?",
      "Do I need a kidney biopsy, and what does it involve?",
      "Which specific condition do I have, and how does it usually behave?",
      "What are the benefits and risks of the treatment being suggested?",
      "How will we monitor whether the treatment is working?",
      "What should I do if my swelling gets worse?",
    ],
  },
  {
    slug: "dialysis",
    title: "Dialysis",
    summary:
      "Treatment that takes over part of the kidneys' filtering work when kidney function becomes severely reduced.",
    intro:
      "Dialysis is a treatment that removes waste products and excess fluid from the blood when the kidneys can no longer do so adequately. Deciding whether, when and how to start is a considered discussion, not an emergency decision for most people.",
    what: [
      "Dialysis does part of the work that healthy kidneys do. It does not restore kidney function, but it can support health and wellbeing when function is severely reduced.",
      "In haemodialysis, blood is passed through a machine that filters it before returning it to the body. This is usually done at a dialysis unit several times a week.",
      "In peritoneal dialysis, a sterile fluid is placed into the abdomen through a soft tube, where it draws waste and fluid out of the blood before being drained. This is generally done at home.",
      "Dialysis may be temporary, for example after severe acute kidney injury, or long term where kidney function does not recover.",
    ],
    causes: [
      "Advanced chronic kidney disease where kidney function has fallen substantially",
      "Severe acute kidney injury that is not improving with other treatment",
      "Dangerous build-up of fluid, potassium or acid in the blood",
      "Symptoms of severely reduced kidney function that do not respond to other measures",
    ],
    symptoms: [
      "Nausea, poor appetite and weight loss",
      "Marked tiredness and difficulty concentrating",
      "Swelling and shortness of breath from fluid retention",
      "Persistent itching",
      "These symptoms are considered together with blood test results when discussing whether dialysis may help.",
    ],
    diagnosis: [
      "Repeated blood tests measuring kidney function, potassium, acid levels and haemoglobin",
      "Assessment of fluid status, blood pressure and symptoms",
      "Discussion of your overall health, other conditions and personal priorities",
      "Assessment for dialysis access, such as a fistula or a peritoneal catheter, well before it is needed where possible",
    ],
    management: [
      {
        heading: "Preparing in advance",
        body: "Where a need for dialysis is anticipated, education and access planning begin early so that treatment can start in a planned way.",
      },
      {
        heading: "Choosing a modality",
        body: "Haemodialysis and peritoneal dialysis each have advantages. The choice depends on your medical situation, home circumstances and preferences.",
      },
      {
        heading: "Supportive medical care",
        body: "Some patients, particularly those with significant other illnesses, may choose conservative kidney management instead. This focuses on symptoms and quality of life and is discussed openly.",
      },
      {
        heading: "Ongoing management",
        body: "Fluid balance, blood pressure, anaemia, bone health and nutrition are monitored alongside dialysis treatment.",
      },
    ],
    seekCare: [
      "Kidney function is falling and approaching the range where dialysis may be considered",
      "You would like to understand the options before any decision is needed",
      "You are already on dialysis and would like a specialist review",
      "You are experiencing symptoms that may be related to severely reduced kidney function",
    ],
    questions: [
      "How close am I to needing dialysis, if at all?",
      "What are the differences between haemodialysis and peritoneal dialysis for me?",
      "What would dialysis mean for my daily life and work?",
      "What preparation would be needed, and how long does it take?",
      "What alternatives to dialysis should I know about?",
      "Who would be involved in my care?",
    ],
  },
  {
    slug: "kidney-transplant",
    title: "Kidney Transplant Medicine",
    summary:
      "Assessment before transplantation and long-term medical care of a transplanted kidney.",
    intro:
      "For many people with advanced kidney disease, a kidney transplant offers an alternative to long-term dialysis. Transplant medicine covers the assessment before and the careful medical care that follows.",
    what: [
      "A kidney transplant places a healthy kidney from a living or deceased donor into the body, where it takes over the filtering work.",
      "Not everyone is suitable for a transplant, and suitability is assessed thoroughly and individually by a transplant team.",
      "After a transplant, medicines are needed long term to prevent the body from rejecting the new kidney. These require regular monitoring.",
      "Transplantation is a treatment, not a cure. A transplanted kidney needs ongoing medical care to work well for as long as possible.",
    ],
    causes: [
      "Advanced chronic kidney disease approaching the need for kidney replacement therapy",
      "Established kidney failure already being treated with dialysis",
      "Certain kidney conditions where transplantation is considered early in planning",
    ],
    symptoms: [
      "Before transplantation, symptoms are usually those of advanced kidney disease.",
      "After transplantation, it is important to report fever, reduced urine output, pain over the transplant, or a rise in creatinine on blood tests promptly.",
      "Many problems after transplant are detected on routine blood tests before any symptoms appear.",
    ],
    diagnosis: [
      "Detailed assessment of general health, heart, infection risk and cancer screening before listing",
      "Blood and tissue typing to assess compatibility",
      "Regular blood tests after transplantation to monitor kidney function and medicine levels",
      "Ultrasound of the transplanted kidney where needed",
      "Transplant biopsy if rejection or another problem is suspected",
    ],
    management: [
      {
        heading: "Pre-transplant assessment",
        body: "A thorough work-up establishes whether transplantation is likely to be safe and beneficial, and prepares you for it.",
      },
      {
        heading: "Immunosuppressive medicines",
        body: "These reduce the risk of rejection. Levels are monitored, and doses are adjusted carefully over time.",
      },
      {
        heading: "Infection prevention",
        body: "Because immunosuppression increases infection risk, vaccination status, prevention and prompt treatment are part of routine care.",
      },
      {
        heading: "Protecting the transplant",
        body: "Blood pressure, diabetes, cholesterol and general health all influence how long a transplanted kidney continues to work well.",
      },
      {
        heading: "Long-term monitoring",
        body: "Regular clinic visits and blood tests allow problems to be identified early, when they are most treatable.",
      },
    ],
    seekCare: [
      "You are approaching the need for kidney replacement therapy and want to discuss transplantation",
      "You are on dialysis and would like to know whether transplantation may be an option",
      "You have a transplanted kidney and need ongoing specialist medical follow-up",
      "Your transplant blood tests have changed",
      "A family member is considering living kidney donation",
    ],
    questions: [
      "Am I likely to be a suitable candidate for a transplant?",
      "What does the assessment process involve, and how long does it take?",
      "What are the risks as well as the benefits in my case?",
      "What medicines would I need afterwards, and for how long?",
      "How often would I need blood tests and clinic visits?",
      "What symptoms should prompt me to seek help urgently after a transplant?",
    ],
  },
  {
    slug: "acute-kidney-injury",
    title: "Acute Kidney Injury",
    summary:
      "A sudden reduction in kidney function over hours or days, which often improves when the cause is treated promptly.",
    intro:
      "Acute kidney injury (AKI) means kidney function has fallen quickly, usually over hours or days. It is often reversible, particularly when the underlying cause is identified and treated early.",
    what: [
      "In AKI the kidneys suddenly filter less effectively, so waste products and fluid can build up in the body.",
      "It most often happens during another illness, after surgery, or in response to dehydration or certain medicines.",
      "Many people recover kidney function completely. Some are left with a degree of long-term reduction, which is why follow-up after AKI matters.",
    ],
    causes: [
      "Dehydration or reduced blood flow to the kidneys, for example during severe illness or after significant blood loss",
      "Infection, particularly severe infection affecting the whole body",
      "Medicines that can affect the kidneys, including some anti-inflammatories, antibiotics and contrast agents",
      "Blockage to the flow of urine",
      "Inflammation within the kidney itself",
    ],
    symptoms: [
      "Passing much less urine than usual",
      "Swelling of the legs or breathlessness from fluid retention",
      "Nausea, confusion or marked tiredness",
      "Sometimes there are no specific symptoms and AKI is found on a blood test done for another reason",
    ],
    diagnosis: [
      "Blood tests showing a rise in creatinine or a fall in eGFR compared with earlier results",
      "Measurement of urine output",
      "Urine testing to look for blood, protein or signs of infection",
      "Ultrasound to exclude a blockage",
      "Review of all recent medicines and of the illness that preceded the injury",
    ],
    management: [
      {
        heading: "Treating the cause",
        body: "Treating infection, restoring fluid balance or relieving an obstruction is usually the most important step.",
      },
      {
        heading: "Reviewing medicines",
        body: "Medicines that may be contributing are stopped or adjusted, and doses of others are reviewed for reduced kidney function.",
      },
      {
        heading: "Careful fluid management",
        body: "Both too little and too much fluid can be harmful, so fluid balance is monitored closely.",
      },
      {
        heading: "Temporary dialysis where needed",
        body: "A minority of people need short-term dialysis support while the kidneys recover.",
      },
      {
        heading: "Follow-up after recovery",
        body: "Kidney function should be rechecked after an episode of AKI, because the risk of long-term kidney disease is higher afterwards.",
      },
    ],
    seekCare: [
      "Kidney function has dropped suddenly on blood testing",
      "You are passing much less urine than usual",
      "Kidney function has not returned to its previous level after an illness or hospital admission",
      "You have had more than one episode of acute kidney injury",
      "The cause of the sudden change is not clear",
    ],
    questions: [
      "What is likely to have caused this episode?",
      "Has my kidney function returned to its previous level?",
      "Which of my medicines should I avoid in future, and when?",
      "How and when should my kidney function be rechecked?",
      "What can I do to reduce the risk of this happening again?",
      "What warning signs should I look out for?",
    ],
  },
  {
    slug: "electrolyte-disorders",
    title: "Electrolyte Disorders",
    summary:
      "Imbalances in sodium, potassium, calcium and other minerals that the kidneys normally keep within a narrow range.",
    intro:
      "Electrolytes are minerals in the blood such as sodium, potassium, calcium, magnesium and phosphate. The kidneys keep them within a narrow range, and imbalances can be an important clue to an underlying problem.",
    what: [
      "Electrolytes help nerves and muscles work, including the heart, and control the balance of fluid in the body.",
      "The kidneys, together with several hormones, adjust the amount of each mineral that is kept or passed out in the urine.",
      "An abnormal result may reflect a kidney problem, a hormonal condition, a medicine, or simply how much fluid a person has been drinking or losing.",
    ],
    causes: [
      "Medicines, particularly diuretics and some blood pressure and psychiatric medicines",
      "Kidney disease affecting the ability to balance salts",
      "Hormonal conditions affecting the adrenal or thyroid glands, or antidiuretic hormone",
      "Vomiting, diarrhoea or heavy sweating",
      "Drinking either very little or excessive amounts of fluid",
      "Inherited conditions affecting the kidney tubules",
    ],
    symptoms: [
      "Mild imbalances often cause no symptoms and are found on a routine blood test.",
      "More marked changes may cause muscle weakness or cramps, confusion, drowsiness, nausea, or an irregular heartbeat.",
      "Very high or very low potassium and very low sodium can be serious and need prompt medical attention.",
    ],
    diagnosis: [
      "Blood tests measuring sodium, potassium, calcium, magnesium, phosphate and kidney function",
      "Urine tests measuring how much of each mineral the kidneys are passing out",
      "Assessment of hydration, blood pressure and current medicines",
      "Hormone tests where a hormonal cause is suspected",
      "An electrocardiogram (ECG) where potassium or calcium levels are markedly abnormal",
    ],
    management: [
      {
        heading: "Identifying the cause",
        body: "Correcting the imbalance without understanding why it happened often leads to it returning.",
      },
      {
        heading: "Adjusting medicines",
        body: "Where a medicine is responsible, the dose may be changed or an alternative considered in discussion with your doctor.",
      },
      {
        heading: "Careful correction",
        body: "Some imbalances, particularly low sodium, need to be corrected gradually and with monitoring, because correcting them too quickly can be harmful.",
      },
      {
        heading: "Diet and fluid advice",
        body: "Specific advice on fluid intake or dietary potassium, salt or phosphate may form part of the plan.",
      },
      {
        heading: "Monitoring",
        body: "Repeat blood tests confirm that levels have stabilised and remain in a safe range.",
      },
    ],
    seekCare: [
      "An electrolyte result is repeatedly abnormal without a clear explanation",
      "Potassium levels are high, particularly alongside reduced kidney function",
      "Sodium is persistently low",
      "Imbalances recur after being corrected",
      "You take medicines that frequently affect electrolyte levels and need ongoing monitoring",
    ],
    questions: [
      "Which of my electrolyte levels are abnormal, and by how much?",
      "What is the most likely cause in my case?",
      "Could one of my medicines be responsible?",
      "How quickly does this need to be corrected?",
      "Do I need to change what I eat or drink?",
      "How often should this be rechecked?",
    ],
  },
];

export const getCondition = (slug: string) => conditions.find((c) => c.slug === slug);
