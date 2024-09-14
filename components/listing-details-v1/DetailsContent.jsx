<<<<<<< HEAD
// import Comments from "../blog-details/Comments";
// import Ratings from "../blog-details/Ratings";
// import ReviewBox from "../blog-details/ReviewBox";
// import AdditionalDetails from "../common/listing-details/AdditionalDetails";
// import Attachments from "../common/listing-details/Attachments";
// import FloorPlans from "../common/listing-details/FloorPlans";
// import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
// import PropertyDetails from "../common/listing-details/PropertyDetails";
// import PropertyFeatures from "../common/listing-details/PropertyFeatures";
// import PropertyItem from "../common/listing-details/PropertyItem";
// import PropertyLocation from "../common/listing-details/PropertyLocation";
// import PropertyVideo from "../common/listing-details/PropertyVideo";
// import WalkScore from "../common/listing-details/WalkScore";
// import WhatsNearby from "../common/listing-details/WhatsNearby";
=======
import Comments from "../blog-details/Comments";
import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";
import AdditionalDetails from "../common/listing-details/AdditionalDetails";
import Attachments from "../common/listing-details/Attachments";
import FloorPlans from "../common/listing-details/FloorPlans";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyDetails from "../common/listing-details/PropertyDetails";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";
import PropertyLocation from "../common/listing-details/PropertyLocation";
import PropertyVideo from "../common/listing-details/PropertyVideo";
import WalkScore from "../common/listing-details/WalkScore";
import WhatsNearby from "../common/listing-details/WhatsNearby";
>>>>>>> master

const DetailsContent = () => {
  return (
    <>
<<<<<<< HEAD
      
      {/* End .floor_plane */}

      {/* <div className="shop_single_tab_content style2 mt30">
        <PropertyVideo />
      </div> */}
      {/* End property-video  */}

      {/* <div className="walkscore_area mt30">
        <WalkScore />
      </div> */}
      {/* End walkscore_area */}

      {/* <div className="whats_nearby mt30">
        <h4 className="mb10">What&apos;s Nearby</h4>
        <WhatsNearby />
      </div> */}
      {/* End what's nearby area */}

      {/* <div className="product_single_content">
=======
      {/* End .floor_plane */}

      <div className="shop_single_tab_content style2 mt30">
        <PropertyVideo />
      </div>
      {/* End property-video  */}

      <div className="walkscore_area mt30">
        <WalkScore />
      </div>
      {/* End walkscore_area */}

      <div className="whats_nearby mt30">
        <h4 className="mb10">What&apos;s Nearby</h4>
        <WhatsNearby />
      </div>
      {/* End what's nearby area */}

      <div className="product_single_content">
>>>>>>> master
        <div className="mbp_pagination_comments mt30">
          <div className="total_review">
            <h4>896 Reviews</h4>
            <ul className="review_star_list mb0 pl10">
              <Ratings />
            </ul>
            <a className="tr_outoff pl10" href="#">
              ( 4.5 out of 5 )
            </a>
            <a className="write_review float-end fn-xsd" href="#">
              Write a Review
            </a>
          </div>
          {/* End .total_review */}
<<<<<<< HEAD
      {/* <Comments />
          <div className="custom_hr"></div> */}

      {/* <div className="mbp_comment_form style2">
            {/* <h4>Write a Review</h4> */}
      {/* <ul className="review_star">
              <li className="list-inline-item">
                <span className="sspd_review">
                  <ul> */}
      {/* <Ratings />
                  </ul> */}
      {/* </span> */}
      {/* </li> */}
      {/* <li className="list-inline-item pr15">
                <p>Your Rating & Review</p>
              </li> */}
      {/* </ul> */}
      {/* <ReviewBox /> */}
      {/* </div>
        </div>
      </div>  */}
=======
          <Comments />
          <div className="custom_hr"></div>

          <div className="mbp_comment_form style2">
            <h4>Write a Review</h4>
            <ul className="review_star">
              <li className="list-inline-item">
                <span className="sspd_review">
                  <ul>
                    <Ratings />
                  </ul>
                </span>
              </li>
              <li className="list-inline-item pr15">
                <p>Your Rating & Review</p>
              </li>
            </ul>
            <ReviewBox />
          </div>
        </div>
      </div>
>>>>>>> master
      {/* End review and comment area area */}
    </>
  );
};

export default DetailsContent;
