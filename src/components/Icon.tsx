type IconProps = {
  icon: { viewBox: string; path: string };
};

export default function Icon({ icon }: IconProps) {
  return (
    <svg className="h-l w-l fill-fuchsia-600" viewBox={icon.viewBox}>
      <path d={icon.path} />
    </svg>
  );
}
