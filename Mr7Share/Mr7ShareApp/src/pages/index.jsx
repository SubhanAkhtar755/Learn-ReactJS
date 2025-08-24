import Logo from "../images/logo.svg";
import Grey from "../images/text-grey.svg";
import GreyColor from "../images/text-color.svg";
import Files from "../images/files-grey.svg";
import FilesColor from "../images/files-color.svg";
import TextArea from "../components/Textarea";
import CardButton from "../components/button";
import DropZone from "../components/Dropzone";
import FilesList from "../components/FilesList";
import { FaDownload } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineWebStories } from "react-icons/md";
import { Link } from "react-router-dom";
import "./css/style.scss";
import { useState } from "react";
function HomePage() {
  const [type, setType] = useState("text");
  const [textValue, setTextValue] = useState("");
  const [files, setFiles] = useState([]);
  const onDrop = (acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
    setFiles([...files, ...acceptedFiles]);
  };
  return (
    <div className="container">
      <div className="header-bar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="menu-bar">
          <ul>
            <li>How it works </li>
            <li>Download </li>
            <li>Upgrade</li>
            <li>Feedback </li>
            <li className="menu-btn">Login / Register</li>
          </ul>
        </div>
      </div>
      <div className="main-card">
        <div className="card-sidebar">
          <div onClick={() => setType("text")}>
            <img src={type === "text" ? GreyColor : Grey} alt="" />
          </div>
          <div onClick={() => setType("file")}>
            <img src={type === "file" ? FilesColor : Files} alt="" />
          </div>
        </div>
        <div className="card-container">
          {type === "text" ? (
            <div className="text-section">
              <h1>text</h1>
              <div className="resize-section">
                <TextArea
                  value={textValue}
                  placeholder="Type something..."
                  onChange={(e) => setTextValue(e.target.value)}
                />
              </div>
              <div className="save-btn">
                <span>Clear</span>
                <CardButton disabled={textValue ? false : true} title="Save" />
              </div>
            </div>
          ) : (
            <div className="file-section">
              <div className="files-header">
                <h1>file</h1>
                <div className="files-btn">
                  <div className="Download">
                    <FaDownload />
                    Download All
                  </div>
                  <div className="Delete" onClick={() => setFiles([])}>
                    <MdDeleteSweep />
                    Delete All
                  </div>
                </div>
              </div>

              {files.length ? (
                <FilesList onDrop={onDrop} files={files} />
              ) : (
                <DropZone
                  onDrop={onDrop}
                  title={
                    <div>
                      Drag and drop any files up to 2 files, 5Mbs each or{" "}
                      <span>Browse Upgrade</span> to get more space
                    </div>
                  }
                />
              )}
            </div>
          )}
        </div>
      </div>
      <div></div>
      <div className="footer">
        <p>�� 2021 Mr7Share. All rights reserved.Made in Mr7.com with ❤️</p>
        <div className="social-media">
          <Link to={"/"}>
       
            <div className="facebook">
              <CiFacebook />
            </div>
          </Link>
          <Link to={"/"}>
          
            <div className="LinkIn">
              <CiLinkedin />
            </div>
          </Link>
          <Link to={"/"}>
         
            <div className="instagram">
              <FaInstagram />
            </div>
          </Link>
          <Link to={"/"}>
           
            <div className="linkedin">
              <MdOutlineWebStories />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
