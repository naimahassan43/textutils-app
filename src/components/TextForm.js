import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked: "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "primary");
  };
  const handleLowClick = () => {
    // console.log("uppercase was clicked: "+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "primary");
  };
  const handleClearClick = () => {
    // console.log("uppercase was clicked: "+ text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared !", "warning");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "warning");
  };
  const [text, setText] = useState("");
  return (
    <div
      style={{
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#2d5e68" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows={8}
          />
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-info mx-2 my-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-secondary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Need {0.008 * text.split(" ").length} Minutes to read</p>
        <h4>Preview</h4>
        <p>
          {text.length > 0
            ? text
            : "Enter something into textbox to preview here..."}
        </p>
      </div>
    </div>
  );
}

export default TextForm;
