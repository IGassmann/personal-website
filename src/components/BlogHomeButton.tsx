import React from 'react';
import Link from 'next/link';

export default function BlogHomeButton() {
  return <Link
    href="/"
    className="block w-max h-[42px] leading-[42px] px-xl text-center text-secondary border border-secondary-dark rounded-[20px] mx-auto hover:focus:text-primary md:sticky md:m-0 md:top-[30px] md:left-[30px]">

    All Posts

  </Link>;
}
