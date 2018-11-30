import React, { PureComponent } from 'react'
import Layout from '../../components/Layout'
import { Header } from 'semantic-ui-react'
import { redirectIfNotAuthenticated } from '../../utils/auth'

class Home extends PureComponent {

  componentDidMount() {
    redirectIfNotAuthenticated()
  }

  render() {
    return (
      <Layout userRole="beneficiary" userGender="male">
        <Header as="h1">Bienvenido Morty Smith</Header>
      </Layout>
    )
  }
}

export default Home
