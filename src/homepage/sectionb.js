import * as React from "react"
import styled from "styled-components";

const Sectionaholder = styled.div`

`;

const Threeblocks = () => {
  return (
  <Sectionaholder>
<section class="section-ab">
	<div class="container "> 
		<div class="columns is-marginless">
			<div class="column is-one-third"> 
				<p class="signature">Reformer Pilates</p>
				<p class="genpee maintext">
					The reformer is a piece of equipment which takes core Pilates exercises to another level using weighted springs. it is a challenging total body workout.
				</p>
			</div>
			<div class="column is-one-third"> 
				<p class="signature">Mat Pilates</p>
				<p class="genpee maintext">
					Pilates at its purest, using the strength of the client to perfect the core exercises. With the occasional use of small equipment to keep it interesting!
				</p>
			</div>
			<div class="column is-one-third"> 
				<p class="signature">Barre Pilates</p>

				<p class="genpee maintext">
					Can you imagine ballet, pilates, yoga and intensive toning all done to dance music? that's basically a Barre class!! Amazing toning, cardio and a fun challenge too. try it once and you'll be back.
				</p>
			</div>
		</div>
	</div>
</section>
    </Sectionaholder>
  );
}

export default Threeblocks