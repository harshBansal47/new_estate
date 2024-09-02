"use client"
import Image from "next/image";
import Link from "next/link";
import { closeModal } from "@/features/modal/modalSlice"; // Import the closeModal action correctly
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setLogin } from "@/features/login/loginSlice";

const LoginSignup = () => {
  const dispatch = useDispatch();
  // Corrected useSelector to fetch isModalOpen from the modal state slice
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

    // Function to close the modal by dispatching the closeModal action
    const handleModalClose = () => {
      dispatch(closeModal());
    };

    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setCredentials({
        ...credentials,
        [name]: value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        });
        const data = await response.json();
        if (data.status==='success') {
          dispatch(setLogin({ username: credentials.username, isLoggedIn: true ,role:data.role}));
          dispatch(closeModal())
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <button
          type="button"
          data-bs-dismiss="modal"
          aria-label="Close"
          className="btn-close"
          onClick={handleModalClose}
        ></button>
      </div>
      {/* End .modal-header */}

      <div className="modal-body container pb20">
        <div className="row">
          <div className="col-lg-12">
            <ul className="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
              {/* <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Login
                </a>
              </li> */}
              {/* End login tab */}

              {/* <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Register
                </a>
              </li> */}
              {/* End Register tab */}
            </ul>
            {/* End .sign_up_tab */}
          </div>
        </div>
        {/* End .row */}

        <div className="tab-content container" id="myTabContent">
          <div
            className="row mt25 tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="col-lg-6 col-xl-6">
              <div className="login_thumb">
                <Image
                  width={357}
                  height={494}
                  className="img-fluid w100 h-100 cover"
                  src="/assets/images/resource/login.jpg"
                  alt="login.jpg"
                />
              </div>
            </div>
            {/* End col */}

            <div className="col-lg-6 col-xl-6">
              <div className="login_form">
                <form  onSubmit={handleSubmit}>
                  <div className="heading">
                    <h4>Login</h4>
                  </div>
                  {/* End heading */}

                  {/* <div className="row mt25">
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-fb w-100">
                        <i className="fa fa-facebook float-start mt5"></i> Login
                        with Facebook
                      </button>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-googl w-100">
                        <i className="fa fa-google float-start mt5"></i> Login
                        with Google
                      </button>
                    </div>
                  </div> */}
                  {/* End .row */}

                  <hr />

                  <div className="input-group mb-2 mr-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="User Name"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-user"></i>
                      </div>
                    </div>
                  </div>
                  {/* End input-group */}

                  <div className="input-group form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={credentials.password}
                      onChange={handleChange}
                      name="password"
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-password"></i>
                      </div>
                    </div>
                  </div>
                  {/* End input-group */}
                  {/* End remember me checkbox */}

                  <button type="submit" className="btn btn-log w-100 btn-thm">
                    Log In
                  </button>
                  {/* End submit button */}

                  {/* <p className="text-center">
                    Dont have an account?{" "}
                    <a className="text-thm" href="#">
                      Register
                    </a>
                  </p> */}
                </form>
              </div>
              {/* End .col .login_form */}
            </div>
          </div>
          {/* End .tab-pane */}

          <div
            className="row mt25 tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="col-lg-6 col-xl-6">
              <div className="regstr_thumb">
                <Image
                  width={357}
                  height={659}
                  className="img-fluid w100 h-100 cover"
                  src="/assets/images/resource/regstr.jpg"
                  alt="regstr.jpg"
                />
              </div>
            </div>
            {/* End . left side image for register */}

            {/* <div className="col-lg-6 col-xl-6">
              <div className="sign_up_form">
                <div className="heading">
                  <h4>Register</h4>
                </div>
                End .heading */}

                {/* <form action="#">
                  <div className="row ">
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-fb w-100">
                        <i className="fa fa-facebook float-start mt5"></i> Login
                        with Facebook
                      </button>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-googl w-100">
                        <i className="fa fa-google float-start mt5"></i> Login
                        with Google
                      </button>
                    </div>
                  </div>
                  {/* End .row */}

                  {/* <hr />

                  <div className="form-group input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      placeholder="User Name"
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-user"></i>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  {/* <div className="form-group input-group  mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail2"
                      placeholder="Email"
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-envelope-o"></i>
                      </div>
                    </div>
                  </div> */}
                  {/* End .row */}

                  {/* <div className="form-group input-group  mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
                      placeholder="Password"
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-password"></i>
                      </div>
                    </div>
                  </div> */} 
                  {/* End .row */}

                  {/* <div className="form-group input-group  mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword3"
                      placeholder="Re-enter password"
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-password"></i>
                      </div>
                    </div>
                  </div> */}
                  {/* End .row */}

                  {/* <div className="form-group ui_kit_select_search mb-3">
                    <select
                      className="form-select"
                      data-live-search="true"
                      data-width="100%"
                    >
                      <option data-tokens="SelectRole">Single User</option>
                      <option data-tokens="Agent/Agency">Agent</option>
                      <option data-tokens="SingleUser">Multi User</option>
                    </select>
                  </div> */}
                  {/* End from-group */}

                  {/* <div className="form-group form-check custom-checkbox mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="terms"
                    />
                    <label
                      className="form-check-label form-check-label"
                      htmlFor="terms"
                    >
                      I have accept the Terms and Privacy Policy.
                    </label>
                  </div> */}
                  {/* End from-group */}
{/* 
                  <button type="submit" className="btn btn-log w-100 btn-thm">
                    Sign Up
                  </button> */}
                  {/* End btn */}
{/* 
                  <p className="text-center">
                    Already have an account?{" "}
                    <a className="text-thm" href="#">
                      Log In
                    </a>
                  </p>
                </form>  */}
                {/* End .form */}
              </div>
            </div>
            {/* End register content */}
          </div>
          {/* End .tab-pane */}
        </div>
  );
};

export default LoginSignup;
