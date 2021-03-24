import React, { useEffect } from 'react';

import chessImg from '../../assets/proyects_images/Chess.png';
import estrategaImg from '../../assets/proyects_images/Estratega.png';
import kitchenInventoryImg from '../../assets/proyects_images/KitchenInventory.png';
import laMilongaImg from '../../assets/proyects_images/LaMilonga.png';
import lofiImg from '../../assets/proyects_images/NonexistingProyect.png';


export const PortfolioSlider = () => {

    useEffect(() => {
            // 
        document.querySelector( '.portfolio__slider #s3' ).click();
    }, [])

    const handleOnchange = ( e ) => ( e.target.checked );

    return (
        <div className="portfolio__slider">

            <input type="radio" name="slider" id="s1" onChange={ handleOnchange } />
            <input type="radio" name="slider" id="s2" onChange={ handleOnchange } />
            <input type="radio" name="slider" id="s3" onChange={ handleOnchange } />
            <input type="radio" name="slider" id="s4" onChange={ handleOnchange } />
            <input type="radio" name="slider" id="s5" onChange={ handleOnchange } />

            <label id="slide1" htmlFor="s1">
                <img
                    src={ chessImg }
                    alt="chess game"
                />
            </label>

            <label id="slide2" htmlFor="s2">
                <img
                    src={ estrategaImg }
                    alt="estratega anotado"
                />
            </label>

            <label id="slide3" htmlFor="s3">
                <img
                    src={ kitchenInventoryImg }
                    alt="kitchen inventory"
                />
            </label>

            <label id="slide4" htmlFor="s4">
                <img
                    src={ laMilongaImg }
                    alt="la milonga argentina"
                />
            </label>

            <label id="slide5" htmlFor="s5">
                <img
                    src={ lofiImg }
                    alt="proyecto sin nombre"
                />
            </label>
            
        </div>


    )
}
