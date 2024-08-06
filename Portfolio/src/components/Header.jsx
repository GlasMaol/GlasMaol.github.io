import React from 'react'
import NavItem from './NavItem'
import TitleItem from './TitleItem'

function Header() {
    return (
        <header>
            <section className='navCont'>
                <nav>
                    <ul>
                        <NavItem />
                        <NavItem />
                        <NavItem />
                        <NavItem />
                        <NavItem />
                    </ul>
                </nav>
            </section>
            <section className='titleCont'>
                <TitleItem />
            </section>

        </header>
    )
}

export default Header
