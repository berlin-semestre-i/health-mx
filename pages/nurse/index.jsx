import React from 'react'
import Layout from '../../components/Layout'
import DoctorDashboard from '../../components/pages/Medic/Dashboard'

const home = () => (
  <Layout userRole="nurse" userGender="female">
    <DoctorDashboard userRole="nurse"/>
  </Layout>
)

export default home