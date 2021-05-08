import React from 'react';
import Icon from '@/components/Icon';
import { getContactHref } from '@/lib/getContactHref';
import { getIcon } from '@/lib/getIcon';

const SocialLinks = ({ socialLinks }) => (
  <div>
    <ul className="flex p-0 space-x-[16px]">
      {Object.keys(socialLinks).map((name) => (
        <li className="flex items-center justify-center w-[42px] h-[42px] border border-secondary-dark rounded-[20px]" key={name}>
          <a href={getContactHref(name, socialLinks[name])}>
            <Icon icon={getIcon(name)} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialLinks;
