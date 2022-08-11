import './App.scss';
import { useState } from 'react'
import { useFetch } from './useFetch'
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './components/header/Header'
import Main from './components/main/Main';

const App = () => {
  const [url, setUrl] = useState(null)
  // const myOptions = useMemo(() => ({ url }), [url])
  const { data } = useFetch({ url })

  return (
    <Provider store={store}>
      <Header />
      <div className="app">
        <Main/>
      </div>
    </Provider>
  );
}

export default App;
