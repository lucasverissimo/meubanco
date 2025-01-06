import { BrowserRouter } from 'react-router'
import { RoutesApp } from './routes'

import { AppContextProvider  } from './contexts/AppContext'

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <RoutesApp />
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App
