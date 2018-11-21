import React from 'react'
import Layout from '../../components/Layout'
import Appointments from '../../components/pages/Medic/Appointments'

const home = () => (
  <Layout userRole="medic" userGender="male">
    <Appointments />
  </Layout>
)

export default home
