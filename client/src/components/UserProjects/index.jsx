import React from "react";

const UserProjects = ({ option, edit, onClickProjects , deleteProject }) => {
  return (
    <div
      className="block "
      style={{ height: "auto", width: "40%", float: "left" }}
    >
      <h1
        className="title is-4 has-text-white"
        style={{ textAlign: "left", float: "left" }}
      >
        Projects
      </h1>
      {edit && (
        <button
          className="add-btn grow"
          onClick={onClickProjects}
          style={{ margin: "-9px 0px 0px 15px" }}
        >
          +
        </button>
      )}
      {option.map((projectName, index) => {
        index = projectName._id;
        return (
          <a href={projectName.url} >
          <li
            className="column is-12 has-text-white"
            style={{ color: "white", display: "block", float: "left" , textDecoration : "underline"}}
            key={index}
          >
            {projectName.name}
            {edit && (
              <button
                className="add-btn grow"
                onClick={deleteProject}
                value={index}
                style={{ margin: "-9px 15px 0px 0px", float: "left" }}
              >
                -
              </button>
            )}
          </li>
          </a>
        );
      })}
    </div>
  );
};

export default UserProjects;

//  {/* <select style={{width : "100%" , height : "40px" , backgroundColor : "transparent" , borderBlockColor : "white" , marginBottom : "15px" }} >
//       <option selected value={none}></option>
//       <option value={option1} style={{color : "white"}} >{option1}</option>
//       <option value={option2}>{option2}</option>
//       <option value={option3}>{option3}</option>
//       <option value={option4}>{option4}</option>
//       <option value={option5}>{option5}</option>
//     </select> */}
