import React from 'react';
import ReactMarkdown from 'react-markdown';
import SkillsList from './SkillsList';
import MainInterestsList from './MainInterestsList';

const About = ({ about: { content, mainInterests, skills } }) => (
  <div className="-mt-l">
    <ReactMarkdown children={content} />
    <SkillsList skills={skills} />
    <MainInterestsList mainInterests={mainInterests} />
  </div>
);

export default About;