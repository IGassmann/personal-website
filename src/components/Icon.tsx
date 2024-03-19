type IconProps = {
  icon: { viewBox: string; path: string };
};

export default function Icon({ icon }: IconProps) {
  return (
    <svg className="h-4 w-4 fill-fuchsia-600" viewBox={icon.viewBox}>
      <path d={icon.path} />
    </svg>
  );
}
