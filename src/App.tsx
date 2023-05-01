import { Provider } from 'react-redux';
import { Home } from './pages/Home';
import './sass/index.scss';
import { store } from './redux/store';

export function App() {
  return (
    <Provider store={store}>
      <div className='bg-dark min-vh-100'>
        {/* NavBar */}
        <div className='text-primary fs-2 p-2'>
          <b>Crypto App</b>
        </div>

        {/* Main */}
        <Home />
      </div>
    </Provider>

  );
}

