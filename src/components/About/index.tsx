import ReactMarkdown from 'react-markdown';

import MainInterestsList from '@/components/About/MainInterestsList';
import SkillsList from '@/components/About/SkillsList';

type AboutProps = {
  skills: React.ComponentPropsWithoutRef<typeof SkillsList>;
  mainInterests: string[];
  content: string;
};

export default function About({
  content,
  mainInterests,
  skills: { product, infrastructure },
}: AboutProps) {
  return (
    <div className="-mt-4">
      <h2 className="my-4 text-2xl font-medium text-cyan-500">Introduction</h2>
      <ReactMarkdown>{content}</ReactMarkdown>
      <SkillsList {...{ product, infrastructure }} />
      <MainInterestsList mainInterests={mainInterests} />
    </div>
  );
}
