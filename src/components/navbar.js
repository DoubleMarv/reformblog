import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


const StyledNavbar = styled.div`

`;

// function showSomething(istrue){
//  if(istrue){
//    return <div className="someclass"></div>;
//  } 
//}

const Navbar = ({ state }) => {
  
  //const showpopper = state.vars.showpopper;
  return (
    <StyledNavbar>
<div className="hideonmobile">
<nav className="navbar" role="navigation" aria-label="dropdown navigation">
  <div className="navbar-menu">
    <div className="navbar-start">
<div className="navbar-item has-dropdown is-hoverable">
<Link to="/classes" className="navbar-link is-arrowless">Classes</Link>
        <div className="navbar-dropdown">
<Link to="/classes/beginner_reformer" className="navbar-link is-arrowless">Beginner Reformer</Link>

<Link to="/classes/improvers_reformer" className="navbar-link is-arrowless">Improvers Reformer</Link>

<Link to="/classes/advanced_reformer" className="navbar-link is-arrowless">Advanced Reformer</Link>

<Link to="/classes/barre_burn" className="navbar-link is-arrowless">Barre Burn</Link>
        </div>
      </div>
<div className="navbar-item has-dropdown is-hoverable">
<Link to="/aboutus" className="navbar-link is-arrowless">About Us</Link>

        <div className="navbar-dropdown">
<Link to="/blog" className="navbar-link is-arrowless">Blog</Link>
        </div>
      </div>

    </div>
    <div className="navbar-center">
      <Link to="/" className="centerlogo">
      <img src="http://reformpilatescork.ie/img/logo.png" alt="logo"/>
    </Link>
    </div>
    <div className="navbar-end">

      <div className="navbar-item">
        <a className="navbar-link is-arrowless" href="https://reformpilatescork.voucherconnect.com/">
          Gift Cards
        </a>
      </div>
      <div className="navbar-item">
        <a className="navbar-link is-arrowless" href="#contact-reform-pilates-cork">
          Contact
        </a>
      </div>
    </div>
  </div>
</nav>
</div>
<div className="showonmobile">
<div className="mobheader">
  <div className="container">
		<div className="columns is-marginless is-mobile">
		<div className="column is-one-third">
		 <img src="http://reformpilatescork.ie/img/logo.png" className="circletop" alt="circle top"/>
		</div>
		<div className="column is-two-thirds has-text-right is-paddingless">

		<div className="columns is-marginless is-mobile">
				<div className="column is-one-third">
				<a className="getclass button" href="#bookaclass">Classes</a>
				</div>
				<div className="column is-one-third">
				<Link to="/blog" className="getclass button">Blog</Link>
				</div>
				<div className="column is-one-third">
				<a className="getclass button" href="https://reformpilatescork.voucherconnect.com/">Gift Cards</a>
				</div>
      </div>
		</div>

      </div>
  </div>
</div></div>

    </StyledNavbar>
  )
}

export default Navbar




