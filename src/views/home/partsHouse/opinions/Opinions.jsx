import { ContainerMaxWidth ,Slider} from "components/common";
import React from "react";
import './opinions.css'
import svgOpinions from './files/opinions.svg'
import gerard from './files/Gerard.jpg'

const Opinions = () => {

    let data = {
        width:"80%",
        autoplay:true,
        view:3,
        transitionDurationMs:300,
        intervalDurationMs:3000,
        view3D:false,
        resize:[
            {size:900,view:2},
            {size:600,view:1}
        ]
    }

    return(
        <div id="opinions" className="opinions">

        {/* <object className="svgOpinions" data={svgOpinions} type="image/svg+xml"></object> */}
            <div className="opinions-zone-svg">
                <img className="svgOpinions" src={svgOpinions} alt="" />
            </div>
            

            <ContainerMaxWidth className="opinions-container">

                <div className="opinions-title">
                    Opinions
                </div>

                <div className="opinions-content-card">
                    <Slider data={data}>
                        {['Pedro','Paco','Pablo','Pepito','Potter'].map(r => {
                            return(
                            <div key={r} className="opinions-card">

                                <div className="opinions-card-img">
                                    <img src={gerard} alt="" />
                                </div>
                                <div className="opinions-card-sec1">{r}</div>
                                <div className="opinions-card-sec2">
                                    Son muy buenos en su Trabajo lo hacen bien no tuve ningun problema
                                </div>

                            </div>
                            )
                        })}
                        
                        
                        
                    </Slider>
                </div>

            </ContainerMaxWidth>

        </div>
    )   
}

export default Opinions;