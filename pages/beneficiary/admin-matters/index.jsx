import React from 'react'
import Layout from '../../../components/Layout'
import AdminMatters from '../../../components/pages/Beneficiary/AdminMatters'

const home = () => (
  <Layout userRole="beneficiary" userGender="male">
    <AdminMatters/>
  </Layout>
)

export default home
