<<<<<<< HEAD
"use client"
=======
"use client";
>>>>>>> master

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import CopyrightFooter from "@/components/common/footer/CopyrightFooter";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/DefaultHeader";
import MobileMenu from "@/components/common/header/MobileMenu";
import PopupSignInUp from "@/components/common/PopupSignInUp";
// import DetailsContent from "@/components/listing-details-v1/DetailsContent";
// import Sidebar from "@/components/listing-details-v1/Sidebar";
// import ListingOne from "@/components/listing-single/ListingOne";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
<<<<<<< HEAD

const ListingDynamicDetailsV1 = ({ params }) => {
  const id = params.id; // Ensure this is not changing unexpectedly; otherwise, include in the dependencies array.
  const [property,setProperty] = useState({});

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await fetch(`/api/properties/Findone/:${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
=======
import { propertyFeatures } from "@/components/common/listing-details/PropertyFeatures";
import Slider from "react-slick";
import ListingGallery from "@/components/common/listing-details/ListingGallery";
import DetailsContent from "@/components/listing-details-v1/DetailsContent";
import Sidebar from "@/components/listing-details-v1/Sidebar";

const ListingDynamicDetailsV1 = ({ params }) => {
  const id = params.id; // Ensure this is not changing unexpectedly; otherwise, include in the dependencies array.
  const [property, setProperty] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/properties/Findone/:${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
>>>>>>> master
        const data = await response.json();
        if (data.status === "success") {
          setProperty(data.data);
        } else {
          throw new Error("Failed to fetch properties");
        }
      } catch (error) {
<<<<<<< HEAD
        console.error("Failed to fetch Property",error);
      }
    }
    fetchData();
  }
  ,[]
)
=======
        console.error("Failed to fetch Property", error);
      }
    };
    fetchData();
  }, []);
>>>>>>> master

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

<<<<<<< HEAD
      {/* Gallery Section*/}

      <section className="listing-title-area mt85 md-mt0">
        <div className="container">
           <Gallery>
              <div className="row mb30">
              <div className="col-lg-7 col-xl-8">
                <div className="single_property_title mt30-767">
                  <h2>{property?.propertyTitle}</h2>
                  <p>{`${property?.propertyLocality}  ${property?.propertyCity} ${property?.propertyZip}`}</p>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="single_property_social_share position-static transform-none">
                  <div className="price float-start fn-400">
                    <h2>
                      ${property?.propertyPrice}
                    </h2>
                  </div>

                  <div className="spss style2 mt20 text-end tal-400">
                    <ul className="mb0">
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
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-share"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-printer"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                 
                </div>
              </div>
            </div> 
            

             <div className="row">
              <div className="col-sm-7 col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="spls_style_two mb30-520">
                      <Item
                        original={property?.brandImage}
                        thumbnail={property?.brandImage}
                        width={752}
                        height={450}
                      >
                        {({ ref, open }) => (
                          <div role="button" ref={ref} onClick={open}>
                            {/* <Image
                              width={752}
                              height={450}
                              className="img-fluid w100 cover lds-1"
                              src={property.img}
                              alt="1.jpg"
                            /> */}
                          </div>
                        )}
                      </Item>
                    </div>
                  </div>
                </div>
              </div>    
        

                <div className="col-sm-5 col-lg-4">
                <div className="row">
                  {property?.siteImages?.map((val, i) => (
                    <div className="col-6" key={i}>
                      <div className="spls_style_two img-gallery-box mb24">
                        <Item
                          original={val}
                          thumbnail={val}
                          width={752}
                          height={450}
                        >
                          {({ ref, open }) => (
                            <div role="button" ref={ref} onClick={open}>
                              <Image
                                width={170}
                                height={133}
                                className="img-fluid w100 cover"
                                src={val}
                                alt="2.jpg"
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
             
            </div>
          
          </Gallery>
        </div>
      </section> 
      {/* Gallery Section Ended */}


{/**

     
=======
      {/* <!-- Listing Single Property --> */}
      <section className="listing-title-area mt85 md-mt0">
        <div className="container">
          <ListingGallery />
        </div>
      </section>

      {/* <!-- Agent Single Grid View --> */}
>>>>>>> master
      <section className="our-agent-single bgc-f7 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
<<<<<<< HEAD
              <div className="listing_single_description">
                <div className="lsd_list">
                  <ul className="mb0">
                    <li className="list-inline-item">
                      <a href="#">Apartment</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Beds: 4</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Baths: 2</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Sq Ft: 5280</a>
                    </li>
                  </ul>
                </div>
               

                <h4 className="mb30">Description</h4>
                <p className="mb25">
                  Evans Tower very high demand corner junior one bedroom plus a large
                  balcony boasting full open NYC views. You need to see the views to
                  believe them. Mint condition with new hardwood floors. Lots of closets
                  plus washer and dryer.
                </p>
                <p className={click ? "gpara second_para white_goverlay mt10 mb10" : ""}>
                  Fully furnished. Elegantly appointed condominium unit situated on
                  premier location. PS6. The wide entry hall leads to a large living room
                  with dining area. This expansive 2 bedroom and 2 renovated marble
                  bathroom apartment has great windows. Despite the interior views, the
                  apartments Southern and Eastern exposures allow for lovely natural light
                  to fill every room. The master suite is surrounded by handcrafted
                  milkwork and features incredible walk-in closet and storage space.
                </p>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body">
                    <p className="mt10 mb10">
                      Fully furnished. Elegantly appointed condominium unit situated on
                      premier location. PS6. The wide entry hall leads to a large living
                      room with dining area. This expansive 2 bedroom and 2 renovated
                      marble bathroom apartment has great windows. Despite the interior
                      views, the apartments Southern and Eastern exposures allow for
                      lovely natural light to fill every room. The master suite is
                      surrounded by handcrafted milkwork and features incredible walk-in
                      closet and storage space.
                    </p>
                    <p className="mt10 mb10">
                      Fully furnished. Elegantly appointed condominium unit situated on
                      premier location. PS6. The wide entry hall leads to a large living
                      room with dining area. This expansive 2 bedroom and 2 renovated
                      marble bathroom apartment has great windows. Despite the interior
                      views, the apartments Southern and Eastern exposures allow for
                      lovely natural light to fill every room. The master suite is
                      surrounded by handcrafted milkwork and features incredible walk-in
                      closet and storage space.
                    </p>
                  </div>
                </div>
                <p className="overlay_close">
                  <a
                    className="text-thm fz14"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick={handleClick}
                  >
                    Show More <span className="flaticon-download-1 fz12"></span>
                  </a>
                </p>
              </div>
          

              <div className="additional_details">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="mb15">Property Details</h4>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <ul className="list-inline-item">
                      <li>
                        <p>
                          Property ID : <span>HZ27</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Price : <span>$130,000</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Property Size : <span>1560 Sq Ft</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Year Built : <span>2016-01-09</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  

                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <ul className="list-inline-item">
                      <li>
                        <p>
                          Bedrooms : <span>8</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Bathrooms : <span>4</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Garage : <span>2</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Garage Size : <span>200 SqFt</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                 

                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <ul className="list-inline-item">
                      <li>
                        <p>
                          Property Type : <span>Apartment</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Property Status : <span>For Sale</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
             

              <div className="additional_details">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="mb15">Additional details</h4>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <ul className="list-inline-item">
                      <li>
                        <p>
                          Deposit : <span>20%</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Pool Size : <span>300 Sqft</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Additional Rooms : <span>Guest Bath</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <ul className="list-inline-item">
                      <li>
                        <p>
                          Last remodel year : <span>1987</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Amenities : <span>Clubhouse</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Equipment : <span>Grill - Gas</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
             

              <div className="property_attachment_area">
                <h4 className="mb30">Property Attachments</h4>
                <div className="iba_container style2">
                  <div className="icon_box_area style2">
                    <div className="score">
                      <span className="flaticon-document text-thm fz30"></span>
                    </div>
                    <div className="details">
                      <h5>
                        <span className="flaticon-download text-thm pr10"></span> Demo Word
                        Document
                      </h5>
                    </div>
                  </div>
            }

                  <div className="icon_box_area style2">
                    <div className="score">
                      <span className="flaticon-pdf text-thm fz30"></span>
                    </div>
                    <div className="details">
                      <h5>
                        <span className="flaticon-download text-thm pr10"></span> Demo pdf
                        Document
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
           

              <div className="application_statics mt30">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="mb10">Features</h4>
                  </div>
             

                  {propertyFeatures.map((item) => (
                    <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
                      <ul className="order_list list-inline-item">
                        {item.list.map((val, i) => (
                          <li key={i}>
                            <span className="flaticon-tick"></span>
                            {val}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
         

              <div className="application_statics mt30">
                <h4 className="mb30">
                  Location{" "}
                  <small className="float-end">
                    1421 San Pedro St, Los Angeles, CA 90015
                  </small>
                </h4>
                <div className="property_video p0">
                  <div className="thumb">
                    <div className="h400" id="map-canvas">
                      <div className="gmap_canvas ">
                        <iframe
                          title="map"
                          className="gmap_iframe"
                          src="https://www.google.com/maps/d/embed?mid=1tJl0-uRax4AKBfbh1eLPLX5WzOk&hl=en&ehbc=2E312F"
                        ></iframe>
                      </div>
                    </div>
                    <div className="overlay_icon">
                      <a href="#">
                        <Image
                          width={40}
                          height={45}
                          className="map_img_icon"
                          src="/assets/images/header-logo.png"
                          alt="header-logo.png"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              

              <div className="application_statics mt30">
                <h4 className="mb30">Floor plans</h4>
                <div className="faq_according style2">
                  <div className="accordion" id="accordionExample">
                    <div className="card floor_plan">
                      <div id="headingOne">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <ul className="mb0 d-flex align-items-cener flex-wrap">
                              <li className="d-inline-flex list-inline-item">First Floor</li>
                              <li className="d-inline-flex list-inline-item">
                                <p>Size:</p> <span>1267 Sqft</span>
                              </li>
                              <li className="d-inline-flex list-inline-item">
                                <p>Rooms:</p> <span>670 Sqft</span>
                              </li>
                              <li className="d-inline-flex list-inline-item">
                                <p>Baths:</p> <span>530 Sqft</span>
                              </li>
                              <li className="d-inline-flex list-inline-item">
                                <p>Price:</p> <span>$1489</span>
                              </li>
                            </ul>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body text-center">
                          <Image
                            width={619}
                            height={465}
                            className="img-fluid w-100 h-100 cover"
                            src="/assets/images/resource/floor_plan.png"
                            alt="floor_plan.png"
                          />
                          <p>
                            Plan description. Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                            veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                            nisl ut aliquip ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card floor_plan">
                      <div className=" active" id="headingTwo">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            <ul className="mb0 d-flex align-items-cener flex-wrap">
                              <li className="d-inline-flex list-inline-item">First Floor</li>
                              <li className="d-inline-flex list-inline-item">
                                <p>Size:</p> <span>1267 Sqft</span>
                              </li>
                              <li className="d-inline-flex list-inline-item">
                                <p>Rooms:</p> <span>670 Sqft</span>
                              </li>
                              <li className="d-inline-flex list-inline-item">
                                <p>Baths:</p> <span>530 Sqft</span>
                              </li>
                              <li className="d-inline-flex list-inline-item">
                                <p>Price:</p> <span>$1489</span>
                              </li>
                            </ul>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse show"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body text-center">
                          <Image
                            width={619}
                            height={465}
                            className="img-fluid"
                            src="/assets/images/resource/floor_plan.png"
                            alt="floor_plan.png"
                          />
                          <p>
                            Plan description. Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                            veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                            nisl ut aliquip ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="col-lg-4 col-xl-4">
              <div className="sidebar_listing_list">
                <div className="sidebar_advanced_search_widget">
                  <div className="sl_creator">
                    <h4 className="mb25">Listed By</h4>
                    <div className="media d-flex">
                      <Image
                        width={90}
                        height={90}
                        className="me-3"
                        src="/assets/images/team/lc1.png"
                        alt="lc1.png"
                      />
                      <div className="media-body">
                        <h5 className="mt-0 mb0">Samul Williams</h5>
                        <p className="mb0">(123)456-7890</p>
                        <p className="mb0">info@findhouse.com</p>
                        <a className="text-thm" href="#">
                          View My Listing
                        </a>
                      </div>
                    </div>
                  </div>
                 
                  <form action="#">
                    <ul className="sasw_list mb0">
                      <li className="search_area">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </li>
                 
                      <li className="search_area">
                        <div className="form-group mb-3">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Phone"
                            required
                          />
                        </div>
                      </li>{" "}
                
                      <li className="search_area">
                        <div className="form-group mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </li>{" "}
        
                      <li className="search_area">
                        <div className="form-group mb-3">
                          <textarea
                            id="form_message"
                            name="form_message"
                            className="form-control "
                            rows="5"
                            required
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                      </li>{" "}
                
                      <li>
                        <div className="search_option_button">
                          <button type="submit" className="btn btn-block btn-thm w-100">
                            Search
                          </button>
                        </div>
                      </li>{" "}
                 
                    </ul>
                  </form>
                </div>
              </div>
           

              <div className="terms_condition_widget">
                <h4 className="title">Featured Properties</h4>
                <div className="sidebar_feature_property_slider">
                  <Slider {...settings} arrows={false}>
                    {featureProContent.slice(0, 5).map((item) => (
                      <div className="item" key={item.id}>
                        <div className="feat_property home7">
                          <div className="thumb">
                            <Image
                              width={300}
                              height={220}
                              className="img-whp w-100 h-100 cover"
                              src={item.img}
                              alt="properties identity"
                            />

                            <div className="thmb_cntnt">
                              <ul className="tag mb0">
                                {item.saleTag.map((val, i) => (
                                  <li className="list-inline-item" key={i}>
                                    <a href="#">{val}</a>
                                  </li>
                                ))}
                              </ul>
                              <a className="fp_price" href="#">
                                ${item.price}
                                <small>/mo</small>
                              </a>
                              <h4 className="posr color-white">{item.title}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            

              <div className="terms_condition_widget">
              <h4 className="title">Categories Property</h4> 
                <div className="widget_list">
                  <ul className="list_details">
                     <Categorie /> 
                  </ul>
                </div>
              </div>
       

              <div className="sidebar_feature_listing">
                 <h4 className="title">Recently Viewed</h4> 
                 <FeaturedListings /> 
              </div>
            </div>
         
          </div>
    
        </div>
      </section>


       */}

=======
              <DetailsContent />
            </div>
            {/* End details content .col-lg-8 */}

            <div className="col-lg-4 col-xl-4">
              <Sidebar />
            </div>
            {/* End sidebar content .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
      </section>

>>>>>>> master
      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

<<<<<<< HEAD
export default ListingDynamicDetailsV1;
=======
export default ListingDynamicDetailsV1;
>>>>>>> master
