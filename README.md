![HTML5](https://img.shields.io/badge/HTML5-Frontend-orange)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![License](https://img.shields.io/badge/License-Academic-red)

# 🎓 NPGC Official Website

A modern, responsive, and scalable multi-page college website developed for **National Post Graduate College (NPGC), Lucknow** as a Bachelor of Computer Applications (BCA) Final Year Live Project.

This project provides a centralized digital platform for students, faculty, alumni, and visitors to access institutional information efficiently through a clean and responsive user interface.

---

# 🌐 Live Demo

<p align="center"> <a href="https://npgc.vercel.app" target="_blank"> <img src="https://img.shields.io/badge/Live%20Website-Visit%20Now-00C853?style=for-the-badge&logo=vercel&logoColor=white" /> </a> </p> <p align="center"> 🔗 <a href="https://npgc.vercel.app">https://npgc.vercel.app</a> </p>
<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,bootstrap,python,fastapi,mysql" />
</p>

---

# 📑 Table of Contents

- [📌 Project Overview](#-project-overview)
- [🚀 Key Features](#-key-features)
- [🏗️ Project Architecture](#️-project-architecture)
- [👥 Use Case Diagram](#-use-case-diagram)
- [🔄 Data Flow Diagram](#-data-flow-diagram-dfd)
- [🗂️ ER Diagram](#️-er-diagram)
- [🧠 Agile Methodology](#-software-engineering-methodology)
- [🤖 NPGC Smart Assistant](#-npgc-smart-assistant)
- [🌐 Deployment](#-deployment)
- [🧪 Testing](#-testing)
- [📷 Screenshots](#-screenshots)
- [👥 Team Members](#-team-members)
- [📬 Contact](#-contact)

---

# 📌 Project Overview

The **NPGC Official Website** is designed to modernize the digital presence of the college by offering:

- Responsive multi-page architecture
- Structured academic information
- Dynamic and reusable UI components
- Student-centric navigation
- Placement and alumni information
- Admission and examination modules
- AI-powered chatbot integration (planned)
- Modular and scalable architecture

The system is built primarily using:

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- Python FastAPI (Chatbot Backend)
- MySQL / TiDB (Database)

---

# 🚀 Key Features

## ✅ Responsive Design
- Mobile-friendly interface
- Tablet and desktop compatibility
- Bootstrap-based responsive grid system

## ✅ Modular Component Architecture
Reusable:
- Navbar
- Footer
- Sidebars
- Notice Panels

## ✅ Dynamic Page Structure
Supports:
- Faculty Details
- Departments
- Placements
- Alumni
- Academic Resources

## ✅ Examination System
- Examination schedules
- Admit card system
- Result dashboard
- Academic notifications

## ✅ Admission Module
- Online admission workflow
- Eligibility checker
- Multi-step forms
- Fee structure access

## ✅ Tuition Fees Module
- Fee breakdown
- Receipt generation
- Payment gateway integration-ready

## ✅ Academics Module
- Faculty directory
- Syllabus downloads
- Academic calendar
- Department pages

## ✅ Campus Life Module
- Library
- Hostel
- Museum
- NSS
- Sports
- Student activities

## ✅ Institutional Information Module
- NAAC
- IQAC
- RTI
- Governance
- Accreditation reports

## ✅ Placement & Alumni Module
- Placement records
- Internship opportunities
- Alumni connect
- Training workshops

## ✅ AI Chatbot (NPGC Assistant)
Planned intelligent assistant with:
- Multilingual support
- Voice interaction
- RAG architecture
- Real-time query assistance

---

# 🏗️ Project Architecture

## Frontend Technologies

| Technology | Purpose |
|------------|----------|
| HTML5 | Page Structure |
| CSS3 | Styling |
| Bootstrap 5 | Responsive UI |
| JavaScript | Interactivity & Dynamic Components |

---

## Backend Technologies

| Technology | Purpose |
|------------|----------|
| Python FastAPI | Chatbot API |
| MySQL / TiDB | Database |
| Groq API | AI Inference |
| Llama 3.3 | Conversational AI |

---

# 📂 Project Structure

```bash
/NPGC-Project
│
├── /components
│   ├── navbar.js
│   ├── footer.js
│   ├── naac-sidebar.js
│   ├── notice-sidebar.js
│   └── tender-sidebar.js
│
├── /assets
│   ├── css
│   ├── images
│   ├── js
│   └── pdfs
│
├── /pages
│   ├── academics
│   ├── admissions
│   ├── examinations
│   ├── placements
│   ├── alumni
│   ├── facilities
│   └── administration
│
└── index.html
```

---

---

# 👥 Use Case Diagram

The **Use Case Diagram** represents the interaction between different users (actors) and the functionalities provided by the **NPGC Official Website** system.

It helps in understanding:
- User interactions with the system
- Functional requirements
- System behavior
- Role-based access and activities

The diagram visually demonstrates how students, faculty, administrators, alumni, and visitors interact with different modules of the platform.

---

# 🎭 Actors in the System

The following actors interact with the system:

| Actor | Description |
|-------|-------------|
| 👨‍🎓 Student | Access academic resources, admissions, results, fees, chatbot support |
| 👨‍🏫 Faculty | Manage academic information and notices |
| 🏫 Administrator | Manage website content and system modules |
| 👥 Alumni | Access alumni portal and placement updates |
| 🌐 Visitor | Browse public college information |
| 🤖 AI Chatbot | Provides automated query assistance |

---

# ⚙️ Major Use Cases

## 👨‍🎓 Student Use Cases
- Student Registration
- Login Authentication
- View Courses
- Download Syllabus
- Access Results
- Pay Fees
- Interact with Chatbot
- View Notices

---

## 👨‍🏫 Faculty Use Cases
- Upload Academic Content
- Manage Notices
- Update Department Information
- View Student Information

---

## 🏫 Administrator Use Cases
- Manage Website Content
- Update Admissions
- Manage Departments
- Monitor System Activities
- Manage User Data

---

## 👥 Alumni Use Cases
- Access Alumni Portal
- View Placement Updates
- Participate in Alumni Activities

---

## 🌐 Visitor Use Cases
- Browse College Information
- View Academic Programs
- Access Admission Information
- Contact College Administration

---

## 🤖 AI Chatbot Use Cases
- Answer Student Queries
- Provide Admission Guidance
- Share Academic Information
- Support Multilingual Interaction

---

# 📷 Use Case Diagram

<p align="center">
  <img width="865" height="752" alt="image" src="https://github.com/user-attachments/assets/eb053430-38e0-46e1-a8c5-604a5aae8189" />
</p>

---

# 🔗 Functional Interaction Overview

| Actor | System Interaction |
|-------|-------------------|
| Student | Access academics, results, fees, chatbot |
| Faculty | Manage academic resources |
| Admin | Full system management |
| Alumni | Placement & alumni services |
| Visitor | Public information access |
| Chatbot | AI-based automated assistance |

---

# 🎯 Purpose of the Use Case Diagram

The Use Case Diagram was created to:
- Define system functionalities
- Represent user-system interaction
- Improve requirement analysis
- Simplify system planning
- Support software documentation

---

# 📈 Benefits of Use Case Modeling

- Better understanding of user requirements
- Clear visualization of system functionality
- Improved communication among developers
- Simplified system analysis
- Enhanced project documentation quality

---

# 🔄 Data Flow Diagram (DFD)

The **Data Flow Diagram (DFD)** illustrates how data moves through different modules of the **NPGC Official Website** system.

It represents the interaction between users, processes, databases, and system modules, showing how information is processed within the platform.

The DFD helps in understanding:
- System workflow
- Input and output processes
- Data movement between modules
- Backend and frontend interactions

---

# 📌 DFD Levels Included

## ✅ Level 0 DFD (Context Diagram)

The Level 0 DFD provides a high-level overview of the complete system and external entities interacting with it.

### Main External Entities
- 👨‍🎓 Students
- 👨‍🏫 Faculty
- 🏫 Administration
- 👥 Alumni
- 🌐 Visitors

### Core Processes
- Admission Management
- Academic Information System
- Examination System
- Placement & Alumni Management
- AI Chatbot Assistance

### 📷 Level 0 DFD

<p align="center">
  <img width="865" height="672" alt="image" src="https://github.com/user-attachments/assets/ef03315a-ac8e-4a15-b69f-1a006c84f018" />
</p>

---

## ✅ Level 1 DFD

The Level 1 DFD explains the internal working of major modules in greater detail.

### Included Processes
- 📝 Student Registration
- 📚 Course Management
- 👨‍🏫 Faculty Information Handling
- 💳 Fees Management
- 📄 Examination Management
- 🤖 Chatbot Query Processing

### 📷 Level 1 DFD

<p align="center">
  <img width="865" height="618" alt="image" src="https://github.com/user-attachments/assets/3c583b7e-3422-44a9-9d01-a16344de59d0" />
</p>

---

---

## ✅ Level 2 DFD

The Level 2 DFD provides a more detailed breakdown of the internal processes involved in the major modules of the **NPGC Official Website** system.

This level focuses on how sub-processes interact with databases, users, and system components.

---

### 📷 Level 2 DFD

<p align="center">
  <img width="865" height="568" alt="image" src="https://github.com/user-attachments/assets/1ec05bee-b598-437f-a6b5-7c0e24af5e45" />
</p>

---

<p align="center">
  <img width="988" height="776" alt="image" src="https://github.com/user-attachments/assets/8fd12c33-d873-48f3-b4f0-259b1bca4abf" />
</p>

---

# 🔗 Detailed Data Flow Representation

| Module | Input | Process | Output |
|--------|--------|----------|---------|
| Admission | Student Details | Verification | Admission Status |
| Academics | User Request | Data Retrieval | Academic Information |
| Fees | Payment Request | Transaction Processing | Payment Receipt |
| Examination | Student Credentials | Result Generation | Marks & Reports |
| Chatbot | User Query | AI/NLP Processing | Intelligent Response |

---

# 🔗 Data Flow Overview

| Source | Process | Destination |
|--------|----------|-------------|
| Student | Admission Form Submission | Database |
| Faculty | Academic Data Upload | Academic Module |
| Admin | Notice Management | Website Portal |
| User Query | AI Chatbot Processing | Chatbot Response |
| Examination Cell | Result Processing | Student Dashboard |

---

# 🎯 Purpose of DFD

The Data Flow Diagram was created to:
- Visualize system functionality
- Simplify module understanding
- Improve development planning
- Represent process interactions
- Support system documentation

---

# 📈 Benefits of Using DFD

- Better understanding of data movement
- Improved system design clarity
- Easier debugging and maintenance
- Enhanced communication among developers
- Simplified documentation process

---

# 🗂️ ER Diagram

The following Entity Relationship (ER) Diagram represents the database structure and relationships used in the **NPGC Official Website** project.

It illustrates how different entities such as students, departments, faculty, admissions, courses, and chatbot interactions are interconnected within the system.

## 📌 NPGC Website ER Diagram

<p align="center">
    <img width="1372" height="1053" alt="ER Diagram" src="https://github.com/user-attachments/assets/be1fd624-2753-4b9d-aadd-00f878e3755e" />
</p>

---

## 📌 NPGC Assistant ER Diagram
<p align="center">
   <img width="1021" height="1028" alt="image" src="https://github.com/user-attachments/assets/c42ce0d8-6a5a-4803-80cd-995b23f605ca" />
</p>

---

## 🧩 Main Entities Included

- 👨‍🎓 Students
- 🏫 Departments
- 👨‍🏫 Faculty
- 📚 Courses
- 📝 Admissions
- 💳 Fees
- 📄 Examination Records
- 🤖 Chatbot Queries
- 🏆 Placements
- 👥 Alumni

---

## 🔗 Relationship Overview

| Entity | Relationship |
|--------|---------------|
| Student → Department | Many-to-One |
| Faculty → Department | Many-to-One |
| Student → Course | Many-to-Many |
| Student → Fees | One-to-Many |
| Student → Examination | One-to-Many |
| Admission → Student | One-to-One |
| Chatbot → User Queries | One-to-Many |

---

---

# 🧠 Software Engineering Methodology

The development of the **NPGC Official Website** follows the **Agile Software Development Model**, an iterative and flexible methodology focused on continuous improvement, collaboration, and rapid development.

Unlike traditional development approaches such as the Waterfall Model, Agile allows the project team to develop the system in smaller phases called **iterations** or **sprints**. Each phase focuses on specific modules, testing, feedback, and improvements before moving to the next stage.

This methodology was particularly suitable for this project because the website contains:
- 100+ static pages
- 20+ dynamic pages
- Multiple independent modules
- Continuous UI and structural refinements

The Agile approach helped the team efficiently manage development, testing, and updates throughout the project lifecycle.

---

# 🔄 Agile Development Workflow

```text
Requirement Analysis
        ↓
Planning & Task Allocation
        ↓
Design & Development
        ↓
Testing & Review
        ↓
Feedback & Improvements
        ↓
Iteration & Deployment
```

---

# ⚙️ Agile Practices Used

## ✅ Incremental Development

The website was developed module-by-module instead of building the entire system at once.

### Examples:
- Academics Module
- Admission Module
- Examination Module
- Placement Module
- Chatbot System

This approach made the project easier to manage and allowed early delivery of working components.

---

## ✅ Continuous Testing

Each module was tested immediately after development to ensure:
- Responsive design compatibility
- Proper navigation flow
- UI consistency
- Cross-browser support
- Error-free component integration

Testing was continuously performed throughout development rather than waiting until the end.

---

## ✅ Team Collaboration

The project was developed collaboratively by a team of four members.

### Collaboration Activities:
- Regular discussions on UI consistency
- Shared reusable components
- Task allocation based on modules
- Code reviews and feedback sessions
- Joint testing and debugging

This improved development efficiency and reduced integration conflicts.

---

## ✅ Modular Development

The project follows a **component-based architecture**, where reusable UI components are separated into independent modules.

### Reusable Components:
- Navbar
- Footer
- Sidebars
- Notice Panels
- Layout Templates

This modular structure:
- Reduced code redundancy
- Improved maintainability
- Simplified future updates

---

## ✅ Iterative Improvements

The UI and functionality were continuously improved based on:
- Testing feedback
- Team reviews
- Navigation analysis
- Responsiveness checks

Several design refinements were made during development, including:
- Improved mobile responsiveness
- Better page layouts
- Optimized navigation structure
- Enhanced accessibility

---

# 📌 Why Agile Was Chosen

The Agile model was selected because the project requirements evolved continuously during development.

## Agile Benefits in This Project

| Feature | Benefit |
|---------|----------|
| Flexibility | Easy incorporation of changes |
| Iterative Development | Faster progress tracking |
| Continuous Feedback | Improved system quality |
| Modular Structure | Easier maintenance |
| Team Collaboration | Better coordination |
| Early Testing | Reduced development risks |

---

# 📈 Advantages of Using Agile

- Faster module development
- Better UI/UX improvements
- Easy adaptation to changes
- Reduced project risk
- Improved code quality
- Continuous feedback integration
- Better team coordination

---

# ⚠️ Challenges Faced

Although Agile provided flexibility, some challenges included:
- Continuous coordination among team members
- Frequent modifications in design
- Maintaining consistency across 100+ pages
- Managing reusable components efficiently

These challenges were resolved through proper communication, planning, and modular architecture.

---

# 🏁 Conclusion

The Agile Software Development Model played a crucial role in the successful development of the **NPGC Official Website**.

By following iterative development, continuous testing, modular architecture, and collaborative workflows, the team successfully created a modern, scalable, and responsive institutional web platform.

The Agile methodology ensured:
- Better project management
- Improved maintainability
- Faster issue resolution
- High-quality user experience
- Scalability for future enhancements

Ultimately, Agile proved to be the ideal methodology for handling the dynamic and evolving requirements of this large-scale web development project.

----

# 🤖 NPGC Smart Assistant

The **NPGC Smart Assistant** is an AI-powered conversational chatbot developed specifically for the **National Post Graduate College (NPGC), Lucknow**.  

The chatbot is designed to provide students, faculty, and visitors with quick, accurate, and multilingual academic assistance through a modern conversational interface.

---

# 🎯 Features of NPGC Smart Assistant

The chatbot is designed to provide:

- 📚 Real-time academic guidance
- 🎓 Course information
- 📝 Admission support
- 👨‍🏫 Faculty information
- 💳 Fee details
- 🌐 Multilingual interaction

---

# 🌍 Supported Languages

The assistant supports multilingual communication for better accessibility:

- English
- Hindi
- Hinglish

---

# 🚀 Planned Features

Future enhancements planned for the chatbot include:

- 🎤 Voice Input (STT - Speech to Text)
- 🔊 Voice Output (TTS - Text to Speech)
- 🤖 AI Query Suggestions
- 🗄️ Dynamic Database Integration

---

# 🔒 Security Considerations

The system is designed with security-focused development practices.

## Security Features

- ✅ Input validation
- ✅ Regex-based sanitization
- ✅ Secure API communication
- ✅ HTTPS support
- ✅ Secure database design
- ✅ Authentication-ready architecture

---

# ⚡ Performance Optimizations

The project incorporates multiple optimization techniques for better performance and scalability.

## Optimization Techniques

- 🚀 Lazy loading images
- ♻️ Reusable components
- 📦 Optimized assets
- 📱 Bootstrap responsive utilities
- 🧹 Minimized redundancy
- 🌐 CDN deployment support

---

# 🌐 Deployment

The project is deployed using modern cloud infrastructure.

## Hosting Platform

| Service | Purpose |
|---------|----------|
| Vercel | Frontend Hosting |
| Render Cloud | Chatbot Backend Hosting |

---

## ☁️ Cloud Infrastructure

- TiDB Serverless
- Edge CDN Delivery
- SSL Enabled

---

# 💻 Software Requirements

## Client Side Requirements

Supported modern browsers:

- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

---

## 👨‍💻 Developer Environment

Recommended development tools:

- VS Code
- Git
- GitHub
- Chrome DevTools

---

# 🖥️ Hardware Requirements

## Minimum Requirements

| Component | Requirement |
|-----------|-------------|
| RAM | 2 GB |
| Processor | Dual Core |
| Internet | Required |

---

## Recommended Requirements

| Component | Requirement |
|-----------|-------------|
| RAM | 8 GB |
| Storage | SSD |
| Display | Full HD |

---

# 📊 Technical Highlights

The project includes several advanced implementation features:

- ✅ 100+ Static Pages
- ✅ 20+ Dynamic Pages
- ✅ Component-Based Architecture
- ✅ Responsive Layout
- ✅ Reusable CSS Structure
- ✅ Modular JavaScript Components
- ✅ Chatbot Integration Ready

---

# 📈 Advantages of the System

The system offers multiple benefits for students, faculty, and administrators.

## Key Advantages

- ✅ Improved User Experience
- ✅ Better Accessibility
- ✅ Responsive Design
- ✅ Scalable Architecture
- ✅ Centralized Information
- ✅ Reduced Redundancy
- ✅ Future Backend Integration Support

---

# 🔮 Future Scope

The system is designed to support future scalability and feature expansion.

## Planned Future Enhancements

- Full CMS Integration
- AI-powered Search Engine
- Student Login Dashboard
- Online Examination System
- Admin Panel
- Real-Time Notifications
- ERP Integration
- Fully Functional AI Assistant

---

# 🧪 Testing

The website was tested extensively for quality assurance.

## Testing Areas

- ✅ Responsiveness
- ✅ Navigation
- ✅ Cross-browser compatibility
- ✅ UI consistency
- ✅ Component rendering
- ✅ Mobile optimization

---


# 👥 Team Members

| Name | Role |
|------|------|
| Krishna Agarwal | Core Architecture, Academics & Campus Facility Modules |
| Akshat | Core Architecture, Admission & Fees Modules |
| Aditi | Core Architecture, Examination & Institutional Modules |
| Pushpesh | Core Architecture, Placement & Chatbot Modules |

---

# 🎓 Academic Information

## 🏫 Institution

**National Post Graduate College (NPGC), Lucknow**

### Affiliated To
- University of Lucknow

---

## 🖥️ Department

Department of Computer Science

---

## 🎓 Degree

Bachelor of Computer Applications (BCA)

---

## 📅 Academic Session

2023 – 2026

---

# 👨‍🏫 Project Guide

**Mr. Mahesh Kumar Tiwari**

---

# 📜 License

This project is developed for **educational and academic purposes only**.

---

# 🙏 Acknowledgement

We express our sincere gratitude to:

- Mr. Mahesh Kumar Tiwari
- Dr. Shalini Lamba
- Department of Computer Science
- National P.G. College
- Our parents, mentors, and teammates

for their continuous guidance and support throughout the project.

---

# 📷 Screenshots

---

## 🏠 Homepage

<img width="926" height="541" alt="Homepage" src="https://github.com/user-attachments/assets/b98647b7-6477-4fba-b8e9-e813921a5b2a" />

---

## 🏛️ Institutional Info

<img width="897" height="608" alt="Institutional Info" src="https://github.com/user-attachments/assets/90346bbc-361e-4f4d-8c33-070a394b0f26" />

---

## 🎓 Academic Programs

<img width="914" height="611" alt="Academic Programs" src="https://github.com/user-attachments/assets/22f25695-5731-4851-adfb-3ddbb95f5dc7" />

---

## 🪑 Seats in College

<img width="913" height="612" alt="Seats in College" src="https://github.com/user-attachments/assets/d85a8d52-f451-4305-936f-7117875c105f" />

---

## 📚 Syllabus

<img width="891" height="604" alt="Syllabus" src="https://github.com/user-attachments/assets/d5b481a6-d155-472f-a241-2b9fb3fb1849" />

---

## 🏢 Departments

<img width="928" height="555" alt="Departments" src="https://github.com/user-attachments/assets/d4386ac2-656e-49e4-b42d-9f9d067072b1" />

---

## 📖 About Department

<img width="942" height="533" alt="About Department" src="https://github.com/user-attachments/assets/e778540f-b26b-4973-9266-4949e7cd1c15" />

---

## 👨‍🏫 Faculty

<img width="892" height="607" alt="Faculty" src="https://github.com/user-attachments/assets/25bb17f6-2d6c-4aa1-b396-efeb0a55895f" />

---

## 🖼️ Departmental Gallery

<img width="927" height="612" alt="Departmental Gallery" src="https://github.com/user-attachments/assets/eaf0ec0b-9760-45a2-9e67-dbce8d43083f" />

---

## 🏆 Achievements

<img width="924" height="612" alt="Achievements" src="https://github.com/user-attachments/assets/2d3ac4a3-1662-4cac-b486-c5a409c15817" />

---

## 💡 Major Projects

<img width="1212" height="653" alt="Major Projects" src="https://github.com/user-attachments/assets/78a3c354-ab10-4274-a147-884b2350013f" />

---

## 🚀 Recent Projects

<img width="948" height="582" alt="Recent Projects" src="https://github.com/user-attachments/assets/8181e985-dd33-4771-9fff-595ff67e3ed7" />

---

## 🤖 Chatbot English Response

<img width="492" height="882" alt="Chatbot English Response" src="https://github.com/user-attachments/assets/a17d8809-e25c-4ba1-8a47-74ea1bbbae67" />

---

## 🇮🇳 Chatbot Hindi Response

<img width="439" height="1090" alt="Chatbot Hindi Response" src="https://github.com/user-attachments/assets/5dce82df-8e55-408f-89ed-0cdc29de1b24" />

---

# 🤝 Contributors

Thanks to all team members who contributed to this project.

---

# 📬 Contact

## Krishna Agarwal

- 🎓 BCA Student — National Post Graduate College, Lucknow
- 💻 GitHub: https://github.com/kr254na
- 📧 Email: krishnaagarwal0193@gmail.com

---

# ⭐ Final Note

The **NPGC Official Website** project demonstrates the implementation of modern web development practices, responsive UI design, modular architecture, and future-ready AI integration in an institutional environment.

This project serves as a scalable foundation for building a complete digital ecosystem for educational institutions.

--- is it ok now
