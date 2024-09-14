import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Menu, MenuItem } from "react-pro-sidebar";

<<<<<<< HEAD

=======
>>>>>>> master
const dataSections = [
  {
    name: "Home",
    routerPath: "/",
  },
  {
<<<<<<< HEAD
    name: "Properties",
    routerPath: "/properties",
=======
    name: "Blog",
    routerPath: "/blog",
>>>>>>> master
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
<<<<<<< HEAD
    name: "Blog",
    routerPath: "/blog",
  },
  {
    name: "Gallery",
    routerPath: "/gallery",
=======
    name: "Properties",
    routerPath: "/properties",
>>>>>>> master
  },
];

const MobileMenuContent = () => {
  const pathname = usePathname();
  const router = useRouter();
<<<<<<< HEAD
  const { username, isLoggedIn, role } = useSelector((state) => state.login);
=======
  const { isLoggedIn,role } = useSelector(state => state.login);
>>>>>>> master

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
<<<<<<< HEAD
          <span style={{marginLeft:'10px',fontSize:'25px',fontWeight:'bold'}}>Site Name</span>
=======
>>>>>>> master
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
<<<<<<< HEAD
      {isLoggedIn && (role === "manager" || role === "admin") && (
        <li className={`list-inline-item add_listing `} style={{padding:'10px',background:'red',color:'white',fontWeight:'bold',borderRadius:'10px',margin:'10px'}}>
          <Link href="/create-listing">
            <span className="flaticon-plus" style={{marginRight:'5px'}}></span>
            <span className="">Create Listing</span>
          </Link>
        </li>
=======
      {(isLoggedIn&&role==("admin"|"manager")) && (
        <Link
          href="/create-listing"
          className="btn btn-block btn-lg btn-thm circle"
          style={{ width: '90%', margin: '10px auto' }}
        >
          <span className="flaticon-plus"></span> Create Listing
        </Link>
>>>>>>> master
      )}
    </>
  );
};

export default MobileMenuContent;
