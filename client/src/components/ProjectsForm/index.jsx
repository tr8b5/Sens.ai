import React from "react";

const ProjectsForm = ({
  submitProject,
  projectTitle,
  setProject,
  setShowModal,
}) => {
  return (
    <div
      className="column "
      style={{
        height: "auto",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {/* Input / Name */}

      <div className="field">
        <label className="label has-text-white">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            value={projectTitle}
            onChange={setProject}
            style={{ backgroundColor: "transparent", color: "white" }}
          />
        </div>
      </div>

      

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link"
            onClick={submitProject}
            style={{
              backgroundColor: "transparent",
              border: "solid",
              borderColor: "white",
              borderWidth: "1px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsForm;
