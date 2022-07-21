// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import { Footer, Navbar } from "./components/layouts";
import { SocialRF, SwitchTheme, MainAnimation } from "./components/common";
import Home from "./views/home/Home";

function App() {
  let [animate, setanimate] = useState(false);

  // useEffect(()=>{
  //   setanimate(true)
  // });

  let [theme, setTheme] = useState("black");

  return (
    <div className={"body " + theme + (animate ? " animationLoader" : "")}>
      <MainAnimation></MainAnimation>
      <SwitchTheme setTheme={setTheme} theme={theme}></SwitchTheme>
      <SocialRF></SocialRF>

      <Navbar />
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
