import { Provider } from 'react-redux';
import { store } from '../app/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import SSRProvider from 'react-bootstrap/SSRProvider';

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
