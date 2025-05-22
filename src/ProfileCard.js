import { useState } from "react";

const ProfileCard = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-4 shadow rounded max-w-sm border">
      <h2 className="text-xl font-bold">Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
      <h3>Location: {props.location}</h3>
      
      <button
        className="mt-4 px-4 py-2 bg-slate-700 text-white rounded"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "Hide Hobbies" : "Show Hobbies"}
      </button>

      {toggle && <p className="mt-2 text-gray-700">Loves building cool React apps!</p>}
    </div>
  );
};

export default ProfileCard;
