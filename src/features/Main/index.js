import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import HomeContainer from './containers/Home/index.jsx'

function Main(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={HomeContainer} />
    </Switch>
  )
}

export default Main

