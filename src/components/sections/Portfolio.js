import React from 'react';

import { Title } from '../Title';
import { DesktopPortfolio } from './DesktopPortfolio';
import { ListedPortfolio } from './ListedPortfolio';


export const Portfolio = () => {


    return (
        <div className="section portfolio__screen">  
            {/* <div className="prueba"></div> */}
            <Title
                text="Portfolio"
                color="#161616"
            />

            <DesktopPortfolio />

            <ListedPortfolio />
        </div>
    )
}
