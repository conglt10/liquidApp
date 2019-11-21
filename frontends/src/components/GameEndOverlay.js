import React from 'react';

let GameEndOverlay = ({ board, onRestart }) => {
  let contents = '';
  if (board.hasWon()) {
    contents = 'Good Job!';
  } else if (board.hasLost()) {
    contents = 'Game Over';
  }
  if (!contents) {
    return null;
  }
  return (
    <div className='overlay'>
      <p className='message'>{contents}</p>
      <button className='saveGame' onClick={onRestart}>
        Save Game
      </button>
    </div>
  );
};

export default GameEndOverlay;
