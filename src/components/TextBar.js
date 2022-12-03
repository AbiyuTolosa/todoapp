import React from "react";

const TextBar = () => {
  return (
    <div className="text-bar">
      <div className="text-bar-wrapper">
        <input type={"text"} className="text-box" />
        <button className="add-btn">
          <i className="fa fa-add add-icon"></i>
        </button>
      </div>
    </div>
  );
};

export default TextBar;
