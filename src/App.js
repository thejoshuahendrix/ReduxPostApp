
import './App.css';

import { Provider } from 'react-redux';
import Posts from './components/Posts';
import Postform from './components/Postform';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Postform />
        <Posts />
      </header>
    </div>
    </Provider>
  );
}

export default App;
