import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleUpClick = (textcase) => {
    setText(text.toUpperCase());
  }

  const handleLwClick = (textcase) => {
    setText(text.toLowerCase());
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1> {props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLwClick}>Convert to Lowercase</button>
      </div>
      <div className="container my-3">
        <h3>Your text summery</h3>
        <p>{text ? text.split(' ').length : 0 } words, {text.length} characters</p>
        <p>{text ? 0.008 * text.split(' ').length : 0 } Minutes read</p>
        <br/>
        <h3>Preview</h3>
        <br />
        <p>{text}</p>
      </div>
    </>
  )
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired
}
