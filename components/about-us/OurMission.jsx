import Image from "next/image";
import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "User Friendly",
      meta: "Provide complete support to customer",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "Best Home Deals",
      meta: "Flexiblity in home sales",
    },
    {
      id: 3,
      icon: "flaticon-transfer",
      number: "Pocket Friendly",
      meta: "Ensure your savings",
    },
  ];

  return (
    <>
      <div className="col-lg-8 col-xl-7" style={{margin:"auto"}}>
        <div className="about_content">
          <p>
          At Real Estate Deals, our mission is to connect people with their dream properties by offering a comprehensive and transparent platform for exploring commercial and residential spaces. We aim to simplify the property search process by providing detailed, up-to-date information about every property in our portfolio. Our goal is to empower you to make informed decisions with confidence, whether you’re looking to invest, relocate, or expand your business. We are committed to fostering trust and reliability in the real estate market, ensuring that every transaction is a seamless experience for all parties involved.
          </p>

          <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      {/* <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          {/* <Image
            width={461}
            height={509}
            priority
            className="img-fluid w100 cover"
            src="/assets/images/about/1.jpg"
            alt="1.jpg"
          /> */}
          {/* <PopupVideo /> */}
        {/* </div>
      </div> */} 
    </>
  );
};

export default OurMission;
