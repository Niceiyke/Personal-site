
import NavbarHead from "../components/navBarHeader";
import NavBarLinks from "../components/navBarLinks";

function Sidebar() {
  return (
    <div className="bg-black md:pt-4 lg:min-h-screen">
      <NavbarHead />
      <NavBarLinks/>
   
      
    </div>
  );
}

export default Sidebar;
