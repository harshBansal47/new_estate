"use client"
import { Button } from "bootstrap";
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import Image from "next/image";
import { useState, useEffect, cache } from "react";

const index = () => {
  const theadContent = [
    "Listing Title",
    "Date published",
    "Status",
    "Action",
  ];

  const [properties, setProperties] = useState([]);

  const absolute_url = process.env.BACKEND_URL||"http://localhost:3002/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/properties/GetAll', {
          method: 'GET', // Moved 'method' outside of headers
          headers: {
            'Content-Type': 'application/json'
          }
        },{cache:'no-store'});
        const data = await response.json();
        if (data.status === "success") {
          setProperties(data.data);
        } else {
          throw new Error("Failed to fetch properties");
        }
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      }
    };

    fetchData(); // Uncomment this to enable data fetching
  }, []);

  const handlePropEdit = (id) => {

  }
  const handlePropDelete = async (id) => {
    // Confirm before deleting


    try {
      // Construct the URL properly using template literals to include the `id`
     
      const response = await fetch(`/api/properties/Delete/${id}`, {
        method: 'DELETE', // Using the DELETE method
        headers: {
          'Content-Type': 'application/json',
          // Include other headers as needed, e.g., Authorization for secure endpoints
        }
      });

      const data = await response.json(); // Assuming the server responds with JSON

      if (!response.ok) {
        // If the server responds with an error status, throw an error to handle it
        throw new Error(data.message || 'Failed to delete the property');
      }

      // Here, handle UI update or state management logic upon successful deletion
      alert('Property deleted successfully');
      // Example: if you're managing state with React, you might want to filter out the deleted property
      // setProperties(prevProperties => prevProperties.filter(property => property.id !== id));
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Failed to delete property:', error);
      alert(`Error: ${error.message}`);
    }
  }




  return (
    <>
      <Header />
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>

      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">
              <div className="row">
                <div className="col-lg-12">
                  <div className="dashboard_navigationbar dn db-1024">
                    <div className="dropdown">
                      <button
                        className="dropbtn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#DashboardOffcanvasMenu"
                        aria-controls="DashboardOffcanvasMenu"
                      >
                        <i className="fa fa-bars pr10"></i> Dashboard Navigation
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-xl-4 mb10">
                  <div className="breadcrumb_content style2 mb30-991">
                    <h2 className="breadcrumb_title">My Properties</h2>
                    <p>Our added properties</p>
                  </div>
                </div>

                <div className="col-lg-8 col-xl-8">
                  <div className="candidate_revew_select style2 text-end mb30-991">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <div className="candidate_revew_search_box course fn-520">
                          <form className="d-flex flex-wrap align-items-center my-2">
                            <input
                              className="form-control mr-sm-2"
                              type="search"
                              placeholder="Search "
                              aria-label="Search"
                            />
                            <button className=" my-2 my-sm-0" type="submit">
                              <span className="flaticon-magnifying-glass"></span>
                            </button>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="my_dashboard_review mb40">
                    <div className="property_table">
                      <div className="table-responsive mt0">
                        <table className="table">
                          <thead className="thead-light">
                            <tr>
                              {theadContent.map((value, index) => (
                                <th scope="col" key={index}>
                                  {value}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {properties.map((item) => (
                              <tr key={item._id}>
                                <td scope="row">
                                  <div className="feat_property list favorite_page style2">
                                    <div className="thumb">
                                      {item.brandImage && <Image
                                        width={150}
                                        height={220}
                                        className="img-whp cover"
                                        src={absolute_url+item.brandImage}
                                        alt="fp1.jpg"
                                      />}

                                    </div>
                                    <div className="details">
                                      <div className="tc_content">
                                        <h4>{item.propertyTitle}</h4>
                                        <p>
                                          <span className="flaticon-placeholder"></span>
                                          {item.propertyCity}
                                        </p>
                                        <a className="fp_price text-thm" href="#">
                                          ₹{item.propertyPrice}

                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>{item.createdAt.slice(0, 10)}</td>
                                <td>
                                  <span className="status_tag badge">{item.propertyStatus}</span>
                                </td>
                                <td>
                                  <ul className="view_edit_delete_list mb0">
                                    <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Edit">
                                      <button onClick={() => handlePropEdit(item._id)} style={{border:'0'}}> {/* Changed onclick to onClick and added arrow function */}
                                        <a href="#">
                                          <span className="flaticon-edit"></span>
                                        </a>
                                      </button>
                                    </li>
                                    <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Delete">
                                      <button onClick={() => handlePropDelete(item._id)}> {/* Changed onclick to onClick and added arrow function */}
                                        <a href="#">
                                          <span className="flaticon-garbage"></span>
                                        </a>
                                      </button>
                                    </li>
                                  </ul>

                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>© 2020 Find House. Made with love.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
