'use client'
import { useEffect, useState } from "react"; // Import useEffect and useState hooks
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image"; // Correct import

const GalleryBox = () => {
  const [galleryData, setGalleryData] = useState([]); // State to store fetched data

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/gallery/GetAll'); // Replace with your API endpoint
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      }
    };
    fetchData();
  }, []); // Empty dependency array to run once on mount

  return (
    <>
      <Gallery>
        {galleryData.map((singleItem) => (
          <div key={singleItem.id} className="gallery-container"> {/* Container for each set of caption + images */}
            <div className="gallery-caption">
              <h4>{singleItem.tag}</h4> {/* Display caption */}
            </div>
            <div className="gallery-grid"> {/* Grid container for images */}
              {singleItem.images.map((image, index) => (
                <div className="gallery-image-container" key={index}> {/* Use index as key */}
                  <Image
                    width={400}
                    height={400}
                    className="img-fluid img-circle-rounded w100 cover"
                    src={`${image}`} // Ensure base64 image format
                    alt={singleItem.title || 'Gallery Image'} // Fallback alt text
                  />
                  <div className="gallery-overlay">
                    <div className="icon popup-img">
                      <Item
                        original={`data:image/jpeg;base64,${image}`} // Ensure base64 image format
                        thumbnail={`data:image/jpeg;base64,${image}`} // Ensure base64 image format
                        width={752}
                        height={450}
                      >
                        {({ ref, open }) => (
                          <span
                            className="flaticon-zoom-in"
                            role="button"
                            ref={ref}
                            onClick={open}
                          ></span>
                        )}
                      </Item>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Gallery>
    </>
  );
};

export default GalleryBox;
