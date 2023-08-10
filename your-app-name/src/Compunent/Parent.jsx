import React, { useState} from 'react'
import TextUp from './TextUp';
import WordCompunet from './WordCompunet';
import './Paren.css';
function Parent() {
    const [text, setText] = useState("");

    const handleTextChange = (event) => {
      setText(event.target.value);
    };
  
    const handleUppercaseClick = () => {
      const uppercaseText = text.toUpperCase();
      setText(uppercaseText);
    };
  
    const handleLowercaseClick = () => {
      const lowercaseText = text.toLowerCase();
      setText(lowercaseText);
    };



  return (
    <div className="container">
    <h2>Word counter</h2>
    <WordCompunet text={text}/>
    <TextUp
      text={text}
      handleTextChange={handleTextChange}
      handleUppercaseClick={handleUppercaseClick}
      handleLowercaseClick={handleLowercaseClick}
    />{" "}
  </div>
  );
}

export default Parent