import React from 'react'

function Footer() {
    return (
        <footer>
            <section>
                <p className='footerP'>allyjmccann@gmail.com</p>
                <p className='footerP'>0768000202</p>
            </section>
            <section className='socialamedierContainer'>
                <a href="https://www.linkedin.com/in/alistairmccann/" target="_blank" rel="noopener noreferrer">
                    <img className='linkedinLogo' src="./src/assets/Linkedin-logo.png" alt="Linkedin logo" />
                </a>
                <a href="https://github.com/GlasMaol" target="_blank" rel="noopener noreferrer">
                    <img className='githubLogo' src="./src/assets/Github-logo.png" alt="Github logo" />
                </a>
            </section>
        </footer>
    )
}

export default Footer
