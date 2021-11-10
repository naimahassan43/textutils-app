import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "primary");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "primary");
  };
  const handleClearClick = () => {
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
    document.getSelection().removeAllRanges();
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
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(113 151 159)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows={8}
          />
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2 my-2"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-2 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <hr />
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(" ").filter((elem) => {
              return elem.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          Need{" "}
          {0.008 *
            text.split(" ").filter((elem) => {
              return elem.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <hr />
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </div>
  );
}

export default TextForm;
