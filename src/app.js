import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './styles/style.scss'
import { hot } from 'react-hot-loader'

//✅ Lazy load - Code splitting
const Main = lazy(()=> import('./features/Main'))

function App() {
  return (
    <Suspense fallback={()=> <div>Loading </div>}>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Main} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default hot(module)(App)
