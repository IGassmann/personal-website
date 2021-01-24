import type { AppProps } from 'next/app';
import '../assets/scss/init.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}