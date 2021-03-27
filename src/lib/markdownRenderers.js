import styles from '@/components/Post/Post.module.scss';
import Image from 'next/image';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const markdownRenderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter style={vscDarkPlus} language={language} children={value} />
  },
  leafDirective: ({ attributes, name }) => {
    if (name === 'figma') {
      return (
        <iframe
          allowFullScreen
          style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
          height="480"
          width="100%"
          src={`https://www.figma.com/embed?embed_host=share&url=\\${attributes.url}`}
        />
      );
    }
  },
  image: image => {
    const imageWithDimensionsRegex = /^\d*x\d*$/;
    const defaultDimensions = [640, 480];
    const [width, height] =
      typeof image.title === 'string' && image.title.match(imageWithDimensionsRegex)
        ? image.title.split('x').map(string => parseInt(string))
        : defaultDimensions;

    return (
      <div className={styles.image}>
        <Image src={image.url} alt={image.alt} height={height} width={width} />
      </div>
    );
  },
  paragraph: ({ children, node }) => {
    if (node.children[0].type === 'image') return markdownRenderers.image(node.children[0]);

    return <p>{children}</p>;
  },
}

export default markdownRenderers;