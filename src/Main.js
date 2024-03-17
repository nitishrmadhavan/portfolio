import React, {useEffect, useState} from "react";
import Greeting from "./Containers/Greeting/Greeting";
import Skills from "./Containers/Skills/Skills";
import SplashScreen from "./Containers/SplashScreen/SplashScreen";
import {splashScreenConst} from "./Utils/Constants";
import {StyleProvider} from "./Utils/StyleContext";
import {UseLocalStorage} from "./Utils/UseLocalStorage";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = UseLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreenConst.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreenConst.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreenConst.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Greeting />
            <Skills/>
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main