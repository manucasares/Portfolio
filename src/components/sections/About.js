import React, { useContext } from 'react';

import { Context } from '../../MainApp';
import { Title } from '../Title';


export const About = () => {

    const { language, languages } = useContext( Context );

    const { title, p1, p2, p3 } = languages[ language ].about;

    return (
        <div className="section about__screen">
            <div className="text-container" id="text_container">

                <Title
                    text={ title }
                    color="#303030"
                />

                <p className="description"> { p1 } </p>

                <p className="description"> { p2 } </p>

                <p className="description"> { p3 } </p>



            </div>
        </div>
    )
}
