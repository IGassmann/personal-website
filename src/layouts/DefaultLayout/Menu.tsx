import Link from 'next/link';

type MenuProps = {
  menu: { label: string; path: string }[];
};

export default function Menu({ menu }: MenuProps) {
  return (
    <nav>
      <ul className="p-0 my-6">
        {menu.map((item) => (
          <li className="my-4 md:my-2" key={item.path}>
            <Link
              className="text-fuchsia-600 hover:text-cyan-500 focus:text-cyan-500"
              href={item.path}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
