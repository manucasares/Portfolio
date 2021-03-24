import React from 'react'

export const ProyectInfo = () => {


    return (
        <div className="proyect__info">
            <h2 className="name"> Chess game </h2>

            <p className="description"> A chess game made with vanilla Javascript and without a single dependency, where you can play against a friend. </p>

            <p className="skills__used"> Made with: HTML, CSS, JS. </p>

            <div className="btns__container">
                <button className="btn btn__repository">
                    <i className="fab fa-github"></i>
                    <span>Repository</span>
                </button>
    
                <button className="btn btn__live">
                    Live Link
                </button>
            </div>
        </div>
    )
}
