import InterestItem from '@/components/About/InterestItem';

type MainInterestsListProps = {
  mainInterests: string[];
};

export default function MainInterestsList({ mainInterests }: MainInterestsListProps) {
  return (
    <>
      <h2 className="my-4 text-2xl font-medium text-cyan-500">Main Interests</h2>
      <ul className="p-0">
        {mainInterests.map((interest) => (
          <InterestItem interest={interest} key={interest} />
        ))}
      </ul>
    </>
  );
}
