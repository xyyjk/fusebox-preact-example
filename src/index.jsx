import { h, render } from 'preact';
import App from './App.jsx';
import './index.css';

render(<App />, document.getElementById('root'));

// Set up HMR re-rendering.
FuseBox.addPlugin({
  hmrUpdate: ({ type, path, content }) => {
    if (type === 'js') {
      window.location.reload();
      return true;
    }
  }
});
