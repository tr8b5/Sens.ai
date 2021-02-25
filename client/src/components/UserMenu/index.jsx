import React from "react";
import UserPhoto from '../UserPhoto/index'
import UserBio from '../UserBio/index'
import UserProjects from '../UserProjects/index'

const UserMenu = ({ width, height, src, position }) => {
  return (
    <div className="column is-11 is-flex" style={{ justifyContent: position }}>
        <UserPhoto src={src} />
      <section
        className="container"
        style={{ backgroundColor: "black", height: "55vh", width: "100%" , borderRadius : "100px" }}
      >
          <UserBio Description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum neque non blanditiis dolore voluptate iure perferendis ut, nemo quidem, voluptas, voluptatibus ab nihil! Exercitationem, saepe maiores natus distinctio maxime odio." />
          <UserProjects Description="Project " />

      </section>
    </div>
  );
};

export default UserMenu;
