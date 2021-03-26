import styles from '@/components/Post/Post.module.scss';
import Image from 'next/image';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const markdownRenderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter style={vscDarkPlus} language={language} children={value} />
  },
  paragraph: paragraph => {
    const { node } = paragraph;

    const {
      type,
      value
    } = node.children[0];

    if (type === 'image') {
      const image = node.children[0];

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
    }

    const figmaEmbeddingLinkRegex = /https:\/\/([\w\.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;

    if (type === 'inlineCode' && value.match(figmaEmbeddingLinkRegex)) {
      return <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} allowFullScreen height="480" width="640" src={`https://www.figma.com/embed?embed_host=igassmann&url=\${figmaURL}`} />;
    }

    return <p>{paragraph.children}</p>;
  },
}

export default markdownRenderers;