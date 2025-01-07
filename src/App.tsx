import { BrowserRouter } from 'react-router'
import { RoutesApp } from './routes'

import { AppContextProvider  } from './contexts/AppContextProvider'

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
