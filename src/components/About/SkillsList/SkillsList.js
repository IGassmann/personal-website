import React from 'react';
import SkillItem from './SkillItem';

const SkillsList = ({ skills: { product, infrastructure } }) => (
  <>
    <h2>Skills</h2>
    <div className="flex flex-wrap justify-between -mt-l">
      <div className="mt-l mr-[40px]">
        <h3 className="mt-0">Product</h3>
        <ul className="p-0">
          {product.map(skill => <SkillItem skill={skill} key={skill.name} />)}
        </ul>
      </div>
      <div className="mt-l">
        <h3 className="mt-0">Infrastructure</h3>
        <ul className="p-0">
          {infrastructure.map(skill => {
            return <SkillItem skill={skill} key={skill.name}/>;
          })}
        </ul>
      </div>
    </div>
  </>
);

export default SkillsList;