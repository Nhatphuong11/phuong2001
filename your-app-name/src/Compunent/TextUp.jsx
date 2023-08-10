import React from 'react'

function TextUp({  text,
    handleTextChange,
    handleUppercaseClick,
    handleLowercaseClick,}) {
  return (
    <div>
    <div className="element-textarea">
      <textarea
        className="textarea"
        name=""
        id=""
        cols="100"
        rows="10"
        value={text}
        onChange={handleTextChange}
      ></textarea>
    </div>
    <div className="item-btn">
      <button className="btn" onClick={handleUppercaseClick}>
        Click to Uppercase
      </button>
      <button className="btn" onClick={handleLowercaseClick}>
        Click to Lowercase
      </button>
    </div>
  </div>
  )
}

export default TextUp