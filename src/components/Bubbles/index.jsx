import React from 'react';

const Bubbles = () => {
  const bubbles = [];

  for (let i = 0; i < 20; i++) {
    const size = Math.floor(Math.random() * 100) + 100;
    const delay = Math.floor(Math.random() * 8) + 1;
    const duration = Math.floor(Math.random() * 5) + 5;
    const left = Math.floor(Math.random() * 100) + 1;
    const top = Math.floor(Math.random() * 100) + 1;

    const style = {
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      left: `${left}%`,
      top: `${top}%`,
    };

    bubbles.push(<div className="bubble" style={style} key={i}></div>);
  }

  return <div className="bubbles">{bubbles}</div>;
};

export default Bubbles;