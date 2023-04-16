import React, { useContext, useRef } from "react";
import { AppContext } from "../context/Appcontext.context";

export default function TextForm(props) {
  let { text, setText } = useContext(AppContext);
  console.log(text);
  let textareaInputref = useRef();

  function clickHandlar(params) {
    const inputstr = textareaInputref.current.value;
    if (inputstr.trim().length !== 0) {
      setText(inputstr.toUpperCase());
      textareaInputref.current.value = inputstr.toUpperCase();
    }
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          ref={textareaInputref}
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={clickHandlar}>
        Convert to UpperCase
      </button>
    </div>
  );
}
