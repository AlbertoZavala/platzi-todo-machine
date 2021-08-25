import React from 'react';

import './TodoIcon.css';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

function TodoIcon({ type, color = 'gray', onClick }) {

  const iconTypes = {
    "check": color => (
      <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
      <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
    ),
  };

  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon }
