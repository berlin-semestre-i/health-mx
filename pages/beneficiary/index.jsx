import React, { PureComponent } from 'react'
import Layout from '../../components/Layout'
import { redirectIfNotAuthenticated } from '../../utils/auth'
import BeneficiaryDashboard from '../../components/pages/Beneficiary/Dashboard'

class Home extends PureComponent {
  componentDidMount() {
    redirectIfNotAuthenticated()
  }

  render() {
    return (
      <Layout userRole="beneficiary" userGender="male">
        <BeneficiaryDashboard/>
      </Layout>
    )
  }
}

export default Home
