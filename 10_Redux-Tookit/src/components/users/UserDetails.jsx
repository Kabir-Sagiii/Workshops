import React from "react";
import { useSelector } from "react-redux";

function UserDetails() {
  const data = useSelector((storedata) => {
    return storedata.user;
  });
  return (
    <div className="user-details">
      <h1>User Details</h1>
      <h3>
        Name : <span>{data.name}</span>
      </h3>
    </div>
  );
}

export default UserDetails;
