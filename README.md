<div align="center">

# ARKA DEB // PORTFOLIO
### Advanced Cinematic & Technical Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2.18-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.169-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-blue.badge?style=for-the-badge)](LICENSE)

<br />

**TURNING COMPLEX DATA INTO ACTIONABLE BUSINESS STRATEGY.**

*A production-ready personal digital experience engineered with Swiss typography, dark cyberpunk minimalism, interactive 3D WebGL geometry, and real-time telemetry.*

[Explore Flagship Deployments](#-flagship-deployments) • [Technical Ecosystem](#-technical-ecosystem) • [Local Development](#-getting-started) • [Deployment](#-deployment)

</div>

---

## ⚡ Executive Summary

This repository contains the complete source code for the personal portfolio of **Arka Deb** — Data Analyst, Data Scientist, and Machine Learning Developer based in the Greater Kolkata Area, India. 

Designed under strict creative developer standards, the website avoids generic templates in favor of an **award-winning editorial technical aesthetic**, incorporating:
- **Interactive 3D Geometric Core**: Continuous dual-axis rotating wireframe Cube (Square) intersecting with triple gyroscopic Torus Rings (Circles) and a 550+ particle constellation reacting to cursor parallax.
- **Swiss Editorial Typography**: Strict typographic hierarchy featuring **Space Grotesk**, **Inter**, and **JetBrains Mono** with architectural corner crosshairs (`+`) and coordinate telemetry.
- **Cyberpunk Minimalism**: High-contrast palette of deep black (`#080808`), obsidian cards (`#111111`), with laser-focused crimson red (`#EF4444`) and cyber cyan (`#00E5FF`) accents.
- **Zero-Dependency Procedural Audio**: In-browser audio synthesizer using the Web Audio API for subtle micro-haptic click and hover feedback.
- **Buttery Smooth Scrolling**: Virtual scroll momentum powered by Lenis.

---

## 🏛️ System Architecture

```text
d:\Data_Science\Portfolio\
├── public/
│   ├── images/
│   │   ├── arka-deb-profile.jpg               # Official high-resolution portrait
│   │   ├── project-federated-healthcare.jpg   # Federated AI Healthcare System visual
│   │   ├── project-cineverse.jpg              # CineVerse Recommendation Engine visual
│   │   ├── project-trafficvision.jpg          # TrafficVision AI visual (Cyberpunk Red/Black)
│   │   └── project-hospital-er-dark.jpg       # Hospital ER Dashboard visual (Red & Black)
│   ├── resume.pdf                             # Downloadable Curriculum Vitae
│   ├── robots.txt                             # Production search engine directives
│   └── sitemap.xml                            # Production search engine sitemap
├── src/
│   ├── app/
│   │   ├── globals.css                        # Cyberpunk design system & scanlines
│   │   ├── layout.tsx                         # Root layout with SEO, OpenGraph & Lenis
│   │   └── page.tsx                           # Master continuous-scroll application entry
│   ├── components/
│   │   ├── common/
│   │   │   ├── CustomCursor.tsx               # Precision trailing reticle cursor
│   │   │   ├── LenisProvider.tsx              # Smooth virtual momentum scroll provider
│   │   │   └── SoundToggle.tsx                # Micro-haptic audio feedback toggle
│   │   ├── nav/
│   │   │   └── Navbar.tsx                     # Fixed blur navbar with live availability beacon
│   │   ├── hero/
│   │   │   ├── Hero3DCanvas.tsx               # 3D Rotating Cube (Square) & Rings (Circles)
│   │   │   └── HeroSection.tsx                # Oversized typography & telemetry HUD
│   │   ├── about/
│   │   │   └── AboutSection.tsx               # Editorial 2-column layout & 4 technical pillars
│   │   ├── experience/
│   │   │   └── ExperienceSection.tsx          # Singapore research internship & London immersion
│   │   ├── projects/
│   │   │   ├── ProjectsSection.tsx            # 3D cursor-tracking tilt cards & live links
│   │   │   └── ProjectModal.tsx               # System architecture blueprint inspector
│   │   ├── skills/
│   │   │   └── SkillsMatrixSection.tsx        # 6-layer capability matrix with real-time filter
│   │   ├── education/
│   │   │   └── EducationSection.tsx           # B.Tech degree & verified NPTEL certifications
│   │   ├── contact/
│   │   │   └── ContactSection.tsx             # Terminal interface, email copier & Kolkata clock
│   │   └── footer/
│   │       └── Footer.tsx                     # Minimalist footer with back-to-top interaction
│   ├── data/
│   │   └── portfolioData.ts                   # Centralized authentic portfolio data
│   ├── lib/
│   │   └── utils.ts                           # Tailwind class merger & Web Audio synthesizer
│   └── types/
│       └── index.ts                           # Strict TypeScript data models
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Flagship Deployments

### 01. FEDERATED AI HEALTHCARE SYSTEM
- **Tagline**: *Privacy-Preserving Distributed Medical Intelligence*
- **Stack**: `Python`, `BioBERT`, `PyTorch`, `Federated Learning`, `FedAvg`, `NLP`
- **Key Details**:
  - Simulated two distinct hospital client environments with isolated non-IID clinical text distributions.
  - Fine-tuned domain-specific BioBERT transformer weights locally to maintain strict patient confidentiality.
  - Implemented the Federated Averaging (FedAvg) algorithm for global parameter aggregation without sharing raw data.
- **Code**: [github.com/Arka0507](https://github.com/Arka0507)

### 02. CINEVERSE – MOVIE RECOMMENDATION ENGINE
- **Tagline**: *Hybrid Collaborative & Content Discovery Engine*
- **Stack**: `Python`, `FastAPI`, `MovieLens 100K`, `Recommendation Systems`, `Scikit-Learn`
- **Key Details**:
  - Computed collaborative filtering and item-item cosine similarity matrices on the MovieLens 100K dataset.
  - Exposed asynchronous endpoints via FastAPI delivering sub-50ms recommendation queries.
  - Built cold-start fallback scoring based on weighted genre popularity metrics.
- **Code**: [github.com/Arka0507](https://github.com/Arka0507)

### 03. TRAFFICVISION AI
- **Tagline**: *Autonomous Vehicle Tracking & Real-Time Flow Analytics*
- **Stack**: `Python`, `YOLO`, `OpenCV`, `PyTorch`, `Computer Vision`, `Deep Learning`
- **Key Details**:
  - Trained custom YOLO vision models for multi-class vehicle detection (cars, trucks, buses, motorcycles).
  - Implemented multi-object tracking (MOT) maintaining stable trajectory IDs across highway intersections.
  - Engineered virtual tripwires and spatial congestion heatmaps with sub-40ms frame processing latency.
- **Repository**: [github.com/Arka0507/trafficvision-ai](https://github.com/Arka0507/trafficvision-ai)

### 04. HOSPITAL EMERGENCY ROOM DASHBOARD
- **Tagline**: *Clinical Admissions, Wait-Time Dynamics & Operational Triage Intelligence*
- **Stack**: `React`, `Data Analytics`, `Data Visualization`, `Healthcare Operations`, `Business Intelligence`
- **Key Details**:
  - In-depth operational analysis of **9,221 anonymized emergency room patient admissions**.
  - Engineered dynamic telemetry monitoring average patient wait times segmented by admission type.
  - Formulated multi-dimensional demographic slices across age cohorts, gender ratios, and normalized 5.0 satisfaction scores.
- **Live Interactive Dashboard**: [arka0507.github.io/hospital-er-dashboard](https://arka0507.github.io/hospital-er-dashboard/)
- **Repository**: [github.com/Arka0507/hospital-er-dashboard](https://github.com/Arka0507/hospital-er-dashboard)

---

## 🧬 Technical Ecosystem

The skills section is structured as an interactive 6-layer capability matrix, mapped realistically across three proficiency tiers:

| Layer | Domain | Highlighted Technologies |
|---|---|---|
| **01** | **Programming** | `Python`, `Java`, `C`, `C++` |
| **02** | **Data Analytics** | `Pandas`, `NumPy`, `SQL`, `PostgreSQL`, `Microsoft Excel`, `Data Visualization` |
| **03** | **Machine Learning** | `Scikit-Learn`, `Supervised Learning`, `Unsupervised Learning`, `Feature Engineering`, `Computer Vision` |
| **04** | **Artificial Intelligence** | `NLP`, `Transformers`, `BioBERT`, `YOLO & Object Detection`, `OpenCV`, `LLM & RAG Fundamentals`, `Federated Learning` |
| **05** | **Development** | `FastAPI`, `Next.js 14`, `JavaScript`, `HTML/CSS`, `Git & GitHub` |
| **06** | **Tools & Environments** | `Jupyter Notebook`, `VS Code`, `Google Colab`, `Power BI` |

---

## 🎓 Education & Verified Credentials

- **B.Tech in Computer Science Engineering**
  - *Amity University Noida* (CGPA: **8.5**)
  - Comprehensive coursework in Data Structures, Algorithms, DBMS, Operating Systems, Machine Learning, and Applied Analytics.
- **Three Continent Global Immersion Program (London, UK)**
  - Cross-continental academic exposure to international technology standards and global engineering practices.
- **NPTEL Certified: Cloud Computing**
  - *IIT Kharagpur* (Ministry of Education, Govt. of India)
- **NPTEL Certified: Python for Data Science**
  - *IIT Madras* (Ministry of Education, Govt. of India)
- **ICETM 2025 International Conference**
  - Technical volunteer and session coordinator for emerging computing tracks.

---

## 💻 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.17 or later recommended)
- [npm](https://www.npmjs.com/) (v9 or later)

### Installation
```bash
# Clone the repository
git clone https://github.com/Arka0507/Portfolio_Deb.git

# Navigate to project directory
cd Portfolio_Deb

# Install dependencies
npm install

# Launch local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build
```bash
# Generate optimized static production bundle
npm run build

# Start production server
npm run start
```

---

## 🚢 Deployment

The application is pre-configured for one-click deployment on [Vercel](https://vercel.com):

1. Fork or import this repository into your Vercel account.
2. Select **Next.js** framework preset (detected automatically).
3. Click **Deploy**. Vercel will build and distribute the site globally on its Edge Network with automatic SSL.

---

## 👤 Author & Contact

**Arka Deb**
- **Title**: Data Analyst | Data Scientist | Machine Learning Developer
- **Email**: [arkadeb0507@gmail.com](mailto:arkadeb0507@gmail.com)
- **LinkedIn**: [linkedin.com/in/arkadeb-das](https://www.linkedin.com/in/arkadeb-das)
- **GitHub**: [github.com/Arka0507](https://github.com/Arka0507)
- **Location**: Greater Kolkata Area, India

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
© 2026 Arka Deb. All Rights Reserved.
