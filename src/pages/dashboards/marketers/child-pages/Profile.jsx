import React from "react";

const Profile = () => {
  return (
    <div className="dashBoardOutLet">
      <div className="flex flex-col gap-5">
        <div className="flex gap-7 w-full ">
          <span className="w-24">Name</span>
          <span className="w-48">userName</span>
          <span className="w-24">Edit</span>
        </div>
        <div className="flex gap-7 w-full ">
          <span className="w-24">Email</span>
          <span className="w-48">User Email</span>
          <span className="w-24">Edit</span>
        </div>
        <div className="flex gap-7 w-full ">
          <span className="w-24">Phone</span>
          <span className="w-48">PH: 0101010101010</span>
          <span className="w-24">Edit</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
