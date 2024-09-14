import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Menu, MenuItem } from "react-pro-sidebar";

const dataSections = [
  {
    name: "Home",
    routerPath: "/",
  },
  {
    name: "Blog",
    routerPath: "/blog",
  },
  {
    name: "Contact",
    routerPath: "/contact",
  },
  {
    name: "About",
    routerPath: "/about",
  },
  {
    name: "Properties",
    routerPath: "/properties",
  },
];

const MobileMenuContent = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn,role } = useSelector(state => state.login);

  return (
    <>
      <div className="sidebar-header">
        <Link href="/" className="sidebar-header-inner">
          <Image
            width={40}
            height={45}
            className="nav_logo_img img-fluid mt20"
            src="/assets/images/header-logo2.png"
            alt="header-logo.png"
          />
        </Link>
        <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
          <span className="flaticon-close"></span>
        </div>
      </div>
      <div style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
        <Menu>
          {dataSections.map((item, index) => (
            <MenuItem key={index} onClick={() => router.push(item.routerPath)}>
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
      {(isLoggedIn&&role==("admin"|"manager")) && (
        <Link
          href="/create-listing"
          className="btn btn-block btn-lg btn-thm circle"
          style={{ width: '90%', margin: '10px auto' }}
        >
          <span className="flaticon-plus"></span> Create Listing
        </Link>
      )}
    </>
  );
};

export default MobileMenuContent;
