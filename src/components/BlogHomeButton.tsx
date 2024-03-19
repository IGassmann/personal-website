import Link from 'next/link';

export default function BlogHomeButton() {
  return (
    <Link
      href="/"
      className="block w-max h-[42px] leading-[42px] px-6 text-center text-fuchsia-600 border border-fuchsia-900 rounded-[20px] mx-auto hover:focus:text-cyan-500 md:sticky md:m-0 md:top-[30px] md:left-[30px]"
    >
      All Posts
    </Link>
  );
}
