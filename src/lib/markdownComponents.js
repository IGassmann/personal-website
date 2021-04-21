import Image from 'next/image';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from '@/components/Post/Post.module.scss';

export const markdownComponents = {
  code: ({node, inline, className, children, ...props}) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props} />
    )
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
  img: ({ title, alt, src}) => {
    const imageWithDimensionsRegex = /^\d*x\d*$/;
    const defaultDimensions = [640, 480];
    const [width, height] =
      typeof title === 'string' && title?.match(imageWithDimensionsRegex)
        ? title.split('x').map(string => parseInt(string))
        : defaultDimensions;

    return (
      <div className={styles.image}>
        <Image src={src} alt={alt} height={height} width={width} />
      </div>
    );
  },
  p: ({children, node }) => {
    if (node.children[0].tagName === 'img') return markdownComponents.img(children[0].props);

    return <p>{children}</p>;
  },
}

export default markdownComponents;