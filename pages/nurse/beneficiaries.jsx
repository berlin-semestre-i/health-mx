import React from 'react'
import Layout from '../../components/Layout'
import Beneficiaries from '../../components/pages/Nurse/Beneficiaries'

const home = () => (
  <Layout userRole="nurse" userGender="female">
    <Beneficiaries />
  </Layout>
)

export default home
