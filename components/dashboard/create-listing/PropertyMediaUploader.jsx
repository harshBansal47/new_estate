'use client'

import { useState } from "react";
import selectedFiles from "../../../utils/selectedFiles";
import Image from "next/image";

const PropertyMediaUploader = () => {
  const [brandImage, setBrandImage] = useState(null); // State for brand image
  const [siteImages, setSiteImages] = useState([]); // State for site images

  // Handle brand image selection
  const handleBrandImageChange = (e) => {
    const files = selectedFiles(e);
    if (files.length > 0) {
      setBrandImage(files[0]); // Only one brand image allowed
    }
  };

  // Handle site images selection
  const handleSiteImagesChange = (e) => {
    const newFiles = selectedFiles(e);

    // Filter out already selected images to avoid duplicates
    const filteredNewFiles = newFiles.filter((newFile) =>
      !siteImages.some((existingFile) => existingFile.name === newFile.name)
    );

    if (filteredNewFiles.length !== newFiles.length) {
      alert("Some images have already been selected.");
    }

    setSiteImages((prev) => [...prev, ...filteredNewFiles]);
  };

  // Delete an image from site images
  const deleteSiteImage = (name) => {
    const updatedImages = siteImages.filter((file) => file.name !== name);
    setSiteImages(updatedImages);
  };

  // Delete brand image
  const deleteBrandImage = () => {
    setBrandImage(null);
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        {/* Display Brand Image */}
        <h3>Brand Image</h3>
        {brandImage && (
          <div className="portfolio_item small-image">
            <Image
              width={100}  // Smaller width for brand image preview
              height={100} // Smaller height for brand image preview
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
            onChange={handleBrandImageChange}
            accept="image/png, image/gif, image/jpeg"
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
                    width={100}  // Smaller width for site image preview
                    height={100} // Smaller height for site image preview
                    className="img-fluid cover"
                    src={URL.createObjectURL(image)}
                    alt={`Site Image ${index + 1}`}
                  />
                  <div
                    className="edu_stats_list"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Delete"
                    onClick={() => deleteSiteImage(image.name)}
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
            onChange={handleSiteImagesChange}
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
          <form className="form-inline d-flex flex-wrap wrap">
            <input className="upload-path" />
            <label className="upload">
              <input type="file" />
              Select Attachment
            </label>
          </form>
        </div>
      </div>
      {/* End Brochure Section */}
    </div>
  );
};

export default PropertyMediaUploader;
