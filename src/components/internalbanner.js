import * as React from "react"
import styled from "styled-components";

const Sectionaholder = styled.div`
.internalbanner{
	padding:6em 0;
	background: #000;
	margin-bottom: 2rem;
h1.maintitle{
	font-weight:600;
	font-size:2rem;
	color: #fff;
}
h3.subtitle{
	color: #e5e5e5;
}
}
`;

const Internalbanner = (props) => {
	const {title} = props
	const {subtitle} = props
  return (
  <Sectionaholder>
<section className="internalbanner">	
<div className="container hundheight"> 
		<div className="columns is-marginless is-centered level">
		<div className="column is-two-thirds has-text-centered"> 
				<h1 className="maintitle">{title}</h1>
				<h3 className="subtitle">{subtitle}</h3>
			</div>
		</div>
	</div>
</section>
    </Sectionaholder>
  );
}

export default Internalbanner