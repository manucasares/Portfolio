import React from 'react';
import emailjs from 'emailjs-com';

import { useForm } from '../../hooks/useForm'
import { Title } from '../Title'

export const Contact = () => {

    const [ { name, email, message }, handleInputChange ] = useForm({
        name: '',
        email: '',
        message: ''
    });

    const sendEmail = (e) => {
        e.preventDefault();

        if( [ name, email, message ].some( v => !v ) ) {
            console.log('entra en validacion')
            return;
        }
    
        emailjs.sendForm('service_tetp2rj', 'template_dxxc8zl', e.target, 'user_gndPnP4XXkXKL54I8d0bh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }


    return (
        <div className="section contact__screen">
           <Title text="Contact Me" />


           <form 
                onSubmit={ sendEmail }
                id="form"
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
                        <span className="content-label">Name</span>
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
                <div className="input-container">

                    <input 
                        className="input"
                        type="search"
                        name="message"
                        value={ message }
                        onChange={ handleInputChange }
                        autoComplete="off"
                        required
                    />

                    <label htmlFor="message" className="label">
                        <span className="content-label">Message</span>
                    </label>

                </div>

                <button>
                    Send
                </button>

           </form>
        </div>
    )
}
