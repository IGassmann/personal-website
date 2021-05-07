import Image from 'next/image';
import React from 'react';

const SkillItem = ({ skill: { iconPath, name, url, }, }) => (
  <li>
    <a href={url} className="flex items-center">
      <Image
        src={iconPath}
        width={16}
        height={16}
        alt={name}
      />
      <span className="ml-m text-body-text-color">{name}</span>
    </a>
  </li>
);

export default SkillItem;