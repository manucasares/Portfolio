import React from 'react';

import { Title } from '../../Title';
import { skills } from '../../../data/skills_data';
import { SkillCoin } from './SkillCoin';

export const Skills = () => {

    const { good_experience, little_experience } = skills;

    return (
        <div className="section skills__screen">

            <Title
                text="Skills"
                color="#161616"
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
                                    <SkillCoin icon={ icon } key={ icon } />
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
