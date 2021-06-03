import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


const Styledfooter = styled.section`

`;

// function showSomething(istrue){
//  if(istrue){
//    return <div className="someclass"></div>;
//  } 
//}

const Reformfooter = ({ state }) => {
  
  //const showpopper = state.vars.showpopper;
  return (
<Styledfooter className="footer">
	<div className="container"> 
		<div className="columns is-marginless">

			<div className="column is-one-quarter"> 
				<Link to="https://www.facebook.com/Reform-Pilates-1771217629691784" target="_blank" className="hideonmobile"><i className="fab fa-facebook-square"></i>&nbsp;Facebook</Link>
			</div>
			<div className="column is-three-quarters"> 
				<p><strong>Tel:</strong> <a href="tel:00353879380484">087 9380484</a> | <strong>Email:</strong> <a href="mailto:reformpilates@gmail.com">reformpilates@gmail.com</a></p>
			</div>
		</div>
	</div>
</Styledfooter>
  )
}

export default Reformfooter




