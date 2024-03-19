import Sidebar from '@/layouts/DefaultLayout/Sidebar';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="max-w-5xl my-8 mx-auto px-4 sm:grid sm:grid-cols-[295px,1fr] sm:gap-[20px] sm:px-8">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
