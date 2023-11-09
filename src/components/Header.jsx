import React from 'react'
import NavSection from './NavSection'
import MobileNavSection from './MobileNavSection'

//Currently only imports NavSection, mobile menu is inside of this as well. If nothing else is needed in Navsection then the NavSection can replace header instead of adding an additional layer.
const Header = () => {
  return (

    <>
      <MobileNavSection />
      <NavSection />
    </>

  )
}

export default Header