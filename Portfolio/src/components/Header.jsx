import React from 'react'
import NavItemHem from './navItems/NavItemHem'
import NavItemFront from './navItems/NavItemFront'
import NavItemProj from './navItems/NavItemProj'
import NavItemOm from './navItems/NavItemOm'
import NavItemKont from './navItems/NavItemKont'
import TitleItem from './TitleItem'

function Header() {
    return (
        <header>
            <section className='navCont'>
                <nav>
                    <ul>
                        <NavItemHem />
                        <NavItemFront />
                        <NavItemProj />
                        <NavItemOm />
                        <NavItemKont />
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
