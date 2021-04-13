import React from "react"
import { Link } from "gatsby"
import { header, nav, navLink, currentPage } from "./header.module.css"

const Header = () => (
  <header className={header}>
    <Link className={navLink} to="/">
      Site-Title-Here
    </Link>
    <nav className={nav}>
      <Link className={navLink} activeClassName={currentPage} to="/">
        Home
      </Link>
      <Link className={navLink} activeClassName={currentPage} to="/about/">
        About
      </Link>
      <Link className={navLink} activeClassName={currentPage} to="/contact/">
        Contact
      </Link>
    </nav>
  </header>
)
export default Header
