import React from 'react';

const FigmaFile: React.VFC<JSX.FigmaFileProps> = ({ url }) => (
  <div className="aspect-w-3 aspect-h-4">
    <iframe
      title="Embedded Figma file"
      className="border-0"
      allowFullScreen
      src={`https://www.figma.com/embed?embed_host=share&url=${url}`}
    />
  </div>
);

export default FigmaFile;
