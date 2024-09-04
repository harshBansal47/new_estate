"use client"
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import PopupSignInUp from "../../common/PopupSignInUp";
import BreadCrumb2 from "./BreadCrumb2";
import Footer from "../../common/footer/Footer";
import CopyrightFooter from "../../common/footer/CopyrightFooter";

const Index = () => {
  const reduxProperties = useSelector((state) => state.property.data);
  const isSearchQuery = reduxProperties?.city?.length > 0;

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/properties/GetAll', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (data.status === "success") {
          setProperties(data.data);
        } else {
          throw new Error("Failed to fetch properties");
        }
      } catch (error) {
        console.error('Failed to fetch properties:', error);
        // Optionally, update the UI to show an error message
      }
    };

    fetchData();

    // Assuming you need to reset the properties based on a specific condition:
    if (!isSearchQuery) {
      setProperties(reduxProperties.data || []);
    }
  }, [isSearchQuery, reduxProperties.data]);

  return (
    <>
      <Header />
      <MobileMenu />
      <PopupSignInUp />

      <section className="our-listing bgc-f7 pb30-991 mt85 md-mt0">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6">
              <BreadCrumb2 />
            </div>
          </div>

          <div className="row">
            {properties.map((property) => (
              <div className="col-md-6 col-lg-4" key={property._id}>
                <div className="feat_property home7 style4">
                  <div className="thumb">
                    {/* <Image
                      width={342}
                      height={220}
                      src={property.brandImage}
                      alt={property.propertyTitle}
                    /> */}
                    {property.brandImage && <Image
                                        width={150}
                                        height={220}
                                        className="img-whp cover"
                                        src={property.brandImage}
                                        alt="fp1.jpg"
                                      />}
                    <div className="thmb_cntnt">
                      <ul className="icon mb0">
                        <li className="list-inline-item">
                          <a href="#" aria-label="Transfer">
                            <span className="flaticon-transfer-1"></span>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" aria-label="Favorite">
                            <span className="flaticon-heart"></span>
                          </a>
                        </li>
                      </ul>
                      <Link href={`/listing-details-v1/${property._id}`} className="fp_price">
                        ${property.price}<small>/mo</small>
                      </Link>
                    </div>
                  </div>
                  <div className="details">
                    <div className="tc_content">
                      <p className="text-thm">{property.propertyType}</p>
                      <h4>
                        <Link href={`/listing-details-v1/${property._id}`}>
                          {property.propertyTitle}
                        </Link>
                      </h4>
                      <p>
                        <span className="flaticon-placeholder"></span>
                        {property.propertyLocality}
                      </p>
                    </div>
                    <div className="fp_footer">
                      <div className="fp_pdate float-end">{new Date(property.createdAt).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Footer */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* Our Footer Bottom Area */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default Index;
