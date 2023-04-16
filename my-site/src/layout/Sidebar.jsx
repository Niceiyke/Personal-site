import NavbarHead from "../components/navBarHeader";
import NavBarLinks from "../components/navBarLinks";

function Sidebar() {
  return (
    <div className="bg-[#040b14] pt-20 min-h-screen">
      <NavbarHead />
      <NavBarLinks/>
    </div>
  );
}

export default Sidebar;
