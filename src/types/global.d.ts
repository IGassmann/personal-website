import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'figma-file': FigmaFileProps;
      'youtube-playlist': YoutubePlaylistProps;
    }

    interface FigmaFileProps extends React.Attributes {
      url: string;
    }

    interface YoutubePlaylistProps extends React.Attributes {
      id: string;
    }
  }
}
