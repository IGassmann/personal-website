import Image, { type ImageProps } from 'next/image';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // eslint-disable-next-line jsx-a11y/alt-text -- The alt prop is already within ImageProps
    Image: (props: ImageProps) => <Image {...props} />,
  };
}
