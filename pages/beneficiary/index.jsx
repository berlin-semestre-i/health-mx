import React, { PureComponent } from 'react'
import Layout from '../../components/Layout'
import { Header } from 'semantic-ui-react'
import { redirectIfNotAuthenticated } from '../../utils/auth'
import BeneficiaryDashboard from '../../components/pages/Beneficiary/Dashboard'

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
