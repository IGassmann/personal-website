export default function FigmaFile({ url }: JSX.FigmaFileProps) {
  return <iframe
    className="border-0 w-full aspect-[3/4]"
    title="Embedded Figma file"
    allowFullScreen
    src={`https://www.figma.com/embed?embed_host=share&url=${url}`}
  />;
}
