import Sidebar from '@/layouts/DefaultLayout/Sidebar';

type DefaultLayoutProps = {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return <div
    className="max-w-[1019px] my-xxl mx-auto px-l sm:grid sm:grid-cols-[295px,1fr] sm:gap-[20px] sm:px-xxl">
    <Sidebar/>
    <main>{children}</main>
  </div>;
}
