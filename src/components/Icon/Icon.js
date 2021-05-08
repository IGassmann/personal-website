import React from 'react';
const Icon = ({ icon }) => (
  <svg className="h-l w-l fill-current" viewBox={icon.viewBox}>
    <path d={icon.path} />
  </svg>
);

export default Icon;
