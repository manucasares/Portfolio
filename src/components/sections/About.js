import React from 'react';

import { Title } from '../Title';

export const About = () => {

    return (
        <div className="section about__screen">
            <div className="text-container" id="text_container">

                <Title
                    text="About Me"
                    color="#303030"
                    fontWeight = '400'
                />

                <p className="description">
                    Hi, I’m <span>Manuel</span> and I’m a passionate <span>Frontend Web Developer</span>.<br />
                    I have some knowledge with Backend technologies too, such as <span>Firebase, MongoDB, Node.js and Express</span>.
                </p>

                <p className="description">
                    My goal is to find a job in a company that allows me to <span>keep learning everyday and grow</span> in the IT world.
                </p>

                <p className="description">
                    I currently don’t have any experience more than a Fullstack website that I made for a client, but I’m sure you’ll like these following amazing proyects!
                </p>

            </div>
        </div>
    )
}
