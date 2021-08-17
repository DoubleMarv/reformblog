import * as React from "react"
import styled from "styled-components"


const Styledsection = styled.section`

`;

// function showSomething(istrue){
//  if(istrue){
//    return <div className="someclass"></div>;
//  } 
//}

const Bookaclass = () => {
  
  //const showpopper = state.vars.showpopper;
  return (
<Styledsection className="section-app" id="bookaclass">
	<div className="container"> 
		<div className="columns is-marginless is-centered">
		
			<div className="column is-two-thirds"> 
				<h3>Find a Class</h3>
			</div>

		</div>
		<div className="columns is-marginless is-centered">

			<div className="column is-two-thirds"> 
{/*				<script src="https://widgets.healcode.com/javascripts/healcode.js" type="text/javascript"></script>
				<healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="0d105610b7c1" data-widget-version="1" ></healcode-widget>*/}
			</div>

		</div>
	</div>
</Styledsection>
  )
}

export default Bookaclass




