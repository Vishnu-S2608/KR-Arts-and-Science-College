# KR Arts And Science College - Web Platform

Ultra-modern, animation-driven website for **KR Arts And Science College** (Affiliated to Madurai Kamaraj University, Established 2023, Peraiyur, Madurai).

## 🚀 Tech Stack
- **Build Tool:** Vite
- **Core:** Vanilla JavaScript (ES Modules), Semantic HTML5
- **Styling:** Modular CSS with Custom Properties (Design System tokens)
- **Motion & Interactions:** GSAP 3 (ScrollTrigger, Split-line reveals, Pinned Horizontals)
- **Smooth Scrolling:** Lenis v1.3
- **Typography:** Google Fonts (`Plus Jakarta Sans`, `Inter`, `Noto Sans Tamil`, `Sora`)

---

## 📁 Clean Folder Structure
```
KR-Arts-and-Science-College/
├── public/
│   ├── assets/
│   │   ├── logo.jpeg            # Official circular college seal
│   │   └── logo.png
│   └── images/
│       ├── campus-hero.png      # Real campus photo
│       ├── college-entrance.jpg # Real entrance photo
│       ├── computer-lab.png     # Real computing lab photo
│       └── library.png          # Real library photo
├── src/
│   ├── components/              # Component markup snippets
│   ├── js/
│   │   ├── cursor.js            # Custom cursor (desktop only)
│   │   ├── department.js        # 11 Programmes data repository
│   │   ├── main.js              # Application entrypoint
│   │   ├── motion.js            # GSAP animations, counters & tickers
│   │   ├── navbar.js            # Glass navbar & mobile menu
│   │   ├── page-transitions.js  # Circular clip-path wipe navigation
│   │   ├── preloader.js         # 3.5s signature logo seal animation
│   │   └── smooth-scroll.js     # Lenis smooth scroll
│   └── styles/
│       ├── base.css             # Typography, reset, utilities, cursor
│       ├── components.css       # Preloader, navbar, bento-grid, forms
│       ├── main.css             # Root stylesheet
│       └── variables.css        # Color tokens & easings
├── apply.html                   # Provisional admissions application
├── clubs.html                   # Clubs & NCC page
├── contact.html                 # Contact, transit facts & interactive form
├── department.html              # Dynamic 11-programme department template
├── events.html                  # Campus Chronicle with academic year filters
├── index.html                   # 13-section award-level homepage
├── package.json
└── vite.config.js
```

---

## 🛠️ How to Run & Build

### 1. Development Server
```bash
npm run dev
```
Runs the site locally at `http://localhost:5173`.

### 2. Production Build
```bash
npm run build
```
Generates a highly-optimized static bundle in `/dist` for all HTML entry points.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📋 List of TODO Items (Missing Photos & Stats to be Verified)
As mandated by the prompt's strict rules, no stock photos or unverified metrics have been fabricated. The following items have clean placeholders and visible code comments:

### 1. Photos to be Added (`/public/images`)
- [ ] **Department Photos:**
  - B.Com (Computer Applications)
  - BBA Aviation Management (Classrooms / Airport setup)
  - B.A Tamil
  - B.A Criminology & Police Administration
  - B.A English
  - B.Sc Physical Education (Grounds / Athletic equipment)
  - B.Sc Chemistry (Wet chemistry lab)
  - B.Sc Home Science (Nutrition & Dietetics food lab)
  - B.Sc Mathematics
- [ ] **Administration Portraits:**
  - Mr. K. Pandiaraj (Secretary & Correspondent)
  - Dr. P. S. Senthilkumar (Principal)
- [ ] **Placed Students Individual Headshots:** 18 student photos.
- [ ] **Event Photos:**
  - NCC Thal Sainik Camp selection
  - Madurai Airport operational visit
  - Srivilliputhur athletic championship
  - Decathlon industrial visit
  - SPARK innovation exhibition
  - Shinawatra University MoU signing ceremony

### 2. Data & Stats to be Verified
- [ ] **Campus Acreage:** Verified as 10+ acres; exact survey acreage pending trust documentation.
- [ ] **Faculty Credentials:** Full roster with M.Phil / Ph.D. degrees to be updated per department.
- [ ] **Salary Claims:** Kept excluded as requested ("Do NOT show salary claims unless confirmed").
