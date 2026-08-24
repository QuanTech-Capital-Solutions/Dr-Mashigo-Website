/**
 * Central practice content.
 * Everything the practice may want to update later lives here so that
 * page components never need to be edited for a content change.
 *
 * Values wrapped in [SQUARE BRACKETS] are placeholders awaiting
 * confirmed information from the practice. Do not replace them with
 * invented details.
 */

export const practice = {
  name: "Dr. B Mashigo Inc.",
  tagline: "Nephrology & Specialist Physician",
  doctor: {
    name: "Dr. BE Mashigo",
    title: "Nephrologist & Specialist Physician",
    shortBio:
      "Welcome to our practice. I am Dr Boitumelo Mashigo, a specialist physician and nephrologist. I am committed to providing patient-centred care for individuals with kidney disease and related conditions. My approach is grounded in evidence-based medicine, and I work closely with patients and their families to develop personalised care plans that address their unique needs.",
    longBio: [
      "Welcome to our practice. I am Dr Boitumelo Mashigo, a specialist physician and nephrologist.",
      "While I am deeply fascinated by the complex science of kidney health, my true passion lies in the bigger picture: how we can identify kidney disease early, prevent it from progressing, and uplift the health of our communities. Kidney disease is a growing, often silent challenge across Africa. Having cared for patients across diverse healthcare settings, from Seshego Hospital in Limpopo to Tygerberg, Groote Schuur, and Charlotte Maxeke Johannesburg Academic Hospital to name a few. I understand that real care requires looking beyond a lab report to treat the whole person.",
      "My clinical focus is rooted in understanding why certain people are more vulnerable to kidney issues, particularly the genetic and lifestyle factors affecting people of African ancestry. I believe that through careful listening, personalized screening, and early intervention, we can change the course of kidney disease and help you maintain your health and vitality for as long as possible.",
    ],
    qualifications: [
      "MBChB (University of Cape Town)",
      "Diploma in Anaesthesia (Colleges of Medicines of South Africa)",
      "FCP, MMED (University of Stellenbosch, Colleges of Medicines of South Africa)",
      "Certificate in Nephrology (Colleges of Medicines of South Africa)",
    ],
    training: [
      { period: "[YEAR – YEAR]", detail: "[MEDICAL SCHOOL / UNIVERSITY]" },
      { period: "[YEAR – YEAR]", detail: "[INTERNSHIP AND COMMUNITY SERVICE — HOSPITAL]" },
      { period: "[YEAR – YEAR]", detail: "[REGISTRAR TRAINING IN INTERNAL MEDICINE — HOSPITAL]" },
      { period: "[YEAR – YEAR]", detail: "[FELLOWSHIP / SUBSPECIALTY TRAINING IN NEPHROLOGY — HOSPITAL]" },
    ],
    experience: [
      "[HOSPITAL / PRACTICE — role and dates]",
      "[HOSPITAL / PRACTICE — role and dates]",
      "[YEARS OF EXPERIENCE in specialist nephrology practice]",
    ],
    memberships: [
      "[PROFESSIONAL MEMBERSHIP]",
      "[PROFESSIONAL MEMBERSHIP]",
      "[REGISTRATION BODY AND NUMBER]",
    ],
  },
  contact: {
    phone: "+27 64 525 1137",
    whatsapp: "[WHATSAPP NUMBER]",
    email: "admin@drmashigo.co.za",
    bookingUrl: "[BOOKING URL]",
  },
  location: {
    practiceName: "Dr. B Mashigo",
    building: "Netcare Sunward Park Hospital",
    street: "Cnr Kingfisher Avenue and Aquarius Road",
    suburb: "Sunward Park",
    city: "Boksburg",
    province: "Gauteng",
    postalCode: "1459",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.0337537859127!2d28.256155699999997!3d-26.260567899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9518351af5b96d%3A0xcaedda2a9d7a2345!2sNetcare%20Sunward%20Park%20Hospital!5e0!3m2!1sen!2sza!4v1786611370114!5m2!1sen!2sza", // [GOOGLE MAPS LOCATION] — paste the practice's Google Maps embed URL here
    directionsUrl: "https://www.google.com/maps?sca_esv=29bc699f92e89c34&sxsrf=APpeQntGXlyRxdt6EXzkOLaEAJo5rul4HA:1786611101916&biw=1314&bih=644&gs_lp=Egxnd3Mtd2l6LXNlcnAiFHN1bndhcmQgcGFyayBuZXRjYXJlMgUQABiABDILEC4YgAQYxwEYrwEyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5IxUpQwAxY9ERwAXgBkAEAmAGlA6AB_ReqAQcyLTEuNy4xuAEByAEA-AEB-AECmAIKoALKGKgCE8ICEBAjGPAFGJ4GGKIHGOoCGCfCAgcQIxjqAhgnwgINECMY8AUYyQIY6gIYJ8ICChAjGPAFGOoCGCfCAhYQABiABBiKBRhDGOcGGOoCGLQC2AEBwgIZEC4YQxiABBiKBRjnBhjIAxjqAhi0AtgBAcICGRAuGIAEGIoFGEMY5wYYyAMY6gIYtALYAQHCAgUQLhiABMICCBAAGIAEGMcDwgICECaYAxTxBfEWAo2M3msGugYGCAEQARgBkgcHMS4zLTguMaAH8GiyBwUzLTguMbgHtRjCBwUyLTguMsgHP4AIAQ&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KW259Ro1GJUeMUUjep0q2u3K&daddr=Bert+Lacey+Dr+%26+Aquarius+Road+%26+Kingfisher+Ave,+Sunward+Park,+Boksburg,+1470", // [GOOGLE MAPS LOCATION]
  },
  hours: [
    { day: "Monday – Thursday", time: "[CONSULTATION HOURS]" },
    { day: "Friday", time: "[CONSULTATION HOURS]" },
    { day: "Saturday", time: "[CONSULTATION HOURS]" },
    { day: "Sunday & public holidays", time: "Closed" },
  ],
  referralPolicy:
    "A doctor's referral is preferred to help coordinate your care, but we gladly accept direct appointments for patients tracking abnormal kidney results like a changing GFR. If you have concerning lab work, please get in touch with our office directly so we can fast-track your assessment.",
  social: [] as { label: string; href: string }[], // only add verified accounts
};

