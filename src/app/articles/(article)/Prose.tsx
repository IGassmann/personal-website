import { twMerge } from 'tailwind-merge';

export function Prose({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div className={twMerge(className, 'prose dark:prose-invert')} {...props} />;
}
