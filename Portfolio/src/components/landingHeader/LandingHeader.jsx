import React from 'react'
import TitleItem from '../titleItem/TitleItem'
import ScrollArrow from '../scrollArrow/ScrollArrow'
import './landingHeader.css'
import { Link } from 'react-router-dom'

function LandingPageHeader() {
    return (
        <header>
            <section className='navCont'>
                <nav>
                    <div className="navicon">
                        <div></div>
                    </div>
                    <Link to="/">HEM</Link>
                    <Link to="/frontend">FRONTEND</Link>
                    <Link to="/projects">PROJEKT</Link>
                    <Link to="/about">OM</Link>
                    <Link to="/contact">KONTAKT</Link>

                </nav>
            </section>
            <section className='titleCont'>
                <TitleItem />
            </section>
                <ScrollArrow />
        </header>
    )
}

export default LandingPageHeader;
