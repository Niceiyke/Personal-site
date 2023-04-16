import { Avatar } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import avatar from "../assets/profile.png";

function NavbarHead() {
  return (
    <div>
      <div className="">
        <Avatar
          src={avatar}
          sx={{ height: "100px", width: "100px" }}
          alt="IOYOM"
          className="mx-auto border-8"
        />
        <h1 className="pl-4 text-white text-center text-3xl font-black mt-2">
          Ikechukwu David{" "}
        </h1>
      </div>
      <div className="flex justify-center mt-2 ">
        <div className="bg-gray-700   rounded-full w-10">
          <FacebookRoundedIcon
            fontSize="large"
            className=" text-white pl-1 hover:text-blue-400"
          />
        </div>

        <div className="bg-gray-700   rounded-full w-10">
          <TwitterIcon
            fontSize="large"
            className=" text-white pl-1 hover:text-blue-400"
          />
        </div>
        <div className="bg-gray-700   rounded-full w-10">
          <InstagramIcon
            fontSize="large"
            className=" text-white pl-1 hover:text-blue-400"
          />
        </div>
        <div className="bg-gray-700   rounded-full w-10">
          <WhatsAppIcon
            fontSize="large"
            className=" text-white pl-1 hover:text-blue-400"
          />
        </div>
      </div>
    </div>
  );
}

export default NavbarHead;
