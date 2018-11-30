import React from 'react'
import Layout from '../../../components/Layout'
import VirtualDesk from '../../../components/pages/Beneficiary/VirtualDesk'

const home = () => (
  <Layout userRole="beneficiary" userGender="male">
    <VirtualDesk/>
  </Layout>
)

export default home
