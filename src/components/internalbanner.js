import * as React from "react"
import styled from "styled-components";
const bannerback = 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const Sectionaholder = styled.div`
.internal-page-banner{
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 30vh;
	filter: hue-rotate(45deg) sepia(.4) grayscale(.3);
	margin-bottom: 2em;
	h1{
		color: #fff;
		font-size: 3rem;
		font-weight: 600;
	}
}
`;

const Internalbanner = (props) => {
	const {title} = props
	const {subtitle} = props
	return (
		<Sectionaholder>
		<section className="internal-page-banner" style={{  
  backgroundImage: "url(" + bannerback + ")",
}}>
		<div className="container hundheight">
		<div className="columns is-marginless is-centered level hundheight">
		<div className="column is-9 has-text-centered">
		<h1>{title}</h1>
		</div>
		</div>
		</div>
		</section>
		</Sectionaholder>
		);
}

export default Internalbanner