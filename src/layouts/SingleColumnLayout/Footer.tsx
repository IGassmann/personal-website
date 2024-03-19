import Profile from '@/components/Profile';

export default function Footer() {
  return (
    <footer className="max-w-2xl border-t border-cyan-500 mx-auto pt-8">
      <Profile isInline />
    </footer>
  );
}
