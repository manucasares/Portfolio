import React from 'react'

export const ProyectInfo = ( { proyectSelected } ) => {

    const {
        name,
        description,
        skills,
        live_link,
        repository
    } = proyectSelected;


    return (
        <div className="proyect__info">

            <h2 className="name"> { name } </h2>

            <p className="description"> { description } </p>

            <p className="skills__used">
                Made with: { skills.map( skill => <span key={ skill } > { skill } </span> ) }
            </p>

            <div className="btns__container">
                {
                    ( repository ) &&
                        <a
                            href={ repository }
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="btn btn__repository">
                                <i className="fab fa-github"></i>
                                <span>Repository</span>
                            </button>
                        </a>
                }
    
                <a
                    href={ live_link }
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="btn btn__live">
                        Live Link
                    </button>
                </a>
            </div>

        </div>
    )
}
