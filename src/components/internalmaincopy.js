import * as React from "react"
import styled from "styled-components";
const bannerback = 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const Sectionaholder = styled.div`
.internal-page-main{
		background: #000;
		padding: 3em 0;
		color: #fff;
	}

	h3{
		font-size: 2rem;
	}
	p{
		margin-bottom: 0.5rem;
	}
`;

const Internalmaincopy = (props) => {
	const {title} = props
	const {subtitle} = props
	return (
		<Sectionaholder>
<section className="internal-page-main">
  <div className="container">
		<div className="columns is-marginless">
		<div className="column is-9">
<h3>Title</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>

		<div className="column is-3">

		</div>
      </div>
  </div>
</section>
		</Sectionaholder>
		);
}

export default Internalmaincopy