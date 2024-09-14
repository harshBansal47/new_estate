"use client";

import Slider from "react-slick";
import estate1 from "../../public/assets/images/slider/estate1.jpg";
import estate2 from "../../public/assets/images/slider/estate2.jpg";
import estate3 from "../../public/assets/images/slider/estate3.jpg";

const HeroSlider = () => {
  const settings = {
    dots: false,
    arrow: true,
    arrow: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings} arrows={true}>
      <div className="slide slide-one image-1"></div>
      <div className="slide slide-one image-2"></div>
      <div className="slide slide-one image-3"></div>
    </Slider>
    // <Slider {...settings}>
    //   <div className="slide">
    //     <img src={estate1} alt="Slide 1" />
    //   </div>
    //   <div className="slide">
    //     <img src={estate2} alt="Slide 2" />
    //   </div>
    //   <div className="slide">
    //     <img src={estate3} alt="Slide 3" />
    //   </div>
    // </Slider>
  );
};

export default HeroSlider;
