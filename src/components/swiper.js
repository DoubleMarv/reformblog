import * as React from "react"
import SwiperCore, { Navigation, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
const SwiperHolder = styled.div`
.slido{
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 40em;
}
`;

const Swipage = () => {
  return (
  <SwiperHolder>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className="slido" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga1.jpg" + ")",
}}></div></SwiperSlide>
      <SwiperSlide><div className="slido" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga1.jpg" + ")",
}}></div></SwiperSlide>
      <SwiperSlide><div className="slido" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga1.jpg" + ")",
}}></div></SwiperSlide>
      <SwiperSlide><div className="slido" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga1.jpg" + ")",
}}></div></SwiperSlide>
    </Swiper>
    </SwiperHolder>
  );
}

export default Swipage