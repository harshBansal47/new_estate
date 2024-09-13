import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";
import MyAccount from "./dashboard/MyAccount";

const isActive = (path, pathname) => path.split('/')[1] === pathname?.split('/')[1];

const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const { username, isLoggedIn, role } = useSelector((state) => state.login);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Property", path: "/properties" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blogs" },

  ];

  return (
    <ul id="respMenu" className="ace-responsive-menu text-end d-lg-block d-none" data-menu-style="horizontal">
      {menuItems.map((item) => (
        <li key={item.name} className="dropitem">

          <a href={item.path} className={isActive(item.path, pathname) ? "ui-active" : undefined}>
            <span className="title">{item.name}</span>
          </a>

        </li>
      ))}
      {isLoggedIn && (
        <><a className="btn dropdown-toggle" href="#" data-bs-toggle="dropdown">
          <div className="btn flexbox">
            <div className="user-button">
              <div className="user-avatar">{username[0].toUpperCase()}</div>
              <div className="username">{username}</div>
            </div>
          </div>
        </a>

          <div className="dropdown-menu">
            <MyAccount />
          </div>
        </>



      )}
      {!isLoggedIn && (
        <li className="list-inline-item list_s">
          <button className="btn flaticon-user" data-bs-target=".bd-example-modal-lg" onClick={() => dispatch(openModal())}>
            <span className="dn-lg">Login/Register</span>
          </button>
        </li>
      )}
      {isLoggedIn && (role === "manager" || role === "admin") && (
        <li className={`list-inline-item add_listing ${float}`}>
          <Link href="/create-listing">
            <span className="flaticon-plus"></span>
            <span className="dn-lg">Create Listing</span>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default HeaderMenuContent;
