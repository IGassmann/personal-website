import MainInterestsList from '@/components/About/MainInterestsList/MainInterestsList';
import SkillsList from '@/components/About/SkillsList/SkillsList';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './About.module.scss';

const About = ({ about: { content, mainInterests, skills } }) => (
  <div className={styles.about}>
    <ReactMarkdown children={content} />
    <SkillsList skills={skills} />
    <MainInterestsList mainInterests={mainInterests} />
  </div>
);

export default About;