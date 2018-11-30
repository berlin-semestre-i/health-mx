import React from 'react'
import Layout from '../../components/Layout'
import BeneficiaryDashboard from '../../components/pages/Beneficiary/Dashboard'

const home = () => (
  <Layout userRole="beneficiary" userGender="male">
    <BeneficiaryDashboard/>
  </Layout>
)

export default home
