import React, { Component } from 'react'
import Layout from '../components/Layout/Medic/index'
import { Input } from 'semantic-ui-react'

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <h1 className="ui header">Header 1</h1>
        <h3 className="ui header">Header 3</h3>
        <Input placeholder="hello world"/>
      </Layout>
    )
  }
}

export default HomePage