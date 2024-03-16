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
  title: "Hello,I'm Nitish Madhavan",
  subTitle: 
    "Nitish",
  resumeLink:
    "https://drive.google.com/file/d/1BCvf3Qz-7o3LioHkcad0sFVe9rjpHmZs/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

export{
    splashScreenConst,
    illustrationConst,
    GreetingConst
}