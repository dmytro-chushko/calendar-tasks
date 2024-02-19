import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import { Loader } from './components';
import { useAppSelector } from './redux/hooks';
import { getIsLoading } from './redux/reducers/is-loading.reducer';
import { MainRouter } from './router';

function App() {
  const isShown = useAppSelector(getIsLoading);

  return (
    <>
      <Loader isShown={isShown} />
      <MainRouter />
      <ToastContainer />
    </>
  );
}

export default App;
