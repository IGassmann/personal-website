import Link from 'next/link';

export default function BlogHomeButton() {
  return (
    <Link
      href="/"
      className="text-fuchsia-600 hover:text-cyan-500 focus:text-cyan-500 block w-max py-1.5 px-6 text-center border border-fuchsia-900 rounded-full mx-auto hover:focus:text-cyan-500 lg:sticky lg:m-0 lg:top-8"
    >
      All Posts
    </Link>
  );
}
