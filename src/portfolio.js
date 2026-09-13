/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kundan Dewase",
  title: "Hi , I'm Kundan",
  subTitle: emoji(
    "A Full Stack Developer 🚀 focused on building fast, scalable, and intelligent web applications — combining modern frontend development, backend engineering, databases, APIs, deployment, and AI integration. Bridging clean code with great user experience, from database to deployment."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kundandewase",
  linkedin: "https://www.linkedin.com/in/kundan-dewase-280569260",
  gmail: "kundandewase@gmail.com",
  instagram: "https://www.instagram.com/kundan_dewase/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER FOCUSED ON BUILDING FAST, SCALABLE, AND INTELLIGENT WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build full stack web applications end-to-end — frontend, backend, databases, APIs, and deployment"
    ),
    emoji(
      "⚡ Integrate LLMs and AI workflows (Claude API) into practical, production-ready features"
    ),
    emoji(
      "⚡ Design and ship REST APIs and backend architecture with Node.js, Express, and tRPC"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "GH Raisoni College of Engineering and Management, Nagpur",
      logo: require("./assets/images/ghraisoniLogo.png"),
      subHeader: "Bachelor of Computer Applications (BCA)",
      duration: "2026 Graduated",
      desc: "CGPA: 8.42 / 10",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (React / Next.js / TypeScript)", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend (Node.js / Express / APIs)",
      progressPercentage: "80%"
    },
    {
      Stack: "AI / LLM Integration (Claude API)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// This section is used to showcase projects instead of a traditional work history
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Next.js, TypeScript, Tailwind, Gemini API",
      company: "AI System Architect Studio",
      companylogo: require("./assets/images/projectArchitectStudio.jpg"),
      date: "Live Project",
      desc: "AI-focused project designed around system architecture and intelligent software development workflows.",
      url: "https://ai-system-architect-studio.vercel.app/",
      descBullets: ["Built an AI-powered platform that transforms natural-language requirements into system architecture, component designs."]
    },
    {
      role: "React, Vite, Express.js, MongoDB, Judge0 API, OpenAI/Ollama",
      company: "AI Interview Platform",
      companylogo: require("./assets/images/projectInterviewPlatform.jpg"),
      date: "Live Project",
      desc: "Full-stack AI interview and coding platform with mock interviews, coding challenges, AI-powered evaluation, and performance tracking.",
      url: "https://ai-interview-platform-beta-five.vercel.app/",
      descBullets: [
        "AI interview Q&A, role-based questions, code execution, scoring, interview history, leaderboard"
      ]
    },
    {
      role: "React, TypeScript, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, JWT",
      company: "E-commerce Website",
      companylogo: require("./assets/images/projectEcommerce.jpg"),
      date: "Live Project",
      desc: "Full-stack online shopping application with product catalog, cart, authentication, reviews, orders, and an admin panel.",
      url: "https://e-commersewebsite-one.vercel.app/",
      descBullets: [
        "Product filtering & sorting, order management, admin panel, responsive UI"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [],
  display: false // Set false to hide this section, defaults to true — off since Projects above already covers Kundan's work
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications I've completed while building my full stack skillset",

  achievementsCards: [
    {
      title: "Full Stack Web Development",
      subtitle: "Apna College, 2024",
      image: require("./assets/images/certFullStack.jpg"),
      imageAlt: "Certification Badge",
      footerLink: []
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle: "freeCodeCamp, 2024",
      image: require("./assets/images/certJsAlgo.jpg"),
      imageAlt: "Certification Badge",
      footerLink: []
    },
    {
      title: "Responsive Web Design",
      subtitle: "freeCodeCamp, 2024",
      image: require("./assets/images/certResponsive.jpg"),
      imageAlt: "Certification Badge",
      footerLink: []
    },
    {
      title: "Node.js / Express Fundamentals",
      subtitle: "HackerRank, 2024",
      image: require("./assets/images/certNodeExpress.jpg"),
      imageAlt: "Certification Badge",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true — no resume link provided yet
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "", // No phone number provided
  email_address: "kundandewase@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false — no Twitter/X handle provided
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
