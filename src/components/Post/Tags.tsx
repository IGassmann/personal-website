type TagsProps = {
  tags: string[];
};

export default function Tags({ tags }: TagsProps) {
  return (
    <div>
      <ul className="m-0 -mx-s p-0 pt-l">
        {tags &&
          tags.map((tag) => (
            <li className="inline px-s text-fuchsia-600" key={tag}>
              #{tag}
            </li>
          ))}
      </ul>
    </div>
  );
}
