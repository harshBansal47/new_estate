'use client'

import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
  };

  return (
    <>
      <Slider {...settings} arrows={true}>
<<<<<<< HEAD
        <div className="slide slide-one image-3"></div>
=======
        <div className="slide slide-one image-5"></div>
>>>>>>> master
        <div className="slide slide-one image-4"></div>
        <div className="slide slide-one image-1"></div>
      </Slider>
    </>
  );
};

export default HeroSlider;
