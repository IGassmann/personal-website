import React from 'react';
import SkillItem from '@/components/About/SkillsList/SkillItem/SkillItem';
import styles from '@/components/About/SkillsList/SkillsList.module.scss';

const SkillsList = ({ skills: { product, infrastructure } }) => (
  <>
    <h2>Skills</h2>
    <div className={styles.skillsList}>
      <div>
        <h3>Product</h3>
        <ul>
          {product.map(skill => <SkillItem skill={skill}/>)}
        </ul>
      </div>
      <div>
        <h3>Infrastructure</h3>
        <ul>
          {infrastructure.map(skill => <SkillItem skill={skill}/>)}
        </ul>
      </div>
    </div>
  </>
);

export default SkillsList;