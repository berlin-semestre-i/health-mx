import React, { Component } from 'react'
import Layout from '../components/Layout/Beneficiary/index'

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <h1 className="ui header">Header 1</h1>
        <h3 className="ui header">Header 3</h3>
      </Layout>
    )
  }
}

export default HomePage