import React from 'react'
import Layout from '../../components/Layout'

const home = () => (
  <Layout userRole="admin" userGender="male">
    <h1 className="ui header">Bienvenido Sr. Smith</h1>
  </Layout>
)

export default home
