import React, { useEffect } from 'react';

import { proyects } from '../../data/proyects';


export const PortfolioSlider = ( { setProyectSelected } ) => {

    useEffect(() => {
        document.querySelector( '.portfolio__slider #p2' ).click();
    }, [])


    const handleOnchange = ( e ) => ( e.target.checked );


    const handleClick = ( id ) => {
        const proyectClicked = proyects.find( proyect => proyect.id === id );
        setProyectSelected( proyectClicked );
    }


    return (
        <div className="portfolio__slider" id="portfolio__slider">

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
                proyects.map( ( { name, id, img }, i ) => (

                    <label
                        key={ id }
                        id={ `slide${ i }` }
                        htmlFor={ `p${ i }` }
                    >
                        <img
                            src= { `images/proyects_images/${img}.png` } 
                            alt={ name }
                        />
                    </label>
                    
                ) )
            }
            
        </div>

    )
}
