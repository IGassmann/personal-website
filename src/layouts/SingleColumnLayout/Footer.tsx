import Profile from '@/components/Profile';

export default function Footer() {
  return (
    <footer className="max-w-[640px] border-t border-primary mx-auto pt-xxl">
      <Profile isInline />
    </footer>
  );
}
