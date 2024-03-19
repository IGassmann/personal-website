type TagsProps = {
  tags: string[];
};

export default function Tags({ tags }: TagsProps) {
  return (
    <div>
      <ul className="m-0 -mx-1 p-0 pt-4">
        {tags &&
          tags.map((tag) => (
            <li className="inline px-1 text-fuchsia-600" key={tag}>
              #{tag}
            </li>
          ))}
      </ul>
    </div>
  );
}
