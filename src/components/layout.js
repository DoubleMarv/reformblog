import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

const Footholder = styled.div`
.subsubfooter{
  font-size: .8rem;
  margin: 0.5em 0;
}
`;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  return (
    <Footholder>
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <main>{children}</main>
      <footer className="subsubfooter">
        © {new Date().getFullYear()}, Web design:
        <Link to="https://doublemarvellous.com">Doublemarvellous</Link>
      </footer>
    </div>
    </Footholder>
  )
}

export default Layout
