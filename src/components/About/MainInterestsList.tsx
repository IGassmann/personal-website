import InterestItem from '@/components/About/InterestItem';

type MainInterestsListProps = {
  mainInterests: string[];
};

export default function MainInterestsList({ mainInterests }: MainInterestsListProps) {
  return (
    <>
      <h2 className="text-cyan-500 font-medium text-2xl my-4">Main Interests</h2>
      <ul className="p-0">
        {mainInterests.map((interest) => (
          <InterestItem interest={interest} key={interest} />
        ))}
      </ul>
    </>
  );
}
