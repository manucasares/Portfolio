import React, { useContext } from 'react';
import { Context } from '../../MainApp';

import { HomeSVG } from '../HomeSVG';

export const Home = () => {

    const { language, languages, setLanguage } = useContext( Context );

    const changeLanguage = () => {
        setLanguage( 'es' );
    }

    return (
        <header className="section home__screen">
            <button onClick={ changeLanguage }> es </button>
            <div className="text-container">

                <h1 className="name"> Manuel Casares Rojas </h1>

                <h2 className="occupation"> Front End Web Developer </h2>

                {/* <p className="description"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, quae. </p> */}
                <p className="description"> { languages[ language ].home.mission } </p>
                
                <div className="social">

                    <i className="fab fa-github-square"></i>

                    <i className="fab fa-linkedin"></i>

                </div>
             
            </div>

            <HomeSVG />

            
        </header>
    )
}
