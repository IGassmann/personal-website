import React from 'react';
import SkillItem from '@/components/About/SkillItem';

type SkillItemProps = React.ComponentPropsWithoutRef<typeof SkillItem>;

type SkillsListProps = {
  product: SkillItemProps[];
  infrastructure: SkillItemProps[];
};

const SkillsList: React.VFC<SkillsListProps> = ({ product, infrastructure }) => (
  <>
    <h2>Skills</h2>
    <div className="flex flex-wrap justify-between -mt-l">
      <div className="mt-l mr-[40px]">
        <h3 className="mt-0">Product</h3>
        <ul className="p-0">
          {product.map(({ iconPath, name, url }) => (
            <SkillItem {...{ iconPath, name, url }} key={name} />
          ))}
        </ul>
      </div>
      <div className="mt-l">
        <h3 className="mt-0">Infrastructure</h3>
        <ul className="p-0">
          {infrastructure.map(({ iconPath, name, url }) => (
            <SkillItem {...{ iconPath, name, url }} key={name} />
          ))}
        </ul>
      </div>
    </div>
  </>
);

export default SkillsList;
