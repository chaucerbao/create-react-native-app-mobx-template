// Dependencies
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { inject, observer } from 'mobx-react/native'
import PropTypes from 'prop-types'

// Components
import Layout from '../../components/layout'
import PageHeader from '../../components/page-header'
import PageBody from '../../components/page-body'
import Link from '../../components/link/styled'

// Page
class Home extends Component {
  async componentDidMount () {
    try {
      await this.props.stores.user.getAll()
    } catch (err) {}
  }

  render () {
    return (
      <Layout>
        <PageHeader>Homepage</PageHeader>

        <PageBody>
          <Text>List of names fetched from</Text>

          <Link external to='https://jsonplaceholder.typicode.com/'>
            an API
          </Link>

          <View>
            {this.props.stores.user.all.map(user => (
              <Text key={user.id}>{user.name}</Text>
            ))}
          </View>
        </PageBody>
      </Layout>
    )
  }
}

// Property validation
Home.propTypes = {
  stores: PropTypes.shape({
    user: PropTypes.object.isRequired
  }).isRequired
}

// Exports
export default inject('stores')(observer(Home))
