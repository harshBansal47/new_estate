'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";

const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();

  const home = [
    {
      id: 1,
      name: "Home 1",
      routerPath: "/",
    },
    { id: 2, name: "Home 2", routerPath: "/home-2" },
    {
      id: 3,
      name: "Home 3",
      routerPath: "/home-3",
    },
    { id: 4, name: "Home 4", routerPath: "/home-4" },
    { id: 5, name: "Home 5", routerPath: "/home-5" },
    { id: 6, name: "Home 6", routerPath: "/home-6" },
    { id: 7, name: "Home 7", routerPath: "/home-7" },
    { id: 8, name: "Home 8", routerPath: "/home-8" },
    { id: 9, name: "Home 9", routerPath: "/home-9" },
    { id: 10, name: "Home 10", routerPath: "/home-10" },
  ];

  const listing = [
    {
      id: 1,
      title: "Listing Grid",
      items: [
        {
          name: "Grid v1",
          routerPath: "/listing-grid-v1",
        },
        {
          name: "Grid v2",
          routerPath: "/listing-grid-v2",
        },
        {
          name: "Grid v3",
          routerPath: "/listing-grid-v3",
        },
        {
          name: "Grid v4",
          routerPath: "/listing-grid-v4",
        },
        {
          name: "Grid v5",
          routerPath: "/listing-grid-v5",
        },
        {
          name: "Grid v6",
          routerPath: "/listing-grid-v6",
        },
      ],
    },
    {
      id: 2,
      title: "Listing List",
      items: [
        {
          name: "List V1",
          routerPath: "/listing-list-v1",
        },
      ],
    },
    {
      id: 3,
      title: "Listing Style",
      items: [
        {
          name: "Parallax Style",
          routerPath: "/parallax-style",
        },
        {
          name: "Slider Style",
          routerPath: "/slider-style",
        },
        {
          name: "Map Header",
          routerPath: "/map-header",
        },
      ],
    },
    {
      id: 4,
      title: "Listing Half",
      items: [
        {
          name: "Map V1",
          routerPath: "/listing-map-v1",
        },
        {
          name: "Map V2",
          routerPath: "/listing-map-v2",
        },
        {
          name: "Map V3",
          routerPath: "/listing-map-v3",
        },
        {
          name: "Map V4",
          routerPath: "/listing-map-v4",
        },
      ],
    },
    {
      id: 5,
      title: "Agent View",
      items: [
        {
          name: "Agent V1",
          routerPath: "/agent-v1",
        },
        {
          name: "Agent V2",
          routerPath: "/agent-v2",
        },
        {
          name: "Agent Details",
          routerPath: "/agent-details",
        },
      ],
    },
    {
      id: 6,
      title: "Agencies View",
      items: [
        {
          name: "Agencies V1",
          routerPath: "/agency-v1",
        },
        {
          name: "Agencies V2",
          routerPath: "/agency-v2",
        },
        {
          name: "Agencies Details",
          routerPath: "/agency-details",
        },
      ],
    },
  ];

  const property = [
    {
      id: 1,
      title: "User Admin",
      items: [
        {
          name: "Dashboard",
          routerPath: "/my-dashboard",
        },
        {
          name: "My Properties",
          routerPath: "/my-properties",
        },
        {
          name: "My Message",
          routerPath: "/my-message",
        },
        {
          name: "My Review",
          routerPath: "/my-review",
        },
        {
          name: "My Favourites",
          routerPath: "/my-favourites",
        },
        {
          name: "My Profile",
          routerPath: "/my-profile",
        },
        {
          name: "My Package",
          routerPath: "/my-package",
        },
        {
          name: "My Saved Search",
          routerPath: "/my-saved-search",
        },
        {
          name: "Add Property",
          routerPath: "/create-listing",
        },
      ],
    },
    {
      id: 2,
      title: "Listing Single",
      items: [
        {
          name: "Single V1",
          routerPath: "/listing-details-v1",
        },
        {
          name: "Single V2",
          routerPath: "/listing-details-v2",
        },
        {
          name: "Single V3",
          routerPath: "/listing-details-v3",
        },
        {
          name: "Single V4",
          routerPath: "/listing-details-v4",
        },
      ],
    },
  ];

  const blog = [
    { id: 1, name: "Blog List 1", routerPath: "/blog-list-1" },
    { id: 2, name: "Blog List 2", routerPath: "/blog-list-2" },
    { id: 3, name: "Blog List 3", routerPath: "/blog-list-3" },
    {
      id: 4,
      name: "Blog Details",
      routerPath: "/blog-details",
    },
  ];

  const pages = [
    { id: 1, name: "About Us", routerPath: "/about-us" },
    { id: 2, name: "Gallery", routerPath: "/gallery" },
    { id: 3, name: "Faq", routerPath: "/faq" },
    { id: 4, name: "LogIn", routerPath: "/login" },
    { id: 5, name: "Compare", routerPath: "/compare" },
    { id: 6, name: "Membership", routerPath: "/membership" },
    { id: 7, name: "Register", routerPath: "/register" },
    { id: 8, name: "Service", routerPath: "/service" },
    { id: 9, name: "404 Page", routerPath: "/404" },
    { id: 10, name: "Terms & Conditions", routerPath: "/terms" },
  ];


  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const { username, isLoggedIn, role } = useSelector((state) => state.login);
  return (
    <ul
    id="respMenu"
    className="ace-responsive-menu text-end d-lg-block d-none"
    data-menu-style="horizontal"
  >
    {/* Home Menu */}
    <li className="dropitem">
      <Link href="/" className={pathname === "/" ? "ui-active" : undefined}>
        <span className="title">Home</span>
      </Link>
    </li>

    {/* About Us */}
    <li className="dropitem">
      <Link href="/about-us" className={pathname === "/about-us" ? "ui-active" : undefined}>
        <span className="title">About</span>
      </Link>
    </li>

    {/* Properties */}
    <li className="dropitem">
      <Link href="/my-properties" className={pathname === "/properties" ? "ui-active" : undefined}>
        <span className="title">Properties</span>
      </Link>
    </li>

    {/* Contact */}
    <li className="dropitem">
      <Link href="/contact" className={pathname === "/contact" ? "ui-active" : undefined}>
        <span className="title">Contact</span>
      </Link>
    </li>

    {/* Blog */}
    <li className="dropitem">
      <Link href="/blogs" className={pathname === "/blog" ? "ui-active" : undefined}>
        <span className="title">Blog</span>
      </Link>
    </li>

    {/* Gallery */}
    <li className="dropitem">
      <Link href="/gallery" className={pathname === "/gallery" ? "ui-active" : undefined}>
        <span className="title">Gallery</span>
      </Link>
    </li>

    {
        isLoggedIn ? (
          <div className="btn  flexbox" >
            <div className="user-button">
              <div className="user-avatar">{username[0].toUpperCase()}</div>
              <div className="username">{username}</div>
            </div>

          </div>
        ) : (<li className={`list-inline-item list_s`}>
          <button
            className="btn flaticon-user"
            // data-bs-toggle="modal"
            data-bs-target=".bd-example-modal-lg"
            onClick={() => { if (isModalOpen === false) { dispatch(openModal()) } }}
          >
            <span className="dn-lg">Login/Register</span>
          </button>
        </li>
        )
      }
      {/* End .dropitem */}


      {
  (isLoggedIn && (role === "manager" || role === "admin")) && (
    <li className={`list-inline-item add_listing ${float}`}>
      <Link href="/create-listing">
        <span className="flaticon-plus"></span>
        <span className="dn-lg"> Create Listing</span>
      </Link>
    </li>
  )
}
  </ul>

  );
};

export default HeaderMenuContent;