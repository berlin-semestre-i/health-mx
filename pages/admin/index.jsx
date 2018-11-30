import React from 'react'
import Layout from '../../components/Layout'
import { Header } from 'semantic-ui-react'

const home = () => (
  <Layout userRole="admin" userGender="male">
    <Header as="h1">Bienvenido Sr. Smith</Header>
  </Layout>
)

export default home