export const trustPoints = [
  "Specialist Nephrology Care",
  "Evidence-Based Medicine",
  "Patient-Centred Approach",
];

export const principles = [
  {
    title: "Specialist Nephrologist",
    body: "We bring advanced medical expertise and dedicated specialist training to the vital task of diagnosing, treating, and protecting your kidney health.",
  },
  {
    title: "Personalised Care",
    body: "Assessment, investigation and recommendations are tailored for each patient, taking into consideration their medical conditions, priorities and preferences.",
  },
  {
    title: "Evidence-Based Treatment",
    body: "Clinical decisions are informed by current medical evidence and accepted clinical practice, discussed openly with each patient.",
  },
  {
    title: "Modern Digital Practice",
    body: "Technology is used thoughtfully to support communication, access to information and efficient continuity of care between visits.",
  },
];

export const journey = [
  {
    step: "01",
    title: "Booking your Consultation",
    body: "Contact the practice by telephone, email or the online enquiry form. The team will confirm an appointment time and let you know what to bring.",
  },
  {
    step: "02",
    title: "History and Examination",
    body: "A consultation begins with a conversation about symptoms and medical history, concluded by a clinical examination.",
  },
  {
    step: "03",
    title: "Investigations",
    body: "Most patients seen by a Nephrologist will require a ultrasound of the kidneys and blood/urine tests tailored to their individual clinical needs.",
  },
  {
    step: "04",
    title: "Diagnosis and Treatment Plan",
    body: "We deliver evidence-based care and explain your diagnosis and treatment plan in clear, plain language. Our consultations cover both medical and non-medical aspects of your health, including open discussions about managing potential side effects.",
  },
  {
    step: "05",
    title: "Ongoing Monitoring",
    body: "Kidney care is usually long term. Follow-up visits track kidney function over time and allow the plan to be adjusted as your circumstances change.",
  },
];

export const emergencyNotice = {
  title: "Medical Emergency",
  body: "If you are experiencing a medical emergency, please contact your local emergency medical service or go to the nearest emergency department. Do not use the website contact form for emergencies.",
};

export const generalDisclaimer =
  "The information on this website is provided for general education only. It does not replace an individual consultation with a doctor who knows your medical history, and it should not be used to diagnose or treat a medical condition.";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Conditions", to: "/conditions" },
  { label: "Patient Information", to: "/patient-information" },
  { label: "Kidney Health", to: "/kidney-health" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
] as const;
