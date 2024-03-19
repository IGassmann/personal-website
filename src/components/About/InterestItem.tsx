type InterestItemProps = {
  interest: string;
};

export default function InterestItem({ interest }: InterestItemProps) {
  return (
    <li>
      - <span className="text-fuchsia-600">{`#${interest}`}</span>
    </li>
  );
}
