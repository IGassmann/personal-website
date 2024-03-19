import Profile from '@/components/Profile';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-2xl border-t border-cyan-500 pt-8">
      <Profile isInline />
    </footer>
  );
}
