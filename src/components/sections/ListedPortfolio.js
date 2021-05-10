import React from 'react'
import { proyects } from '../../data/proyects'
import { ProyectInfo } from './ProyectInfo'

export const ListedPortfolio = () => {
    return (
        <div className="listed__portfolio__container container">

            {
                proyects.map( ( proyect, index ) => (
                    <div key= { proyect.name }>
                        <div className={ `listed__proyect ${ index % 2 ? 'right' : 'left' }` } >
                            <img src={  `images/proyects_images/${ proyect.img }.png` } alt={ proyect.name } />    
                            <ProyectInfo 
                                proyectSelected={ proyect }
                            />
    
                        </div>
                        { ( index !== ( proyects.length - 1 ) ) && <hr /> }
                    </div>
                ) )
            }
        </div>
    )
}
