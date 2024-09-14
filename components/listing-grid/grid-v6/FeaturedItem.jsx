
'use client'

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addLength } from "../../../features/properties/propertiesSlice";
import properties from "../../../data/properties";
import Image from "next/image";

const FeaturedItem = () => {



  // status handler
  let content = properties
    ?.slice(0, 9)
    ?.filter(keywordHandler)
    ?.filter(locationHandler)
    ?.filter(statusHandler)
    ?.filter(propertiesHandler)
    ?.filter(priceHandler)
    ?.filter(bathroomHandler)
    ?.filter(bedroomHandler)
    ?.filter(garagesHandler)
    ?.filter(builtYearsHandler)
    ?.filter(areaHandler)
    ?.filter(advanceHandler)
    ?.sort(statusTypeHandler)
    ?.filter(featuredHandler)
    .map((item) => (
      <div className="col-md-6 col-lg-4" key={item.id}>
        <div className="feat_property home7 style4">
          <div className="thumb">
            <Image
              width={342}
              height={220}
              className="img-whp w-100 h-100 cover"
              src={item.img}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                {item.saleTag.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">{val}</a>
                  </li>
                ))}
              </ul>
              <ul className="icon mb0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-transfer-1"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li>
              </ul>

              <Link
                href={`/listing-details-v1/${item.id}`}
                className="fp_price"
              >
                ${item.price}
                <small>/mo</small>
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item.type}</p>
              <h4>
                <Link href={`/listing-details-v1/${item.id}`}>
                  {item.title}
                </Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.location}
              </p>

              <ul className="prop_details mb0">
                {item.itemDetails.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">
                      {val.name}: {val.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
                <li className="list-inline-item">
                  <Link href="/agent-v1">
                    <Image
                      width={40}
                      height={40}
                      src={item.posterAvatar}
                      alt="pposter1.png"
                    />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/agent-v1">{item.posterName}</Link>
                </li>
              </ul>
              <div className="fp_pdate float-end">{item.postedYear}</div>
            </div>
            {/* End .fp_footer */}
          </div>
        </div>
      </div>
    ));

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content.length));
  }, [dispatch, content]);
  return <>{content}</>;
};

export default FeaturedItem;
