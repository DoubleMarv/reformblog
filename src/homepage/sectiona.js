import * as React from "react"
import styled from "styled-components";

const Sectionaholder = styled.div`
.shapes_a{
background-image: url('http://reformpilatescork.ie/img/shapes/shape4.svg'); 
margin-top:520px; 
margin-left:900px; 
}
.shapes_b{
	background-image: url('http://reformpilatescork.ie/img/shapes/shape4.svg'); margin-top:444px; margin-left:816px; 
}
.shapes_c{
	background-image: url('http://reformpilatescork.ie/img/shapes/shape10.svg'); margin-top:880px; margin-left:1820px;
}
.shapes_d{
	background-image: url('http://reformpilatescork.ie/img/shapes/shape1.svg'); margin-top:70px; margin-left:158px;
}
.shapes_e{
	background-image: url('http://reformpilatescork.ie/img/shapes/shape3.svg'); margin-top:165px; margin-left:615px;
}
`;

const Sectiona = () => {
  return (
  <Sectionaholder>
<section className="section-a">
		<div className="shapeshifter">
<div className="shapes shapes_a"></div>
<div className="shapes shapes_a"></div>
<div className="shapes shapes_a"></div>
<div className="shapes shapes_a"></div>
<div className="shapes shapes_a"></div></div>	
<div className="container "> 
		<div className="columns is-marginless">
		<div className="column is-two-thirds"> 
				<h1 className="anote">Reform Pilates, Cork</h1>
				<h2 className="descriptionzone">Mat, Barre and Reformer pilates classes in Cork City</h2>
			</div>
		</div>
		<div className="columns is-marginless">
			<div className="column is-two-fifths"> 
				<p className="genpee maintext">I'm delighted to welcome you to Reform Pilates. I am a long time devotee of all things pilates. I did my 1st mat class 15 years ago and have been hooked ever since! It's the feeling of strength and control over my body that I fell in love with, and when I found Reformer, that only intensified.<br/><br/>
Now I have achieved a huge ambition by opening this studio, and bringing these amazing disciplines: <strong>Mat</strong>, <strong>Barre</strong> &amp; <strong>Reformer</strong> Pilates, to others. I really believe that done correctly they not only transform bodies, but lives.
I hope to see you all soon in Reform Pilates.</p>
				<p className="signature">Sally</p>
			</div>
			<div className="column is-two-fifths is-offset-one-fifth"> 
				<div className="picholder">
				<figure className="yellowbox"></figure>
				<figure className="sallybox"></figure>
			</div>
			</div>
		</div>
	</div>
</section>
    </Sectionaholder>
  );
}

export default Sectiona