import React, { useContext } from 'react';

import { Title } from '../../Title';
import { skills } from '../../../data/skills_data';
import { SkillCoin } from './SkillCoin';
import { Context } from '../../../MainApp';

export const Skills = () => {

    
    const { language, languages } = useContext( Context );

    const { title } = languages[ language ].skills;


    return (
        <div className="section skills__screen">

            <Title
                text={ title }
                color="#161616"
            />

            <div className="dark__background">
                <div className="icons__container icons__container">
                    {
                        skills.map( icon => (
                            <SkillCoin icon={ icon } key={ icon } />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
