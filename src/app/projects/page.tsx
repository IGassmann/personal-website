import { type Metadata } from 'next';
import Image from 'next/image';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import athemLogo from '@/images/logos/athem-logo.png';
import covalentLogo from '@/images/logos/covalent-logo.png';
import githubLogo from '@/images/logos/github-logo.svg';
import igorstirLogo from '@/images/logos/igorstir-logo.png';
import inngestLogo from '@/images/logos/inngest-logo.png';
import odeonLogo from '@/images/logos/odeon-logo.png';

const projects = [
  {
    name: 'Inngest',
    description: 'Web App - A dashboard for managing and monitoring durable functions and events.',
    link: {
      href: 'https://github.com/inngest/inngest/tree/main/ui/apps/dashboard/',
      label: 'github.com',
    },
    logo: inngestLogo,
  },
  {
    name: 'Odeon',
    description:
      'Web App - A video platform that allowed creators to join forces by bundling their subscriptions.',
    link: {
      href: 'https://www.linkedin.com/in/igassmann/details/experience/urn:li:fsd_profilePosition:(ACoAAAzO5DAB8u4NCNgwxGNt3gF0lZNQ3IX5Wg0,1350622780)/treasury/',
      label: 'linkedin.com',
    },
    logo: odeonLogo,
  },
  {
    name: 'Igor <> Stir',
    description: 'A website that I made just to pitch myself for a job.',
    link: { href: 'https://igor4stir.com/', label: 'igor4stir.com' },
    logo: igorstirLogo,
  },
  {
    name: 'Covalent',
    description:
      'Web App - A dashboard for creating and scheduling matchmaking programs for communities.',
    link: {
      href: 'https://www.linkedin.com/in/igassmann/details/experience/urn:li:fsd_profilePosition:(ACoAAAzO5DAB8u4NCNgwxGNt3gF0lZNQ3IX5Wg0,1908473790)/treasury/',
      label: 'linkedin.com',
    },
    logo: covalentLogo,
  },
  {
    name: 'Athem',
    description:
      'Creative Website - Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'https://www.athem.fr/', label: 'athem.fr' },
    logo: athemLogo,
  },
  {
    name: 'Web App Template',
    description:
      'A template for building web apps that I use to collect learnings and opinions on best practices and configurations.',
    link: { href: 'https://github.com/IGassmann/web-app-template', label: 'github.com' },
    logo: githubLogo,
  },
];

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve worked on over the years.',
};

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve worked on"
      intro="Here are some of the projects I’ve worked on over the years."
    >
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={project.logo} alt="" className="h-8 w-8 rounded-full object-cover" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-cyan-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
