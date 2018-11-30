import React from 'react'
import Layout from '../../components/Layout'
import Beneficiaries from '../../components/shared/Beneficiaries'

const home = () => (
  <Layout userRole="medic" userGender="male">
    <Beneficiaries userRole="medic" />
  </Layout>
)

export default home
