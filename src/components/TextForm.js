import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked: "+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("uppercase was clicked: "+ text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows={8}
          />
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Need {0.008 * text.split(" ").length} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
