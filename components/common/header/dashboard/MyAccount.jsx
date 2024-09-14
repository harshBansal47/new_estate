'use client'

import Link from "next/link";
import { isSinglePageActive } from "../../../../utils/daynamicNavigation";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/login/loginSlice";
import { useEffect, useState } from "react";

const MyAccount = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const { username, isLoggedIn, role } = useSelector((state) => state.login);
  const [userName,setUserName]=useState("Guest");

  useEffect(()=>{
    if(username && username.length>0){
      setUserName(username);
    }
  },[isLoggedIn])
  const profileMenuItems = [
    // { id: 1, name: "My Profile", ruterPath: "/my-profile" },
    // { id: 2, name: " My Message", ruterPath: "/my-message" },
    // { id: 3, name: " My Favourite", ruterPath: "/my-favourites" },
    // { id: 4, name: " My Package", ruterPath: "/my-package" },
    { id: 5, name: " Log out", ruterPath: "/" },
  ];

  return (
    <>
      <div className="user_set_header">
      <div className="btn  flexbox" >
              <div className="user-button">
                <div className="user-avatar">{userName[0].toUpperCase()}</div>
                <div className="username">{userName}</div>
              </div>
        </div>
      </div>
      {/* End user_set_header */}

      <div className="user_setting_content">
          <button
            href="/"
            className="dropdown-item"
            onClick={()=>{
              dispatch(logout());
              router.push('/');
              localStorage.setItem("token","");
              localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
      </div>
    </>
  );
};

export default MyAccount;
