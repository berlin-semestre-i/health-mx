import React, { PureComponent } from 'react'
import Layout from '../../components/Layout'
import DoctorDashboard from '../../components/pages/Medic/Dashboard'
import { redirectIfNotAuthenticated } from '../../utils/auth'

class Home extends PureComponent {

  componentDidMount() {
    redirectIfNotAuthenticated()
  }

  render() {
    return (
      <Layout userRole="medic" userGender="male">
        <DoctorDashboard />
      </Layout>
    )
  }
}

export default Home
