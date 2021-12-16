import React from 'react';

const FigmaFile: React.VFC<JSX.FigmaFileProps> = ({ url }) => (
  <iframe
    className="border-0 w-full aspect-[3/4]"
    title="Embedded Figma file"
    allowFullScreen
    src={`https://www.figma.com/embed?embed_host=share&url=${url}`}
  />
);

export default FigmaFile;
