import React from 'react'

function Footer() {
    return (
        <footer>
            <section>
                <h1 className='h1ContentTitle'>kontaktinfo</h1>
            </section>
            <section className='socialamedierContainer'>
                <a href="https://www.linkedin.com/in/alistairmccann/" target="_blank" rel="noopener noreferrer">
                    <img className='linkedinLogo' src="./src/assets/Linkedin-logo.png" alt="Linkedin logo" />
                </a>
                <a href="https://github.com/GlasMaol" target="_blank" rel="noopener noreferrer">
                    <img className='githubLogo' src="./src/assets/Github-logo.png" alt="Github logo" />
                </a>
            </section>
            <section>
                <h1 className='h1ContentTitle'>github</h1>
            </section>
        </footer>
    )
}

export default Footer
