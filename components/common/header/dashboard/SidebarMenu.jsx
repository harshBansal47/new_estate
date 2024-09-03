'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { isSinglePageActive } from "../../../../utils/daynamicNavigation";

const SidebarMenu = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header">
          <Link href="/">
            <Image
              width={40}
              height={45}
              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <span>Site Name</span>
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          <span>Main</span>
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive("/my-dashboard", pathname) ? "active" : ""
              }`}
            >
              <Link href="/my-dashboard">
                <i className="flaticon-layers"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/create-listing", pathname) ? "active" : ""
              }`}
            >
              <Link href="/create-listing">
                <i className="flaticon-plus"></i>
                <span>Create Listing</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Main */}

        <li className="title">
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive("/my-properties", pathname) ? "active" : ""
              }`}
            >
              <Link href="/my-properties">
                <i className="flaticon-home"></i>
                <span>My Properties</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default SidebarMenu;
