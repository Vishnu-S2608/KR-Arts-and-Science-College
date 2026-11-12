export interface SemesterCourse {
  code: string;
  title: string;
  type: "Core Theory" | "Allied Theory" | "Practical Lab" | "Skill Based" | "Elective" | "Project";
  credits: number;
}

export interface Semester {
  semNumber: number;
  title: string;
  courses: SemesterCourse[];
}

export interface Laboratory {
  name: string;
  description: string;
  equipment: string[];
}

export interface CourseDetail {
  id: string;
  slug: string;
  number: string;
  title: string;
  degree: string;
  department: string;
  category: "tech" | "commerce" | "science" | "humanities";
  categoryLabel: string;
  duration: string;
  affiliation: string;
  image: string;
  tagline: string;
  overview: string;
  vision: string;
  mission: string[];
  peos: string[];
  pos: string[];
  curriculum: Semester[];
  laboratories: Laboratory[];
  careerRoles: { role: string; description: string }[];
  recruiters: string[];
  eligibility: string;
  highlights: string[];
}

export const COURSES_DATA: CourseDetail[] = [
  {
    id: "ai",
    slug: "ai",
    number: "01",
    title: "B.Sc Artificial Intelligence",
    degree: "Bachelor of Science in Artificial Intelligence",
    department: "Department of Artificial Intelligence & Computing",
    category: "tech",
    categoryLabel: "Computing & AI",
    duration: "3 Years (6 Semesters) Regular",
    affiliation: "Madurai Kamaraj University (MKU) Approved",
    image: "/images/campus/computer-lab.png",
    tagline: "Empowering the next generation of Machine Learning architects, neural data scientists, and autonomous system creators.",
    overview:
      "The B.Sc Artificial Intelligence programme at KR Arts and Science College is engineered to bridge cutting-edge computational mathematics with next-generation deep learning architectures. Affiliated with Madurai Kamaraj University, the curriculum immerses students into Python computing, TensorFlow/PyTorch model deployment, computer vision, natural language processing, and ethical AI governance. Students graduate with practical project portfolios and industry certifications.",
    vision:
      "To be an exemplary center of intelligence computing education in Southern Tamil Nadu, fostering innovation, ethical machine learning deployment, and research capabilities that solve rural, industrial, and societal challenges.",
    mission: [
      "Deliver rigorous foundational knowledge in linear algebra, probability, data structures, and algorithmic AI reasoning.",
      "Provide experiential hands-on laboratory infrastructure equipped with GPU computing workstations and neural toolkits.",
      "Cultivate interdisciplinary problem-solving, entrepreneurship, and industry-readiness in automated and cognitive systems.",
    ],
    peos: [
      "PEO 1: Establish successful professional careers in AI engineering, data analytics, and computational technology sectors.",
      "PEO 2: Pursue advanced postgraduate research (M.Sc / MCA / M.Tech) in cognitive computing and data science.",
      "PEO 3: Exhibit professional ethics, communication leadership, and societal responsibility in designing automated systems.",
    ],
    pos: [
      "PO 1: Computational Knowledge — Apply mathematics and algorithmic concepts to construct intelligent data models.",
      "PO 2: Problem Analysis — Formulate and evaluate complex automated solutions utilizing statistical machine learning.",
      "PO 3: Modern Tool Usage — Master TensorFlow, PyTorch, Scikit-learn, OpenCV, and cloud deployment pipelines.",
      "PO 4: Ethics & Society — Assess societal and environmental consequences of autonomous decision-making systems.",
      "PO 5: Lifelong Learning — Adapt to evolving algorithmic breakthroughs and emerging generative AI technologies.",
    ],
    curriculum: [
      {
        semNumber: 1,
        title: "Semester I",
        courses: [
          { code: "BAI11", title: "Foundations of Artificial Intelligence", type: "Core Theory", credits: 4 },
          { code: "BAI12", title: "Problem Solving with Python Programming", type: "Core Theory", credits: 4 },
          { code: "BAI13", title: "Discrete Mathematics & Calculus", type: "Allied Theory", credits: 4 },
          { code: "BAI1P", title: "Python Programming & Data Structures Lab", type: "Practical Lab", credits: 2 },
          { code: "ENG01", title: "Communicative English for Tech Professionals", type: "Skill Based", credits: 3 },
          { code: "VAL01", title: "Environmental Studies & Digital Ethics", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 2,
        title: "Semester II",
        courses: [
          { code: "BAI21", title: "Data Structures & Algorithmic Analysis", type: "Core Theory", credits: 4 },
          { code: "BAI22", title: "Object Oriented Programming via C++ & Java", type: "Core Theory", credits: 4 },
          { code: "BAI23", title: "Probability & Applied Statistics for AI", type: "Allied Theory", credits: 4 },
          { code: "BAI2P", title: "Advanced Data Structures & OOP Lab", type: "Practical Lab", credits: 2 },
          { code: "ENG02", title: "Technical Writing & Presentation Skills", type: "Skill Based", credits: 3 },
          { code: "VAL02", title: "Value Education & Human Rights", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 3,
        title: "Semester III",
        courses: [
          { code: "BAI31", title: "Relational Database Management Systems & SQL", type: "Core Theory", credits: 4 },
          { code: "BAI32", title: "Supervised & Unsupervised Machine Learning", type: "Core Theory", credits: 4 },
          { code: "BAI33", title: "Linear Algebra & Optimization Techniques", type: "Allied Theory", credits: 4 },
          { code: "BAI3P", title: "Machine Learning & Scikit-Learn Lab", type: "Practical Lab", credits: 2 },
          { code: "BAI34", title: "R Programming for Statistical Modeling", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 4,
        title: "Semester IV",
        courses: [
          { code: "BAI41", title: "Deep Learning Architectures & Neural Networks", type: "Core Theory", credits: 4 },
          { code: "BAI42", title: "Computer Vision & Image Processing", type: "Core Theory", credits: 4 },
          { code: "BAI43", title: "Operating Systems & Cloud Architecture", type: "Allied Theory", credits: 4 },
          { code: "BAI4P", title: "Deep Learning (PyTorch/TensorFlow) Lab", type: "Practical Lab", credits: 2 },
          { code: "BAI44", title: "Data Wrangling & Visualization (PowerBI)", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 5,
        title: "Semester V",
        courses: [
          { code: "BAI51", title: "Natural Language Processing & LLMs", type: "Core Theory", credits: 5 },
          { code: "BAI52", title: "Reinforcement Learning & Robotics Basics", type: "Core Theory", credits: 5 },
          { code: "BAI53", title: "Big Data Technologies & Apache Spark", type: "Elective", credits: 4 },
          { code: "BAI5P", title: "NLP & Cloud AI Services Lab", type: "Practical Lab", credits: 2 },
          { code: "BAI54", title: "Cybersecurity & Data Privacy Law", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 6,
        title: "Semester VI",
        courses: [
          { code: "BAI61", title: "AI Ethics, Governance & Explainable AI (XAI)", type: "Core Theory", credits: 5 },
          { code: "BAI62", title: "Generative AI & Autonomous Agent Systems", type: "Core Theory", credits: 5 },
          { code: "BAI63", title: "Internet of Things (IoT) & Edge AI", type: "Elective", credits: 4 },
          { code: "BAI6P", title: "Capstone Industrial AI Project & Viva", type: "Project", credits: 6 },
        ],
      },
    ],
    laboratories: [
      {
        name: "High-Performance AI & Machine Learning Lab",
        description: "Equipped with dedicated GPU-accelerated computing workstations for training deep neural networks and transformer models.",
        equipment: ["NVIDIA RTX Graphics Clusters", "JupyterLab Multi-User Server", "TensorFlow & PyTorch Stacks", "Gigabit Fiber Switch LAN"],
      },
      {
        name: "Computer Vision & Robotics Sandbox",
        description: "Specialized lab facility for real-time edge processing, high-definition camera sensor integration, and drone flight automation.",
        equipment: ["Raspberry Pi 5 Developer Kits", "Intel RealSense Depth Cameras", "Edge AI Accelerators", "OpenCV Image Toolkits"],
      },
    ],
    careerRoles: [
      { role: "Junior AI Engineer", description: "Design, build, and optimize automated predictive machine learning models." },
      { role: "Data Scientist / Analyst", description: "Extract actionable corporate intelligence through neural pattern recognition." },
      { role: "NLP / Prompt Specialist", description: "Fine-tune large language models and automate cognitive conversational pipelines." },
      { role: "Computer Vision Developer", description: "Deploy automated defect detection, facial analytics, and surveillance systems." },
    ],
    recruiters: ["TCS", "Infosys", "Cognizant", "Zoho", "Wipro", "Besant Technologies", "Madurai Tech Park"],
    eligibility: "Passed 10+2 / Higher Secondary Examination with Mathematics / Computer Science / Statistics / Physics.",
    highlights: ["100% Practical GPU Lab Access", "Industry-Certified Capstone Projects", "Direct Recruitment Tie-Ups"],
  },
  {
    id: "commerce",
    slug: "commerce",
    number: "02",
    title: "B.Com (Computer Applications)",
    degree: "Bachelor of Commerce in Computer Applications",
    department: "Department of Commerce & Corporate Computing",
    category: "commerce",
    categoryLabel: "Commerce & Management",
    duration: "3 Years (6 Semesters) Regular",
    affiliation: "Madurai Kamaraj University (MKU) Approved",
    image: "/images/about/classroom.jpg",
    tagline: "Bridging financial accounting mastery, corporate taxation systems, and enterprise enterprise computerized business analytics.",
    overview:
      "B.Com (Computer Applications) integrates traditional commercial accounting disciplines with computerized software analytics. Students gain expertise in corporate accounting, Indian GST law, computerized Tally ERP 9, database auditing, fintech platforms, and electronic banking protocols.",
    vision:
      "To produce commercially astute, technologically proficient finance professionals equipped with ethical corporate values, analytical acumen, and digital tax expertise.",
    mission: [
      "Deliver rigorous grounding in corporate financial accounting, cost auditing, and income tax governance.",
      "Empower students with hands-on proficiency in TallyPrime, GST filing, Excel financial modeling, and business analytics.",
      "Foster entrepreneurial mindsets and readiness for competitive corporate banking and chartered accounting pursuits.",
    ],
    peos: [
      "PEO 1: Secure careers as corporate accountants, tax consultants, and financial data analysts.",
      "PEO 2: Qualify for professional certifications (CA / CMA / CS / MBA Finance / M.Com).",
      "PEO 3: Exhibit high standards of accounting ethics, fiscal transparency, and commercial stewardship.",
    ],
    pos: [
      "PO 1: Financial Knowledge — Master Indian accounting standards, company law, and banking regulations.",
      "PO 2: Digital Accounting — Execute computerized vouchers, ledger reconciliation, and GST portals.",
      "PO 3: Analytical Problem Solving — Interpret balance sheets and financial statements for strategic corporate decisions.",
      "PO 4: Regulatory Compliance — Apply statutory provisions for income tax returns, TDS, and auditing protocols.",
      "PO 5: Professional Communication — Deliver professional fiscal reports to corporate stakeholders.",
    ],
    curriculum: [
      {
        semNumber: 1,
        title: "Semester I",
        courses: [
          { code: "BCA11", title: "Financial Accounting I", type: "Core Theory", credits: 4 },
          { code: "BCA12", title: "Business Organization & Management", type: "Core Theory", credits: 4 },
          { code: "BCA13", title: "Computer Application in Business & Office Tools", type: "Allied Theory", credits: 4 },
          { code: "BCA1P", title: "Computer Applications & MS Office Lab", type: "Practical Lab", credits: 2 },
          { code: "ENG01", title: "Corporate Business English", type: "Skill Based", credits: 3 },
          { code: "VAL01", title: "Environmental Studies", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 2,
        title: "Semester II",
        courses: [
          { code: "BCA21", title: "Financial Accounting II", type: "Core Theory", credits: 4 },
          { code: "BCA22", title: "Principles of Marketing & E-Commerce", type: "Core Theory", credits: 4 },
          { code: "BCA23", title: "Business Economics & Market Dynamics", type: "Allied Theory", credits: 4 },
          { code: "BCA2P", title: "Database Management & SQL for Commerce Lab", type: "Practical Lab", credits: 2 },
          { code: "VAL02", title: "Value Education & Professional Ethics", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 3,
        title: "Semester III",
        courses: [
          { code: "BCA31", title: "Corporate Accounting I", type: "Core Theory", credits: 4 },
          { code: "BCA32", title: "Banking Theory, Law & FinTech Operations", type: "Core Theory", credits: 4 },
          { code: "BCA33", title: "Business Statistics & Quantitative Techniques", type: "Allied Theory", credits: 4 },
          { code: "BCA3P", title: "TallyPrime & GST Filing Lab", type: "Practical Lab", credits: 2 },
          { code: "BCA34", title: "Retail Business Management", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 4,
        title: "Semester IV",
        courses: [
          { code: "BCA41", title: "Corporate Accounting II", type: "Core Theory", credits: 4 },
          { code: "BCA42", title: "Company Law & Secretarial Practice", type: "Core Theory", credits: 4 },
          { code: "BCA43", title: "E-Commerce Law & Cyber Regulations", type: "Allied Theory", credits: 4 },
          { code: "BCA4P", title: "Advanced Excel Financial Modeling Lab", type: "Practical Lab", credits: 2 },
          { code: "BCA44", title: "Entrepreneurship Development", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 5,
        title: "Semester V",
        courses: [
          { code: "BCA51", title: "Cost Accounting & Costing Methods", type: "Core Theory", credits: 5 },
          { code: "BCA52", title: "Income Tax Law & Practice I", type: "Core Theory", credits: 5 },
          { code: "BCA53", title: "Financial Management & Capital Budgeting", type: "Elective", credits: 4 },
          { code: "BCA5P", title: "Computerized Business Analytics Lab", type: "Practical Lab", credits: 2 },
          { code: "BCA54", title: "Export-Import Documentation Procedures", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 6,
        title: "Semester VI",
        courses: [
          { code: "BCA61", title: "Management Accounting & Ratio Analysis", type: "Core Theory", credits: 5 },
          { code: "BCA62", title: "Income Tax Law & Practice II (Corporate Tax)", type: "Core Theory", credits: 5 },
          { code: "BCA63", title: "Auditing & Corporate Governance Standards", type: "Elective", credits: 4 },
          { code: "BCA6P", title: "Institutional Commerce Project & Viva", type: "Project", credits: 6 },
        ],
      },
    ],
    laboratories: [
      {
        name: "Computerized Commerce & FinTech Lab",
        description: "Equipped with official TallyPrime licenses, GST simulation software, and computerized auditing workstations.",
        equipment: ["TallyPrime Enterprise Multi-User", "MS Excel Financial Toolsets", "Income Tax e-Filing Simulation", "Banking Gateway Emulators"],
      },
    ],
    careerRoles: [
      { role: "Corporate Accountant", description: "Maintain general ledgers, trial balance, and profit & loss statements." },
      { role: "GST & Tax Consultant", description: "Prepare and file GST returns, TDS statements, and corporate tax paperwork." },
      { role: "Financial Data Analyst", description: "Audit commercial metrics, reconcile accounts, and forecast cash flow." },
      { role: "Banking Relationship Executive", description: "Manage retail lending, credit analysis, and commercial accounts." },
    ],
    recruiters: ["Best Money Gold", "Pothys Corporate", "ICICI Bank", "HDFC Bank", "Muthoot Finance", "Shriram Finance", "Theni Anantham"],
    eligibility: "Passed 10+2 / Higher Secondary Examination with Commerce / Accountancy / Mathematics.",
    highlights: ["TallyPrime & GST Practical Certification", "Bank Apprenticeship Linkages", "Auditor Firm Internship Placement"],
  },
  {
    id: "aviation",
    slug: "aviation",
    number: "03",
    title: "BBA Aviation Management",
    degree: "Bachelor of Business Administration in Aviation Management",
    department: "Department of Aviation Management & Logistics",
    category: "commerce",
    categoryLabel: "Commerce & Aviation",
    duration: "3 Years (6 Semesters) Regular",
    affiliation: "Madurai Kamaraj University & LKP Aviation Academy Partner",
    image: "/images/campus/campus-hero.png",
    tagline: "Commercial airport terminal operations, airline dispatch, ticketing GDS softwares, and passenger logistics.",
    overview:
      "BBA Aviation Management is a high-demand professional programme offered in active academic partnership with LKP Academy Aviation and field immersion links with Madurai International Airport. Designed for airline ground operations, air cargo management, safety compliance, and ticketing software.",
    vision:
      "To be a premier aviation management school in Tamil Nadu, supplying aviation leaders, ground operations controllers, and cargo specialists to international and domestic airlines.",
    mission: [
      "Deliver rigorous training in airport terminal operations, air traffic management protocols, and international aviation law.",
      "Provide simulated check-in and airline ticketing software labs (Amadeus / Sabre).",
      "Organize regular airport ground handling visits to Madurai International Airport.",
    ],
    peos: [
      "PEO 1: Excel as airport terminal executives, flight dispatchers, and aviation logistics coordinators.",
      "PEO 2: Pursue advanced credentials in IATA, Air Cargo Management, and Aviation MBA.",
      "PEO 3: Lead with crisis management calm, customer excellence, and international aviation safety discipline.",
    ],
    pos: [
      "PO 1: Aviation Knowledge — Master ICAO, DGCA, and airport operational regulations.",
      "PO 2: Ground Handling — Coordinate baggage dispatch, ramp safety, and turnaround cycles.",
      "PO 3: Software Proficiency — Execute airline reservation systems (GDS) and ticketing.",
      "PO 4: Cargo & Logistics — Manage dangerous goods regulations and international air waybills.",
      "PO 5: Crisis Management — Implement emergency evacuation and passenger safety protocols.",
    ],
    curriculum: [
      {
        semNumber: 1,
        title: "Semester I",
        courses: [
          { code: "BBA11", title: "Principles of Aviation Management", type: "Core Theory", credits: 4 },
          { code: "BBA12", title: "Business Communication & Aviation Grooming", type: "Core Theory", credits: 4 },
          { code: "BBA13", title: "Introduction to Aircraft & Aerodynamics Basics", type: "Allied Theory", credits: 4 },
          { code: "BBA1P", title: "Aviation Personality Grooming & Soft Skills Lab", type: "Practical Lab", credits: 2 },
          { code: "VAL01", title: "Environmental Studies & Eco-Aviation", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 2,
        title: "Semester II",
        courses: [
          { code: "BBA21", title: "Airport Terminal Operations & Ground Handling", type: "Core Theory", credits: 4 },
          { code: "BBA22", title: "Organizational Behaviour in Airlines", type: "Core Theory", credits: 4 },
          { code: "BBA23", title: "Aviation Economics & Demand Forecasting", type: "Allied Theory", credits: 4 },
          { code: "BBA2P", title: "Passenger Check-In & Boarding Simulation Lab", type: "Practical Lab", credits: 2 },
          { code: "VAL02", title: "Aviation Ethics & Customer Excellence", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 3,
        title: "Semester III",
        courses: [
          { code: "BBA31", title: "Airline Operations & Fleet Scheduling", type: "Core Theory", credits: 4 },
          { code: "BBA32", title: "Air Cargo Logistics & Dangerous Goods Regulations", type: "Core Theory", credits: 4 },
          { code: "BBA33", title: "Aviation Accounting & Financial Management", type: "Allied Theory", credits: 4 },
          { code: "BBA3P", title: "Air Ticketing GDS Software (Amadeus) Lab", type: "Practical Lab", credits: 2 },
          { code: "BBA34", title: "Travel & Tourism Geography", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 4,
        title: "Semester IV",
        courses: [
          { code: "BBA41", title: "Aviation Law, DGCA & ICAO Regulations", type: "Core Theory", credits: 4 },
          { code: "BBA42", title: "Airport Safety, Ramp Management & Security", type: "Core Theory", credits: 4 },
          { code: "BBA43", title: "Human Resource Management in Aviation", type: "Allied Theory", credits: 4 },
          { code: "BBA4P", title: "Airport Visit & Ground Operations Practicum", type: "Practical Lab", credits: 2 },
          { code: "BBA44", title: "Customer Relationship Management (CRM) in Airlines", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 5,
        title: "Semester V",
        courses: [
          { code: "BBA51", title: "Airline Marketing, Alliances & Revenue Management", type: "Core Theory", credits: 5 },
          { code: "BBA52", title: "Air Traffic Control (ATC) & Airspace Management", type: "Core Theory", credits: 5 },
          { code: "BBA53", title: "Supply Chain & Multi-Modal Freight Transport", type: "Elective", credits: 4 },
          { code: "BBA5P", title: "Flight Dispatch & Navigation Planning Lab", type: "Practical Lab", credits: 2 },
          { code: "BBA54", title: "Aviation Disaster Management & Emergency Response", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 6,
        title: "Semester VI",
        courses: [
          { code: "BBA61", title: "Aviation Strategic Management", type: "Core Theory", credits: 5 },
          { code: "BBA62", title: "International Aviation Treaties & Bilateral Bilaterals", type: "Core Theory", credits: 5 },
          { code: "BBA63", title: "Airport Retail & Non-Aero Revenue Operations", type: "Elective", credits: 4 },
          { code: "BBA6P", title: "Airport Field Internship & Capstone Project", type: "Project", credits: 6 },
        ],
      },
    ],
    laboratories: [
      {
        name: "Aviation GDS & Ticketing Lab",
        description: "Specialized computer simulation laboratory for training students on real-time Amadeus/Sabre airline booking platforms.",
        equipment: ["GDS Reservation Simulators", "Baggage Tagging Stations", "Boarding Pass Printers", "Flight Scheduling Software"],
      },
      {
        name: "Airport Immersion & Grooming Studio",
        description: "Mock passenger cabin and check-in counter for emergency response, hospitality grooming, and baggage handling drills.",
        equipment: ["Mock Check-In Counters", "Public Address Broadcast Systems", "Airport Security Metal Detectors", "Emergency Evacuation Aids"],
      },
    ],
    careerRoles: [
      { role: "Airport Operations Executive", description: "Oversee passenger movement, gate allocation, and flight departure readiness." },
      { role: "Airline Customer Service Officer", description: "Manage passenger check-in, boarding gates, and transit transfers." },
      { role: "Air Cargo & Logistics Coordinator", description: "Direct cargo weight and balance, customs manifest, and hazardous freight." },
      { role: "Flight Dispatcher Trainee", description: "Prepare flight release briefs, weather assessments, and navigation coordination." },
    ],
    recruiters: ["IndiGo Airlines", "Air India Express", "SpiceJet", "Madurai International Airport", "AISATS", "Celebi Aviation", "DHL Air Cargo"],
    eligibility: "Passed 10+2 / Higher Secondary Examination (Any Stream) with minimum 50% aggregate.",
    highlights: ["LKP Academy Industry Alliance", "Direct Airport Field Immersion", "100% Placement Assurance"],
  },
  {
    id: "cs",
    slug: "cs",
    number: "04",
    title: "B.Sc Computer Science",
    degree: "Bachelor of Science in Computer Science",
    department: "Department of Computer Science & Software Engineering",
    category: "tech",
    categoryLabel: "Computing & AI",
    duration: "3 Years (6 Semesters) Regular",
    affiliation: "Madurai Kamaraj University (MKU) Approved",
    image: "/images/campus/computer-lab.png",
    tagline: "Core computer architecture, full-stack software development, database internals, and cybersecurity.",
    overview:
      "The B.Sc Computer Science curriculum equips students with deep algorithmic foundations, modern full-stack web architectures (React/Node.js), object-oriented programming (C++, Java, Python), database engines (MySQL, MongoDB), and cloud computing. Graduates transition into high-paying software developer roles across global IT firms.",
    vision:
      "To produce versatile software engineers and innovative computational thinkers equipped with modern programming stacks and problem-solving resilience.",
    mission: [
      "Provide robust training in data structures, compiler design, networks, and software engineering methodologies.",
      "Facilitate active project-based learning with modern web, cloud, and mobile development stacks.",
      "Cultivate collaborative hackathons, competitive programming, and continuous technological adaptability.",
    ],
    peos: [
      "PEO 1: Thrive as full-stack software developers, system analysts, and database administrators.",
      "PEO 2: Pursue MCA / M.Sc Computer Science / MS degree programs in prestigious institutions.",
      "PEO 3: Adhere to clean code practices, security standards, and collaborative open-source contributions.",
    ],
    pos: [
      "PO 1: Computing Fundamentals — Apply algorithmic principles to build efficient software applications.",
      "PO 2: Software Development — Design and maintain full-stack web and mobile software architectures.",
      "PO 3: Database & Networks — Architect relational and NoSQL databases with resilient network security.",
      "PO 4: Problem Solving — Debug, optimize, and unit-test scalable production software systems.",
      "PO 5: Teamwork & Communication — Collaborate efficiently in agile sprints and technical documentation.",
    ],
    curriculum: [
      {
        semNumber: 1,
        title: "Semester I",
        courses: [
          { code: "BCS11", title: "Problem Solving & Programming in C", type: "Core Theory", credits: 4 },
          { code: "BCS12", title: "Digital Principles & Computer Organization", type: "Core Theory", credits: 4 },
          { code: "BCS13", title: "Mathematical Foundations for Computer Science", type: "Allied Theory", credits: 4 },
          { code: "BCS1P", title: "C Programming & Linux Shell Scripting Lab", type: "Practical Lab", credits: 2 },
          { code: "ENG01", title: "Communicative English for Technocrats", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 2,
        title: "Semester II",
        courses: [
          { code: "BCS21", title: "Object Oriented Programming via C++", type: "Core Theory", credits: 4 },
          { code: "BCS22", title: "Data Structures & Algorithm Design", type: "Core Theory", credits: 4 },
          { code: "BCS23", title: "Graph Theory & Numerical Methods", type: "Allied Theory", credits: 4 },
          { code: "BCS2P", title: "Data Structures & C++ Lab", type: "Practical Lab", credits: 2 },
          { code: "VAL01", title: "Value Education & Professional Ethics", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 3,
        title: "Semester III",
        courses: [
          { code: "BCS31", title: "Java Programming & OOP Architecture", type: "Core Theory", credits: 4 },
          { code: "BCS32", title: "Relational Database Management Systems (RDBMS)", type: "Core Theory", credits: 4 },
          { code: "BCS33", title: "Operating Systems Principles (Linux/Unix)", type: "Allied Theory", credits: 4 },
          { code: "BCS3P", title: "Java & RDBMS (MySQL) Lab", type: "Practical Lab", credits: 2 },
          { code: "BCS34", title: "HTML5, CSS3 & Responsive Web Design", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 4,
        title: "Semester IV",
        courses: [
          { code: "BCS41", title: "Python Programming & Data Analytics", type: "Core Theory", credits: 4 },
          { code: "BCS42", title: "Computer Networks & Protocol Standards", type: "Core Theory", credits: 4 },
          { code: "BCS43", title: "Software Engineering & Agile Methodologies", type: "Allied Theory", credits: 4 },
          { code: "BCS4P", title: "Python & Network Socket Programming Lab", type: "Practical Lab", credits: 2 },
          { code: "BCS44", title: "Full Stack JavaScript (Node.js & Express)", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 5,
        title: "Semester V",
        courses: [
          { code: "BCS51", title: "Web Technology with React.js & REST APIs", type: "Core Theory", credits: 5 },
          { code: "BCS52", title: "Cyber Security & Cryptography Fundamentals", type: "Core Theory", credits: 5 },
          { code: "BCS53", title: "Cloud Computing & AWS Architecture", type: "Elective", credits: 4 },
          { code: "BCS5P", title: "Full Stack Web Development Lab", type: "Practical Lab", credits: 2 },
          { code: "BCS54", title: "Mobile App Development (Flutter/Android)", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 6,
        title: "Semester VI",
        courses: [
          { code: "BCS61", title: "Data Mining & Business Intelligence", type: "Core Theory", credits: 5 },
          { code: "BCS62", title: "Software Testing & QA Automation", type: "Core Theory", credits: 5 },
          { code: "BCS63", title: "Internet of Things (IoT) Systems", type: "Elective", credits: 4 },
          { code: "BCS6P", title: "Major Live Software Project & Viva", type: "Project", credits: 6 },
        ],
      },
    ],
    laboratories: [
      {
        name: "Full-Stack Software Development Lab",
        description: "Dual-boot Linux/Windows workstations equipped with modern IDEs, Git repositories, Node.js runtime, and Docker environments.",
        equipment: ["100+ Core i5 Workstations", "High-Speed Dedicated Fiber LAN", "Linux Ubuntu & Windows 11", "React & Node.js Dev Stacks"],
      },
    ],
    careerRoles: [
      { role: "Full-Stack Web Developer", description: "Build scalable front-end and back-end web applications." },
      { role: "Software QA / Test Engineer", description: "Design automated test cases, unit scripts, and quality gates." },
      { role: "Database Administrator", description: "Maintain database uptime, backup replication, and query optimization." },
      { role: "Cloud Support Associate", description: "Monitor cloud services, deployment pipelines, and server logs." },
    ],
    recruiters: ["Zoho Corporation", "TCS", "Cognizant", "Wipro", "Besant Technologies", "Madurai Tech Clusters"],
    eligibility: "Passed 10+2 / Higher Secondary Examination with Mathematics / Computer Science / Statistics / Physics.",
    highlights: ["100% Computerized Lab Stations", "Industry Hackathons & Sprints", "Direct IT Campus Placements"],
  },
  {
    id: "tamil",
    slug: "tamil",
    number: "05",
    title: "B.A Tamil",
    degree: "Bachelor of Arts in Tamil Literature",
    department: "Department of Tamil Language, Epigraphy & Media",
    category: "humanities",
    categoryLabel: "Humanities & Law",
    duration: "3 Years (6 Semesters) Regular",
    affiliation: "Madurai Kamaraj University (MKU) Approved",
    image: "/images/campus/library.png",
    tagline: "Classical Sangam literature, epigraphy, modern linguistics, media journalism, and Tamil creative writing.",
    overview:
      "B.A Tamil at KR College celebrates the timeless richness of classical Tamil literature alongside modern media journalism, creative content writing, epigraphical stone script reading, and civil services coaching (TNPSC Group I & II).",
    vision:
      "To preserve and advance classical Tamil linguistic heritage while empowering youth for modern media, journalism, publishing, and public administrative leadership.",
    mission: [
      "Instill profound scholarly appreciation for Sangam poetry, Tholkappiyam grammar, and medieval devotional literature.",
      "Equip students with practical modern skills in Tamil digital content writing, proofreading, television scriptwriting, and journalism.",
      "Conduct systematic TNPSC and UPSC Tamil literature optional mentorship.",
    ],
    peos: [
      "PEO 1: Excel as Tamil media journalists, content creators, copywriters, and public relations specialists.",
      "PEO 2: Succeed in competitive government exams (TNPSC, UPSC, TRB, Banking).",
      "PEO 3: Pursue M.A Tamil / Ph.D research in classical Dravidian linguistics and folklore.",
    ],
    pos: [
      "PO 1: Literary Knowledge — Analyze classical Sangam poetry, epics (Silappadikaram), and modern Tamil novels.",
      "PO 2: Grammar & Linguistics — Master Tholkappiyam and Nannool structural linguistic principles.",
      "PO 3: Media & Journalism — Write and edit news reports, television scripts, and digital blogs.",
      "PO 4: Epigraphy & Heritage — Read Brahmi and Vatteluttu stone inscriptions from historic Pandyan regions.",
      "PO 5: Civil Service Readiness — Master the complete syllabus for TNPSC competitive examinations.",
    ],
    curriculum: [
      {
        semNumber: 1,
        title: "Semester I",
        courses: [
          { code: "BTA11", title: "இக்காலக் கவிதையும் சிறுகதையும் (Modern Poetry & Short Stories)", type: "Core Theory", credits: 4 },
          { code: "BTA12", title: "தமிழ் இலக்கிய வரலாறு I (History of Tamil Literature I)", type: "Core Theory", credits: 4 },
          { code: "BTA13", title: "தமிழக வரலாறும் பண்பாடும் (Tamil Nadu History & Culture)", type: "Allied Theory", credits: 4 },
          { code: "ENG01", title: "Communicative English", type: "Skill Based", credits: 3 },
          { code: "VAL01", title: "சுற்றுச்சூழல் கல்வி (Environmental Studies)", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 2,
        title: "Semester II",
        courses: [
          { code: "BTA21", title: "பக்தி இலக்கியமும் சிற்றிலக்கியமும் (Bhakti & Minor Literature)", type: "Core Theory", credits: 4 },
          { code: "BTA22", title: "தமிழ் இலக்கிய வரலாறு II (History of Tamil Literature II)", type: "Core Theory", credits: 4 },
          { code: "BTA23", title: "இதழியல் கலை (Journalism & Mass Media Arts)", type: "Allied Theory", credits: 4 },
          { code: "ENG02", title: "Technical English", type: "Skill Based", credits: 3 },
          { code: "VAL02", title: "மதிப்புக் கல்வி (Value Education)", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 3,
        title: "Semester III",
        courses: [
          { code: "BTA31", title: "காப்பிய இலக்கியம் (Epic Literature - Silappadikaram)", type: "Core Theory", credits: 4 },
          { code: "BTA32", title: "நன்னூல் எழுத்ததிகாரம் (Nannool - Phonology)", type: "Core Theory", credits: 4 },
          { code: "BTA33", title: "நாட்டுப்புறவியல் (Tamil Folklore & Oral Traditions)", type: "Allied Theory", credits: 4 },
          { code: "BTA34", title: "கணினித் தமிழ் (Computer Tamil & Digital Media)", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 4,
        title: "Semester IV",
        courses: [
          { code: "BTA41", title: "அற இலக்கியம் (Didactic Literature - Thirukkural)", type: "Core Theory", credits: 4 },
          { code: "BTA42", title: "நன்னூல் சொல்லதிகாரம் (Nannool - Morphology)", type: "Core Theory", credits: 4 },
          { code: "BTA43", title: "கல்வெட்டியல் அடிப்படைகள் (Epigraphy & Inscriptions)", type: "Allied Theory", credits: 4 },
          { code: "BTA44", title: "படைப்பிலக்கியப் பட்டறை (Creative Writing Workshop)", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 5,
        title: "Semester V",
        courses: [
          { code: "BTA51", title: "சங்க இலக்கியம் - அகம் (Sangam Literature - Akam)", type: "Core Theory", credits: 5 },
          { code: "BTA52", title: "தொல்காப்பியம் - பொருளதிகாரம் (Tholkappiyam Poetics)", type: "Core Theory", credits: 5 },
          { code: "BTA53", title: "மொழிபெயர்ப்பியல் (Translation Studies)", type: "Elective", credits: 4 },
          { code: "BTA54", title: "TNPSC பொதுத்தமிழ் சிறப்புப் பயிற்சி (TNPSC General Tamil)", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 6,
        title: "Semester VI",
        courses: [
          { code: "BTA61", title: "சங்க இலக்கியம் - புறம் (Sangam Literature - Puram)", type: "Core Theory", credits: 5 },
          { code: "BTA62", title: "இலக்கியத் திறனாய்வியல் (Literary Criticism)", type: "Core Theory", credits: 5 },
          { code: "BTA63", title: "ஒப்பிலக்கியம் (Comparative Literature)", type: "Elective", credits: 4 },
          { code: "BTA6P", title: "இளங்கலை ஆய்வுத் திட்டம் (Undergraduate Research Dissertation)", type: "Project", credits: 6 },
        ],
      },
    ],
    laboratories: [
      {
        name: "Tamil Language & Digital Media Lab",
        description: "Equipped with Unicode Tamil software, audio recording stations for voiceover/news broadcasting, and digital epigraphy archives.",
        equipment: ["Tamil Typing Software (Murasu Anjal / NHM)", "Audio Podcasting Microphones", "Epigraphy Stone Rubbing Replicas"],
      },
    ],
    careerRoles: [
      { role: "Government Administrative Officer", description: "TNPSC Group II & IV positions across government departments." },
      { role: "News Journalist / Sub-Editor", description: "Print, television, and digital Tamil news reporting and publishing." },
      { role: "Tamil Content Writer & Copywriter", description: "Create compelling digital campaigns, scripts, and promotional stories." },
      { role: "School / College Educator", description: "Teach Tamil literature after completing B.Ed / M.A." },
    ],
    recruiters: ["Dina Thanthi", "Vikatan Group", "Sun Network", "Tamil Nadu Government Service", "Educational Institutions"],
    eligibility: "Passed 10+2 / Higher Secondary Examination (Any Stream) with Tamil as a subject.",
    highlights: ["TNPSC Group Exam Coaching", "Journalism Media Internships", "Classical Epigraphy Field Visits"],
  },
  {
    id: "criminology",
    slug: "criminology",
    number: "06",
    title: "B.A Criminology & Police Administration",
    degree: "Bachelor of Arts in Criminology & Police Administration",
    department: "Department of Criminology, Forensic Science & Police Studies",
    category: "humanities",
    categoryLabel: "Humanities & Law",
    duration: "3 Years (6 Semesters) Regular",
    affiliation: "Madurai Kamaraj University (MKU) Approved",
    image: "/images/about/skills.jpg",
    tagline: "Forensic science, criminal psychology, penology, police investigative procedures, and constitutional law.",
    overview:
      "B.A Criminology & Police Administration is a high-distinction multidisciplinary degree. It prepares students for uniform service careers (Sub-Inspector of Police, DSP, Central Armed Police Forces), private security intelligence, cyber forensics, victimology support, and correctional administration.",
    vision:
      "To be South India's vanguard institution in educating disciplined, ethically upright, and technologically astute police administrators and forensic criminologists.",
    mission: [
      "Provide in-depth theoretical grounding in criminal law, evidence acts, forensic ballistics, and criminal psychology.",
      "Train students in physical conditioning, unarmed combat basics, drill discipline, and crime scene investigation.",
      "Facilitate regular courtroom visits, police station attachments, and central prison study tours.",
    ],
    peos: [
      "PEO 1: Clear direct recruitment for Tamil Nadu Police Sub-Inspector (SI) and UPSC Central Armed Police.",
      "PEO 2: Work as corporate security executives, fraud investigators, and forensic consultants.",
      "PEO 3: Pursue LL.B / M.Sc Criminology / Cyber Forensics in premier national law universities.",
    ],
    pos: [
      "PO 1: Criminological Knowledge — Understand theories of criminal etiology, deviance, and juvenile delinquency.",
      "PO 2: Police Administration — Master station management, FIR filing, crowd control, and VIP security.",
      "PO 3: Forensic Skills — Lift latent fingerprints, preserve crime scenes, and document physical evidence.",
      "PO 4: Criminal Law — Apply IPC, CrPC, and Indian Evidence Act provisions with precision.",
      "PO 5: Cybercrime Investigation — Identify phishing, digital financial fraud, and digital forensic footprints.",
    ],
    curriculum: [
      {
        semNumber: 1,
        title: "Semester I",
        courses: [
          { code: "BCR11", title: "Fundamentals of Criminology & Criminal Behaviour", type: "Core Theory", credits: 4 },
          { code: "BCR12", title: "Indian Police Administration & Station Operations", type: "Core Theory", credits: 4 },
          { code: "BCR13", title: "Introduction to Indian Constitution & Fundamental Rights", type: "Allied Theory", credits: 4 },
          { code: "BCR1P", title: "Crime Scene Documentation & Photography Lab", type: "Practical Lab", credits: 2 },
          { code: "ENG01", title: "Professional Legal & Police English", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 2,
        title: "Semester II",
        courses: [
          { code: "BCR21", title: "Criminal Law: Indian Penal Code (IPC)", type: "Core Theory", credits: 4 },
          { code: "BCR22", title: "Penology & Correctional Administration", type: "Core Theory", credits: 4 },
          { code: "BCR23", title: "Psychology of Crime & Deviant Personality", type: "Allied Theory", credits: 4 },
          { code: "BCR2P", title: "Physical Fitness, Drill & Unarmed Combat Lab", type: "Practical Lab", credits: 2 },
          { code: "VAL01", title: "Human Rights in Criminal Justice Administration", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 3,
        title: "Semester III",
        courses: [
          { code: "BCR31", title: "Code of Criminal Procedure (CrPC) & Court Procedures", type: "Core Theory", credits: 4 },
          { code: "BCR32", title: "Forensic Science Fundamentals: Fingerprints & Ballistics", type: "Core Theory", credits: 4 },
          { code: "BCR33", title: "Victimology & Restorative Justice", type: "Allied Theory", credits: 4 },
          { code: "BCR3P", title: "Latent Fingerprint Development & Analysis Lab", type: "Practical Lab", credits: 2 },
          { code: "BCR34", title: "Traffic Management & Highway Safety", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 4,
        title: "Semester IV",
        courses: [
          { code: "BCR41", title: "Indian Evidence Act & Expert Witness Protocols", type: "Core Theory", credits: 4 },
          { code: "BCR42", title: "Special Laws (POCSO, NDPS, Arms Act & SC/ST Act)", type: "Core Theory", credits: 4 },
          { code: "BCR43", title: "Juvenile Justice & Child Protection Systems", type: "Allied Theory", credits: 4 },
          { code: "BCR4P", title: "Court Observational Trial Attachment", type: "Practical Lab", credits: 2 },
          { code: "BCR44", title: "Disaster Management & Civil Defence", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 5,
        title: "Semester V",
        courses: [
          { code: "BCR51", title: "Cyber Crimes, Darknet & Digital Forensics", type: "Core Theory", credits: 5 },
          { code: "BCR52", title: "Corporate Security Management & Loss Prevention", type: "Core Theory", credits: 5 },
          { code: "BCR53", title: "Terrorism, Organized Crime & National Security", type: "Elective", credits: 4 },
          { code: "BCR5P", title: "Digital Forensic Tools & Extraction Lab", type: "Practical Lab", credits: 2 },
          { code: "BCR54", title: "TNUSRB Police Sub-Inspector Written Exam Coaching", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 6,
        title: "Semester VI",
        courses: [
          { code: "BCR61", title: "Forensic Medicine & Toxicology Basics", type: "Core Theory", credits: 5 },
          { code: "BCR62", title: "Contemporary Issues in Criminal Justice Reform", type: "Core Theory", credits: 5 },
          { code: "BCR63", title: "Private Security & Intelligence Operations", type: "Elective", credits: 4 },
          { code: "BCR6P", title: "Police Station Internship & Capstone Project", type: "Project", credits: 6 },
        ],
      },
    ],
    laboratories: [
      {
        name: "Forensic Science & Fingerprint Lab",
        description: "Equipped with latent fingerprint dusting chambers, comparative microscopes, casting materials, and crime scene investigation kits.",
        equipment: ["Fingerprint Powder & Magnetic Brushes", "UV Forensic Inspection Lights", "Forensic Casting Silicone", "Digital Ballistic Charts"],
      },
      {
        name: "Police Drill & Physical Training Ground",
        description: "Full-scale athletic drill track, obstacle rope walls, high jump and long jump pits for TNUSRB Sub-Inspector physical conditioning.",
        equipment: ["100m / 400m Track", "Rope Climbing Frames", "Long Jump & Shot Put Stations", "Physical Drill Equipment"],
      },
    ],
    careerRoles: [
      { role: "Sub-Inspector of Police (TNUSRB)", description: "Lead police stations, execute law enforcement, and file investigative charge sheets." },
      { role: "Corporate Security & Fraud Investigator", description: "Detect internal corporate embezzlement, theft, and security loopholes." },
      { role: "Forensic Science Associate", description: "Process crime scene physical evidence and assist in forensic laboratories." },
      { role: "Prison & Rehabilitation Officer", description: "Manage correctional custody, vocational training, and inmate rehabilitation." },
    ],
    recruiters: ["Tamil Nadu Police Department (TNUSRB)", "G4S Security", "Federal Bank Vigilance", "Private Detective Agencies", "NGO Rehabilitation Centers"],
    eligibility: "Passed 10+2 / Higher Secondary Examination (Any Stream).",
    highlights: ["Daily Police Drill & Physical Conditioning", "Free TNUSRB SI Exam Coaching", "Direct Police Station & Prison Attachments"],
  },
  {
    id: "english",
    slug: "english",
    number: "07",
    title: "B.A English Literature",
    degree: "Bachelor of Arts in English Literature",
    department: "Department of English & Modern Languages",
    category: "humanities",
    categoryLabel: "Humanities & Law",
    duration: "3 Years (6 Semesters) Regular",
    affiliation: "Madurai Kamaraj University (MKU) Approved",
    image: "/images/campus/library.png",
    tagline: "British, American & Postcolonial literature, phonetics, linguistics, and professional corporate communication.",
    overview:
      "B.A English Literature builds mastery in literary analysis, theatre drama, English phonetics, global literature, creative copywriting, and professional business communication. The curriculum transforms students into eloquent public speakers, editorial writers, and competitive exam contenders.",
    vision:
      "To produce articulate, culturally conscious, and critically reflective English communicators capable of leadership in global corporate, media, and academic environments.",
    mission: [
      "Foster analytical appreciation of classical and contemporary world literatures.",
      "Provide high-tech language laboratory training in British RP phonetics, accent neutralization, and public presentation.",
      "Empower students with corporate communication and digital content creation proficiencies.",
    ],
    peos: [
      "PEO 1: Flourish as corporate communications managers, content editors, and public relation officers.",
      "PEO 2: Pursue M.A English, B.Ed, M.Phil, or Law degrees.",
      "PEO 3: Excel in competitive civil service exams (UPSC / TNPSC / Bank PO).",
    ],
    pos: [
      "PO 1: Literary Acumen — Critique canonical texts across Shakespearean, Romantic, and Modern eras.",
      "PO 2: Linguistic Precision — Apply phonetic transcription, syntax analysis, and grammatical correctness.",
      "PO 3: Professional Rhetoric — Deliver persuasive oral presentations and executive corporate summaries.",
      "PO 4: Creative Composition — Produce original fiction, poetry, news editorials, and digital marketing copy.",
      "PO 5: Global Perspectives — Understand diverse cultural dialogues and postcolonial representations.",
    ],
    curriculum: [
      {
        semNumber: 1,
        title: "Semester I",
        courses: [
          { code: "BEN11", title: "Chaucer to the Elizabethan Age", type: "Core Theory", credits: 4 },
          { code: "BEN12", title: "Indian Writing in English", type: "Core Theory", credits: 4 },
          { code: "BEN13", title: "Social History of England", type: "Allied Theory", credits: 4 },
          { code: "BEN1P", title: "Phonetics & English Pronunciation Lab", type: "Practical Lab", credits: 2 },
          { code: "VAL01", title: "Environmental Studies", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 2,
        title: "Semester II",
        courses: [
          { code: "BEN21", title: "Milton and the Neoclassical Age", type: "Core Theory", credits: 4 },
          { code: "BEN22", title: "American Literature: Prose, Poetry & Drama", type: "Core Theory", credits: 4 },
          { code: "BEN23", title: "History of English Literature I", type: "Allied Theory", credits: 4 },
          { code: "BEN2P", title: "Conversational English & Debate Workshop", type: "Practical Lab", credits: 2 },
          { code: "VAL02", title: "Value Education", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 3,
        title: "Semester III",
        courses: [
          { code: "BEN31", title: "The Romantic & Victorian Ages", type: "Core Theory", credits: 4 },
          { code: "BEN32", title: "Shakespeare: Tragedies, Comedies & Sonnets", type: "Core Theory", credits: 4 },
          { code: "BEN33", title: "History of English Literature II", type: "Allied Theory", credits: 4 },
          { code: "BEN34", title: "Business English & Corporate Email Etiquette", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 4,
        title: "Semester IV",
        courses: [
          { code: "BEN41", title: "20th Century British Literature", type: "Core Theory", credits: 4 },
          { code: "BEN42", title: "English Phonetics & Linguistics Structure", type: "Core Theory", credits: 4 },
          { code: "BEN43", title: "Literary Forms & Poetic Devices", type: "Allied Theory", credits: 4 },
          { code: "BEN44", title: "Creative Writing: Poetry & Flash Fiction", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 5,
        title: "Semester V",
        courses: [
          { code: "BEN51", title: "Postcolonial & Commonwealth Literatures", type: "Core Theory", credits: 5 },
          { code: "BEN52", title: "Women's Writing in World Literature", type: "Core Theory", credits: 5 },
          { code: "BEN53", title: "English Language Teaching (ELT) Methodologies", type: "Elective", credits: 4 },
          { code: "BEN54", title: "Journalistic Writing & Digital Copywriting", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 6,
        title: "Semester VI",
        courses: [
          { code: "BEN61", title: "World Literature in English Translation", type: "Core Theory", credits: 5 },
          { code: "BEN62", title: "Literary Theory & Critical Schools", type: "Core Theory", credits: 5 },
          { code: "BEN63", title: "Translation: Theory and Practical Craft", type: "Elective", credits: 4 },
          { code: "BEN6P", title: "Literary Monograph & Creative Dissertation", type: "Project", credits: 6 },
        ],
      },
    ],
    laboratories: [
      {
        name: "Hi-Tech Digital Language Laboratory",
        description: "Equipped with interactive linguistic software, headsets, audio phonetic tools, and international accent training systems.",
        equipment: ["Sanako Language Training Console", "Hi-Fidelity Audio Headsets", "Phonetic Transcription Software", "Recording Studio Mic"],
      },
    ],
    careerRoles: [
      { role: "Corporate Communications Specialist", description: "Manage brand narratives, press releases, and executive communication." },
      { role: "Digital Content Writer / Editor", description: "Author articles, SEO content, social media stories, and corporate copy." },
      { role: "English Language Trainer", description: "Train professionals in IELTS, TOEFL, and corporate business communication." },
      { role: "Publishing Editor / Proofreader", description: "Review and refine book manuscripts, educational books, and media articles." },
    ],
    recruiters: ["Cambridge Assessment Partners", "Concentrix", "Sutherland", "Amazon Customer Support", "The Hindu Publications", "Educational Institutions"],
    eligibility: "Passed 10+2 / Higher Secondary Examination (Any Stream).",
    highlights: ["Language Lab Audio Training", "Theatre & Drama Club Productions", "Corporate Presentation Mentorship"],
  },
  {
    id: "physical-education",
    slug: "physical-education",
    number: "08",
    title: "B.Sc Physical Education",
    degree: "Bachelor of Science in Physical Education, Health Education & Sports",
    department: "Department of Physical Education & Sports Sciences",
    category: "science",
    categoryLabel: "Pure & Applied Sciences",
    duration: "3 Years (6 Semesters) Regular",
    affiliation: "Madurai Kamaraj University (MKU) Approved",
    image: "/images/about/activities.jpg",
    tagline: "Sports physiology, kinesiology, athletic conditioning, sports psychology, and tournament administration.",
    overview:
      "B.Sc Physical Education offers comprehensive training in athletic conditioning, human anatomy, kinesiology, sports nutrition, physiotherapy basics, and tournament administration. With direct access to 10+ acres of sports grounds, students become certified coaches, fitness directors, and sports officers.",
    vision:
      "To produce elite sports professionals, athletic trainers, and physical education teachers dedicated to national athletic excellence and holistic wellness.",
    mission: [
      "Deliver rigorous scientific understanding of human biomechanics, exercise physiology, and sports trauma prevention.",
      "Provide state-of-the-art multi-sport field training in athletics, volleyball, kabaddi, cricket, and fitness conditioning.",
      "Train students for Physical Director (PD) roles and national tournament officiating.",
    ],
    peos: [
      "PEO 1: Serve as Physical Directors (PD) in matriculation and CBSE schools across India.",
      "PEO 2: Establish professional careers as certified gym trainers, fitness consultants, and sports coaches.",
      "PEO 3: Qualify for B.P.Ed / M.P.Ed and sports authority government appointments.",
    ],
    pos: [
      "PO 1: Sports Science Knowledge — Understand human muscular anatomy, kinesiology, and cardiovascular exercise.",
      "PO 2: Coaching Mastery — Coach athletic track events, volleyball, football, and traditional Indian sports.",
      "PO 3: Tournament Administration — Plan, officiate, and score inter-collegiate sports meets.",
      "PO 4: First Aid & Physiotherapy — Apply sports injury first aid, CPR, and therapeutic tape protocols.",
      "PO 5: Fitness Programming — Design personalized diet and weight training regimens.",
    ],
    curriculum: [
      {
        semNumber: 1,
        title: "Semester I",
        courses: [
          { code: "BPE11", title: "History & Principles of Physical Education", type: "Core Theory", credits: 4 },
          { code: "BPE12", title: "Anatomy & Physiology for Athletes I", type: "Core Theory", credits: 4 },
          { code: "BPE13", title: "Health Education & Safety in Sports", type: "Allied Theory", credits: 4 },
          { code: "BPE1P", title: "Track & Field Practicum I (Sprints & Relay)", type: "Practical Lab", credits: 2 },
          { code: "ENG01", title: "Communicative English", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 2,
        title: "Semester II",
        courses: [
          { code: "BPE21", title: "Methods in Physical Education & Lesson Planning", type: "Core Theory", credits: 4 },
          { code: "BPE22", title: "Anatomy & Physiology for Athletes II", type: "Core Theory", credits: 4 },
          { code: "BPE23", title: "Yoga & Pranayama for Mental Conditioning", type: "Allied Theory", credits: 4 },
          { code: "BPE2P", title: "Track & Field Practicum II (Jumps & Throws)", type: "Practical Lab", credits: 2 },
          { code: "VAL01", title: "Environmental Studies", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 3,
        title: "Semester III",
        courses: [
          { code: "BPE31", title: "Kinesiology & Biomechanics in Sports", type: "Core Theory", credits: 4 },
          { code: "BPE32", title: "Rules of Games & Officiating I (Volleyball, Kabaddi)", type: "Core Theory", credits: 4 },
          { code: "BPE33", title: "Nutrition for Athletic Performance", type: "Allied Theory", credits: 4 },
          { code: "BPE3P", title: "Major Games Practicum I (Court Layouts & Drills)", type: "Practical Lab", credits: 2 },
          { code: "BPE34", title: "Aerobics & Calisthenics Conditioning", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 4,
        title: "Semester IV",
        courses: [
          { code: "BPE41", title: "Sports Psychology & Mental Toughness", type: "Core Theory", credits: 4 },
          { code: "BPE42", title: "Rules of Games & Officiating II (Cricket, Football)", type: "Core Theory", credits: 4 },
          { code: "BPE43", title: "Sports Injuries, Physiotherapy & Rehabilitation", type: "Allied Theory", credits: 4 },
          { code: "BPE4P", title: "Major Games Practicum II (Tournament Simulation)", type: "Practical Lab", credits: 2 },
          { code: "BPE44", title: "Gymnasium Equipment Maintenance & Safety", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 5,
        title: "Semester V",
        courses: [
          { code: "BPE51", title: "Sports Training & Periodization Methodology", type: "Core Theory", credits: 5 },
          { code: "BPE52", title: "Organization & Administration of Sports Tournaments", type: "Core Theory", credits: 5 },
          { code: "BPE53", title: "Adapted Physical Education for Differently-Abled", type: "Elective", credits: 4 },
          { code: "BPE5P", title: "Fitness Assessment & Body Composition Testing Lab", type: "Practical Lab", credits: 2 },
          { code: "BPE54", title: "Sports Officiating Internship Attachment", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 6,
        title: "Semester VI",
        courses: [
          { code: "BPE61", title: "Exercise Physiology & Bioenergetics", type: "Core Theory", credits: 5 },
          { code: "BPE62", title: "Test, Measurement & Evaluation in Physical Education", type: "Core Theory", credits: 5 },
          { code: "BPE63", title: "Sports Management, Marketing & Sponsorship", type: "Elective", credits: 4 },
          { code: "BPE6P", title: "School Teaching Practice & Capstone Project", type: "Project", credits: 6 },
        ],
      },
    ],
    laboratories: [
      {
        name: "Sports Physiology & Fitness Assessment Lab",
        description: "Equipped with body fat analyzers, spirometers, heart rate monitors, and athletic reaction time testers.",
        equipment: ["Body Composition Analyzers", "Digital Hand Dynamometers", "Spirometers", "Physiotherapy Ultrasound Units"],
      },
      {
        name: "Multi-Sport Complex & Athletic Grounds",
        description: "10+ acres of open sports grounds with dedicated volleyball courts, cricket pitches, kabaddi clay arenas, and 400m track.",
        equipment: ["400m Running Track", "Standard Volleyball Courts", "Kabaddi Play Area", "Weight Training Gym"],
      },
    ],
    careerRoles: [
      { role: "Physical Education Teacher / Director", description: "Direct school athletic programs, coaching students for state competitions." },
      { role: "Certified Fitness Coach / Trainer", description: "Manage gym floor training, strength conditioning, and weight-loss regimens." },
      { role: "Sports Referee / Officiating Officer", description: "Officiate district and state-level tournaments across major sports." },
      { role: "Sports Facility Manager", description: "Manage stadium arenas, sports equipment inventory, and corporate leagues." },
    ],
    recruiters: ["Matriculation & CBSE Schools", "Cult.fit / Commercial Fitness Centers", "Sports Authorities", "Police Physical Training Centers"],
    eligibility: "Passed 10+2 / Higher Secondary Examination (Any Stream) with physical fitness test qualification.",
    highlights: ["10+ Acres Athletic Grounds", "Official Referee Certification Support", "100% School Placement Record"],
  },
  {
    id: "chemistry",
    slug: "chemistry",
    number: "09",
    title: "B.Sc Chemistry",
    degree: "Bachelor of Science in Chemistry",
    department: "Department of Chemistry & Chemical Sciences",
    category: "science",
    categoryLabel: "Pure & Applied Sciences",
    duration: "3 Years (6 Semesters) Regular",
    affiliation: "Madurai Kamaraj University (MKU) Approved",
    image: "/images/about/teaching.jpg",
    tagline: "Organic synthesis, inorganic chemistry, analytical spectrophotometry, and pharmaceutical lab techniques.",
    overview:
      "B.Sc Chemistry offers rigorous training across organic synthesis, inorganic complexes, physical thermodynamics, and analytical instrumentation. Students spend extensive hours in modern wet-chemistry laboratories, preparing for careers in pharmaceutical testing, industrial manufacturing, petrochemicals, and postgraduate research.",
    vision:
      "To foster scientific curiosity, experimental rigor, and chemical research that creates eco-friendly industrial solutions and pharmaceutical breakthroughs.",
    mission: [
      "Provide comprehensive theoretical grounding in molecular bonding, reaction mechanisms, and thermodynamics.",
      "Train students in micro-scale qualitative analysis, volumetric titrations, and spectrophotometry.",
      "Nurture research-readiness for M.Sc Chemistry and chemical manufacturing careers.",
    ],
    peos: [
      "PEO 1: Secure careers as chemical analysts, QA/QC associates in pharmaceutical and dye industries.",
      "PEO 2: Pursue M.Sc Chemistry / Research in central universities and IITs.",
      "PEO 3: Practice high standards of chemical laboratory safety and environmental sustainability.",
    ],
    pos: [
      "PO 1: Chemical Knowledge — Understand molecular orbital theory, aromatic mechanisms, and periodic trends.",
      "PO 2: Lab Proficiency — Execute organic preparations, inorganic salt analysis, and physical chemistry experiments.",
      "PO 3: Analytical Instrumentation — Operate colorimeters, pH meters, conductivity meters, and refractometers.",
      "PO 4: Industrial Safety — Safely store, handle, and neutralize hazardous chemical reagents.",
      "PO 5: Scientific Problem Solving — Interpret spectral data (UV, IR, NMR basics) for structure determination.",
    ],
    curriculum: [
      {
        semNumber: 1,
        title: "Semester I",
        courses: [
          { code: "BCH11", title: "General Chemistry I: Atomic Structure & Bonding", type: "Core Theory", credits: 4 },
          { code: "BCH12", title: "Allied Physics I (Mechanics & Heat)", type: "Allied Theory", credits: 4 },
          { code: "BCH1P", title: "Inorganic Qualitative Semi-Micro Analysis Lab I", type: "Practical Lab", credits: 2 },
          { code: "ENG01", title: "Communicative English for Scientists", type: "Skill Based", credits: 3 },
          { code: "VAL01", title: "Environmental Chemistry & Waste Management", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 2,
        title: "Semester II",
        courses: [
          { code: "BCH21", title: "General Chemistry II: Hydrocarbons & Thermodynamics", type: "Core Theory", credits: 4 },
          { code: "BCH22", title: "Allied Physics II (Optics & Electromagnetism)", type: "Allied Theory", credits: 4 },
          { code: "BCH2P", title: "Inorganic Qualitative Semi-Micro Analysis Lab II", type: "Practical Lab", credits: 2 },
          { code: "VAL02", title: "Value Education", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 3,
        title: "Semester III",
        courses: [
          { code: "BCH31", title: "Organic Chemistry I: Functional Groups & Stereochemistry", type: "Core Theory", credits: 4 },
          { code: "BCH32", title: "Allied Mathematics I (Calculus & Coordinate Geometry)", type: "Allied Theory", credits: 4 },
          { code: "BCH3P", title: "Volumetric Quantitative Analysis Lab", type: "Practical Lab", credits: 2 },
          { code: "BCH34", title: "Food Chemistry & Adulteration Testing", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 4,
        title: "Semester IV",
        courses: [
          { code: "BCH41", title: "Inorganic Chemistry I: Coordination Compounds & Metallurgy", type: "Core Theory", credits: 4 },
          { code: "BCH42", title: "Allied Mathematics II (Differential Equations)", type: "Allied Theory", credits: 4 },
          { code: "BCH4P", title: "Organic Preparations & Functional Group Analysis Lab", type: "Practical Lab", credits: 2 },
          { code: "BCH44", title: "Agricultural Chemistry & Fertilizer Formulation", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 5,
        title: "Semester V",
        courses: [
          { code: "BCH51", title: "Organic Chemistry II: Heterocycles & Biomolecules", type: "Core Theory", credits: 5 },
          { code: "BCH52", title: "Physical Chemistry I: Quantum Mechanics & Electrochemistry", type: "Core Theory", credits: 5 },
          { code: "BCH53", title: "Polymer Chemistry & Industrial Polymers", type: "Elective", credits: 4 },
          { code: "BCH5P", title: "Physical Chemistry Measurements Lab", type: "Practical Lab", credits: 2 },
          { code: "BCH54", title: "Pharmaceutical Chemistry & Drug Design Basics", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 6,
        title: "Semester VI",
        courses: [
          { code: "BCH61", title: "Inorganic Chemistry II: Bioinorganic & Organometallics", type: "Core Theory", credits: 5 },
          { code: "BCH62", title: "Physical Chemistry II: Spectroscopy & Kinetics", type: "Core Theory", credits: 5 },
          { code: "BCH63", title: "Analytical & Green Chemistry Techniques", type: "Elective", credits: 4 },
          { code: "BCH6P", title: "Chemical Research Project & Industrial Visit Viva", type: "Project", credits: 6 },
        ],
      },
    ],
    laboratories: [
      {
        name: "General & Organic Synthesis Laboratory",
        description: "Equipped with certified fume exhaust hoods, digital analytical balances, magnetic stirrers, and glassware suites.",
        equipment: ["Chemical Fume Exhaust Hoods", "Digital Electronic Balances (0.1mg)", "Heating Mantles & Stirrers", "Distillation Glassware"],
      },
      {
        name: "Analytical Instrumentation & Physical Chemistry Lab",
        description: "Specialized laboratory for instrumental analysis including spectrophotometry, conductivity, and potentiometric titration.",
        equipment: ["UV-Visible Spectrophotometers", "Digital pH Meters", "Conductivity Meters", "Ostwald Viscometers"],
      },
    ],
    careerRoles: [
      { role: "Quality Control (QC) Chemist", description: "Conduct assay testing on pharmaceutical raw materials and finished tablets." },
      { role: "Analytical Chemist", description: "Operate spectrophotometers and chromatography equipment for industrial batches." },
      { role: "Water & Soil Testing Analyst", description: "Evaluate water potability, agricultural soil nutrients, and chemical purity." },
      { role: "Production Chemist Trainee", description: "Supervise synthesis reactions in chemical manufacturing plants." },
    ],
    recruiters: ["Sun Pharma", "Dr. Reddy's Laboratories", "Apex Laboratories", "Asian Paints", "Micro Labs", "Dye & Textile Industries"],
    eligibility: "Passed 10+2 / Higher Secondary Examination with Chemistry, Physics and Mathematics / Biology.",
    highlights: ["Advanced Instrumentation Suite", "Pharmaceutical QC Practical Training", "100% Industry Internship Support"],
  },
  {
    id: "home-science",
    slug: "home-science",
    number: "10",
    title: "B.Sc Home Science (Nutrition & Dietetics)",
    degree: "Bachelor of Science in Home Science (Nutrition and Dietetics)",
    department: "Department of Nutrition, Dietetics & Clinical Health",
    category: "science",
    categoryLabel: "Pure & Applied Sciences",
    duration: "3 Years (6 Semesters) Regular",
    affiliation: "Madurai Kamaraj University (MKU) Approved",
    image: "/images/about/care.jpg",
    tagline: "Clinical dietetics, food chemistry, public health nutrition, therapeutic meal planning, and hospital internship.",
    overview:
      "B.Sc Home Science (Nutrition and Dietetics) prepares clinical dietitians, public health nutritionists, and quality food analysts. The curriculum covers biochemical nutrition, therapeutic diet planning for metabolic diseases (diabetes, hypertension, renal care), institutional food service, and pediatric wellness.",
    vision:
      "To be an outstanding department of clinical nutrition and community health, combating nutritional deficiencies and cultivating wellness leaders.",
    mission: [
      "Provide comprehensive clinical understanding of human nutrition, food microbiology, and physiological metabolism.",
      "Conduct rigorous culinary and therapeutic diet formulation laboratories.",
      "Arrange clinical internships in multispecialty hospitals across Madurai and Southern districts.",
    ],
    peos: [
      "PEO 1: Excel as clinical dietitians in multispecialty hospitals and health wellness clinics.",
      "PEO 2: Establish successful careers as food quality controllers, nutrition counselors, and health educators.",
      "PEO 3: Pursue M.Sc Food Science / Clinical Nutrition and Registered Dietitian (RD) licensure.",
    ],
    pos: [
      "PO 1: Nutritional Science — Master macro and micronutrient metabolism and energy requirements across life stages.",
      "PO 2: Clinical Diet Planning — Formulate customized therapeutic diets for cardiovascular, renal, and diabetic patients.",
      "PO 3: Food Microbiology & Safety — Implement HACCP and FSSAI standards in food storage and processing.",
      "PO 4: Community Nutrition — Conduct nutritional assessment surveys and combat maternal/child malnutrition.",
      "PO 5: Counseling & Ethics — Deliver compassionate, scientifically grounded dietary guidance to patients.",
    ],
    curriculum: [
      {
        semNumber: 1,
        title: "Semester I",
        courses: [
          { code: "BND11", title: "Human Physiology for Nutritionists", type: "Core Theory", credits: 4 },
          { code: "BND12", title: "Food Science: Composition & Culinary Chemistry", type: "Core Theory", credits: 4 },
          { code: "BND13", title: "Allied Chemistry I", type: "Allied Theory", credits: 4 },
          { code: "BND1P", title: "Food Science & Experimental Cookery Lab", type: "Practical Lab", credits: 2 },
          { code: "ENG01", title: "Communicative English", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 2,
        title: "Semester II",
        courses: [
          { code: "BND21", title: "Macronutrient & Energy Metabolism", type: "Core Theory", credits: 4 },
          { code: "BND22", title: "Food Microbiology & Sanitation Protocols", type: "Core Theory", credits: 4 },
          { code: "BND23", title: "Allied Chemistry II (Biomolecules)", type: "Allied Theory", credits: 4 },
          { code: "BND2P", title: "Food Microbiology & Safety Testing Lab", type: "Practical Lab", credits: 2 },
          { code: "VAL01", title: "Environmental Studies", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 3,
        title: "Semester III",
        courses: [
          { code: "BND31", title: "Micronutrients: Vitamins & Minerals Metabolism", type: "Core Theory", credits: 4 },
          { code: "BND32", title: "Nutrition Through Life Cycle (Infancy to Geriatrics)", type: "Core Theory", credits: 4 },
          { code: "BND33", title: "Nutritional Biochemistry Basics", type: "Allied Theory", credits: 4 },
          { code: "BND3P", title: "Meal Planning for Life Stages Lab", type: "Practical Lab", credits: 2 },
          { code: "BND34", title: "Bakery & Confectionery Technology", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 4,
        title: "Semester IV",
        courses: [
          { code: "BND41", title: "Diet Therapy I (Fevers, GI Tract & Weight Disorders)", type: "Core Theory", credits: 4 },
          { code: "BND42", title: "Food Preservation & Packaging Technologies", type: "Core Theory", credits: 4 },
          { code: "BND43", title: "Public Health Nutrition & Malnutrition Interventions", type: "Allied Theory", credits: 4 },
          { code: "BND4P", title: "Therapeutic Diet Preparation Lab I", type: "Practical Lab", credits: 2 },
          { code: "BND44", title: "Hospital Dietary Department Administration", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 5,
        title: "Semester V",
        courses: [
          { code: "BND51", title: "Diet Therapy II (Diabetes, Cardiac & Renal Nutrition)", type: "Core Theory", credits: 5 },
          { code: "BND52", title: "Quantity Food Production & Catering Management", type: "Core Theory", credits: 5 },
          { code: "BND53", title: "Fitness, Sports Nutrition & Ergogenic Aids", type: "Elective", credits: 4 },
          { code: "BND5P", title: "Therapeutic Diet Preparation Lab II (Clinical Diets)", type: "Practical Lab", credits: 2 },
          { code: "BND54", title: "Dietary Counseling Skills & Patient Communication", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 6,
        title: "Semester VI",
        courses: [
          { code: "BND61", title: "Clinical Nutrition & Inborn Errors of Metabolism", type: "Core Theory", credits: 5 },
          { code: "BND62", title: "Food Quality Control & FSSAI Standards", type: "Core Theory", credits: 5 },
          { code: "BND63", title: "Nutraceuticals & Functional Foods", type: "Elective", credits: 4 },
          { code: "BND6P", title: "1-Month Hospital Clinical Internship & Project Viva", type: "Project", credits: 6 },
        ],
      },
    ],
    laboratories: [
      {
        name: "Food Science & Experimental Cookery Lab",
        description: "Equipped with culinary workbenches, commercial ovens, sensory evaluation booths, and food nutrient testing apparatus.",
        equipment: ["Calibrated Induction Cooking Units", "Commercial Baking Ovens", "Texture Analyzers", "Food Processing Equipment"],
      },
      {
        name: "Clinical Dietetics & Nutritional Assessment Suite",
        description: "Equipped with skinfold calipers, infantometers, stadiometers, and diet planning software for inpatient chart formulation.",
        equipment: ["Harpenden Skinfold Calipers", "Stadiometers & Digital Weighing Scales", "Diet Planning Computing Software"],
      },
    ],
    careerRoles: [
      { role: "Hospital Clinical Dietitian", description: "Design therapeutic meal charts for ICU, surgical, and chronic care inpatients." },
      { role: "Sports Nutritionist", description: "Formulate macro-balanced performance meals for athletic conditioning." },
      { role: "Food Safety & Quality Inspector", description: "Audit commercial kitchens and food processing plants under FSSAI protocols." },
      { role: "Wellness Consultant & Health Coach", description: "Provide lifestyle dietary counseling for weight management and diabetes." },
    ],
    recruiters: ["Apollo Hospitals", "Meenakshi Mission Hospital Madurai", "Vadamalayan Hospitals", "Cult.fit Wellness", "Nestlé Nutrition", "FSSAI Laboratories"],
    eligibility: "Passed 10+2 / Higher Secondary Examination with Chemistry / Biology / Home Science / Physics / Mathematics.",
    highlights: ["Mandatory Hospital Clinical Internship", "FSSAI Safety Compliance Training", "100% Healthcare Job Placement"],
  },
  {
    id: "mathematics",
    slug: "mathematics",
    number: "11",
    title: "B.Sc Mathematics",
    degree: "Bachelor of Science in Mathematics",
    department: "Department of Mathematics & Statistical Modeling",
    category: "science",
    categoryLabel: "Pure & Applied Sciences",
    duration: "3 Years (6 Semesters) Regular",
    affiliation: "Madurai Kamaraj University (MKU) Approved",
    image: "/images/about/students.jpg",
    tagline: "Advanced calculus, abstract algebra, discrete structures, probability statistics, and operations research.",
    overview:
      "B.Sc Mathematics trains students in pure and applied mathematics, abstract algebraic structures, multivariate calculus, operations research, statistical modeling, and computational coding. Mathematics graduates are in immense demand across banking analytics, cryptography, actuarial science, and civil services.",
    vision:
      "To produce mathematically profound analytical thinkers capable of solving complex algorithmic, financial, and industrial optimization problems.",
    mission: [
      "Provide deep rigorous foundation in modern algebra, real and complex analysis, and differential geometry.",
      "Integrate computational tools such as MATLAB, R, and Python for statistical and numerical simulations.",
      "Train students for competitive national examinations (JAM, CSIR-NET, Bank PO, TNPSC).",
    ],
    peos: [
      "PEO 1: Flourish as financial quantitative analysts, data modelers, and operations research associates.",
      "PEO 2: Qualify for M.Sc Mathematics / Data Science at premier institutes (IITs, CMI, Central Universities).",
      "PEO 3: Excel in banking, actuarial examinations, and educational instruction.",
    ],
    pos: [
      "PO 1: Mathematical Foundations — Solve complex proofs in real analysis, group theory, and linear algebra.",
      "PO 2: Modeling & Optimization — Formulate linear programming models and supply chain networks.",
      "PO 3: Computational Skills — Implement numerical algorithms in Python, R, and MATLAB.",
      "PO 4: Statistical Inference — Apply hypothesis testing, regression analysis, and stochastic modeling.",
      "PO 5: Logical Deduction — Construct logically sound mathematical proofs with clarity.",
    ],
    curriculum: [
      {
        semNumber: 1,
        title: "Semester I",
        courses: [
          { code: "BMA11", title: "Differential Calculus & Trigonometry", type: "Core Theory", credits: 4 },
          { code: "BMA12", title: "Classical Algebra & Theory of Equations", type: "Core Theory", credits: 4 },
          { code: "BMA13", title: "Allied Physics I (Properties of Matter)", type: "Allied Theory", credits: 4 },
          { code: "BMA1P", title: "Computational Mathematics (Python Basics) Lab", type: "Practical Lab", credits: 2 },
          { code: "ENG01", title: "Communicative English", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 2,
        title: "Semester II",
        courses: [
          { code: "BMA21", title: "Integral Calculus & Vector Analysis", type: "Core Theory", credits: 4 },
          { code: "BMA22", title: "Analytical Geometry (3D) & Conic Sections", type: "Core Theory", credits: 4 },
          { code: "BMA23", title: "Allied Physics II (Electricity & Magnetism)", type: "Allied Theory", credits: 4 },
          { code: "VAL01", title: "Environmental Studies", type: "Skill Based", credits: 2 },
        ],
      },
      {
        semNumber: 3,
        title: "Semester III",
        courses: [
          { code: "BMA31", title: "Modern Algebra: Groups & Rings", type: "Core Theory", credits: 4 },
          { code: "BMA32", title: "Differential Equations & Laplace Transforms", type: "Core Theory", credits: 4 },
          { code: "BMA33", title: "Allied Mathematical Statistics I", type: "Allied Theory", credits: 4 },
          { code: "BMA34", title: "Quantitative Aptitude for Competitive Exams", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 4,
        title: "Semester IV",
        courses: [
          { code: "BMA41", title: "Linear Algebra: Vector Spaces & Matrices", type: "Core Theory", credits: 4 },
          { code: "BMA42", title: "Real Analysis I: Sequences & Series", type: "Core Theory", credits: 4 },
          { code: "BMA43", title: "Allied Mathematical Statistics II", type: "Allied Theory", credits: 4 },
          { code: "BMA4P", title: "R Programming for Statistical Analysis Lab", type: "Practical Lab", credits: 2 },
          { code: "BMA44", title: "Mathematics for Actuarial Studies", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 5,
        title: "Semester V",
        courses: [
          { code: "BMA51", title: "Real Analysis II: Metric Spaces & Continuity", type: "Core Theory", credits: 5 },
          { code: "BMA52", title: "Mechanics: Statics and Dynamics", type: "Core Theory", credits: 5 },
          { code: "BMA53", title: "Operations Research I (Linear Programming & Simplex)", type: "Elective", credits: 4 },
          { code: "BMA54", title: "Numerical Methods & Algorithmic Solutions", type: "Skill Based", credits: 3 },
        ],
      },
      {
        semNumber: 6,
        title: "Semester VI",
        courses: [
          { code: "BMA61", title: "Complex Analysis & Contour Integration", type: "Core Theory", credits: 5 },
          { code: "BMA62", title: "Graph Theory & Combinatorial Algorithms", type: "Core Theory", credits: 5 },
          { code: "BMA63", title: "Operations Research II (Transportation & Game Theory)", type: "Elective", credits: 4 },
          { code: "BMA6P", title: "Undergraduate Mathematical Modeling Project", type: "Project", credits: 6 },
        ],
      },
    ],
    laboratories: [
      {
        name: "Computational Mathematics & Statistical Computing Lab",
        description: "Equipped with statistical tools, Python numerical suites, R environment, and graphing calculators for algorithmic problem-solving.",
        equipment: ["R Studio Workstations", "Python NumPy & SciPy Stacks", "MATLAB Simulation Terminals", "Statistical Package Softwares"],
      },
    ],
    careerRoles: [
      { role: "Data / Quantitative Analyst", description: "Model risk probabilities, corporate metrics, and predictive mathematical trends." },
      { role: "Banking & Financial Analyst", description: "Credit scoring, investment modeling, and algorithmic risk assessment." },
      { role: "Operations Research Specialist", description: "Optimize logistics networks, manufacturing schedules, and inventory chains." },
      { role: "Mathematics Educator / Professor", description: "Teach in higher secondary institutions and competitive exam academies." },
    ],
    recruiters: ["HDFC Bank", "ICICI Securities", "TCS Analytics", "Cognizant Data Services", "EdTech Companies", "Banking & Financial Services"],
    eligibility: "Passed 10+2 / Higher Secondary Examination with Mathematics as a core subject.",
    highlights: ["Free Banking & Competitive Exam Coaching", "Hands-on R & Python Statistics Lab", "100% Placement & Higher Studies Support"],
  },
];
