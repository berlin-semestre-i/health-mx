import React from 'react'
import Layout from '../../components/Layout'
import DoctorDashboard from '../../components/pages/Medic/Dashboard'

const home = () => (
  <Layout userRole="medic" userGender="male">
    <DoctorDashboard userRole="medic"/>
  </Layout>
)

export default home
