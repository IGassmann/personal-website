export default function YoutubePlaylist({ id }: JSX.YoutubePlaylistProps) {
  return <iframe
    className="w-full aspect-video"
    title="Embedded YouTube playlist"
    allowFullScreen
    src={`https://www.youtube-nocookie.com/embed/videoseries?list=${id}`}
    allow="autoplay; encrypted-media"
  />;
}
