import Image from 'next/image';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from '@/components/Post/Post.module.scss';

export const markdownRenderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter style={vscDarkPlus} language={language} children={value} />
  },
  leafDirective: ({ attributes, name }) => {
    if (name === 'figma') {
      return (
        <iframe
          className={styles.figmaEmbed}
          allowFullScreen
          src={`https://www.figma.com/embed?embed_host=share&url=${attributes.url}`}
        />
      );
    }
    if (name === 'youtube-playlist') {
      return (
        <div className={styles.youtubePlaylistEmbedContainer}>
          <iframe
            allowFullScreen
            src={`https://www.youtube-nocookie.com/embed/videoseries?list=${attributes.id}`}
            allow="autoplay; encrypted-media"
          />
        </div>
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