import Footer from './Footer';

type SingleColumnLayoutProps = {
  children: React.ReactNode;
};

export default function SingleColumnLayout({ children }: SingleColumnLayoutProps) {
  return (
    <div className="max-w-5xl my-8 mx-auto px-4 md:px-8">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
