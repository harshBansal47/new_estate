"use client";

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
        const data = await response.json();
        if (data.status === "success") {
          setProperty(data.data);
        } else {
          throw new Error("Failed to fetch properties");
        }
      } catch (error) {
        console.error("Failed to fetch Property", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Single Property --> */}
      <section className="listing-title-area mt85 md-mt0">
        <div className="container">
          <ListingGallery />
        </div>
      </section>

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
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

export default ListingDynamicDetailsV1;
