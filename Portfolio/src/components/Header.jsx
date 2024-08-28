import React from 'react'
import TitleItem from './TitleItem'
import ScrollArrow from './ScrollArrow'

function Header() {
    return (
        <header>
            <section className='navCont'>
                <nav>
                    <div className="navicon">
                        <div></div>
                    </div>

                    <a>HEM</a>
                    <a>FRONTEND</a>
                    <a>PROJEKT</a>
                    <a>OM</a>
                    <a>KONTAKT</a>

                </nav>
            </section>
            <section className='titleCont'>
                <TitleItem />
            </section>
                <ScrollArrow />
        </header>
    )
}

export default Header
