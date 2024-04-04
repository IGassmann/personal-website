import Image, { type ImageProps } from 'next/image';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import CopyButton from '@/components/CopyButton';
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/social-icons';
import covalentLogo from '@/images/logos/covalent-logo.png';
import inngestLogo from '@/images/logos/inngest-logo.png';
import odeonLogo from '@/images/logos/odeon-logo.png';
import synthesisLogo from '@/images/logos/synthesis-logo.png';
import { getAllArticles, type Article } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';

function JSONFeedIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="m4.7 5.04.68-.68L6.8 5.79l-.35.34c-.42.44-.71.84-.85 1.19s-.15.7-.02 1.04c.13.34.4.72.81 1.13l2.02 2.04c.56.55.87 1.1.91 1.65.05.55-.16 1.1-.63 1.67l.22.22c1.12-.93 2.25-.81 3.4.34l2.26 2.26c.6.6 1.15.9 1.65.9.5-.01 1.06-.33 1.7-.96l.35-.36 1.43 1.45-.66.68c-1.11 1.11-2.16 1.7-3.13 1.75-.97.06-1.96-.41-2.97-1.4l-1.91-1.94a4.3 4.3 0 0 0-1.08-.84 1.2 1.2 0 0 0-.92-.09c-.3.1-.6.31-.94.65l-.02-.02a1.3 1.3 0 0 1-.9.3c-.34 0-.63-.12-.88-.36a1.23 1.23 0 0 1-.37-.88c0-.34.1-.64.31-.9.5-.5.72-.96.68-1.38-.05-.43-.37-.96-.98-1.58L4.3 11.04c-.98-.98-1.44-1.94-1.37-2.9.07-.95.66-1.98 1.77-3.1Z"
        className="fill-zinc-200 stroke-zinc-400 dark:fill-zinc-200/20 dark:stroke-zinc-500"
      />
      <path
        d="M18.45 4.02c-.37 0-.68.12-.93.38-.26.25-.38.56-.38.91 0 .36.12.66.37.91s.55.37.9.37c.36 0 .67-.12.92-.37.26-.25.38-.55.38-.9 0-.36-.12-.67-.37-.92a1.2 1.2 0 0 0-.9-.38ZM15.4 7.06c-.38 0-.7.12-.94.38-.25.25-.37.56-.37.92 0 .35.12.66.37.91.25.26.55.38.9.38.36 0 .67-.12.92-.38.26-.25.38-.56.38-.91 0-.36-.12-.66-.37-.91a1.3 1.3 0 0 0-.9-.4Zm-3.07 3.04c-.36 0-.67.12-.92.38-.26.25-.38.56-.38.92 0 .35.12.66.38.91.25.26.56.38.91.38.36 0 .67-.12.92-.38.26-.25.38-.56.38-.91 0-.36-.12-.66-.38-.91a1.33 1.33 0 0 0-.9-.4Z"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Article({ article }: { article: Article }) {
  return (
    <Card as="article">
      <Card.Title href={'slug' in article ? `/articles/${article.slug}` : article.url}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<'a'> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  );
}

function JSONFeed() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <JSONFeedIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to Date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Add my <s>RSS</s> JSON Feed to your favorite reader to get notified when I publish something
        new.
      </p>
      <div className="mt-6 flex">
        <p
          aria-label="JSON Feed URL"
          className="flex-auto truncate rounded-md bg-zinc-100 px-3 py-[calc(theme(spacing.2)-1px)] text-zinc-800 sm:text-sm dark:bg-zinc-700/[0.15] dark:text-zinc-200"
        >
          {process.env.NEXT_PUBLIC_SITE_URL}/feed.json
        </p>
        <CopyButton
          value={`${process.env.NEXT_PUBLIC_SITE_URL}/feed.json`}
          className="ml-4 flex-none"
        />
      </div>
    </form>
  );
}

interface Role {
  company: string;
  title: string;
  logo: ImageProps['src'];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  const startLabel = typeof role.start === 'string' ? role.start : role.start.label;
  const startDate = typeof role.start === 'string' ? role.start : role.start.dateTime;

  const endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex size-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="size-7 rounded-full object-cover" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time> <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  const resume: Role[] = [
    {
      company: 'Inngest',
      title: 'Software Engineer',
      logo: inngestLogo,
      start: '2023',
      end: '2024',
    },
    {
      company: 'Synthesis',
      title: 'Software Engineer',
      logo: synthesisLogo,
      start: '2022',
      end: '2022',
    },
    {
      company: 'Covalent',
      title: 'Founding Engineer',
      logo: covalentLogo,
      start: '2021',
      end: '2022',
    },
    {
      company: 'Odeon',
      title: 'Co-Founder',
      logo: odeonLogo,
      start: '2018',
      end: '2020',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="/resume.pdf" variant="secondary" className="group mt-6 w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}
export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 4);

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Product Engineer who cares about the details
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Igor, a Product Engineer and ex-founder based in Switzerland. I’m passionate about
            building products and craftsmanship. I believe that details matter in the pursuit of
            creating product experiences that people love and cherish for years to come. My
            aspiration is to bring such experiences to humanity as a whole and to work with teams
            that share the same vision.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400" />
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/i_gassmann"
              aria-label="Follow on X"
              icon={XIcon}
            />
            <SocialLink
              href="https://github.com/IGassmann"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/igassmann/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={'slug' in article ? article.slug : article.url} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <JSONFeed />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
