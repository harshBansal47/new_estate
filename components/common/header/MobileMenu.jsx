"use client"
import Link from "next/link";
import MobileMenuContent from "./MobileMenuContent";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { openModal,closeModal } from "@/features/modal/modalSlice";

const MobileMenu = () => {
  const isModalOpen = useSelector(state=>state.modal.isModalOpen);
  const dispatch = useDispatch();
  const {isLoggedIn ,username}= useSelector(state=>state.login);
  
  return (
    // <!-- Main Header Nav For Mobile -->
    <div className="stylehome1 h0 mega-menu-wrapper">
      <div className="mobile-menu">
        <div className="header stylehome1 flexbox">
          <div className="main_logo_home2 text-center">
            <Image
              width={40}
              height={45}
              className="nav_logo_img contain mt20"
              src="/assets/images/propLogo.jpg"
              alt="header-logo2.png"
            />
            <span className="mt20">FindHouse</span>
          </div>
          {/* main_logo_home2 */}

          
             <ul className="menu_bar_home2 flexbox">

              {
                isLoggedIn?(<div className="btn"style={{
                  position: "absolute",  // Absolute positioning
                  top: "20px",           // Fixed distance from the top
                  right: "10px",         // Fixed distance from the right
                  display: "flex",       // Flexbox for alignment
                  alignItems: "center",  // Center the items vertically
                }} >
                  
                    <div className="user-avatar">{username[0].toUpperCase()}</div>

                </div>)
                :(<li className="list-inline-item list_s">
                  <Link href="#">
                  <span className="flaticon-user" onClick={() => { if (isModalOpen === false) { dispatch(openModal()) } }}></span>
                  </Link>
                </li>)

              }

              
              <li
                className="list-inline-item"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasMenu"
                aria-controls="offcanvasMenu"
              >
                <a>
                  <span></span>
                </a>
              </li>
            </ul>
          

         
          {/* menu_bar_home2 */}
        </div>
      </div>
      {/* <!-- /.mobile-menu --> */}

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
        data-bs-scroll="true"
      >
        <MobileMenuContent />
      </div>
    </div>
  );
};

export default MobileMenu;
