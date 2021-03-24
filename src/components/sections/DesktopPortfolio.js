import React from 'react'

import { PortfolioSlider } from './PortfolioSlider'
import { ProyectInfo } from './ProyectInfo'

export const DesktopPortfolio = () => {


    return (
        <div className="desktop__portfolio__container">

            <PortfolioSlider />

            <ProyectInfo />
            
        </div>
    )
}
