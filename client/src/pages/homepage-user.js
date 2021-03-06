import React, { useEffect, useState } from "react";
import Header from "../components/Header_Signed_In/index";
import RecruiterSection from "../components/RecruiterSection/index";
import axios from "axios";
// const id = "6036a59fba6a2a7814a525c4";

const idArray = ["6036a59fba6a2a7814a525c4" , "603e617c843f9e80046540de" , "603e62f2843f9e80046540df" , "603e65dd843f9e80046540e0"];

var randomID = Math.floor(Math.random()*idArray.length);

const id = idArray[randomID];

console.log(id)

function Homepage() {
  const [showTransition, setShowTransition] = useState({
    position: "absolute",
  });
  const [projectTitle, setProjectTitle] = useState("");
  const [userdata, setUserdata] = useState({
    name: "Loading Username...",
    bio: "Loading Bio...",
    src: "https://uploads-ssl.webflow.com/5fb3fc6bd1d36b4a29a77ac3/60408c28abcdabd07045d8bc_placeholder-male.gif",
    position: ["Loading Positions..."],
    Website: ["Loading Website..."],
    Ikigai: ["Loading Website..."],
  });
  const [showModal, setShowModal] = useState(false);
  const [showBioModal, setShowBioModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const toggleBioModal = () => {
    setShowBioModal((prev) => !prev);
  };

  useEffect(() => {
    axios.get("/api/recruiter/" + id).then((response) => {
      console.log(response.data);
      setUserdata({ ...userdata, ...response.data });
      setProjectTitle("");
    });
  }, []);

  const handleSubmit = () => {
    console.log(projectTitle);
  };


  return (
    <div
      className="userProfile"
      id="background"
      style={{ backgroundColor: "red", minHeight: "100vh" }}
    >
      <Header />
      {/* <UserTitle position="center" title={userdata.username} /> */}
      <RecruiterSection
        position="center"
        src={userdata.src}
        bio={userdata.bio}
        option={userdata.projects}
        id={userdata.id}
        projectTitle={projectTitle}
        company={userdata.company}
        name={userdata.name}
        website={userdata.website}
        onClick={toggleModal}
        onClickBio={toggleBioModal}
        onClickProjects={toggleModal}
        recruiterPosition={userdata.position}
      />
    </div>
  );
}

export default Homepage;
