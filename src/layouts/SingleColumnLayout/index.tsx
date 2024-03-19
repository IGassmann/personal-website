import Footer from './Footer';

type SingleColumnLayoutProps = {
  children: React.ReactNode;
}

export default function SingleColumnLayout({ children }: SingleColumnLayoutProps) {
  return <div className="max-w-[1019px] my-xxl mx-auto px-l sm:px-xxl">
    <main>{children}</main>
    <Footer/>
  </div>;
}
