import splashAnimation from "../Assets/Lottie/SplashAnimation.json"; // Rename to your file name for custom animation

 
const SplashScreenConst = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

const IllustrationConst = {
  animated: true // Set to false to use static SVG
};

const GreetingConst = {
  username: "Nitish",
  title: "Hello,I'm Nitish",
  subTitle: 
    "Visionary Software Architect:  Solid foundation in design principles and software development fuels my passion for crafting resilient, future-proof software.  Eager to disrupt with innovative solutions in a dynamic environment, translating theory and knowledge into tangible results.",
  resumeLink:
    "https://drive.google.com/file/d/1BCvf3Qz-7o3LioHkcad0sFVe9rjpHmZs/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const SkillsSectionConst = {
  title: "Skills",
  subTitle: "Eager Software Development Learner",
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "REST",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "SOAP",
      fontAwesomeClassname: "fas fa-server"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
const ExperiencesConst = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern - Techno Functional Full Stack QA&E",
      company: "Lentra.AI",
      companylogo: require("./../Assets/Images/LentraLogo.png"),
      date: "July/2023 - May/2024",
      desc: "Tech – MongoDB, Debezium, Kafka, Airflow, Postgres, Spark, Livy, HDFS, S3, AWS Glue",
      descBullets: [
        "Examined the data pipeline responsible for handling data for 50,000 individuals in batches.",
        "Received recognition in the form of the \"High Five Award\" for exceptional testing skills during the OND quarter."
      ]
    }
  ]
};

const EducationInfoConst={
  display: true, 
  schools: [
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("../Assets/Images/VITLogo.png"),
      subHeader: "Master of Techology in Computer Science and Engineering - Integrated (5 Years)",
      duration: "July 2019 - July 2024",
      desc: "",
      descBullets: [""
      ]
    }
  ]
};

const ProjectsConst = {
  showGithubProfile: "true",
  display: true 
};

const SocialMediaLinksConst = {
  github: "https://github.com/nitishrmadhavan",
  linkedin: "https://www.linkedin.com/nitishrmadhavan/",
  gmail: "nitishrmadhavan@gmail.com",
  display: true // Set true to display this section, defaults to false
};
export{
    SplashScreenConst,
    IllustrationConst,
    GreetingConst,
    SkillsSectionConst,
    ExperiencesConst,
    EducationInfoConst,
    ProjectsConst,
    SocialMediaLinksConst
}