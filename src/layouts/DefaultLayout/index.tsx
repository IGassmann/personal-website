import Sidebar from '@/layouts/DefaultLayout/Sidebar';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="mx-auto my-8 max-w-5xl px-4 md:grid md:grid-cols-[295px,1fr] md:gap-[20px] md:px-8">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
