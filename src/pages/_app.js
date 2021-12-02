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
  const [isPreLoading, setIsPreLoading] = useState(false);

  useEffect(() => {
    setIsPreLoading(true);
    setTimeout(() => {
      setIsPreLoading(false);
    }, 7000);
  },[]);

  return (
      isPreLoading ? 
        (<div className="preloaderWrapper">
            <img
                className="d-block w-100 preLoader-max-width"
                src="/IIT-1.png"
                alt="Second slide"
            />
            <div className="loader">
              <div className="loading">
              </div>
            </div>
          </div>
          ):  
          (
            <SSRProvider>
              <Provider store={store}>
                <Component {...pageProps} />
              </Provider>
            </SSRProvider>
          )
    
  )
}

export default MyApp;
