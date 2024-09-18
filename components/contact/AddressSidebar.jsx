import Social from "../common/footer/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_location">
      <h4>Contact Us</h4>
      <p>
        If you have any questions or need assistance with our properties in Ghaziabad, our team is here to help. Feel free to reach out to us through any of the following contact methods.
      </p>
      <div className="content_list">
        <h5>Address</h5>
        <p>
          5th Floor, Pacific Business Park, <br />
          Sahibabad Industrial Area Site 4, <br />
          Ghaziabad, Uttar Pradesh 201010, India
        </p>
      </div>
      <div className="content_list">
        <h5>Phone</h5>
        <p>+91 98765 43210</p>
      </div>
      <div className="content_list">
        <h5>Email</h5>
        <p>info@Realtors.in</p>
      </div>
      <div className="content_list">
        <h5>Skype</h5>
        <p>Realtors.in</p>
      </div>
      <h5>Follow Us</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>

  );
};

export default AddressSidebar;
