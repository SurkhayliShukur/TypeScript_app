import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/persist/reduxConfig.tsx"
import './index.css'
import { GlobalContextProvider } from './Context/GlobalContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalContextProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </GlobalContextProvider>
)
