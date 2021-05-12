import React, { useState } from 'react';
import { proyects } from '../../data/proyects';

export const ProyectInfo = ( { proyectIndex } ) => {

    const [ visible, setVisible ] = useState( false );



    return (
        <div className="proyect__info__container">
            {
                proyects.map( ( {
                    id,  
                    name,
                    description,
                    skills,
                    live_link,
                    repository
                }, index) => (

                        <div 
                            className= { 
                                `proyect__info animate__animated 
                                ${ proyectIndex === index 
                                        ? 'animate__fadeInRight' 
                                        : 'animate__fadeOut animate__faster' 
                                }`
                            } 
                            key={ id } 
                        >
                
                            <h2 className="name"> { name } </h2>
                
                            <p className="description"> { description } </p>
                
                            <p className="description">
                                Made with: {
                                    skills.map( skill => <span key={ skill } > { skill } </span> )
                                }
                            </p>
                
                            <div className="btns__container">
                                {
                                    ( repository )
                                        
                                        ?   <a
                                                href={ repository }
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <button className="btn btn__repository">
                                                    <i className="fab fa-github"></i>
                                                    <span>Repository</span>
                                                </button>
                                            </a>
                                        
                                        :   <button className="btn btn__lock" disabled>
                                                <i className="fas fa-lock"></i>
                                                <span> Private </span>
                                            </button>
                                        
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
    
                ) )
            }
        </div>
    )
}
