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
    name: "Properties",
    routerPath: "/properties",
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
    name: "Blog",
    routerPath: "/blog",
  },
  {
    name: "Gallery",
    routerPath: "/gallery",
  },
];

const MobileMenuContent = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { username, isLoggedIn, role } = useSelector((state) => state.login);

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
          <span style={{marginLeft:'10px',fontSize:'25px',fontWeight:'bold'}}>Site Name</span>
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
      {isLoggedIn && (role === "manager" || role === "admin") && (
        <li className={`list-inline-item add_listing `} style={{padding:'10px',background:'red',color:'white',fontWeight:'bold',borderRadius:'10px',margin:'10px'}}>
          <Link href="/create-listing">
            <span className="flaticon-plus" style={{marginRight:'5px'}}></span>
            <span className="">Create Listing</span>
          </Link>
        </li>
      )}
    </>
  );
};

export default MobileMenuContent;
