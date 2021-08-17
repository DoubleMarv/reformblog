import * as React from "react"
import SwiperCore, { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper modules
SwiperCore.use([Autoplay]);
const SwiperHolder = styled.div`

`;

const Homeswiper = () => {
  return (
  <SwiperHolder>
<section className="section-c">
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      autoplay={{ delay: 3000 }}
      onSlideChange={() => console.log('slide change homepage')}
      onSwiper={(swiper) => console.log(swiper)}
    >

<SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga1.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga5.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga4.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga1.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga2.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga3.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga2.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga1.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga3.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga4.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga5.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga2.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga1.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga4.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga3.jpg" + ")",
}}></SwiperSlide>
          <SwiperSlide className="gallery" style={{  
  backgroundImage: "url(" + "http://reformpilatescork.ie/img/yoga5.jpg" + ")",
}}></SwiperSlide>

    </Swiper>
    </section>
    </SwiperHolder>
  );
}

export default Homeswiper