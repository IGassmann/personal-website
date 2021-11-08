import React from 'react';
import ReactMarkdown from 'react-markdown';
import SkillsList from '@/components/About/SkillsList';
import MainInterestsList from '@/components/About/MainInterestsList';


type AboutProps = {
  title: string
  skills: React.ComponentPropsWithoutRef<typeof SkillsList>
  mainInterests: string[]
  content: string
}

const About: React.VFC<AboutProps> = ({ content, mainInterests, skills }) => (
  <div className="-mt-l">
    <ReactMarkdown children={content} />
    <SkillsList {...skills} />
    <MainInterestsList mainInterests={mainInterests} />
  </div>
);

export default About;
