import React from 'react';
import './benefits.css';

import svgSoporte from 'assets/soporte.svg'
import svgWinners from 'assets/winners.svg'
import svgOrganizado from 'assets/organizado.svg'
import { ContainerMaxWidth } from 'components/common';
import svgbenefits from './files/benefits.svg'

const Benefits =()=>{
    return(
        <>
            <div id="benefits" className="benefits">

                
                
                <ContainerMaxWidth className="container-benefits">

                    <div className="benefits-titulo">
                        <img className="svg-benefits" src={svgbenefits} alt="" />
                        <p>OUR <span>BENEFITS</span></p>
                        
                    </div>

                    <div className="benefits-content">

                        <div className="benefits-content_card">
                            <div className="benefits-content_card-container">
                                <img src={svgSoporte} alt="" />
                                <div className="titulo">Soporte</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="benefits-content_card benefits-content_card-high">
                            <div className="benefits-content_card-container">
                                <img src={svgOrganizado} alt="" />
                                <div className="titulo">Organizacion</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="benefits-content_card">
                            <div className="benefits-content_card-container">
                            <img src={svgWinners} alt="" />
                            <div className="titulo">Win</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        {/* <div className="benefits-content_card">
                            <img src={svgWinners} alt="" />
                            <div className="titulo">Soporte</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className="benefits-content_card benefits-content_card-high">
                            <img src={svgOrganizado} alt="" />
                            <div className="titulo">Organizacion</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className="benefits-content_card">
                            <img src={svgWinners} alt="" />
                            <div className="titulo">Win</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div> */}

                    </div>

                  

                </ContainerMaxWidth>
            </div>
        </>
    )
}

export default Benefits;