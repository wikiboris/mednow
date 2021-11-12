import Head from 'next/head';
import { GlobalStyles, css } from 'twin.macro';
import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from '~/app/store';
import NextNProgress from 'nextjs-progressbar';

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #fcfeff;
  }

  * {
    box-sizing: border-box;
  }
`;

const App = ({ Component, pageProps }: AppProps) => (
  <ReduxProvider store={store}>
    <Head>
      <title>
        Nextjs App with TypeScript, ESlint, Jest, Emotion, Tailwind and Twin
      </title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <GlobalStyles />
    <Global styles={globalStyles} />
    <NextNProgress
      color='#29D'
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
    <Component {...pageProps} />
  </ReduxProvider>
);

export default App;
