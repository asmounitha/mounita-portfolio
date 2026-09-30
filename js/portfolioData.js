/**
 * PORTFOLIO DATA CONFIGURATION
 * ----------------------------
 * Edit this file to update your personal details, projects, skills, certifications,
 * social links, education, and achievements without modifying UI components.
 */

window.PORTFOLIO_DATA = {
  personal: {
    name: "Mounita A S",
    title: "B.Tech Computer Science & Engineering Student",
    institution: "REVA University",
    graduationClass: "Class of 2029",
    statusBadge: "Currently learning • Building • Exploring",
    heroIntro: "I’m a Computer Science student passionate about technology, coding, problem solving, and building innovative digital solutions. I’m continuously learning, experimenting with new technologies, and turning ideas into practical projects.",
    aboutIntro: "I am a B.Tech Computer Science and Engineering student at REVA University with an expected graduation in 2029. My passion lies in software development, emerging technologies, and applying logical problem-solving to real-world challenges. I believe in hands-on building, continuous technical growth, and mastering core CS principles to prepare for future industry impact.",
    aboutQuote: "I believe the best way to learn technology is by building with it. I enjoy exploring new concepts, working on projects, solving challenges, and continuously improving my technical skills.",
    contactHeadline: "Let’s Build Something Together.",
    contactSubtext: "Whether it’s an internship opportunity, project collaboration, technical discussion, or simply connecting, I’d love to hear from you.",
    socials: {
      github: "https://github.com/mounita-as", // Replace with real URL
      linkedin: "https://linkedin.com/in/mounita-as", // Replace with real URL
      email: "mounita.as.reva@gmail.com" // Replace with real email
    }
  },

  quickCards: [
    {
      id: "edu",
      title: "Education",
      subtitle: "B.Tech Computer Science & Engineering",
      icon: "GraduationCap"
    },
    {
      id: "univ",
      title: "University",
      subtitle: "REVA University",
      icon: "Building2"
    },
    {
      id: "grad",
      title: "Graduation",
      subtitle: "2029",
      icon: "Calendar"
    },
    {
      id: "focus",
      title: "Focus",
      subtitle: "Software Development & Technology",
      icon: "Code2"
    }
  ],

  education: {
    institution: "REVA University",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    duration: "2025 – 2029",
    location: "Bengaluru, India",
    description: "Rigorous coursework focusing on foundational computer science principles, practical software construction, modern algorithm design, and system architecture.",
    coreSubjects: [
      "Computer Science Fundamentals",
      "Programming Languages",
      "Data Structures & Algorithms",
      "Software Development Principles",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Emerging Technologies"
    ]
  },

  skillCategories: [
    {
      id: "programming",
      name: "Programming",
      description: "Core languages used for problem solving and software logic",
      skills: [
        { name: "C", icon: "Code", level: "Core" },
        { name: "C++", icon: "Terminal", level: "Core" },
        { name: "Python", icon: "FileCode", level: "Proficient" },
        { name: "Java", icon: "Coffee", level: "Foundational" },
        { name: "JavaScript", icon: "Braces", level: "Proficient" }
      ]
    },
    {
      id: "webdev",
      name: "Web Development",
      description: "Building responsive, modern, and interactive web experiences",
      skills: [
        { name: "HTML", icon: "Layout", level: "Proficient" },
        { name: "CSS", icon: "Palette", level: "Proficient" },
        { name: "JavaScript", icon: "Braces", level: "Proficient" },
        { name: "React", icon: "Atom", level: "Learning" },
        { name: "Responsive Web Design", icon: "Smartphone", level: "Proficient" }
      ]
    },
    {
      id: "cs",
      name: "Computer Science",
      description: "Fundamental theoretical and engineering concepts",
      skills: [
        { name: "Data Structures & Algorithms", icon: "Binary", level: "Core" },
        { name: "Object-Oriented Programming", icon: "Box", level: "Core" },
        { name: "Database Fundamentals", icon: "Database", level: "Learning" },
        { name: "Computer Networks", icon: "Network", level: "Learning" },
        { name: "Operating Systems", icon: "Cpu", level: "Foundational" },
        { name: "Software Engineering", icon: "GitFork", level: "Core" }
      ]
    },
    {
      id: "tools",
      name: "Tools & Platforms",
      description: "Development environment and workflow tools",
      skills: [
        { name: "Git", icon: "GitBranch", level: "Essential" },
        { name: "GitHub", icon: "Github", level: "Essential" },
        { name: "VS Code", icon: "FileText", level: "Essential" },
        { name: "Linux", icon: "TerminalSquare", level: "Foundational" }
      ]
    },
    {
      id: "interests",
      name: "Areas of Interest",
      description: "Key technology domains and future specializations",
      skills: [
        { name: "Software Development", icon: "Laptop", level: "Primary" },
        { name: "Cybersecurity", icon: "Shield", level: "Exploratory" },
        { name: "Artificial Intelligence", icon: "Sparkles", level: "Exploratory" },
        { name: "Web Technologies", icon: "Globe", level: "Primary" },
        { name: "IoT", icon: "Wifi", level: "Exploratory" },
        { name: "Problem Solving", icon: "Brain", level: "Primary" }
      ]
    }
  ],

  projects: [
    {
      id: "project-01",
      number: "01",
      title: "Interactive Data Structures & Algorithm Visualizer",
      tagline: "Educational tool for visualizing sorting and searching algorithms step-by-step.",
      problem: "Computer science students often struggle to grasp abstract algorithmic step transitions like quicksort partition or binary tree traversals through static textbook diagrams.",
      solution: "Built a web-based interactive visualizer with speed controls, custom array inputs, and line-by-line code execution highlight.",
      tech: ["Python", "HTML", "CSS", "JavaScript"],
      features: [
        "Step-by-step array animation for Sorting Algorithms (Bubble, Quick, Merge)",
        "Customizable array size & animation speed controls",
        "Visual feedback for comparisons, swaps, and sorted elements",
        "Clean glassmorphism dashboard UI"
      ],
      githubUrl: "https://github.com/mounita-as/algo-visualizer",
      liveUrl: "https://mounita-as.github.io/algo-visualizer",
      status: "Starter Project / Placeholder"
    },
    {
      id: "project-02",
      number: "02",
      title: "Student Task & Academic Schedule Tracker",
      tagline: "Responsive web dashboard designed for managing assignment deadlines and coursework milestones.",
      problem: "Managing multiple lab reports, assignment deadlines, and exam schedules across semesters requires clear prioritization and automated reminders.",
      solution: "Engineered a lightweight React web dashboard featuring priority tags, deadline progress bars, and localized persistent storage.",
      tech: ["React", "JavaScript", "Tailwind CSS", "API"],
      features: [
        "Kanban & List views for assignment tracking",
        "Category tagging (Labs, Exams, Projects, Personal)",
        "Persistent localStorage sync for quick offline access",
        "Dark theme UI tailored for long study sessions"
      ],
      githubUrl: "https://github.com/mounita-as/task-tracker",
      liveUrl: "https://mounita-as.github.io/task-tracker",
      status: "Starter Project / Placeholder"
    },
    {
      id: "project-03",
      number: "03",
      title: "High-Performance File Encryption & Compression Tool",
      tagline: "C++ CLI utility implementing Huffman coding algorithms and basic symmetric encryption.",
      problem: "Understanding file compression ratio metrics and byte-level memory operations requires working directly with low-level data structures.",
      solution: "Developed a modular C++ console application that compresses text files using Huffman trees and secures file content using XOR bitwise cipher keys.",
      tech: ["C++", "Algorithms", "Data Structures", "File I/O"],
      features: [
        "Huffman Coding tree construction for optimal text compression",
        "Bit-level file serialization and deserialization",
        "Custom key-based XOR encryption & decryption pass",
        "Console benchmark statistics reporting compression percentage"
      ],
      githubUrl: "https://github.com/mounita-as/cpp-file-encryptor",
      liveUrl: "",
      status: "Starter Project / Placeholder"
    }
  ],

  learningJourney: [
    {
      year: "2025",
      phase: "Milestone 01",
      title: "Started B.Tech CSE at REVA University",
      description: "Commenced undergraduate studies in Computer Science and Engineering. Built strong foundation in mathematics, logic, and introductory programming in C & Python.",
      status: "Completed",
      highlights: ["Enrolled in REVA University CSE Program", "C & Python Fundamentals", "Logic Development"]
    },
    {
      year: "2026",
      phase: "Milestone 02",
      title: "Building Programming Fundamentals",
      description: "Deepening core Data Structures (Arrays, Linked Lists, Stacks, Queues, Trees) and Object-Oriented Design in C++ and Java.",
      status: "In Progress",
      highlights: ["Data Structures & Algorithms", "Object-Oriented Programming", "Problem Solving Practice"]
    },
    {
      year: "2026",
      phase: "Milestone 03",
      title: "Exploring Web Development",
      description: "Constructing responsive web applications with modern HTML5, CSS3, JavaScript ES6+, and React UI frameworks.",
      status: "In Progress",
      highlights: ["Responsive UI Engineering", "JavaScript ES6+", "React & Component Architecture"]
    },
    {
      year: "2026",
      phase: "Milestone 04",
      title: "Working on Academic & Personal Projects",
      description: "Translating classroom theories into real-world code by building personal repositories, command-line utilities, and web prototypes.",
      status: "Current Focus",
      highlights: ["Git/GitHub Workflow", "Mini Projects", "Collaborative Coding"]
    },
    {
      year: "2027+",
      phase: "Milestone 05",
      title: "Internships, Hackathons & Advanced Projects",
      description: "Targeting upcoming hackathons, open-source software contributions, industry internship opportunities, and specialized software domains.",
      status: "Upcoming Goal",
      highlights: ["Hackathons & Competitions", "Software Engineering Internships", "Cybersecurity & AI Exploration"]
    }
  ],

  certifications: [
    {
      id: "cert-01",
      name: "Programming Fundamentals in Python / C++",
      organization: "Issuing Organization (e.g. NPTEL / Coursera / HackerRank)",
      year: "2026",
      skillsCovered: "Syntax, Data Types, Control Structures, Functions, Modular Code",
      credentialUrl: "", // Add certificate link when available
      isPlaceholder: true
    },
    {
      id: "cert-02",
      name: "Web Development Essentials",
      organization: "Issuing Organization (e.g. FreeCodeCamp / Udemy / LinkedIn)",
      year: "2026",
      skillsCovered: "HTML5, CSS Flexbox/Grid, JavaScript, Responsive Design",
      credentialUrl: "", // Add certificate link when available
      isPlaceholder: true
    },
    {
      id: "cert-03",
      name: "Data Structures & Problem Solving",
      organization: "Issuing Organization",
      year: "2026",
      skillsCovered: "Algorithms, Array Operations, Complexity Analysis, Sorting",
      credentialUrl: "", // Add certificate link when available
      isPlaceholder: true
    }
  ],

  achievements: [
    {
      id: "achieve-01",
      category: "Workshops & Training",
      title: "Hands-on Technical Workshops",
      description: "Participated in university technical workshops on Git/GitHub version control, Linux command line essentials, and modern web stack basics.",
      date: "2025 - 2026",
      icon: "Award"
    },
    {
      id: "achieve-02",
      category: "Academic Milestones",
      title: "Consistent Academic Growth in CSE",
      description: "Maintained strong commitment to Computer Science fundamentals, active laboratory practicals, and peer collaboration.",
      date: "2025 - Present",
      icon: "BookOpen"
    },
    {
      id: "achieve-03",
      category: "Coding & Problem Solving",
      title: "Continuous Algorithm Practice",
      description: "Active practice on coding platforms, solving fundamental algorithmic challenges and exploring efficient data structure implementations.",
      date: "Ongoing",
      icon: "Code"
    },
    {
      id: "achieve-04",
      category: "Club & Campus Activities",
      title: "Technical Community Member",
      description: "Active member of campus computer science interest groups and technical study circles at REVA University.",
      date: "2025 - Present",
      icon: "Users"
    }
  ],

  githubSection: {
    username: "mounita-as", // Mounita can insert her actual GitHub username
    profileUrl: "https://github.com/mounita-as",
    headline: "Exploration Through Code",
    subtext: "Check out my repositories, code experiments, and academic projects hosted on GitHub.",
    featuredRepos: [
      {
        name: "mounita-portfolio",
        description: "Modern, responsive personal portfolio website built with React, Tailwind CSS, and glassmorphic UI.",
        language: "JavaScript / React",
        stars: "0",
        forks: "0",
        url: "https://github.com/mounita-as/mounita-portfolio"
      },
      {
        name: "dsa-practice-cpp",
        description: "Collection of data structures and algorithm implementations in C++ with time complexity notes.",
        language: "C++",
        stars: "0",
        forks: "0",
        url: "https://github.com/mounita-as/dsa-practice-cpp"
      },
      {
        name: "python-mini-projects",
        description: "Practical Python scripts, automation exercises, and basic CLI games built during B.Tech coursework.",
        language: "Python",
        stars: "0",
        forks: "0",
        url: "https://github.com/mounita-as/python-mini-projects"
      }
    ]
  },

  interests: [
    {
      id: "int-01",
      title: "Technology",
      description: "Exploring new software tools, developer frameworks, and emerging technological trends.",
      icon: "Cpu"
    },
    {
      id: "int-02",
      title: "Coding",
      description: "Improving programming logic, writing clean code, and mastering data structures.",
      icon: "Code2"
    },
    {
      id: "int-03",
      title: "Cybersecurity",
      description: "Learning about network security fundamentals, digital safety, and secure system design.",
      icon: "ShieldCheck"
    },
    {
      id: "int-04",
      title: "AI & Innovation",
      description: "Exploring how artificial intelligence and machine learning solve real-world problems.",
      icon: "Sparkles"
    },
    {
      id: "int-05",
      title: "Web Development",
      description: "Building responsive, modern, user-friendly digital web interfaces.",
      icon: "Globe"
    },
    {
      id: "int-06",
      title: "Continuous Learning",
      description: "Always curious, constantly picking up new skills, and evolving with technology.",
      icon: "GraduationCap"
    }
  ]
};
