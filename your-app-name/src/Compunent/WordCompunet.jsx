import React from "react";

function WordCompunet({ text }) {
  const countWords = (text) => {
    const trimmedText = text.trim();
    if (trimmedText === "") {
      return 0;
    }
    const words = trimmedText.split(/\s+/);
    return words.length;
  };

  const countCharacters = (text) => {
    return text.replace(/\s/g, "").length;
  };

  const countParagraphs = (text) => {
    const paragraphs = text.split(/\n/);
    return paragraphs.length;
  };
  return (
    <div className="item-box">
      <div className="item-element">
        <h2>Word</h2>
        <p>Word count: {countWords(text)}</p>
      </div>
      <div className="item-element">
        <h2>Letter</h2>
        <p>letter count: {countCharacters(text)}</p>
      </div>
      <div className="item-element">
        <h2>Paragraph</h2>
        <p>Paragraph count: {countParagraphs(text)}</p>
      </div>
    </div>
  );
}

export default WordCompunet;
