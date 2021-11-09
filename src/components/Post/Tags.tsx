import React from 'react';

type TagsProps = {
  tags: string[];
};

const Tags: React.VFC<TagsProps> = ({ tags }) => (
  <div>
    <ul className="m-0 -mx-s p-0 pt-l">
      {tags &&
        tags.map((tag) => (
          <li className="inline px-s text-secondary" key={tag}>
            #{tag}
          </li>
        ))}
    </ul>
  </div>
);

export default Tags;
