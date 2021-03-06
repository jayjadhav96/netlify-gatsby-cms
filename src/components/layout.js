import * as React from "react"
import { Link } from "gatsby"
import Header from "./Header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper container" data-is-root-path={isRootPath}>
      <Header />
        <header className="global-header">{header}</header>
        <main>{children}</main>
      
      
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://keevii.com">Keevii</a>
      </footer>
    </div>
  )
}

export default Layout
