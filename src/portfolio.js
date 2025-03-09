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
  username: "Tristan Flounders",
  title: "Hi, I'm Tristan",
  subTitle: emoji(
    "Penultimate-year undergraduate in Chemical Process Engineering & Physics with hands-on experience in process design, sustainability, and engineering coordination. Passionate about optimising industrial processes while ensuring safety, efficiency, and sustainability."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&confirm=t&id=1V52cxp2jC9PqUVsjWXs2eBJSpkUorUnz", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/tristan-flounders-1bbbb6208/",
  gmail: "tristanflounders@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate about engineering, technology, and sustainability",
  skills: [
    emoji(
      "⚡ Hands-on experience in process design and sustainability"
    ),
    emoji("⚡Expertise in P&ID interpretation and process optimisation"),
    emoji(
      "⚡ Engineering project management and stakeholder collaboration"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "AutoCAD",
      fontAwesomeClassname: "fas fa-drafting-compass"
    },
    {
      skillName: "R Studio",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Queensland University of Technology (QUT)",
      logo: require("./assets/images/qutLogo1.png"),
      subHeader: "Bachelor of Engineering (Honours) - Chemical Process & Bachelor of Science - Physics",
      duration: "2021 - 2026 (Expected)",
      desc: "Penultimate-year student with experience in chemical process engineering, sustainability, and research.",
      descBullets: [
        "Current GPA: 5.357",
        "Vocational Research Experience Scheme (VRES): Conducted research on an electrochemical approach for CO₂ capture and utilisation.",
        "Relevant Coursework: Process Design, Thermodynamics, Process Control, Heat Transfer, Sustainable Minerals Processing, Nuclear & Particle Physics."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Process Engineering & Desgin", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming (Python, MATLAB, R, AutoCAD)",
      progressPercentage: "50%"
    },
    {
      Stack: "Leadership & Teamwork",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Undergraduate Process Engineer",
      company: "Fulton Hogan",
      companylogo: require("./assets/images/fultonhoganLogo.png"),
      date: "2024 – Present",
      desc: "Supporting project coordination, design review, and stakeholder engagement for City of Gold Coast infrastructure projects.",
    },
    {
      role: "QUT Student Ambassador",
      company: "Queensland University of Technology (QUT)",
      companylogo: require("./assets/images/qutLogo.png"),
      date: "2024 – Present",
      desc: "Conducted outreach events, workshops, and campus tours to engage prospective students."
    },
    {
      role: "University Student",
      company: "City of Moreton Bay",
      companylogo: require("./assets/images/moretonBayLogo.png"),
      date: "2023 – 2024",
      desc: "Worked on waste education, strategic planning, and environmental compliance."
    },
    {
      role: "Undergraduate Engineer",
      company: "SMEC",
      companylogo: require("./assets/images/smecLogo.png"),
      date: "2022 – 2023",
      desc: "Contributed to major water infrastructure projects, including Metro Treatment Plants Capital Works and Rio Tinto's Gove Peninsula Closure."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Research & Technical Projects",
  subtitle: "Innovative solutions in engineering, sustainability, and automation.",
  projects: [
    {
      image: require("./assets/images/co2_capture.png"),
      projectName: "Electrochemical CO₂ Capture & Utilisation",
      projectDesc: "Designed a scalable electrochemical tandem system for CO₂ capture and conversion to valuable fuels and chemicals.",
      footerLink: [
        {
          name: "Presentation & Abstract",
          url: "https://docs.google.com/presentation/d/1tUud3JVTDlJOQrEyrEgF3XsdYxmlIDqU/edit?usp=drive_link&ouid=114568914439935282781&rtpof=true&sd=true" // Replace with actual link
        },
        {
          name: "LinkedIn Post",
          url: "https://www.linkedin.com/posts/tristan-flounders-1bbbb6208_research-engineering-sustainability-activity-7302564404288466944-hs_P?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTb6J8BjQZmI8XRZf_lyRNX1-HwvO_JVWw" // Replace with actual LinkedIn post
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss opportunities or just want to say hi? My Inbox is open for all.",
  number: "0418 698 299",
  email_address: "tristanflounders@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
