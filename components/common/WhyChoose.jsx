const WhyChoose = ({ style = "" }) => {
  const whyChooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Trusted By Thousands",
      descriptions: `We have earned the trust of thousands of satisfied customers through our commitment to transparency, reliability, and exceptional service. Whether buying, selling, or renting, our customers know they are in good hands with us.`,
    },
    {
      id: 2,
      icon: "flaticon-home-1",
      title: "Wide Range Of Properties",
      descriptions: `Our extensive portfolio features a diverse selection of properties, from residential homes to commercial spaces, catering to various tastes, needs, and budgets. Explore our listings to find the perfect property for you.`,
    },
    {
      id: 3,
      icon: "flaticon-profit",
      title: "Financing Made Easy",
      descriptions: `We provide flexible and straightforward financing options to help make your property purchase or rental process smooth and stress-free. Our team is here to guide you every step of the way, ensuring a seamless experience.`,
    },
  ];
  
  return (
    <>
      {whyChooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
