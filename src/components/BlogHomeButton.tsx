import Link from 'next/link';

export default function BlogHomeButton() {
  return (
    <Link
      href="/"
      className="block w-max py-1.5 px-6 text-center text-fuchsia-600 border border-fuchsia-900 rounded-full mx-auto hover:focus:text-cyan-500 md:sticky md:m-0 md:top-8"
    >
      All Posts
    </Link>
  );
}
