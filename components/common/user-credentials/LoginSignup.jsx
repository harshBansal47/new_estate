"use client"
import Image from "next/image";
import Link from "next/link";
import { closeModal } from "@/features/modal/modalSlice"; // Import the closeModal action correctly
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setLogin } from "@/features/login/loginSlice";
import { setCredential,clearCredentials } from "@/features/login/authSlice";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

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
      if (response.ok) {
        dispatch(setCredential({
          token: data.token, // Assuming the token is returned in the response
          expiresAt: Date.now() + 1800000, // Token expiry time
          user: data.credentials.username // Assuming the username is nested within credentials
        }));
        if (data.status === 'success') {
          dispatch(closeModal());
        }
      } else {
        console.error(data.message || 'Authentication failed');
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
                
                </form>
              </div>
             
            </div>
          </div>
        
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
