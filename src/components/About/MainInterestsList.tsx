import InterestItem from '@/components/About/InterestItem';

type MainInterestsListProps = {
  mainInterests: string[];
};

export default function MainInterestsList({ mainInterests }: MainInterestsListProps) {
  return (
    <>
      <h2>Main Interests</h2>
      <ul className="p-0">
        {mainInterests.map((interest) => (
          <InterestItem interest={interest} key={interest} />
        ))}
      </ul>
    </>
  );
}
