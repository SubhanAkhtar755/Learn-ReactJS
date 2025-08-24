import "./index.scss";
import DropZone from "./Dropzone";
import { LuFiles } from "react-icons/lu";
import { FiFolderPlus } from "react-icons/fi";
import { IoLogoHtml5 } from "react-icons/io";
import { BsFiletypeCss } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";

function FilesList({ files, onDrop }) {
  return (
    <div className="Files-list">
      {files.map((v, i) => {
        let icon;
        switch (v.type) {
          case "text/html":
            icon = <IoLogoHtml5 />;
            break;
          case "text/css":
            icon = <BsFiletypeCss />;
            break;
          case "text/javascript":
            icon = <FaNodeJs />;
            break;
          default:
            icon = <LuFiles />;
            break;
        }
     

        return (
          <div key={i} className="box">
            {v.type.indexOf("image") !== -1 ? (
              <img className="imagesBox" src={URL.createObjectURL(v)} alt="" />
            ) : (
              <>
                {icon}
                <span>
                  {v.name.slice(0, 10)}
                  <b>{v.name.slice(v.name.lastIndexOf("."))}</b>
                </span>
              </>
            )}
          </div>
        );
      })}

      <div className="Drag1">
        <DropZone
          onDrop={onDrop}
          title={
            <div className="Drag">
              <FiFolderPlus />
              Drag and drop Mr7Share
            </div>
          }
        />
      </div>
    </div>
  );
}
export default FilesList;
