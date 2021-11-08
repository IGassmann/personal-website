import React from 'react';

type InterestItemProps = {
  interest: string
}

const InterestItem: React.VFC<InterestItemProps> = ({ interest }) => (
  <li>
    - <span className="text-secondary" >{`#${interest}`}</span>
  </li>
);

export default InterestItem;
