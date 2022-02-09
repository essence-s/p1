import React from 'react'
import './home.css'


import {Header,Benefits,Us,Opinions,Contact} from './partsHouse/index'

const Home =()=>{
    return(
        <>
            <div className="Home">

                <Header></Header>
                <Benefits></Benefits>
                <Us></Us>
                <Opinions></Opinions>
                <Contact></Contact>

            </div>
        </>
    )
}

export default Home;