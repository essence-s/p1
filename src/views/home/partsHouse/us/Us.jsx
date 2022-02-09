import React from 'react';
import './us.css';
import svgWinners from 'assets/soporte.svg'
import { ContainerMaxWidth } from 'components/common';
import usSvg from './files/us.svg'

const Us =()=>{
    return(
        <>
            <div id="us" className="us">

                {/* <div className="us-shape"></div> */}
                <img className="us-shape" src={usSvg} alt="" />
        
                <ContainerMaxWidth className="us-container">

                    <div className="us-container_titulo">ABOUT <span>US</span></div>
                
                    <div className="us-container-content">

                        <div className="us-container-content-fragments">

                            <div className="us-container-content-fragments_data">
                                <span><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="us-container-content-fragments_data">
                                <span><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                <p>Fugiat dolor ut repellat quidem optio! Corporis tempore explicabo </p>
                            </div>
                            <div className="us-container-content-fragments_data">
                                <span><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                <p>voluptatum, quaerat architecto .</p>
                            </div>
                            
                        </div>

                        <div className="us-container-img">
                            <img src={svgWinners} alt="" />
                        </div>
                        
                    </div> 
                        
                

                    
                    
                </ContainerMaxWidth>
            </div>
        </>
    )
}

export default Us;