import React, { useState } from 'react'

import { proyects } from '../../data/proyects';
import { PortfolioSlider } from './PortfolioSlider'
import { ProyectInfo } from './ProyectInfo'

export const DesktopPortfolio = () => {

    const [ proyectSelected, setProyectSelected ] = useState( proyects[ 2 ] );

    return (
        <div className="desktop__portfolio__container">

            <PortfolioSlider
                setProyectSelected={ setProyectSelected }
            />

            <ProyectInfo
                proyectSelected={ proyectSelected }
            />
            
        </div>
    )
}
