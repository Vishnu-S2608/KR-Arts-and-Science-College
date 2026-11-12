export interface ClubDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  badge: string;
  tagline: string;
  image: string;
  bannerImage: string;
  affiliation: string;
  overview: string;
  motto: string;
  aims: string[];
  keyHighlights: string[];
  activities: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  officerInCharge: {
    role: string;
    department: string;
  };
}

export const CLUBS_DATA: ClubDetail[] = [
  {
    slug: "ncc",
    title: "National Cadet Corps (NCC Army Wing)",
    shortTitle: "NCC Army Wing",
    category: "Defense & Military Leadership",
    badge: "7 TN BN NCC Directorate",
    tagline: "Instilling selfless service, military-grade discipline, and direct officer pathways into the Indian Armed Forces.",
    image: "/images/campus/campus-hero.png",
    bannerImage: "/images/campus/campus-hero.png",
    affiliation: "7 Tamil Nadu Battalion NCC &bull; Madurai Group",
    overview:
      "The National Cadet Corps (NCC) Army Wing at KR Arts and Science College is affiliated with the 7 Tamil Nadu Battalion NCC under the Madurai Group Directorate. Our cadet company grooms young women and men into disciplined, patriotic citizens with rigorous drill maneuvers, obstacle navigation, 0.22 rifle marksmanship, and leadership development.",
    motto: "Unity and Discipline (Ekta aur Anushasan)",
    aims: [
      "Develop qualities of character, courage, comradeship, discipline, and secular outlook.",
      "Create a human resource of organized, trained, and motivated youth to provide leadership in all walks of life.",
      "Provide a suitable environment to motivate the youth to take up a career in the Indian Armed Forces."
    ],
    keyHighlights: [
      "B & C Certificate National Certification Pathways",
      "Direct SSB Interview Entry for Armed Forces Officer Commissions",
      "Annual Thal Sainik Camp (TSC) & Republic Day Parade (RDC) Trials",
      "0.22 Rifle Marksmanship & Obstacle Training Course",
    ],
    activities: [
      {
        title: "Rigorous Drill & Parade Formations",
        description: "Weekly parade grounds training focusing on foot drill, arms drill, ceremonial guard of honor, and synchronized troop movements.",
      },
      {
        title: "Weapon Training & Marksmanship",
        description: "Standard weapon stripping, assembly, aiming position exercises, and live target firing with 0.22 caliber rifles overseen by military instructors.",
      },
      {
        title: "Combined Annual Training Camps (CATC)",
        description: "10-day military camp immersion featuring field craft, battle craft, map reading using prismatic compass, tent pitching, and night navigation.",
      },
      {
        title: "Civil Defense & Disaster Rescue",
        description: "Disaster management simulations, flood rescue drills, stretcher bearer first-aid triage, and emergency traffic assistance with local police.",
      },
    ],
    benefits: [
      "Direct SSB Interview Call: C-certificate holders with 'A'/'B' grade can attend Service Selection Board without appearing for CDS/UPSC written examination.",
      "Bonus marks and reservations in Tamil Nadu State Police (Sub-Inspector & Constable) and CAPF paramilitary recruitments.",
      "Academic grace marks and priority consideration during postgraduate university admissions.",
      "Leadership conditioning and priority corporate hiring across defense technology and security management sectors.",
    ],
    officerInCharge: {
      role: "Associate NCC Officer / Caretaker Officer",
      department: "Physical Education & NCC Directorate",
    },
  },
  {
    slug: "nss",
    title: "National Service Scheme (NSS & UBA)",
    shortTitle: "NSS & Rural Outreach",
    category: "Community Service & Rural Upliftment",
    badge: "Madurai Kamaraj University NSS Unit",
    tagline: "Connecting higher education with rural villages for socio-economic transformation, healthcare, and civic welfare.",
    image: "/images/about/activities.jpg",
    bannerImage: "/images/about/activities.jpg",
    affiliation: "Madurai Kamaraj University &bull; Ministry of Youth Affairs",
    overview:
      "The National Service Scheme (NSS) unit at KR Arts and Science College operates under the aegis of Madurai Kamaraj University and the Ministry of Youth Affairs & Sports, Government of India. Complementing Unnat Bharat Abhiyan (UBA), our unit has adopted 5 rural revenue villages around Peraiyur to eliminate socio-economic barriers through direct community immersion.",
    motto: "Not Me But You",
    aims: [
      "Understand the community in which volunteers work and identify rural challenges.",
      "Develop among students a sense of civic responsibility and social conscience.",
      "Mobilize community participation to create durable rural assets and promote public health."
    ],
    keyHighlights: [
      "5 Adopted Rural Villages Cluster Development (Peraiyur Taluk)",
      "Annual 7-Day Rural Residential Community Immersion Camps",
      "Annual Blood Donation Drives contributing 150+ units to Govt Hospitals",
      "Digital Literacy & E-Governance Enrollment for Rural Women SHGs",
    ],
    activities: [
      {
        title: "Annual 7-Day Village Residential Camp",
        description: "Volunteers reside in adopted villages, conducting village pond desilting, primary school whitewashing, street cleanliness drives, and socio-economic census surveys.",
      },
      {
        title: "Free Medical & Eye Screening Camps",
        description: "Organized in collaboration with Madurai Rajaji Government Hospital, providing free cataract screenings, dental hygiene checks, and vital tests for rural seniors.",
      },
      {
        title: "Mass Blood Donation Drives",
        description: "Semi-annual blood donation mobilization ensuring emergency blood unit reserves for local taluk government hospitals and trauma care centers.",
      },
      {
        title: "Green Peraiyur Afforestation Drives",
        description: "Planting native shade and fruit trees across rural roadsides, village panchayat schools, and temple commons with drip care monitoring.",
      },
    ],
    benefits: [
      "Madurai Kamaraj University NSS Volunteer Merit Certification.",
      "Weightage points in government employment and state civil service exams.",
      "Practical leadership, crisis management, and grassroots public policy implementation experience.",
      "Direct interactions with District Collectors, Revenue Officers, and Village Panchayat Presidents.",
    ],
    officerInCharge: {
      role: "NSS Programme Officer",
      department: "Department of Tamil & Humanities",
    },
  },
  {
    slug: "leaders-club",
    title: "KR Youth Leaders Club",
    shortTitle: "KR Leaders Club",
    category: "Civic Governance & Public Policy",
    badge: "Student Governance Forum",
    tagline: "Nurturing parliamentary debate, public policy analysis, and dynamic civic governance among future civil servants.",
    image: "/images/about/students.jpg",
    bannerImage: "/images/about/students.jpg",
    affiliation: "KR Educational & Charitable Trust Youth Council",
    overview:
      "The KR Youth Leaders Club is an elite student-led governance and civic advocacy forum. It empowers young minds with oratory acumen, legislative procedure knowledge, policy debate skills, and deep dialogues with district administrative officials, police commissioners, and legal luminaries.",
    motto: "Lead with Integrity, Serve with Courage",
    aims: [
      "Foster critical thinking on national legislation, socio-economic policy, and district development.",
      "Train students in parliamentary debate decorum, legal moot courts, and diplomatic negotiation.",
      "Provide early exposure to civil service exam frameworks (UPSC & TNPSC Group I/II)."
    ],
    keyHighlights: [
      "Annual Model Youth Parliament & Legislative Mock Sessions",
      "Interactive Seminars with IAS Officers & District Magistrates",
      "Moot Court Debates on Constitutional & Human Rights Law",
      "Youth Citizen Surveys on District Infrastructure & Welfare",
    ],
    activities: [
      {
        title: "Model Youth Parliament",
        description: "Simulating Lok Sabha sessions with ministerial question hours, bill deliberations, opposition cross-examinations, and voting protocols.",
      },
      {
        title: "Bureaucratic & Police Dialogue Series",
        description: "Interactive off-the-record town halls with serving District Collectors, Revenue Divisional Officers, and SPs discussing public administration.",
      },
      {
        title: "Moot Court & Legal Case Analysis",
        description: "Case study presentations on Supreme Court landmark verdicts, fundamental rights, consumer protection, and cyber jurisprudence.",
      },
      {
        title: "Public Speaking & Oratory Bootcamps",
        description: "Continuous coaching in bilateral debate, impromptu speaking, voice modulation, and persuasive rhetorical articulation.",
      },
    ],
    benefits: [
      "Comprehensive grounding for UPSC Civil Services, TNPSC Group I/II, and Judicial Examinations.",
      "Exceptional communication, administrative reasoning, and group negotiation competencies.",
      "Direct networking with civic leaders, advocates, and administrative decision-makers.",
    ],
    officerInCharge: {
      role: "Faculty Advisor",
      department: "Department of Criminology & Police Administration",
    },
  },
  {
    slug: "sports-club",
    title: "Sports & Athletics Academy",
    shortTitle: "Sports & Athletics",
    category: "Championship Fitness & Games",
    badge: "MKU Zonal Champions",
    tagline: "Dedicated to sportsmanship, championship athletics, and inter-collegiate tournament excellence across South India.",
    image: "/images/about/campus.jpg",
    bannerImage: "/images/campus/campus-hero.png",
    affiliation: "Madurai Kamaraj University Sports Board",
    overview:
      "The Sports & Athletics Academy at KR Arts and Science College oversees extensive athletic conditioning, collegiate tournament teams, and championship events across dedicated cricket pitches, volleyball courts, a regulation kabaddi arena, and sprint tracks.",
    motto: "Strength, Agility, and Sportsmanship",
    aims: [
      "Promote physical fitness, psychological resilience, and team spirit across all student cohorts.",
      "Train collegiate squads for Madurai Kamaraj University inter-zonal and national sports championships.",
      "Discover and support rural athletic talent from Peraiyur, Usilampatti, and Thirumangalam."
    ],
    keyHighlights: [
      "Full-Size Inter-Collegiate Cricket & Football Grounds",
      "Floodlit Kabaddi Arena & Standard Volleyball Courts",
      "Dedicated 400m Track & Field Sprint / Relay Lanes",
      "Scholarship Quotas & Free Boarding for Top Athletic Performers",
    ],
    activities: [
      {
        title: "Inter-Collegiate Tournaments",
        description: "Hosting regional cricket cups, district kabaddi championships, and inter-departmental athletic tournaments.",
      },
      {
        title: "Daily Conditioning & Fitness Coaching",
        description: "Structured morning fitness regimens, stamina drills, aerobic conditioning, and injury prevention monitored by physical directors.",
      },
      {
        title: "Annual Sports Meet (Athletic Championships)",
        description: "Grand annual sports festival celebrating track and field sprinting, long jump, shot put, relay racing, and team sport finals.",
      },
    ],
    benefits: [
      "Sports quota fee concessions and performance cash awards for state and university medalists.",
      "Direct pathway for recruitment in police, armed forces, railway, and postal department sports quotas.",
      "Lifetime habituation of discipline, physical peak condition, and teamwork.",
    ],
    officerInCharge: {
      role: "Director of Physical Education",
      department: "Physical Education & Sports Wing",
    },
  },
  {
    slug: "green-club",
    title: "Green Campus Eco Preservation Club",
    shortTitle: "Green Eco Club",
    category: "Environmental Stewardship",
    badge: "10+ Acre Eco Campus",
    tagline: "Stewardship of our lush 10+ acre botanical campus, solar energy tracking, and rural environmental conservation.",
    image: "/images/about/green.jpg",
    bannerImage: "/images/campus/kr_campus_2.png",
    affiliation: "Tamil Nadu Pollution Control Board Student Chapter",
    overview:
      "The Green Campus Eco Preservation Club spearheads environmental stewardship across the college's 10+ acre campus. From solar lighting maintenance and rainwater retention ponds to native sapling afforestation and plastic-free village campaigns, the club champions sustainability.",
    motto: "Conserve Today, Breathe Tomorrow",
    aims: [
      "Maintain a 100% pollution-free, zero-plastic, and eco-sustainable green learning environment.",
      "Educate students and rural farmers on rainwater conservation, organic farming, and solar energy.",
      "Promote native biodiversity by cultivating medicinal herbs, flowering trees, and shaded groves."
    ],
    keyHighlights: [
      "10+ Acre Clean & Green Eco-Campus Botanical Care",
      "Solar Campus Monitoring & Clean Energy Adoption",
      "Porous Rainwater Harvesting Recharge Ponds",
      "1,000+ Native Tree Saplings Planted Across Peraiyur",
    ],
    activities: [
      {
        title: "Mass Tree Plantation Drives",
        description: "Organizing seasonal planting of neem, pungai, and banyan saplings with organic manure across campus and local village highways.",
      },
      {
        title: "Campus Cleanliness & Plastic Audits",
        description: "Zero-single-use-plastic enforcement, scientific waste segregation, and compost bin maintenance for organic cafeteria waste.",
      },
      {
        title: "Water Conservation & Pond Rejuvenation",
        description: "Monitoring campus roof catchment rainwater harvesting networks that recharge deep borewell aquifers.",
      },
    ],
    benefits: [
      "Practical experience in environmental sustainability, eco-auditing, and green energy management.",
      "Certification from regional environmental chapters and forestry departments.",
      "Active participation in national climate resilience and sustainable development initiatives.",
    ],
    officerInCharge: {
      role: "Faculty Green Advisor",
      department: "Department of Chemistry & Science",
    },
  },
  {
    slug: "arts-literary",
    title: "Art, Craft & Literary Society",
    shortTitle: "Art & Literary Society",
    category: "Culture, Theatre & Fine Arts",
    badge: "Heritage & Fine Arts",
    tagline: "Celebrating classical Tamil Sangam literature, theatrical arts, painting, and vibrant campus cultural festivals.",
    image: "/images/about/events.jpg",
    bannerImage: "/images/campus/kr_lib.webp",
    affiliation: "KR Cultural & Heritage Foundation",
    overview:
      "The Art, Craft & Literary Society is the creative pulse of KR Arts and Science College. Dedicated to classical and contemporary performing arts, fine arts exhibitions, Tamil elocution, poetry recitals, and musical staging, the society celebrates India's profound cultural heritage.",
    motto: "Art Inspires, Words Empower",
    aims: [
      "Encourage creative expression through literature, visual arts, stage theatre, and traditional music.",
      "Celebrate the richness of classical Tamil Sangam literature, modern poetry, and folklore.",
      "Provide an inclusive stage for every student to showcase artistic talent."
    ],
    keyHighlights: [
      "Grand Annual Inter-Collegiate Cultural Festival",
      "Tamil Sangam Kaviarangam (Poetry Recitals) & Elocution Contests",
      "Traditional Rangoli, Painting & Fine Arts Exhibitions",
      "Student Theatrical Productions & Street Plays on Social Issues",
    ],
    activities: [
      {
        title: "Annual Campus Cultural Festival",
        description: "Two-day multi-stage festival featuring solo/group classical dance, instrumental fusion music, mime, and drama productions.",
      },
      {
        title: "Tamil Literary Conclaves & Kaviarangam",
        description: "Debates on Sangam classics (Silappadikaram, Thirukkural), modern Tamil fiction, and competitive essay writing.",
      },
      {
        title: "Fine Arts Exhibitions & Live Workshops",
        description: "Campus gallery displays of student oil paintings, charcoal sketches, traditional Tanjore artwork, and handicraft models.",
      },
    ],
    benefits: [
      "Opportunities to represent the college at Madurai Kamaraj University Youth Festivals and national cultural meets.",
      "Stage confidence, artistic portfolio curation, and event management leadership.",
      "Recognition and cash awards at district and state-level literary and fine arts championships.",
    ],
    officerInCharge: {
      role: "Cultural Secretary & Faculty Advisor",
      department: "Department of English & Tamil",
    },
  },
];
