import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleOnClick = (event) => {
    if (event.target.dataset.id === "uppercase"){
      setText(text.toUpperCase());
    }
    else if (event.target.dataset.id === "lowercase")  {
      setText(text.toLowerCase());
    }

    else if (event.target.dataset.id === "textclear")  {
      setText("");
    }
      
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1> {props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" data-id="uppercase" onClick={handleOnClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" data-id="lowercase" onClick={handleOnClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" data-id="textclear" onClick={handleOnClick}>Clear text</button>
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
