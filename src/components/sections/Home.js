import React, { useContext, useRef } from 'react';
import { Context } from '../../MainApp';

import { HomeSVG } from '../HomeSVG';

export const Home = () => {

    const { language, languages, setLanguage } = useContext( Context );

    const { description } = languages[ language ].home;

    const language_alert_ref = useRef();

    const changeLanguage = () => {
        language === 'es' 
            ? setLanguage( 'en' )
            : setLanguage( 'es' )

        language_alert_ref.current.classList.add('active');  
        setTimeout( () => {
            language_alert_ref.current.classList.remove('active');  
        }, 1000 );     
    }

    return (
        <header className="section home__screen">

            <div 
                className="language-alert"
                ref= { language_alert_ref }
            >
                {
                    language === 'es' 
                        ? <p> Español </p>
                        : <p> English </p>
                }
            </div>


            <div className="language-toggle">
                <p>ES</p>
                <button 
                    className="toggle" 
                    onClick={ changeLanguage }
                > 
                    <div className={`circle-toggle ${ language === 'es' ? '' : 'en' }`}></div> 
                </button>
                <p>EN</p>
            </div>

            <div className="text-container">

                <h1 className="name"> Manuel Casares Rojas </h1>

                <h2 className="occupation"> Fullstack Web Developer </h2>

                <i className="description"> "{ description }" </i>

                <div className="social">

                    <a
                        href="https://github.com/manucasares"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-github-square"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/manuelcasares/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1a9u73_GShdRe4HhhOttRYtEGOE2O6rsW/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fas fa-address-card"></i>
                    </a>
                </div>
             
            </div>

            <HomeSVG />

        </header>
    )
}
