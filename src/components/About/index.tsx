import React from 'react';
import ReactMarkdown from 'react-markdown';
import SkillsList from '@/components/About/SkillsList';
import MainInterestsList from '@/components/About/MainInterestsList';

type AboutProps = {
  skills: React.ComponentPropsWithoutRef<typeof SkillsList>;
  mainInterests: string[];
  content: string;
};

const About: React.VFC<AboutProps> = ({
  content,
  mainInterests,
  skills: { product, infrastructure },
}) => (
  <div className="-mt-l">
    <ReactMarkdown>{content}</ReactMarkdown>
    <SkillsList {...{ product, infrastructure }} />
    <MainInterestsList mainInterests={mainInterests} />
  </div>
);

export default About;
