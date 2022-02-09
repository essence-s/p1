import React from 'react';
import './switchTheme.css';

const SwitchTheme=({setTheme,theme})=>{
    function cambio(da){
        setTheme(da)
        console.log(theme)
    }
    return(
        
        <>
            <div className="switchTheme">
                <div className="switchTheme-arrow">
                    <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                </div>
                <div className="switchTheme-content">

                    <div className={`${theme=="default"?"switchTheme-active":""} switchTheme_optionTheme switchTheme_optionTheme-color-2 `}
                    onClick={()=>cambio('default')}></div>

                    <div className={`${theme=="black"?"switchTheme-active":""} switchTheme_optionTheme switchTheme_optionTheme-color`}
                    onClick={()=>cambio('black')}></div>
                </div>
                
            </div>
        </>
    )
}

export default SwitchTheme;