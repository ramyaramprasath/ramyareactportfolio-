import React from "react";
import ContactFile from "./ContactFile";
import "./FormFile.css";

const FormFile = () => {
  return (
    <>
      <div className="form-container">
        {/* <span className="close-btn">X</span> */}
        <div className="form-content-left">
          <img
            src="https://i.pinimg.com/736x/8b/e9/32/8be932ff34e1d564695e05673334a3d8.jpg"
            alt="left"
            className="form-img"
          />
        </div>
        <ContactFile />
      </div>
    </>
  );
};

export default FormFile;
