
'use client'

import Link from "next/link";

import MyAccount from "./MyAccount";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { openModal } from "@/features/modal/modalSlice";

const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const username = useSelector((state) => state.login.username);
<<<<<<< HEAD

=======
  
>>>>>>> master
  const [userName, setUserName] = useState("user");

  useEffect(() => {
    // Check if 'username' is defined and 'isLoggedIn' is true before setting 'userName'
    if (username && isLoggedIn) {
      setUserName(username);
    } else {
      setUserName("guest"); // or handle however you want when username is not available
    }
  }, [username, isLoggedIn]);

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li className="dropitem">
        <a
          href="/"
          className={
            pathname === '/'
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Home</span>
        </a>
<<<<<<< HEAD
      </li>
      {/* End .dropitem */}


      <li className="dropitem">
        <a
          href="/properties"
          className={
            pathname === "/properties"
=======
        {/* <!-- Level Two--> */}


      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="/gallery"
          className={
            pathname === "/gallery"
>>>>>>> master
              ? "ui-active"
              : undefined
          }
        >
<<<<<<< HEAD
          <span className="title">Properties</span>
        </a>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          href="/contact"
          className={pathname === "/contact" ? "ui-active" : undefined}
        >
          Contact
        </Link>
      </li>
      {/* End .dropitem */}

      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="/about"
=======
          <span className="title">Gallery</span>

        </a>

      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
>>>>>>> master
          className={

            pathname === '/about'
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">About</span>{" "}
        </a>
      </li>
      {/* End .dropitem */}

<<<<<<< HEAD

      <li className="dropitem">
        <a
          href="/gallery"
          className={
            pathname === "/gallery"
=======
      <li className="dropitem">
        <a
          href="#"
          className={
            pathname === "/properties"
>>>>>>> master
              ? "ui-active"
              : undefined
          }
        >
<<<<<<< HEAD
          <span className="title">Gallery</span>
        </a>

      </li>
=======
          <span className="title">Properties</span>
        </a>
      </li>
      {/* End .dropitem */}
>>>>>>> master

      <li className="dropitem">
        <a
          href="/blogs"
          className={
            pathname === "/blogs"
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Blog</span>
        </a>

      </li>
      {/* End .dropitem */}

<<<<<<< HEAD



=======
      <li className="last">
        <Link
          href="/contact"
          className={pathname === "/contact" ? "ui-active" : undefined}
        >
          Contact
        </Link>
      </li>
      {/* End .dropitem */}
>>>>>>> master

      <li className="user_setting">
        <div className="dropdown">
          <a className="btn dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <div className="btn  flexbox" >
              <div className="user-button">
                <div className="user-avatar">{userName[0].toUpperCase()}</div>
                <div className="username">{userName}</div>
              </div>
            </div>
          </a>
          <div className="dropdown-menu">
            <MyAccount />
          </div>
        </div>
      </li>
      {/* End ."user_setting */}

      <li className={`list-inline-item add_listing ${float}`}>
        <Link href="/create-listing">
          <span className="flaticon-plus"></span>
          <span className="dn-lg"> Create Listing</span>
        </Link>
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;