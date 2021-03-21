import React from 'react'

import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';


export const MainApp = () => {



    return (
        <div>

            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            
        </div>
    )
}
