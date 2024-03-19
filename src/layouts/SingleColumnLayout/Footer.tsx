import Profile from '@/components/Profile';

export default function Footer() {
  return (
    <footer className="max-w-[640px] border-t border-cyan-500 mx-auto pt-8">
      <Profile isInline />
    </footer>
  );
}
