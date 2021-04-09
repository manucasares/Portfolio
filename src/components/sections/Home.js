import React from 'react';

import { HomeSVG } from '../HomeSVG';

export const Home = () => {
    return (
        <header className="section home__screen">

            <div className="text-container">

                <h1 className="name"> Manuel Casares Rojas </h1>

                <h2 className="occupation"> Front End Web Developer </h2>

                <p className="description"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, quae. </p>
                
                <div className="social">

                    <i className="fab fa-github-square"></i>

                    <i className="fab fa-linkedin"></i>

                </div>
             
            </div>

            <HomeSVG />

            
        </header>
    )
}
