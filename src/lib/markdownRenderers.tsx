// @ts-nocheck
import Image from 'next/image';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const markdownRenderers = {
  code: ({language, value}: {language: string, value: string}) => {
    return <SyntaxHighlighter style={vscDarkPlus} language={language} children={value} />
  },
  leafDirective: ({ attributes, name }: { attributes: Record<string, any>, name: string}) => {
    if (name === 'figma') {
      return (
        <div className="aspect-w-3 aspect-h-4">
          <iframe
            className="border-0"
            allowFullScreen
            src={`https://www.figma.com/embed?embed_host=share&url=${attributes.url}`}
          />
        </div>
      );
    }
    if (name === 'youtube-playlist') {
      return (
        <div className="aspect-w-16 aspect-h-9">
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
      <div className="w-max max-w-full mx-auto">
        <Image src={image.url} alt={image.alt} height={height} width={width} />
      </div>
    );
  },
  paragraph: ({ children, node }) => {
    if (node.children[0].type === 'image') return markdownRenderers.image(node.children[0]);

    return <p>{children}</p>;
  },
  listItem: ({ children }) => (
      <>
        <li>{children}</li>
        <style jsx>{`
          li:before {
            content: "-";
            padding-right: 8px;
          }
      `}</style>
      </>
  ),
}

export default markdownRenderers;
