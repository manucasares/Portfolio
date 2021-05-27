import React, { useState } from 'react'

import { proyects } from '../../data/proyects';
import { PortfolioSlider } from './PortfolioSlider'
import { ProyectInfo } from './ProyectInfo'

export const DesktopPortfolio = () => {

    let middleProyect = 2;
    const [ proyectSelectedIndex, setProyectSelectedIndex ] = useState( middleProyect );

    return (
        <div className="desktop__portfolio__container">

            <PortfolioSlider
                setProyectSelectedIndex={ setProyectSelectedIndex }
            />

            <div className="proyect__info__container">
                {
                    proyects.map( ( proyect, index ) => (
                        <ProyectInfo
                            proyectSelectedIndex={ proyectSelectedIndex }
                            proyect={ proyect }
                            proyectIndex={ index }
                            key={ proyect.id }
                        />
                    ) )
                }
            </div>

            
        </div>
    )
}
