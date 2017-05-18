// Dependencies
import React from 'react'
import { Linking, View, Text } from 'react-native'
import { inject } from 'mobx-react/native'
import PropTypes from 'prop-types'

// Helper
const openExternalURL = url => () =>
  Linking.canOpenURL(url).then(isSupported => {
    if (!isSupported) {
    }

    return Linking.openURL(url)
  })

// Component
const Link = ({ router, ...props }) => {
  const isExternalLink = /^\w+:\/\//.test(props.to)
  const { children, ...linkProps } = props

  return isExternalLink
    ? <View>
      <Text children={children} onPress={openExternalURL(props.to)} />
    </View>
    : <router.Link {...linkProps}><Text children={children} /></router.Link>
}

// Property validation
Link.propTypes = {
  router: PropTypes.shape({
    Link: PropTypes.func.isRequired
  }).isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.node.isRequired
}

// Exports
export default inject('router')(Link)
