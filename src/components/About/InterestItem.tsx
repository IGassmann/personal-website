type InterestItemProps = {
  interest: string;
};

export default function InterestItem({ interest }: InterestItemProps) {
  return (
    <li>
      - <span className="text-secondary">{`#${interest}`}</span>
    </li>
  );
}
