import React from 'react';

const YoutubePlaylist: React.VFC<JSX.YoutubePlaylistProps> = ({ id }) => (
  <iframe
    className="w-full aspect-video"
    title="Embedded YouTube playlist"
    allowFullScreen
    src={`https://www.youtube-nocookie.com/embed/videoseries?list=${id}`}
    allow="autoplay; encrypted-media"
  />
);

export default YoutubePlaylist;
