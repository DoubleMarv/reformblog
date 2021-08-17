import * as React from "react"
import styled from "styled-components";

const Sectionaholder = styled.div`
.shapes_a{
background-image: url(http://reformpilatescork.ie/img/shapes/shape9.svg); margin-top:1170px; margin-left:2025px; 
}
.shapes_b{
background-image: url(http://reformpilatescork.ie/img/shapes/shape2.svg); margin-top:222px; margin-left:408px; 
}
.shapes_c{
background-image: url(http://reformpilatescork.ie/img/shapes/shape10.svg); margin-top:880px; margin-left:1820px; 
}
.shapes_d{
background-image: url(http://reformpilatescork.ie/img/shapes/shape8.svg); margin-top:560px; margin-left:1264px; 
}
.shapes_e{
	background-image: url(http://reformpilatescork.ie/img/shapes/shape1.svg); margin-top:55px; margin-left:205px; 
}
.sveeghold{
	background-image: url(http://reformpilatescork.ie/img/findus.svg);
}
`;

const Findus = () => {
  return (
  	<Sectionaholder>
  	<div class="hideonmobile">
  	<section class="section-b">
  	<div class="shapeshifter">
  	<div class="shapes shapes_a"></div>
  	<div class="shapes shapes_b"></div>
  	<div class="shapes shapes_c"></div>
  	<div class="shapes shapes_d"></div>
  	<div class="shapes shapes_e"></div>
  	</div>	
  	<div class="containerfullwidth"> 
  	<div class="columns is-marginless">

  	<div class="column is-1 findushold">
  	<div class="sveeghold"></div>
  	</div>

  	<div class="column is-10 is-offset-1"> 
  	<div class="internalpadding">
  	<address>
  	<span class="yellowtext largeaddresstext">Unit 1 Celtic Business Park, Monahan Road, Cork</span>
  	<span class="lowertext loweraddresstext">lower title<br /></span>
  	</address>
  	</div>
  	</div>
  	</div>
  	</div>
  	</section>
  	</div>
  	</Sectionaholder>
  );
}

export default Findus