import React from 'react';

const Tags = ({ tags }) => (
  <div>
    <ul className="m-0 -mx-s p-0 pt-l">
      {tags && tags.map((tag, index) => (
        <li className="inline px-s text-secondary" key={index}>#{tag}</li>
      ))}
    </ul>
  </div>
);

export default Tags;
