"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import Image from "next/image";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

const index = () => {
  // Function to format number with commas
  const formatNumberWithCommas = (number) => {
    number = number.toString().replace(/,/g, ""); // Remove existing commas
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas for thousands
  };

  const LocationMarker = ({ setMarker }) => {
    useMapEvents({
      click(event) {
        setMarker(event.latlng);
      },
    });

    return null;
  };
  const { username, isLoggedIn, role } = useSelector((state) => state.login);

  // State variables for form fields
  const [propertyTitle, setPropertyTitle] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [propertyType, setPropertyType] = useState("Commercial"); // Default to first value
  const [propertyStatus, setPropertyStatus] = useState("Ongoing");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [propertyArea, setPropertyArea] = useState("");
  const [propertyLocality, setPropertyLocality] = useState("");
  const [propertyCity, setPropertyCity] = useState("");
  const [propertyZip, setPropertyZip] = useState("");
  const [marker, setMarker] = useState(null);
  const [reraId, setReraId] = useState("");
  const [builderName, setBuilderName] = useState("");
  const [highlights, setHighlights] = useState([]);
  const [brochure, setBrochure] = useState(null);
  const [brandImage, setBrandImage] = useState(null);
  const [siteImages, setSiteImages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sitePlans, setSitePlans] = useState([
    {
      planPrice: "",
      planSize: "",
      planDescription: "",
      imageUpload: null,
    },
  ]);

  const checkboxItems = [
    { id: "dryer", label: "Dryer" },
    { id: "outdoorShower", label: "Outdoor Shower" },
    { id: "washer", label: "Washer" },
    { id: "gym", label: "Gym" },
    { id: "refrigerator", label: "Refrigerator" },
    { id: "wifi", label: "WiFi" },
    { id: "laundry", label: "Laundry" },
    { id: "sauna", label: "Sauna" },
    { id: "windowCoverings", label: "Window Coverings" },
    { id: "airConditioning", label: "Air Conditioning" },
    { id: "lawn", label: "Lawn" },
    { id: "swimmingPool", label: "Swimming Pool" },
    { id: "barbeque", label: "Barbeque" },
    { id: "microwave", label: "Microwave" },
    { id: "tvCable", label: "TV Cable" },
  ];

  const [amenities, setAmenities] = useState({
    dryer: false,
    outdoorShower: false,
    washer: false,
    gym: false,
    refrigerator: false,
    wifi: false,
    laundry: false,
    sauna: false,
    windowCoverings: false,
    airConditioning: false,
    lawn: false,
    swimmingPool: false,
    barbeque: false,
    microwave: false,
    tvCable: false,
  });

  // Handle changes for text input fields
  // Handle changes for text input fields
  const handleInputChange = (e, index = null) => {
    const { id, value } = e.target;

    if (index !== null && id.includes("plan")) {
      // Adjust ID references to directly update the matching property in sitePlans
      const updatedPlans = [...sitePlans];
      if (id.startsWith("planPrice")) {
        updatedPlans[index].planPrice = value;
      } else if (id.startsWith("planSize")) {
        updatedPlans[index].planSize = value;
      } else if (id.startsWith("planDescription")) {
        updatedPlans[index].planDescription = value;
      }
      setSitePlans(updatedPlans);
    } else {
      switch (id) {
        case "propertyTitle":
          setPropertyTitle(value);
          break;
        case "propertyDescription":
          setPropertyDescription(value);
          break;
        case "propertyAddress":
          setPropertyLocality(value);
          break;
        case "propertyCity":
          setPropertyCity(value);
          break;
        case "zipCode":
          setPropertyZip(value);
          break;
        case "formGroupExamplePrice":
          setPropertyPrice(value);
          break;
        case "formGroupExampleArea":
          setPropertyArea(value);
          break;
        case "propertyId":
          setReraId(value);
          break;
        case "builderId":
          setBuilderName(value);
          break;
        default:
          break;
      }
    }
  };

  const handleFileChange = (e, index = null) => {
    const { files, id } = e.target;
    const selectedFiles = Array.from(files);

    if (index !== null && id.startsWith("imageUpload")) {
      // Adjust ID references to correctly handle dynamic site plan image uploads
      const updatedPlans = [...sitePlans];
      updatedPlans[index].imageUpload = selectedFiles[0] || null;
      setSitePlans(updatedPlans);
    } else {
      if (id === "brandImage") {
        setBrandImage(selectedFiles[0] || null);
      } else if (id === "siteImages") {
        const newFiles = selectedFiles.filter(
          (newFile) => !siteImages.some((file) => file.name === newFile.name)
        );

        if (newFiles.length < selectedFiles.length) {
          alert("Some images have already been selected.");
        }

        setSiteImages((prev) => [...prev, ...newFiles]);
      } else if (id === "brochure") {
        setBrochure(selectedFiles[0] || null);
      }
    }
  };

  // Handle changes for select dropdowns
  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "propertyType":
        setPropertyType(value);
        break;
      case "status":
        setPropertyStatus(value);
        break;
      default:
        break;
    }
  };

  // Function to add a new site plan form
  const addNewSitePlan = () => {
    setSitePlans([
      ...sitePlans,
      { planPrice: "", planSize: "", planDescription: "", imageUpload: null },
    ]);
  };

  // Handle changes for checkboxes
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setAmenities((prev) => ({ ...prev, [id]: checked }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check user permissions
    if (!isLoggedIn || (role !== "admin" && role !== "manager")) {
      alert("You do not have permission to create a property.");
      return;
    }

    // Prepare FormData payload
    const formData = new FormData();
    formData.append("propertyTitle", propertyTitle);
    formData.append("propertyDescription", propertyDescription);
    formData.append("propertyType", propertyType);
    formData.append("propertyStatus", propertyStatus);
    formData.append("propertyPrice", propertyPrice.replace(/,/g, ""));
    formData.append("propertyArea", propertyArea);
    formData.append("propertyLocality", propertyLocality);
    formData.append("propertyCity", propertyCity);
    formData.append("propertyZip", propertyZip);
    formData.append("reraId", reraId);
    formData.append("builderName", builderName);
    // Append locationMap if marker exists
    if (marker) {
      formData.append("latitude", marker.lat);
      formData.append("longitude", marker.lng);
    }

    // Append amenities
    formData.append(
      "amenities",
      Object.keys(amenities).filter((key) => amenities[key])
    );
    // Append highlights
    formData.append(`highlights`, highlights);

    sitePlans.forEach((plan, index) => {
      formData.append(`sitePlans[${index}][planPrice]`, plan.planPrice);
      formData.append(`sitePlans[${index}][planSize]`, plan.planSize);
      formData.append(`sitePlans[${index}][planDescription]`, plan.planDescription);
  
      // Append site plan image if it exists
      if (plan.imageUpload) {
        formData.append(`sitePlans[${index}][imageUpload]`, plan.imageUpload);
      }
    });

    // Append brand image if it exists
    if (brandImage) {
      const image = await brandImage;
      formData.append("brandImage", image);
    }

    // Append site images
    if(siteImages.length>0){
      siteImages.forEach((image, index) => formData.append(`siteImages[${index}]`, image));
    }

    // Append brochure if it exists
    if (brochure) {
      const brochureFile = await brochure;
      formData.append("brochure", brochureFile);
    }

    try {
      const response = await fetch("/api/properties", {
        method: "POST",
        body: formData, // No need for headers, as FormData sets its own content type
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.status === "success") {
        alert("Property created successfully!");
      } else {
        alert(`Error: ${data.message || "Failed to create property."}`);
      }
    } catch (error) {
      console.error("Property creation failed:", error);
      alert(
        "An error occurred while creating the property. Please try again later."
      );
    }
  };

  // Functions to manage highlights
  const addHighlight = () => {
    if (inputValue.trim()) {
      setHighlights([...highlights, inputValue]);
      setInputValue("");
    }
  };

  const removeHighlight = (index) => {
    setHighlights(highlights.filter((_, i) => i !== index));
  };

  const deleteSiteImage = (name) =>
    setSiteImages((prev) => prev.filter((file) => file.name !== name));

  const deleteBrandImage = () => setBrandImage(null);
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
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

      {/* <!-- Our Dashbord --> */}
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
                    <h2 className="breadcrumb_title">Add New Property</h2>
                    <p>We are glad to see you again!</p>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-12">
                  <form onSubmit={handleSubmit}>
                    <div className="my_dashboard_review">
                      <div className="row">
                        <div className="col-lg-12">
                          <h3 className="mb30">Create Listing</h3>
                        </div>

                        <div className="col-lg-12">
                          <div className="my_profile_setting_input form-group">
                            <label htmlFor="propertyTitle">
                              Property Title
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="propertyTitle"
                              onChange={handleInputChange}
                              value={propertyTitle}
                            />
                          </div>
                        </div>
                        {/* End .col */}

                        <div className="col-lg-12">
                          <div className="my_profile_setting_textarea">
                            <label htmlFor="propertyDescription">
                              Description
                            </label>
                            <textarea
                              className="form-control"
                              id="propertyDescription"
                              rows="7"
                              onChange={handleInputChange}
                              value={propertyDescription}
                            ></textarea>
                          </div>
                        </div>
                        {/* End .col */}

                        <div className="col-lg-6 col-xl-6">
                          <div className="my_profile_setting_input ui_kit_select_search form-group">
                            <label>Type</label>
                            <select
                              id="propertyType" // Add this id
                              className="selectpicker form-select"
                              data-live-search="true"
                              data-width="100%"
                              onChange={handleSelectChange}
                              value={propertyType}
                            >
                              <option data-tokens="type1">Commercial</option>
                              <option data-tokens="Type2">Plot</option>
                              <option data-tokens="Type3">Residential</option>
                              <option data-tokens="Type4">Industrial</option>
                              <option data-tokens="Type5">Rental</option>
                            </select>
                          </div>
                        </div>
                        {/* End .col */}

                        <div className="col-lg-6 col-xl-6">
                          <div className="my_profile_setting_input ui_kit_select_search form-group">
                            <label htmlFor="status">Status</label>
                            <select
                              id="status" // Make sure the id is set correctly
                              className="selectpicker form-select"
                              data-live-search="true"
                              data-width="100%"
                              onChange={handleSelectChange}
                              value={propertyStatus}
                            >
                              <option data-tokens="ongoing">Ongoing</option>
                              <option data-tokens="completed">Completed</option>
                              <option data-tokens="pending">Pending</option>
                              <option data-tokens="in-progress">
                                In Progress
                              </option>
                              <option data-tokens="not-started">
                                Not Started
                              </option>
                            </select>
                          </div>
                        </div>
                        {/* End .col */}

                        <div className="col-lg-4 col-xl-4">
                          <div className="my_profile_setting_input form-group">
                            <label htmlFor="formGroupExamplePrice">Price</label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExamplePrice"
                              onChange={handleInputChange}
                              value={formatNumberWithCommas(propertyPrice)}
                              placeholder="onwards /-"
                            />
                          </div>
                        </div>
                        {/* End .col */}

                        <div className="col-lg-4 col-xl-4">
                          <div className="my_profile_setting_input form-group">
                            <label htmlFor="formGroupExampleArea">Area</label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleArea"
                              placeholder="sq ft"
                              onChange={handleInputChange}
                              value={propertyArea}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my_dashboard_review mt30">
                      <div className="row">
                        <div className="col-lg-12">
                          <h3 className="mb30">Location</h3>
                        </div>

                        <div className="col-lg-12">
                          <div className="my_profile_setting_input form-group">
                            <label htmlFor="propertyAddress">Locality</label>
                            <input
                              type="text"
                              className="form-control"
                              id="propertyAddress"
                              onChange={handleInputChange}
                              value={propertyLocality}
                            />
                          </div>
                        </div>
                        {/* End .col */}

                        <div className="col-lg-6 col-xl-6">
                          <div className="my_profile_setting_input form-group">
                            <label htmlFor="propertyCity">City</label>
                            <input
                              type="text"
                              className="form-control"
                              id="propertyCity"
                              onChange={handleInputChange}
                              value={propertyCity}
                            />
                          </div>
                        </div>
                        {/* End .col */}

                        {/* End .col */}

                        <div className="col-lg-4 col-xl-4">
                          <div className="my_profile_setting_input form-group">
                            <label htmlFor="zipCode">Zip</label>
                            <input
                              type="text"
                              className="form-control"
                              id="zipCode"
                              onChange={handleInputChange}
                              value={propertyZip}
                            />
                          </div>
                        </div>
                        {/* End .col */}

                        {/* End .col */}

                        <div className="col-lg-12">
                          {/* Leaflet Map */}
                          <MapContainer
                            center={[28.4469, 77.079]} // Default center position
                            zoom={13}
                            style={{
                              height: "450px",
                              width: "100%",
                              zIndex: "0",
                            }}
                          >
                            <TileLayer
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <LocationMarker setMarker={setMarker} />
                            {marker && <Marker position={marker} />}
                          </MapContainer>
                        </div>

                        {/* Display the selected latitude and longitude */}
                        <div className="col-lg-12 mt-3">
                          <p>Selected Latitude: {marker?.lat}</p>
                          <p>Selected Longitude: {marker?.lng}</p>
                        </div>
                      </div>
                    </div>
                    <div className="my_dashboard_review mt30">
                      <div className="col-lg-12">
                        <h3 className="mb30">Detailed Information</h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-xl-4">
                          <div className="my_profile_setting_input form-group">
                            <label htmlFor="propertyId">RERA ID</label>
                            <input
                              type="text"
                              className="form-control"
                              id="propertyId"
                              onChange={handleInputChange}
                              value={reraId}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-xl-4">
                          <div className="my_profile_setting_input form-group">
                            <label htmlFor="builderId">Builder Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="builderId"
                              onChange={handleInputChange}
                              value={builderName}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-xl-4">
                          <div className="my_profile_setting_input form-group">
                            <label htmlFor="builderId">HighLights</label>
                            <div className="highlights-container">
                              {/* Input and Add Button */}
                              <div className="input-container">
                                <input
                                  type="text"
                                  value={inputValue}
                                  onChange={(e) =>
                                    setInputValue(e.target.value)
                                  }
                                  placeholder="Enter a highlight..."
                                />
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    addHighlight();
                                  }}
                                >
                                  Add
                                </button>
                              </div>

                              {/* Display Highlights */}
                              <div className="highlights-list">
                                {highlights.map((highlight, index) => (
                                  <div key={index} className="highlight-item">
                                    {highlight}
                                    <button
                                      className="remove-btn"
                                      onClick={() => removeHighlight(index)}
                                    >
                                      ×
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* End .col */}

                        <div className="col-xl-12">
                          <h4 className="mb10">Amenities</h4>
                        </div>
                        {/* End .col */}

                        {/* <div className="col-xs-6 col-sm col-lg col-xl"> */}
                        {checkboxItems.map((item, index) => (
                          <div
                            className="col-xxs-6 col-sm col-lg col-xl"
                            key={index}
                          >
                            <ul className="ui_kit_checkbox selectable-list">
                              <li>
                                <div className="form-check custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={item.id}
                                    onChange={handleCheckboxChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={item.id}
                                  >
                                    {item.label}
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        ))}
                        {/* </div> */}
                      </div>
                    </div>
                    <div className="my_dashboard_review mt30">
                      <div className="col-lg-12">
                        <h3 className="mb30">Property media</h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          {/* Display Brand Image */}
                          <h3>Brand Image</h3>
                          {brandImage && (
                            <div className="portfolio_item small-image">
                              <Image
                                width={50} // Smaller width for brand image preview
                                height={50} // Smaller height for brand image preview
                                className="img-fluid cover"
                                src={URL.createObjectURL(brandImage)}
                                alt="Brand Image"
                              />
                              <div
                                className="edu_stats_list"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                                onClick={deleteBrandImage}
                              >
                                <span className="flaticon-garbage"></span>
                              </div>
                            </div>
                          )}
                          {/* Brand Image Upload */}
                          <div className="portfolio_upload">
                            <input
                              type="file"
                              onChange={handleFileChange}
                              accept="image/png, image/gif, image/jpeg"
                              id="brandImage"
                            />
                            <div className="icon">
                              <span className="flaticon-download"></span>
                            </div>
                            <p>Drag and drop brand image here</p>
                          </div>
                        </div>
                        {/* End Brand Image Section */}

                        <div className="col-lg-12">
                          {/* Display Site Images */}
                          <h3>Site Images</h3>
                          <ul className="mb-0">
                            {siteImages.length > 0 &&
                              siteImages.map((image, index) => (
                                <li key={index} className="list-inline-item">
                                  <div className="portfolio_item small-image">
                                    <Image
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
                                        deleteSiteImage(image.name)
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
                            <p>Drag and drop site images here</p>
                          </div>
                        </div>
                        {/* End Site Images Section */}

                        <div className="col-xl-6">
                          <div className="resume_uploader mb30">
                            <h3>Brochure</h3>

                            {/* Display the selected brochure file name */}
                            <input
                              className="upload-path"
                              readOnly
                              value={
                                brochure ? brochure.name : "No file chosen"
                              } // Display the file name
                            />
                            <label className="upload" style={{ margin: "5px" }}>
                              <input
                                type="file"
                                id="brochure" // Add this id
                                onChange={handleFileChange}
                                accept="application/pdf"
                              />
                              Select Attachment
                            </label>
                          </div>
                        </div>

                        {/* End Brochure Section */}
                      </div>
                    </div>
                    <div className="my_dashboard_review mt30">
                      <div className="col-lg-12">
                        <h3 className="mb30">Site Plans</h3>
                        <button
                          type="button"
                          className="btn admore_btn mb30"
                          onClick={addNewSitePlan}
                        >
                          Add More
                        </button>
                      </div>
                      {sitePlans.map((plan, index) => (
                        <div className="row" key={index}>
                          {/* Plan Price Input */}
                          <div className="col-lg-6 col-xl-4">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor={`planPrice-${index}`}>
                                Price
                              </label>
                              <input
                                type="text"
                                id={`planPrice-${index}`} // Indexed ID for uniqueness
                                placeholder="onwards"
                                onChange={(e) => handleInputChange(e, index)} // Pass index to handler
                                value={plan.planPrice} // Indexed value
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Plan Size Input */}
                          <div className="col-lg-6 col-xl-4">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor={`planSize-${index}`}>Area</label>
                              <input
                                type="text"
                                id={`planSize-${index}`} // Indexed ID for uniqueness
                                placeholder="sq ft"
                                onChange={(e) => handleInputChange(e, index)} // Pass index to handler
                                value={plan.planSize} // Indexed value
                                className="form-control"
                              />
                            </div>
                          </div>

                          {/* Plan Image Upload */}
                          <div className="col-lg-6 col-xl-4">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor={`imageUpload-${index}`}>
                                Plan Image
                              </label>
                              <div className="avatar-upload">
                                <div className="avatar-edit">
                                  <input
                                    className="btn btn-thm"
                                    type="file"
                                    id={`imageUpload-${index}`} // Indexed ID for uniqueness
                                    accept=".png, .jpg, .jpeg"
                                    onChange={(e) => handleFileChange(e, index)} // Pass index to handler
                                  />
                                  <label
                                    htmlFor={`imageUpload-${index}`}
                                  ></label>
                                </div>
                                <div className="avatar-preview">
                                  {plan.imageUpload ? (
                                    <p>{plan.imageUpload.name}</p>
                                  ) : (
                                    <p>No image selected</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Plan Description Input */}
                          <div className="col-xl-12">
                            <div className="my_profile_setting_textarea mt30-991">
                              <label htmlFor={`planDescription-${index}`}>
                                Plan Description
                              </label>
                              <textarea
                                className="form-control"
                                id={`planDescription-${index}`} // Indexed ID for uniqueness
                                rows="7"
                                onChange={(e) => handleInputChange(e, index)} // Pass index to handler
                                value={plan.planDescription} // Indexed value
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="my_dashboard_review mt30">
                      <div className="row">
                        <div className="col-lg-12">
                          <button
                            className="btn btn-danger float-end btn-lg btn-block "
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
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
