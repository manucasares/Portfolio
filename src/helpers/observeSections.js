export const observeSections = () => {
    const about_text = document.getElementById( 'text_container' );
    const coinsSkills = [ ...document.querySelectorAll( '.coin-container' ) ];
    const portfolioSlider = document.getElementById( 'portfolio__slider' );
    const form = document.getElementById( 'form' );
    const listed__proyect = [ ...document.querySelectorAll('.listed__proyect') ];
    
    const animatedNodes = [ about_text, ...coinsSkills, portfolioSlider, ...listed__proyect ,form ]
    
    const callback = ( entries ) => {

        entries.forEach( entry => {

            if ( entry.isIntersecting ) {

                const entry_classList = entry.target.classList;

                switch ( entry.target ) {
                    case about_text:
                        entry_classList.add('animate__animated');
                        entry_classList.add('animate__fadeInRight');
                        entry_classList.add('animate__slow');
                        break;
                        
                    case coinsSkills.find( c => entry.target === c ):
                        entry_classList.add('animation');
                        entry.target.style.animationDelay = `${ ( Math.random() * .5 + .3 ) }s`
                        break;

                    // case proyectInfo:
                    //     entry_classList.add('animate__animated');
                    //     entry_classList.add('animate__fadeInRight');
                    //     entry_classList.add('animate__slow');
                    //     break;

                    case listed__proyect.find( p => entry.target === p ):
                        entry_classList.add('animate__animated');
                        if ( entry_classList.contains( 'left' ) ) {
                            entry_classList.add('animate__fadeInLeft');
                            entry_classList.add('animate__slow');
                        } else {
                            entry_classList.add('animate__fadeInRight');
                            entry_classList.add('animate__slow');
                        }
                        break;

                    case form:
                        entry_classList.add('animate__animated');
                        entry_classList.add('animate__fadeInUp');
                        entry_classList.add('animate__slow');
                        break;
                    
                    default:
                        break;
                }
            }
        });
    }

    const options = { 
        threshold: .35 
    };

    const observer = new IntersectionObserver( callback, options );

    animatedNodes.forEach( node => {
        observer.observe( node );
    });
}
