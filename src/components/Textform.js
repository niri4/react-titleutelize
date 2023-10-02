import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleOnClick = () => {
    setText(text.toUpperCase());

  }
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <h1> {props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleOnClick}>Convert to Uppercase</button>
    </>
  )
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired
}
