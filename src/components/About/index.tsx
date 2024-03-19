import ReactMarkdown from 'react-markdown';
import SkillsList from '@/components/About/SkillsList';
import MainInterestsList from '@/components/About/MainInterestsList';

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
      <h2 className="text-cyan-500 font-medium text-2xl my-4">Introduction</h2>
      <ReactMarkdown>{content}</ReactMarkdown>
      <SkillsList {...{ product, infrastructure }} />
      <MainInterestsList mainInterests={mainInterests} />
    </div>
  );
}
