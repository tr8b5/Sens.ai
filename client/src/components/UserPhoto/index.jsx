import React from "react";

const UserPhoto = ({ bottom, left, width, height, src, position }) => {
  return (
    <div
      className="circle"
      style={{
        position: "absolute",
        bottom: bottom,
        left: left,
        zIndex: "2",
        width: "300px",
        height: "300px",
        overflow: "hidden",
        display: "inline",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={src} alt="" style={{ borderRadius: "50%" , width: "300px", height: "300px"}} />
    </div>
  );
};

export default UserPhoto;

// overflow: hidden;
//  display: flex;
//  justify-content: center;
//  align-items: center;
