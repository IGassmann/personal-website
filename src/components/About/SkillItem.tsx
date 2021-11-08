import Image from 'next/image';
import React from 'react';

type SkillItemProps = {
  name: string
  iconPath: string
  url: string
};

const SkillItem: React.VFC<SkillItemProps> = ({ iconPath, name, url, }) => (
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
