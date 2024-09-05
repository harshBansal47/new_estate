"use client"
import React, { useState } from 'react';
import Header from '@/components/common/header/dashboard/Header'; // Assuming these components are imported from your project
import MobileMenu from '@/components/common/header/MobileMenu';
import SidebarMenu from '@/components/common/header/dashboard/SidebarMenu';

export default function CreateGallery() {
  const [images, setImages] = useState([]); // State to hold the selected images
  const [tag, setTag] = useState(''); // State to hold the input tag
  const [base64Images, setBase64Images] = useState([]); // State to hold base64 images

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    // Convert images to base64
    Promise.all(
      files.map((file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        })
      )
    ).then((base64Strings) => setBase64Images(base64Strings));
  };

  // Handle input change for the tag
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/gallery/upload', { // Replace '/api/upload' with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          images: base64Images,
          tag,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        if(data.status==="success"){
            alert('Images uploaded successfully!');
        }
        setImages([]);
        setTag('');
        setBase64Images([]);
      } else {
        alert('Failed to upload images. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading images:', error);
      alert('An error occurred while uploading images.');
    }
  };

  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* Mobile Menu */}
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
      {/* End sidebar_menu */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">
              <div className="row">
                {/* Start Dashboard Navigation */}
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
                {/* End Dashboard Navigation */}
                <div className="col-lg-12 mb10">
                  <div className="breadcrumb_content style2">
                    <h2 className="breadcrumb_title">Add New Images</h2>
                  </div>
                </div>
                {/* End .col */}
                <div className="col-lg-12">
                  <form onSubmit={handleSubmit}>
                    <div className="my_dashboard_review mt30">
                      <div className="col-lg-12">
                        <h3 className="mb30">Add Insights</h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          {/* Display Site Images */}
                          <h3>Gallery Images</h3>
                          <ul className="mb-0">
                            {images.length > 0 &&
                              images.map((image, index) => (
                                <li key={index} className="list-inline-item">
                                  <div className="portfolio_item small-image">
                                    <img
                                      width={50} // Smaller width for site image preview
                                      height={50} // Smaller height for site image preview
                                      className="img-fluid cover"
                                      src={URL.createObjectURL(image)}
                                      alt={`Site Image ${index + 1}`}
                                    />
                                    <div
                                      className="edu_stats_list"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                      onClick={() =>
                                        setImages(images.filter((img, i) => i !== index))
                                      }
                                    >
                                      <span className="flaticon-garbage"></span>
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </ul>
                          {/* Site Images Upload */}
                          <div className="portfolio_upload">
                            <input
                              type="file"
                              onChange={handleFileChange}
                              id="siteImages"
                              multiple
                              accept="image/png, image/gif, image/jpeg"
                            />
                            <div className="icon">
                              <span className="flaticon-download"></span>
                            </div>
                            <p>Drag and drop Gallery images here</p>
                          </div>
                        </div>
                        {/* End Site Images Section */}
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter tag for the images"
                            value={tag}
                            onChange={handleTagChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="my_dashboard_review mt30">
                      <div className="row">
                        <div className="col-lg-12">
                          <button className="btn btn-danger float-end btn-lg btn-block" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}
              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>© 2020 Find House. Made with love.</p>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
}
