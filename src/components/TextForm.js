import React from "react";

function TextForm(props) {
  return (
    <div>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Example textarea
          </label>
          <textarea className="form-control" id="myBox" rows={8} />
        </div>
      </div>
    </div>
  );
}

export default TextForm;
