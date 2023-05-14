import { AppProps } from 'next/app';
import '../styles/global.css';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Script
      id="gtag-script"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-P5R4N7VV20"
    />
    <Script id="gtag-layer">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-P5R4N7VV20');
      `}
    </Script>
    <Component {...pageProps} />
  </>
);

export default MyApp;
