import '@/styles/globals.css';
import Layouts from '@/components/layout';

export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />

    </Layouts>
  )
}
