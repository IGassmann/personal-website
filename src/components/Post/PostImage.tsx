import Image from 'next/image';
import React from 'react';
import { NormalComponents } from 'react-markdown/lib/complex-types';

const PostImage: NormalComponents['img'] = ({ src, alt, title }) => {
  if (src === undefined) throw new TypeError('"src" is not defined');

  const imageWithDimensionsRegex = /^\d*x\d*$/;
  const defaultDimensions = [640, 480];
  const [width, height] =
    typeof title === 'string' && title.match(imageWithDimensionsRegex)
      ? title.split('x').map((string) => parseInt(string, 10))
      : defaultDimensions;

  return (
    <div className="w-max max-w-full mx-auto">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default PostImage;
