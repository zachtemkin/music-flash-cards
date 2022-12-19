import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./flashCard.scss";

const FlashCard = ({ note }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    isRevealed ? setIsRevealed(false) : setIsRevealed(true);
  };

  useEffect(() => {
    setIsLoading(true);
    setIsRevealed(false);

    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  }, [note]);

  return (
    <div
      className={`flash-card ${!isLoading ? "is-visible" : "is-leaving"}`}
      onClick={() => handleClick()}>
      <div className={`card-contents answer ${isRevealed ? "is-visible" : ""}`}>
        {note.name}
      </div>
      <div
        className={`card-contents question ${!isRevealed ? "is-visible" : ""}`}>
        <img src={note.image} alt={note.name} />
      </div>
    </div>
  );
};

FlashCard.propTypes = {
  note: PropTypes.object,
};

export default FlashCard;
