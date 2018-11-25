import React from 'react'
import Layout from '../../components/Layout'
import { Header } from 'semantic-ui-react'

const home = () => (
  <Layout userRole="nurse" userGender="female">
    <Header as="h1">Bienvenida Srita. Summer Smith</Header>
  </Layout>
)

export default home
