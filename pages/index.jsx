import React, { PureComponent } from 'react'
import Login from '../components/pages/Login'
import { redirectIfAuthenticated } from '../utils/auth'

class HomePage extends PureComponent {

  componentDidMount() {
    redirectIfAuthenticated()
  }

  render() {
    return (
      <Login />
    )
  }
}

export default HomePage