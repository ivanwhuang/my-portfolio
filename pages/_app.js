import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/App.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
