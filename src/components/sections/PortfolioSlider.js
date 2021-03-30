import React, { useEffect } from 'react';

import chessImg from '../../assets/proyects_images/Chess.png';
import estrategaImg from '../../assets/proyects_images/Estratega.png';
import kitchenInventoryImg from '../../assets/proyects_images/KitchenInventory.png';
import laMilongaImg from '../../assets/proyects_images/LaMilonga.png';
import lofiImg from '../../assets/proyects_images/NonexistingProyect.png';

import { proyects } from '../../data/proyects';


export const PortfolioSlider = ( { setProyectSelected } ) => {

    const images = [ chessImg, estrategaImg, kitchenInventoryImg, laMilongaImg, lofiImg ];


    useEffect(() => {
        document.querySelector( '.portfolio__slider #p2' ).click();
    }, [])


    const handleOnchange = ( e ) => ( e.target.checked );


    const handleClick = ( id ) => {
        const proyectClicked = proyects.find( proyect => proyect.id === id );
        setProyectSelected( proyectClicked );
    }


    return (
        <div className="portfolio__slider">

            {
                proyects.map( ( { id }, i ) => (

                    <input
                        key={ id }
                        type="radio"
                        name="slider"
                        id={ `p${ i }` }
                        onChange={ handleOnchange } 
                        onClick={ ( e ) => handleClick( id ) }
                    />
                ) )
            }

            {
                proyects.map( ( { name, id }, i ) => (

                    <label
                        key={ id }
                        id={ `slide${ i }` }
                        htmlFor={ `p${ i }` }
                    >
                        <img
                            src={ images[ i ] }
                            alt={ name }
                        />
                    </label>
                    
                ) )
            }
            
        </div>

    )
}
