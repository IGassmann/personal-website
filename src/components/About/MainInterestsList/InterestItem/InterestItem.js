import React from 'react';

const InterestItem = ({ interest }) => (
  <li>
    - <span className="text-secondary" >{`#${interest}`}</span>
  </li>
);

export default InterestItem;