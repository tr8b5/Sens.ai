import React from "react";
import ProjectsForm from "../ProjectsForm/index";
import "./index.css";

const Modal = ({
  showModal,
  setShowModal,
  submitProject,
  projectTitle,
  setProject,
  modalTitle,
}) => {
  const active = showModal ? "modal is-active" : "modal";
  return showModal ? (
    <div className={active}>
      <div className="modal-background" onClick={setShowModal}></div>
      <div className="modal-card">
        <section className="sensai-modal">
          <h1
            className="title"
            style={{ textAlign: "center", color: "orange" }}
          >
            {modalTitle}
          </h1>
         
          <ProjectsForm
            submitProject={submitProject}
            projectTitle={projectTitle}
            setProject={setProject}
            setShowModal={setShowModal}
          />
        </section>
        {/* <footer className="">
        <button className="button is-success">Save changes</button>
        <button className="button" onClick={setShowModal}>Cancel</button>
      </footer> */}
      </div>
    </div>
  ) : null;
};

export default Modal;
