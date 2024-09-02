"use client";
import Image from "next/image";
import Link from "next/link";
import { closeModal } from "@/features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setLogin, logout } from "@/features/login/loginSlice";
import { setCredential, clearCredentials } from "@/features/login/authSlice";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  // Handle form submission
  // Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (response.ok) {
      const expiresAt = Date.now() + 1800000; // Token expiry time set to 30 minutes from now

      // Dispatch credentials and login state to Redux
      dispatch(setCredential({
        token: data.token,
        expiresAt,
        user: data.username,
      }));
      dispatch(setLogin({
        username: credentials.username,
        isLoggedIn: true,
        role: data.role
      }));

      // Sync to local storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.username));
      localStorage.setItem("expiresAt", expiresAt.toString());
      localStorage.setItem("username", credentials.username);
      localStorage.setItem("role", data.role);
      localStorage.setItem("isLoggedIn", "true");

      dispatch(closeModal());
    } else {
      throw new Error(data.message || "Authentication failed");
    }
  } catch (error) {
    console.error("Login failed:", error);

    // Clear Redux state and local storage upon failure
    dispatch(clearCredentials());
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.setItem("isLoggedIn", "false");
  }
};


  // Handle modal close action
  const handleModalClose = () => {
    dispatch(closeModal());
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

      <div className="modal-body container pb20">
        <div className="row">
          <div className="col-lg-12">
            <ul className="sign_up_tab nav nav-tabs" id="myTab" role="tablist"></ul>
          </div>
        </div>

        <div className="tab-content container" id="myTabContent">
          <div className="row mt25 tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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

            <div className="col-lg-6 col-xl-6">
              <div className="login_form">
                <form onSubmit={handleSubmit}>
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

                  <button type="submit" className="btn btn-log w-100 btn-thm">
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="row mt25 tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;