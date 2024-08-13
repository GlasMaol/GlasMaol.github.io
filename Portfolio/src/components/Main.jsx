import React from 'react';
import { useEffect, useRef } from 'react';

function Main() {
    const frontendSectionRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                frontendSectionRef.current.classList.add('visible');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <main>
            <section className='frontendSection glassEffectDark' ref={frontendSectionRef}>
                <article className='frontendDesc glassEffect'>
                    <h1 className='h1ContentTitle'>FRONTEND</h1>
                    <h3 className='h3ContentSubTitle'>Resan till frontendare</h3>
                    <p></p>
                </article>
                <article className='logoGrid glassEffect'>
                    <div><img src="./src/assets/html-logo.png" alt="HTML Logo" className='logoImage' /></div>
                    <div><img src="./src/assets/CSS-Logo.png" alt="CSS Logo" className='logoImage' /></div>
                    <div><img src="./src/assets/Javascript-logo.png" alt="JavaScript Logo" className='logoImage' /></div>
                    <div><img src="./src/assets/figma-logo.png" alt="Figma Logo" className='logoImage' /></div>
                    <div><img src="./src/assets/React-icon.png" alt="React Logo" className='logoImage' /></div>
                    <div><img src="./src/assets/Node_logo.svg.png" alt="Node.js Logo" className='logoImage' /></div>
                </article>
            </section>

            <section className='projektOmSection'>
                <article className='projectSection glassEffect'>
                    <h1 className='h1ContentTitle'>PROJEKT</h1>
                    <img src="./src/assets/alpineSportlogo-whitetext.svg" alt="Alpine Sport logo" />
                    <section>
                        <article>
                            <p>Här kommer mer text snart</p>
                        </article>
                        <article>
                            <article>
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </article>
                        </article>
                    </section>
                </article>
                <article className='omSection glassEffect'>
                    <h1 className='h1ContentTitle'>OM</h1>
                    <h3>Vem är jag</h3>
                    <section>
                        <article>

                        </article>
                        <article>

                        </article>
                    </section>
                </article>
            </section>
        </main>
    )
}

export default Main
