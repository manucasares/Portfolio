import React from 'react';

import { Title } from '../Title';
import { DesktopPortfolio } from './DesktopPortfolio';


export const Portfolio = () => {
    return (
        <div className="section portfolio__screen">
           
            <Title
                text="Portfolio"
                color="#161616"
            />

            <DesktopPortfolio />

            


        </div>
    )
}
