import React from 'react';

const YoutubePlaylist: React.VFC<JSX.YoutubePlaylistProps> = ({ id }) => (
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      title="Embedded YouTube playlist"
      allowFullScreen
      src={`https://www.youtube-nocookie.com/embed/videoseries?list=${id}`}
      allow="autoplay; encrypted-media"
    />
  </div>
);

export default YoutubePlaylist;
