import { Link } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DescriptionIcon from "@mui/icons-material/Description";
import ListAltIcon from "@mui/icons-material/ListAlt";
import StorageIcon from "@mui/icons-material/Storage";
import ContactsIcon from "@mui/icons-material/Contacts";

function NavBarLinks() {
  return (
    <div className="mt-4 pl-10 hidden lg:block ">
      <Link className="flex items-center mb-4 text-gray-200  hover:text-blue-500">
        <div className=" ">
          <HomeIcon fontSize="large" className="" />
        </div>
        <span className="pl-2 text-white"> Home </span>
      </Link>
      <Link className="flex items-center mb-4 text-gray-200 hover:text-blue-500 ">
        <div className="">
          <PermIdentityIcon fontSize="large" />
        </div>

        <h1 className="pl-2 text-white"> About </h1>
      </Link>
      <Link className="flex items-center mb-4 text-gray-200 hover:text-blue-500 ">
        <div className="">
          {" "}
          <DescriptionIcon fontSize="large" />
        </div>

        <h1 className="pl-2 text-white"> Resume</h1>
      </Link>
      <Link className="flex items-center mb-4 text-gray-200 hover:text-blue-500 ">
        <div className="">
          {" "}
          <ListAltIcon fontSize="large" />
        </div>

        <h1 className="pl-2 text-white"> Portfolio </h1>
      </Link>
      <Link className="flex items-center mb-4 text-gray-200 hover:text-blue-500 ">
        <div className="">
          {" "}
          <StorageIcon fontSize="large" />
        </div>

        <h1 className="pl-2 text-white"> Services </h1>
      </Link>
      <Link className="flex items-center mb-4 text-gray-200 hover:text-blue-500 ">
        <div className="">
          {" "}
          <ContactsIcon fontSize="large" />
        </div>

        <h1 className="pl-2 text-white"> Contact </h1>
      </Link>
    </div>
  );
}

export default NavBarLinks
