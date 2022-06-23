import React from "react";

const CurrentUser = ({ name, id, license }) => {
  return (
    <div>
      <div>
        <p>Details:</p>
        <div>{name}</div>
        <div>{id}</div>
        has a license :{license ? "yes" : "no"}
      </div>
    </div>
  );
};

export default CurrentUser;
