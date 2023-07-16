import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store} >
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
  
)
