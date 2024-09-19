import Link from "next/link";
import findProperties from "../../data/findProperties";
import Image from "next/image";

const FindProperties = () => {
  return (
    <>
      {findProperties.slice(14, 20).map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4" key={item.id}>
          <Link
            href="/listing-grid-v4"
            className="properti_city style2 d-block"
          >
            <div className="thumb">
              <img
                // width={341}
                // height={240}
                style={{ width: "341px", height: "240px" }}
                className="img-fluid"
                src={item.img}
                alt="pc1.jpg"
              />
            </div>
            <div className="details">
              <h4>{item.name}</h4>
              <p>{item.number} Properties</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
