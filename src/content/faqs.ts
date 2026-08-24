import { practice } from "./practice";

export type Faq = { question: string; answer: string };

export const faqGroups: { title: string; faqs: Faq[] }[] = [
  {
    title: "Seeing a nephrologist",
    faqs: [
      {
        question: "What does a nephrologist do?",
        answer:
          "A nephrologist is a specialist physician who focuses on the kidneys. This includes diagnosing and managing kidney disease, high blood pressure related to the kidneys, disturbances in the body's minerals and fluid balance, dialysis and the medical care of kidney transplants.",
      },
      {
        question: "When should I see a nephrologist?",
        answer:
          "Common reasons include a reduced kidney function result on a blood test, protein or blood found in the urine, blood pressure that remains high despite treatment, repeated kidney stones, an episode of sudden kidney injury, or persistent abnormalities in blood salts. Your general practitioner can advise whether a specialist opinion would be helpful.",
      },
      {
        question: "Do I need a referral?",
        answer: practice.referralPolicy,
      },
      {
        question: "What should I bring to my appointment?",
        answer:
          "Bring your identity document and medical aid details, a list of all your medicines including doses, any previous blood or urine results, imaging reports, referral documentation if you have it, and a written list of the questions you would like to discuss.",
      },
    ],
  },
  {
    title: "Kidney function and testing",
    faqs: [
      {
        question: "What is chronic kidney disease?",
        answer:
          "Chronic kidney disease means the kidneys have been filtering less effectively than usual, or showing signs of damage such as protein in the urine, for three months or longer. It is described in stages. Early stages often cause no symptoms and are found on routine testing.",
      },
      {
        question: "Can kidney disease be treated?",
        answer:
          "Treatment depends entirely on the cause and stage. Many kidney conditions can be managed effectively, and treatment often aims to slow progression, control blood pressure, reduce protein loss and manage related complications. Some conditions improve substantially with treatment, while others are managed over the long term. This should be discussed individually with your doctor.",
      },
      {
        question: "Can high blood pressure affect my kidneys?",
        answer:
          "Yes. Blood pressure that stays high over a long period can damage the small blood vessels in the kidneys and reduce their ability to filter. This is one reason blood pressure control is such an important part of kidney care.",
      },
      {
        question: "Can kidney disease cause high blood pressure?",
        answer:
          "Yes. The kidneys help regulate blood pressure by controlling fluid balance and releasing hormones. When they are not working normally, blood pressure often rises. The relationship works in both directions, which is why the two are usually assessed together.",
      },
    ],
  },
  {
    title: "Dialysis and transplantation",
    faqs: [
      {
        question: "What is dialysis?",
        answer:
          "Dialysis is a treatment that carries out part of the work of the kidneys by removing waste products and excess fluid from the blood. It can be done using a machine (haemodialysis), usually at a dialysis unit, or using the lining of the abdomen (peritoneal dialysis), usually at home.",
      },
      {
        question: "When is dialysis required?",
        answer:
          "Dialysis is considered when kidney function has fallen to a level where symptoms or blood test abnormalities can no longer be managed safely in other ways. It is not decided on a single test result alone. Where a need is anticipated, planning and education usually begin well in advance.",
      },
      {
        question: "What is kidney transplantation?",
        answer:
          "A kidney transplant places a healthy kidney from a living or deceased donor into the body to take over filtering. It requires a thorough assessment beforehand and lifelong medicines afterwards to prevent rejection, together with regular monitoring. Suitability is assessed individually by a transplant team.",
      },
    ],
  },
];

export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.faqs);
