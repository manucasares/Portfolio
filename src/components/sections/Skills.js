import React from 'react';

import { Title } from '../Title';
import { skills } from '../../data/skills_data';

export const Skills = () => {

    const { good_experience, little_experience } = skills;

    return (
        <div className="section skills__screen">

            <Title
                text="Skills"
            />

            <div className="dark__background">

                <div className="content">

                    {/* Good experience */}
                    <div className="good__experience">

                        <Title
                            text="Good experience"
                            underlined={ false }
                            fontSize="2rem"
                        />

                        <div className="icons__container good__experience__icons__container">
                            {
                                good_experience.map( icon => (
                                    <img
                                        key={ icon }
                                        src={ `images/skills/${ icon }.png` }
                                        alt={ icon }
                                        className="icon"
                                    />
                                ))
                            }
                        </div>

                    </div>

                    {/* Little experience */}
                    <div className="little__experience">

                        <Title
                            text="Little experience"
                            underlined={ false }
                            fontSize="2rem"
                        />

                        <div className="icons__container little__experience__icons__container">
                            {
                                little_experience.map( icon => (
                                    <img
                                        key={ icon }
                                        src={ `images/skills/${ icon }.png` }
                                        alt={ icon }
                                        className="icon"
                                    />
                                ))
                            }
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
