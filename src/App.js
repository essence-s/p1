// import logo from './logo.svg';
import React,{useEffect, useState} from "react";
import './App.css';
import {Footer, Navbar} from './components/layouts';
import { SocialRF, SwitchTheme, MainAnimation} from './components/common';
import Home from './views/home/Home';
import {CSSTransition,TransitionGroup} from "react-transition-group";

function App() {

  const [inProp, setInProp] = useState(false);
  let [animate, setanimate] = useState(false);

  // useEffect(()=>{
  //   setanimate(true)
  // });

  let [theme, setTheme] = useState('black');

  return (
    <div className={'body '+ theme + (animate ?' animationLoader':'')}>
      
      <MainAnimation></MainAnimation>
      <SwitchTheme setTheme={setTheme} theme={theme}></SwitchTheme>
      <SocialRF></SocialRF>

      {/* <button type="button" onClick={() => setInProp(!inProp)}>
        Click to Enter s
      </button> */}
     
        <CSSTransition in={inProp} appear={true} timeout={2500} classNames="my-node"  >
          <div>
            <Navbar/>
            <Home></Home>
            <Footer></Footer>
            {/* <Object3d></Object3d> */}
          </div>
          
        </CSSTransition>
        
      
    </div>
  );
}

export default App;
