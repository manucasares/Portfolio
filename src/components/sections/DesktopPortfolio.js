import React, { useState } from 'react'

import { proyects } from '../../data/proyects';
import { PortfolioSlider } from './PortfolioSlider'
import { ProyectInfo } from './ProyectInfo'

export const DesktopPortfolio = () => {

    let middleProyect = 2;
    const [ proyectIndex, setProyectIndex ] = useState( middleProyect );

    return (
        <div className="desktop__portfolio__container">

            <PortfolioSlider
                setProyectIndex={ setProyectIndex }
            />

            <ProyectInfo
                proyectIndex={ proyectIndex }
            />
            
        </div>
    )
}
