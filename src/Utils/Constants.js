import splashAnimation from "../Assets/Lottie/SplashAnimation.json"; // Rename to your file name for custom animation


const splashScreenConst = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

const illustrationConst = {
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

const skillsSectionConst = {
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
    },
    {
      skillName: "Debezium",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "HDFS",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
export{
    splashScreenConst,
    illustrationConst,
    GreetingConst,
    skillsSectionConst
}