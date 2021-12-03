import { Provider } from 'react-redux';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';

import { store } from '../app/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { useEffect, useState } from 'react';

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
  const [opacity, setOpacity] = useState(0);
  const [isPreLoading, setIsPreLoading] = useState(false);

  useEffect(() => {
    setIsPreLoading(true);
    setOpacity(1);
    setTimeout(() => {
      setIsPreLoading(false);
    }, 7000);
  },[]);

  return (
      isPreLoading ? 
        (<div className="preloaderWrapper">
            <img
                className="d-block w-100 preLoader-max-width"
                src="/IIT-2.png"
                alt="International Institue of Theravada"
            />
            <div className="loader">
              <div className="loading">
              </div>
            </div>
          </div>
        ):  
        (
          <div style={{ opacity: opacity}}>
            <SSRProvider>
              <Provider store={store}>
                <Component {...pageProps} />
              </Provider>
            </SSRProvider>
          </div>
        )
  )
}

export default MyApp;
