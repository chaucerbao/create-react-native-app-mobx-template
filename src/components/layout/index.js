// Dependencies
import React, { Component } from 'react'
import { StatusBar, View, Text } from 'react-native'
import PropTypes from 'prop-types'

// Components
import SiteHeader from '../site-header'
import SiteFooter from '../site-footer'
import Link from '../link/styled'

// Component
class Layout extends Component {
  componentWillMount () {
    StatusBar.setHidden(true)
  }

  render () {
    return (
      <View>
        <SiteHeader>
          <Link to='/'>Home</Link>
          <Link to='/not-found'>Not Found</Link>
        </SiteHeader>
        {this.props.children}
        <SiteFooter>
          <Text>Footer</Text>
        </SiteFooter>
      </View>
    )
  }
}

// Property validation
Layout.propTypes = {
  children: PropTypes.node.isRequired
}

// Exports
export default Layout
