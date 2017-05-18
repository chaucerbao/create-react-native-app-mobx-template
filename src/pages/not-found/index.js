// Dependencies
import React, { Component } from 'react'
import { Text } from 'react-native'

// Components
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'
import PageBody from '../../components/page-body'

// Page
class NotFound extends Component {
  render () {
    return (
      <Layout>
        <PageHeader>Not found</PageHeader>

        <PageBody>
          <Text>Page not found</Text>
        </PageBody>
      </Layout>
    )
  }
}

// Exports
export default NotFound
