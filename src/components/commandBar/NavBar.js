import React from 'react'
import AddButton from '../../containers/AddButton'
import SortButton from '../../containers/SortButton'
import Search from '../../containers/Search'
import Import from '../../containers/Import'
import './NavBar.css'

const NavBar = () => (
  <nav className = 'nav-menu'>
    <AddButton />
    <SortButton />
    <Import />
    <Search />
  </nav>
)

export default NavBar