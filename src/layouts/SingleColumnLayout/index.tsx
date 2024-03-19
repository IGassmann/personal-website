import Footer from './Footer';

type SingleColumnLayoutProps = {
  children: React.ReactNode;
};

export default function SingleColumnLayout({ children }: SingleColumnLayoutProps) {
  return (
    <div className="mx-auto my-8 max-w-5xl px-4 md:px-8">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
