import React, {useContext} from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../Components/DisplayLottie/DisplayLottie";
import {GreetingConst, splashScreenConst} from "../../Utils/Constants";
import StyleContext from "../../Utils/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreenConst.animation} />
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{GreetingConst.username}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}
