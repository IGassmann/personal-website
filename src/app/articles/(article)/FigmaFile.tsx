type FigmaFileProps = {
  url: string;
};

export default function FigmaFile({ url }: FigmaFileProps) {
  return (
    <iframe
      className="aspect-[3/4] w-full border-0"
      title="Embedded Figma file"
      allowFullScreen
      src={`https://www.figma.com/embed?embed_host=share&url=${url}`}
    />
  );
}
