type YoutubePlaylistProps = {
  id: string;
};

export default function YoutubePlaylist({ id }: YoutubePlaylistProps) {
  return (
    <iframe
      className="aspect-video w-full"
      title="Embedded YouTube playlist"
      allowFullScreen
      src={`https://www.youtube-nocookie.com/embed/videoseries?list=${id}`}
      allow="autoplay; encrypted-media"
    />
  );
}
