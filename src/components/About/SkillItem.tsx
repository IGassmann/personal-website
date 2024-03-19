import Image from 'next/image';

type SkillItemProps = {
  name: string;
  iconPath: string;
  url: string;
};

export default function SkillItem({ iconPath, name, url }: SkillItemProps) {
  return (
    <li>
      <a
        href={url}
        className="flex items-center text-fuchsia-600 hover:text-cyan-500 focus:text-cyan-500"
      >
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
        <span className="ml-2 text-white">{name}</span>
      </a>
    </li>
  );
}
