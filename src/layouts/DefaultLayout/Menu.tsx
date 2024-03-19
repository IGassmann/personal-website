import Link from 'next/link';

type MenuProps = {
  menu: { label: string; path: string }[];
};

export default function Menu({ menu }: MenuProps) {
  return (
    <nav>
      <ul className="p-0 my-6">
        {menu.map((item) => (
          <li className="my-4 sm:my-2" key={item.path}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
