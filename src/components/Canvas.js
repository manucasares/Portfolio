import React, { useEffect, useRef } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

import { Circle } from '../models/Circle';


export const Canvas = () => {

    const { width }  = useWindowSize();

    const canvasRef = useRef( null );

 
    useEffect( () => {
        
        const canvas = canvasRef.current;
        const context = canvas.getContext( '2d' );

        const innerWidth = window.innerWidth;

        const circleLength = 100;
        const colorOpacity = 60;
        const circleArr = [];
        const colorsArr = [
            `rgba(225, 75, 90, .${ colorOpacity })`,
            `rgba(255, 208, 55, .${ colorOpacity })`,
            `rgba(54, 210, 166, .${ colorOpacity })`,
            `rgba(37, 109, 105, .${ colorOpacity })`,
            `rgba(87, 89, 136, .${ colorOpacity })`,
        ];
        
        const parentCanvas = canvas.parentNode;

        // canvas.width = parentCanvas.offsetWidth;
        canvas.width = width;
        canvas.height = parentCanvas.offsetHeight;

        for ( let i = 0; i < circleLength; i++ ) {
            const radius = Math.random() * width > 768 ? 6 + 3 : 3 + 1.5;
            const x = Math.random() * ( canvas.width - radius * 2 ) + radius;
            const y = Math.random() * ( canvas.height - radius * 2 ) + radius;
            const dx = ( Math.random() - 0.5 ) * 3;
            const dy = ( Math.random() - 0.5 ) * 3;
            const color = colorsArr[ Math.floor( Math.random() * colorsArr.length ) ];
            circleArr.push( new Circle( x, y, dx, dy, radius, color ) );
        }


        const render = () => {
            window.requestAnimationFrame( render );

            context.clearRect( 0, 0, innerWidth, canvas.height );

            for ( let i = 0; i < circleLength; i++ ) {
                circleArr[i].update( context, canvas.height );
            }
        };

        render();

    }, [width] );

    return (
        <canvas ref={ canvasRef } id="canvas" />
    )
}
