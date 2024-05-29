import Image, { type ImageProps } from 'next/image';
import { MDXComponents } from 'mdxts/components';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...MDXComponents,
    // eslint-disable-next-line jsx-a11y/alt-text -- The alt prop is already within ImageProps
    Image: (props: ImageProps) => <Image {...props} />,
  } satisfies MDXComponents;
}
