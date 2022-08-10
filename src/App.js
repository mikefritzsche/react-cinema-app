import './App.css';
import { useState } from 'react'
import { useFetch } from './useFetch'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  const [url, setUrl] = useState(null)
  // const myOptions = useMemo(() => ({ url }), [url])
  const { data } = useFetch({ url })

  return (
    <Provider store={store}>
      <div className="app">
        <h1>Setup React Redux</h1>
      </div>
    </Provider>
  );
}

export default App;
