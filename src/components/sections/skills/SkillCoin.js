import React from 'react'

export const SkillCoin = ( { icon } ) => {
    return (
        <div className="coin-container">

            <figure>
                <img  className="front" src={`images/skills/${ icon }.png`} alt={ icon } />
                <figcaption className="back" > { icon } </figcaption>
            </figure>
            
        </div>
    )
}
