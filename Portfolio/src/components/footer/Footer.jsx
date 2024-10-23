import React from 'react'
import '../footer/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <section>
                <Link to="/contact">
                    <p className='footerP'>CONTACT</p>
                </Link>
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
