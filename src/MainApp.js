import React, { useEffect } from 'react';

import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Skills } from './components/sections/skills/Skills';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';
import { Canvas } from './components/Canvas';
import { observeSections } from './helpers/observeSections';


export const MainApp = () => {

    useEffect(() => {
        observeSections();
    }, [])


    return (
        <div>

            <Home />
            <div className="canvas-container">
                <Canvas />
                <About />
                <Skills />
            </div>
            <Portfolio />
            <Contact />
            
        </div>
    )
}
