import React,{useEffect, useRef, useState} from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from './files/logow1.svg';
import './navbar.css';

const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#benefits">Benefits</a></p>
    <p><a href="#us">Us</a></p>
    <p><a href="#opinions">Opinions</a></p>
    <p><a href="#contact">Contact</a></p>
    </>
)
 

const Navbar = () => {

    let [toggleMenu,setToggleMenu] = useState(false);

    let nose = useRef();
    

    useEffect(()=>{

        // console.log(nose.current);
        let nose2 =nose.current.querySelectorAll('a')
        
        let nose3= nose.current.querySelector('.w1__navbar-links_container-indice')
        // console.log(nose3)
        nose2.forEach((item,ind)=>{
            item.addEventListener('click',()=>{
                console.log(ind)
                nose3.style.transform=`translateX(${75*(ind)}px)`;
            })
        })

        let indiEleme;
        window.addEventListener('scroll',()=>{
            let data=['home','benefits','us','opinions','contact']
            let indiClick = true

            let scrollT = document.documentElement.scrollTop + 200
            // console.log(benefits.offsetTop)
            data.forEach((r)=>{
                let element = document.querySelector(`#${r}`)
                let offsetTopElement = element.offsetTop
                // console.log(offsetTopElement)
                
                if(offsetTopElement <= scrollT){
                
                    if(!(indiEleme==r)){
                        indiEleme=r
                        indiClick=true
                    }

                    nose2.forEach((item,ind)=>{
                        if(item.getAttribute('href')==`#${r}`){
                            // console.log(`click ${r}`)
                            if(indiClick){
                                nose3.style.transform=`translateX(${75*(ind)}px)`;
                                indiClick=false
                            }
                        }
                        
                    })

                }
            })
        })

    })


    return(
        <div className="w1__navbar">
            
            {/* <div className="w1__navbar-sign">
                <p>Sign in</p>
                <button>Sign up</button>
            </div> */}
            <div className="w1__navbar_logo">
                <img src={logo} alt="" />
            </div>
            <div className="w1__navbar-menu">
                {/* {toggleMenu
                    ?<RiCloseLine color="#fff" className={giroj?"giro":""} size={27} onClick={()=>{setGiroj(true);setTimeout(()=>{setGiroj(false);setToggleMenu(false)},1000) }}/>
                    :<RiMenu3Line color="#fff" className={giroj?"giro":""} size={27} onClick={()=>{setGiroj(true);setTimeout(()=>{setGiroj(false);setToggleMenu(true)},1000) }}/>
                } */}
                {/* <div className="conCloseMenu" onClick={()=>{setToggleMenu(!toggleMenu)}}>
                    <RiCloseLine color="#fff" className={`closeLine ${ toggleMenu?"cGiroFin":"cGiroInicio"}`} size={27} />
                    <RiMenu3Line color="#fff" className={toggleMenu?"cGiroInicio":"cGiroFin"} size={27} />
                </div> */}
                
                <div className="conCloseMenu" onClick={()=>{setToggleMenu(!toggleMenu)}}>
                    <div className={`closeLine ${ toggleMenu?"cGiroFin":"cGiroInicio"}`}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div className={toggleMenu?"cGiroInicio":"cGiroFin"}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                </div>
                
                {
                    toggleMenu &&(
                        <div className="w1__navbar-menu_container scale-up-center">
                            <div className="w1__navbar-menu_container-links">
                                <Menu/>
                                {/* <div className="w1__navbar-menu_container-links-sign">
                                    <p>Sign in</p>
                                    <button>Sign up</button>
                                </div> */}
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="w1__navbar-links">
                {/* <div className="w1__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div> */}
                <div className="w1__navbar-links_container" ref={nose}>
                    <div className="w1__navbar-links_container-indice"><span></span></div>
                    <Menu/>                  
                </div>
            </div>
        </div>
    )
}

export default Navbar