export interface Department {
  id: string;
  title: string;
  deptName: string;
  category: "computing" | "commerce" | "science" | "arts";
  duration: string;
  degree: string;
  affiliation: string;
  image?: string | null;
  overview: string;
  curriculum: string[];
  careers: string[];
}

export const DEPARTMENTS_DATA: Record<string, Department> = {
  ai: {
    id: "ai",
    title: "B.Sc Artificial Intelligence",
    deptName: "Department of Artificial Intelligence & Data Science",
    category: "computing",
    duration: "3 Years (6 Semesters)",
    degree: "Bachelor of Science",
    affiliation: "Madurai Kamaraj University",
    image: "/images/computer-lab.png",
    overview: "Equips undergraduates with high-demand competencies in deep learning, natural language processing, intelligent autonomous systems, and statistical algorithm design. Students gain hands-on exposure through high-performance GPU computing labs.",
    curriculum: [
      "Python for Machine Learning & Data Visualization",
      "Linear Algebra & Probabilistic Algorithms",
      "Deep Neural Networks & Computer Vision",
      "Natural Language Processing & Speech Analytics",
      "Cloud Deployment & Big Data Processing",
      "AI Ethics, Governance & Model Explainability"
    ],
    careers: [
      "Junior Machine Learning Engineer",
      "Data Analytics Specialist",
      "AI Solutions Associate",
      "Computer Vision Researcher",
      "Business Intelligence Analyst"
    ]
  },
  cs: {
    id: "cs",
    title: "B.Sc Computer Science",
    deptName: "Department of Computer Science",
    category: "computing",
    duration: "3 Years (6 Semesters)",
    degree: "Bachelor of Science",
    affiliation: "Madurai Kamaraj University",
    image: "/images/computer-lab.png",
    overview: "Provides a thorough grounding in computational theory, software design, object-oriented systems, database administration, and cyber security fundamentals.",
    curriculum: [
      "Data Structures & Algorithm Complexity",
      "Object-Oriented Programming with Java & C++",
      "Database Systems & Modern NoSQL",
      "Web Technologies & Full Stack Frameworks",
      "Operating Systems & Computer Architecture",
      "Network Protocols & Cybersecurity Concepts"
    ],
    careers: [
      "Software Developer",
      "Full Stack Web Engineer",
      "Database Administrator",
      "Systems Support Specialist",
      "Network Infrastructure Executive"
    ]
  },
  commerce: {
    id: "commerce",
    title: "B.Com (Computer Applications)",
    deptName: "Department of Commerce with Computer Applications",
    category: "commerce",
    duration: "3 Years (6 Semesters)",
    degree: "Bachelor of Commerce",
    affiliation: "Madurai Kamaraj University",
    image: null,
    overview: "Blends traditional mercantile law, cost accounting, and taxation with computerized financial tools, relational database management, and enterprise resource planning software.",
    curriculum: [
      "Financial Accounting & Corporate Auditing",
      "Business Law & Company Governance",
      "Computerized Accounting (Tally & GST ERP)",
      "Database Management Systems & SQL",
      "E-Commerce & Digital Banking Operations",
      "Income Tax & Direct Tax Regulations"
    ],
    careers: [
      "Corporate Accounts Associate",
      "Taxation & Audit Consultant",
      "Banking & Financial Analyst",
      "Financial Software Specialist",
      "Commercial Operations Officer"
    ]
  },
  aviation: {
    id: "aviation",
    title: "BBA Aviation Management",
    deptName: "Department of Aviation & Logistics Management",
    category: "commerce",
    duration: "3 Years (6 Semesters)",
    degree: "Bachelor of Business Administration",
    affiliation: "Madurai Kamaraj University & LKP Academy Partner",
    image: null,
    overview: "Specialized undergraduate program designed for modern commercial aviation environments, airport ground handling, safety compliance, aviation logistics, and airline ticketing protocols.",
    curriculum: [
      "Fundamentals of Aviation Operations",
      "Airport Ground Handling & Passenger Service",
      "Airline Ticketing & Global Distribution Systems (GDS)",
      "Aviation Safety, Security & Air Regulations",
      "Aviation Supply Chain & Air Cargo Logistics",
      "Airport Terminal Management & Disaster Protocols"
    ],
    careers: [
      "Airport Operations Coordinator",
      "Airline Ground Staff & Dispatch Officer",
      "Aviation Logistics Associate",
      "Air Cargo Handling Officer",
      "Customer Experience Specialist"
    ]
  },
  criminology: {
    id: "criminology",
    title: "B.A Criminology & Police Administration",
    deptName: "Department of Criminology & Forensic Studies",
    category: "arts",
    duration: "3 Years (6 Semesters)",
    degree: "Bachelor of Arts",
    affiliation: "Madurai Kamaraj University",
    image: null,
    overview: "An esteemed interdisciplinary program exploring the causes of crime, correctional institutions, juvenile justice, criminal psychology, and police administrative procedures.",
    curriculum: [
      "Principles of Criminology & Penology",
      "Indian Criminal Justice System & Police Administration",
      "Criminal Psychology & Deviance",
      "Forensic Science Fundamentals & Fingerprinting",
      "Human Rights, Cyber Crime & Juvenile Justice",
      "Private Security Management & Investigation Tactics"
    ],
    careers: [
      "Police & Paramilitary Services Aspirant (UPSC/TNUSRB)",
      "Private Security & Risk Investigator",
      "Forensic Laboratory Assistant",
      "Correctional Services Officer",
      "Legal Compliance & Fraud Analyst"
    ]
  },
  english: {
    id: "english",
    title: "B.A English Literature",
    deptName: "Department of English Literature",
    category: "arts",
    duration: "3 Years (6 Semesters)",
    degree: "Bachelor of Arts",
    affiliation: "Madurai Kamaraj University",
    image: null,
    overview: "Cultivates analytical acuity, sophisticated communicative command, literary criticism, and creative expression across world literatures in English.",
    curriculum: [
      "History of English Literature & Cultural Contexts",
      "Shakespearean Drama & Renaissance Studies",
      "American, Commonwealth & Postcolonial Literatures",
      "English Phonetics & Linguistics",
      "Literary Theory & Critical Analysis",
      "Professional Technical Writing & Media English"
    ],
    careers: [
      "Content Strategist & Copywriter",
      "Corporate Communications Executive",
      "English Educator & Academician",
      "Publishing Editor & Proofreader",
      "Civil Services & Public Relations Officer"
    ]
  },
  tamil: {
    id: "tamil",
    title: "B.A Tamil",
    deptName: "Department of Tamil Language & Literature",
    category: "arts",
    duration: "3 Years (6 Semesters)",
    degree: "Bachelor of Arts",
    affiliation: "Madurai Kamaraj University",
    image: null,
    overview: "Dedicated to the deep scholarly investigation of classical Tamil literature, Sangam epics, grammatical treatises, epigraphy, folklore, and modern media journalism.",
    curriculum: [
      "சங்க இலக்கியம் (Sangam Literature)",
      "தொல்காப்பியம் & நன்னூல் இலக்கணம் (Grammar & Linguistics)",
      "காப்பிய இலக்கியம் & பக்தி இலக்கியம் (Epics & Devotional Poetry)",
      "உரைநடை & சிறுகதை வரலாறு (Tamil Prose & Fiction)",
      "இதழியல் & மக்கள் தகவல் தொடர்பு (Journalism & Mass Media)",
      "கணினித் தமிழ் & படைப்பிலக்கியம் (Computational Tamil & Creative Writing)"
    ],
    careers: [
      "Tamil Language Educator & Lecturer",
      "Journalist, News Editor & Media Reporter",
      "Content Creator & Scriptwriter",
      "State Civil Services (TNPSC) Specialist",
      "Epigraphy & Archaeological Field Assistant"
    ]
  },
  chemistry: {
    id: "chemistry",
    title: "B.Sc Chemistry",
    deptName: "Department of Chemistry",
    category: "science",
    duration: "3 Years (6 Semesters)",
    degree: "Bachelor of Science",
    affiliation: "Madurai Kamaraj University",
    image: null,
    overview: "Comprehensive study of organic, inorganic, and physical chemistry supported by modern wet chemical laboratories and analytical instrumentation.",
    curriculum: [
      "Organic Reaction Mechanisms & Stereochemistry",
      "Coordination Chemistry & Transition Metals",
      "Thermodynamics, Chemical Kinetics & Electrochemistry",
      "Analytical Spectrophotometry & Chromatographic Methods",
      "Polymer Chemistry & Industrial Dyes",
      "Green Chemistry & Environmental Toxicology"
    ],
    careers: [
      "Quality Control Chemist (Pharma/Industrial)",
      "Chemical Research Assistant",
      "Environmental Testing Analyst",
      "Laboratory Officer",
      "Higher Studies & Educational Sector"
    ]
  },
  mathematics: {
    id: "mathematics",
    title: "B.Sc Mathematics",
    deptName: "Department of Mathematics",
    category: "science",
    duration: "3 Years (6 Semesters)",
    degree: "Bachelor of Science",
    affiliation: "Madurai Kamaraj University",
    image: null,
    overview: "Rigorous study in pure and applied mathematics, emphasizing logical proofs, algebraic structures, differential equations, and computational quantitative modeling.",
    curriculum: [
      "Calculus, Analytical Geometry & Trigonometry",
      "Abstract Algebra (Groups, Rings & Vector Spaces)",
      "Real Analysis & Metric Spaces",
      "Complex Analysis & Contour Integration",
      "Operations Research & Linear Programming",
      "Differential Equations & Numerical Methods"
    ],
    careers: [
      "Data & Statistical Analyst",
      "Actuarial Science Assistant",
      "Quantitative Research Officer",
      "Operations Research Specialist",
      "Competitive Exams & Higher Academic Research"
    ]
  },
  "home-science": {
    id: "home-science",
    title: "B.Sc Home Science (Nutrition & Dietetics)",
    deptName: "Department of Home Science & Clinical Nutrition",
    category: "science",
    duration: "3 Years (6 Semesters)",
    degree: "Bachelor of Science",
    affiliation: "Madurai Kamaraj University",
    image: null,
    overview: "Interdisciplinary scientific curriculum combining human nutrition, clinical therapeutic dietetics, food preservation science, and maternal child health care.",
    curriculum: [
      "Macronutrient & Micronutrient Biochemistry",
      "Food Microbiology & Sanitation Protocols",
      "Clinical Dietetics & Medical Nutrition Therapy",
      "Public Health Nutrition & Community Welfare",
      "Food Processing, Preservation & Packaging",
      "Family Resource Management & Child Development"
    ],
    careers: [
      "Clinical Hospital Dietitian",
      "Sports & Wellness Nutritionist",
      "Food Quality & Safety Inspector",
      "Public Health Project Officer",
      "Dietetic Consultant & Entrepreneur"
    ]
  },
  "physical-education": {
    id: "physical-education",
    title: "B.Sc Physical Education",
    deptName: "Department of Physical Education, Health & Sports",
    category: "science",
    duration: "3 Years (6 Semesters)",
    degree: "Bachelor of Science",
    affiliation: "Madurai Kamaraj University",
    image: null,
    overview: "Focuses on athletic development, human anatomy and kinesiology, sports physiology, tournament management, and athletic conditioning.",
    curriculum: [
      "Human Anatomy, Physiology & Exercise Science",
      "Kinesiology & Biomechanics of Sports",
      "Rules of Games & Officiating Techniques",
      "Sports Nutrition, First Aid & Rehabilitation",
      "Athletic Training Methods & Conditioning",
      "Organization of Sports Tournaments & Camp Administration"
    ],
    careers: [
      "Physical Education Director (PED)",
      "Athletic Coach & Fitness Trainer",
      "Sports Event Coordinator",
      "Armed Forces & Police Physical Instructor",
      "Gym & Wellness Centre Manager"
    ]
  }
};
