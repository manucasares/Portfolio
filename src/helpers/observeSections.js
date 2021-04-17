export const observeSections = () => {
    const about_text = document.getElementById( 'text_container' );
    const coinsSkills = [ ...document.querySelectorAll( '.coin-container' ) ];
    const portfolioSlider = document.getElementById( 'portfolio__slider' );
    const proyectInfo = document.getElementById( 'proyect__info' );
    const form = document.getElementById( 'form' );
    
    const animatedNodes = [ about_text, ...coinsSkills, portfolioSlider, proyectInfo, form ]
    
    const callback = ( entries ) => {

        entries.forEach( entry => {

            if ( entry.isIntersecting ) {

                switch ( entry.target ) {
                    case about_text:
                        about_text.classList.add('animate__animated');
                        about_text.classList.add('animate__fadeInRight');
                        about_text.classList.add('animate__slow');
                        break;
                        
                    case coinsSkills.find( c => entry.target === c ):
                        entry.target.classList.add('animation');
                        entry.target.style.animationDelay = `${ ( Math.random() * .7 + .4 ) }s`
                        break;

                    case proyectInfo:
                        proyectInfo.classList.add('animate__animated');
                        proyectInfo.classList.add('animate__fadeInRight');
                        proyectInfo.classList.add('animate__slow');
                        break;

                    case form:
                        form.classList.add('animate__animated');
                        form.classList.add('animate__fadeInUp');
                        form.classList.add('animate__slow');
                        break;
                    
                    default:
                        break;
                }
            }
        });
    }

    const options = {};

    const observer = new IntersectionObserver( callback, options );

    animatedNodes.forEach( node => {
        observer.observe( node );
    });
}
