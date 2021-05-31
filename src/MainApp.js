import React, { useEffect, createContext, useState } from 'react';

import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Skills } from './components/sections/skills/Skills';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';
import { Canvas } from './components/Canvas';
import { observeSections } from './helpers/observeSections';
import { languages } from './languages/languages';

export const Context = createContext();

export const MainApp = () => {
    
    const [ language, setLanguage ] = useState( 'es' );
    
    useEffect(() => {
        observeSections();
    }, []);
    
    return (
        <Context.Provider value={{
            language,
            languages,
            setLanguage
        }}>

            <Home />
            <div className="canvas-container">
                <Canvas />
                <About />
                <Skills />
            </div>
            <Portfolio />
            <Contact />
            
        </Context.Provider>
    )
};
