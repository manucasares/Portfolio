import React, { useContext, useState } from 'react';
import emailjs from 'emailjs-com';

import { useForm } from '../../hooks/useForm'
import { Title } from '../Title'
import { Context } from '../../MainApp';
import { Spinner } from '../Spinner';

export const Contact = () => {

    const { language, languages } = useContext( Context );

    const [ loading, setLoading ] = useState( false );

    // eslint-disable-next-line

    const {
        title,
        name_text,
        message_text,
        button,
        email_success,
        email_error
    } = languages[ language ].contact;

    const [ { name, email, message }, handleInputChange, reset ] = useForm({
        name: '',
        email: '',
        message: ''
    });

    const sendEmail = (e) => {
        e.preventDefault();

        if ( [ name, email, message ].some( v => !v ) ) {
            return;
        }

        if ( name.length < 2 ) {
            return;
        }

        setLoading( true );  
                                                                                               
        emailjs.sendForm('service_tetp2rj', 'template_dxxc8zl', e.target, 'user_gndPnP4XXkXKL54I8d0b')
            .then( () => {
                document.getElementById( 'email_success' ).classList.add( 'active' )
            }, ( error ) => {
                console.log( error );
                document.getElementById( 'email_error' ).classList.add( 'active' )
            })
            .finally( () => {
                setLoading( false );
                setTimeout(() => {
                    document.getElementById( 'email_success' ).classList.remove( 'active' );
                    document.getElementById( 'email_error' ).classList.remove( 'active' );
                }, 2400);
            });
            
        reset();
    }


    return (
        <div className="section contact__screen">
           <Title text={ title } />


           <form 
                onSubmit={ sendEmail }
                id="form"
                className="form"
            >
                {/* Name  */}
               <div className="input-container">

                    <input 
                        className="input"
                        type="search"
                        name="name"
                        value={ name }
                        onChange={ handleInputChange }
                        autoComplete="off"
                        required
                    />

                    <label htmlFor="name" className="label">
                        <span className="content-label"> { name_text } </span>
                    </label>

               </div>

                {/* Email */}
               <div className="input-container">

                    <input 
                        className="input"
                        type="search"
                        name="email"
                        value={ email }
                        onChange={ handleInputChange }
                        autoComplete="off"
                        required
                    />

                    <label htmlFor="email" className="label">
                        <span className="content-label">Email</span>
                    </label>

               </div>

                {/* Message */}
                <div className="input-container textarea-container">

                    <label htmlFor="message"> { message_text } </label>

                    <textarea 
                        type="search"
                        name="message"
                        value={ message }
                        onChange={ handleInputChange }
                        autoComplete="off"
                        required
                        maxLength="700"
                    >
                    </textarea>
                </div>

                {
                    ( loading ) &&
                        <Spinner />
                }

                <button>
                    { button }
                </button>

            </form>

            <p className="email-msg success" id="email_success"> { email_success } </p>
            <p className="email-msg error" id="email_error"> { email_error } </p>
        </div>
    )
}
