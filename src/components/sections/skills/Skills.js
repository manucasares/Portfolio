import React, { useContext } from 'react';

import { Title } from '../../Title';
import { skills } from '../../../data/skills_data';
import { SkillCoin } from './SkillCoin';
import { Context } from '../../../MainApp';

export const Skills = () => {

    
    const { language, languages } = useContext( Context );

    const { title, good, little } = languages[ language ].skills;

    const { good_experience, little_experience } = skills;

    return (
        <div className="section skills__screen">

            <Title
                text={ title }
                color="#161616"
            />

            <div className="dark__background">

                <div className="content">

                    {/* Good experience */}
                    <div className="good__experience">

                        <Title
                            text={ good }
                            underlined={ false }
                            fontSize="clamp(26px, 2.6vw, 34px)"
                        />

                        <div className="icons__container good__experience__icons__container">
                            {
                                good_experience.map( icon => (
                                    <SkillCoin icon={ icon } key={ icon } />
                                ))
                            }
                        </div>

                    </div>

                    {/* Little experience */}
                    <div className="little__experience">

                        <Title
                            text={ little }
                            underlined={ false }
                            fontSize="clamp(26px, 2.6vw, 34px)"
                        />

                        <div className="icons__container little__experience__icons__container">
                            {
                                little_experience.map( icon => (
                                    <SkillCoin icon={ icon } key={ icon } />

                                ))
                            }
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
