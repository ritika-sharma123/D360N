import React, { useRef } from "react";
import styled from "styled-components";
import Inbox from "../../images/Inbox.png";

const UploadFile = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const UploadButton = styled.button`
  width: 100%;
  padding : 10px
  background-color:#FAFAFA;
  border: 1px solid #D9D9D9;
  cursor: pointer;
  .only-json {
    color: #716d6d;
  }
  .drag-file {
    color: #000;
  }
`;
const UploadFiles = ({ text1, text2, getFile }) => {
  const hiddenFileInput = useRef(null);
  const processFiles = (files) => {
    const file = files.target.files[0].name;
    const extension = file.split(".");
    if (extension[extension.length - 1] !== "json") {
      alert("file should only json format");
    }
    getFile(files);
  };
  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };
  return (
    <UploadFile>
      <form>
        <input
          type="file"
          onChange={processFiles}
          ref={hiddenFileInput}
          style={{ display: "none" }}
        />
        <UploadButton onClick={handleClick}>
          <img src={Inbox} alt="v" />
          <p className="drag-file">{text1}</p>
          <p className="only-json">{text2}</p>
        </UploadButton>
      </form>
    </UploadFile>
  );
};

export default UploadFiles;
