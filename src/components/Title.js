import React from 'react'

export const Title = ( {
    text,
    font = 'Open Sans',
    color = "#ffffff",
    fontSize = '2.5rem',
    fontWeight = '300',
    underlined = true
} ) => {

    return (
        <div className="title__component">
            <div className="title__container">
                <h2
                    className="title"
                    style={{
                        fontFamily: `${ font }, sans-serif`,
                        textAlign: 'center',
                        color: `${ color }`,
                        fontSize : `${ fontSize }`,
                        fontWeight: `${ fontWeight }`
                    }}
                >
                    { text }
                </h2>
    
                {
                    ( underlined ) &&
                        <div
                            className="underline"
                            style={{  borderTop: `3px solid ${ color }` }}
                        ></div>
                }
            </div>
        </div>
    )
}
