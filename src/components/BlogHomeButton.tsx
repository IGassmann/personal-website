import Link from 'next/link';

export default function BlogHomeButton() {
  return (
    <Link
      href="/"
      className="mx-auto block w-max rounded-full border border-fuchsia-900 px-6 py-1.5 text-center text-fuchsia-600 hover:text-cyan-500 focus:text-cyan-500 hover:focus:text-cyan-500 lg:sticky lg:top-8 lg:m-0"
    >
      All Posts
    </Link>
  );
}
