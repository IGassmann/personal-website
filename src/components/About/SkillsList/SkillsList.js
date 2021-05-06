import React from 'react';
import SkillItem from './SkillItem';

const SkillsList = ({ skills: { product, infrastructure } }) => (
  <>
    <h2>Skills</h2>
    <div className="flex flex-wrap justify-between -mt-l">
      <div className="mt-l mr-[40px]">
        <h3>Product</h3>
        <ul>
          {product.map(skill => <SkillItem skill={skill} key={skill.name} />)}
        </ul>
      </div>
      <div className="mt-l">
        <h3>Infrastructure</h3>
        <ul>
          {infrastructure.map(skill => {
            return <SkillItem skill={skill} key={skill.name}/>;
          })}
        </ul>
      </div>
    </div>
  </>
);

export default SkillsList;