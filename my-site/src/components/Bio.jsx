import avatar from "../assets/avatar.png";

function Bio() {
  return (
    <div>
      <div className="flex bg-gray-300">
        <img src={avatar} alt="bio" className="border rounded-md  " />
      </div>
    </div>
  );
}

export default Bio;
