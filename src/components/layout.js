import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        <Link to="https://doublemarvellous.com">Gatsby</Link>
      </footer>
    </div>
  )
}

export default Layout
