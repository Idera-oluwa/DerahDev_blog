import React,{useState} from 'react'
import NavBig from './NavBig'
import NavSmall from './NavSmall'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
    const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () =>{
  if (menuOpen==false){
   setMenuOpen(true)
  }
  }
  const closeMenu = () =>{
    if (menuOpen==true){
      setMenuOpen(false)
  }
}
  return (
    <div>
        <Sidebar menuOpen={menuOpen} closeMenu={closeMenu}/>
    <NavBig openMenu={openMenu}/>
    <NavSmall openMenu={openMenu}/>
    {children}
    </div>
  )
}

export default Layout
