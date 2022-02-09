import { ContainerMaxWidth } from "components/common";
import React from "react";
import './contact.css'

const Contact = () =>{
    return(
        <>
            <div id="contact" className="contact">

                <ContainerMaxWidth className="contact-container">

                    <div className="contact-content">
                        <p>Envienos su Correo para recibir mas informacion </p>
                    </div>
                    
                    <div className="contact-formEmail">
                        <form className="contact-formEmail-input" onSubmit={(e)=>{e.preventDefault()}}>
                            <input type="email" placeholder="Email"/>
                            <button><i className="fa fa-paper-plane"></i></button>
                        </form>
                    </div>

                </ContainerMaxWidth>

            </div>
        </>
    )
}

export default Contact;