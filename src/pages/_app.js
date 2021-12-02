import { Provider } from 'react-redux';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';

import { store } from '../app/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import SSRProvider from 'react-bootstrap/SSRProvider';

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: '',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError',progress.finish);

const MyApp = ({ Component, pageProps }) => {
  return (
    <SSRProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  )
}

export default MyApp
