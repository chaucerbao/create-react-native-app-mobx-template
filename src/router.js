// Dependencies
import React from 'react'
import {
  NativeRouter,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-native'
import { Provider } from 'mobx-react/native'
import PropTypes from 'prop-types'

// Pages
import Home from './pages/home'
import NotFound from './pages/not-found'

// Provided router components
const router = {
  Route,
  Link,
  Redirect
}

// Router
const Router = ({ stores }) => {
  return (
    <NativeRouter>
      <Provider router={router} stores={stores}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    </NativeRouter>
  )
}

// Property validation
Router.propTypes = {
  stores: PropTypes.object.isRequired
}

// Exports
export default Router
