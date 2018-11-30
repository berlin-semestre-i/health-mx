import React from 'react'
import Layout from '../../../components/Layout'
import ClinicalMatters from '../../../components/pages/Beneficiary/ClinicalMatters'

const home = () => (
  <Layout userRole="beneficiary" userGender="male">
    <ClinicalMatters/>
  </Layout>
)

export default home
