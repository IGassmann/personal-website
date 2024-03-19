import Image from 'next/image';

type SkillItemProps = {
  name: string;
  iconPath: string;
  url: string;
};

export default function SkillItem({ iconPath, name, url }: SkillItemProps) {
  return (
    <li>
      <a href={url} className="flex items-center">
        <Image
          src={iconPath}
          width={16}
          height={16}
          alt={name}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <span className="ml-m text-white">{name}</span>
      </a>
    </li>
  );
}
