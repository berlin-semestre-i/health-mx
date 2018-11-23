import React from 'react'
import Layout from '../../components/Layout'
import Consultation from '../../components/pages/Medic/Consultation'

const home = () => (
  <Layout userRole="medic" userGender="male">
    <Consultation />
  </Layout>
)

export default home
