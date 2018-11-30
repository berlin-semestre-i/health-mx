import React from 'react'
import Layout from '../../components/Layout'
import Beneficiaries from '../../components/shared/Beneficiaries'

const home = () => (
  <Layout userRole="nurse" userGender="female">
    <Beneficiaries userRole="nurse" />
  </Layout>
)

export default home
