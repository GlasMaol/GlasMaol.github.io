import React from 'react'
import TitleItem from './TitleItem'

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

        </header>
    )
}

export default Header
