import React, { Component } from 'react'
import Layout from '../components/Layout/Medic/index'
import { Input, Button, Card, Grid } from 'semantic-ui-react'
import Link from 'next/link'
import styled from 'styled-components'

const ExampleGrid = styled(Grid)`
  &&&& {
    width: 250px;
  }
`

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <h1 className="ui header">Header 1</h1>
        <h3 className="ui header">Header 3</h3>
        <Card>
          <Card.Content>
            <ExampleGrid>
              <Grid.Row>
                <Card.Header>
                  Elliot FU
                </Card.Header>
              </Grid.Row>
              <Grid.Row>
                <p>Paragraph Example</p>
              </Grid.Row>
              <Grid.Row>
                <Link as="" href=""><p>Link example</p></Link>
              </Grid.Row>
              <Grid.Row>
                <Button secondary>Action button</Button>
              </Grid.Row>
              <Grid.Row>
                <Button primary>Primary button</Button>
              </Grid.Row>
              <Grid.Row>
                <Input placeholder="Basic input"/>
              </Grid.Row>
            </ExampleGrid>
          </Card.Content>
        </Card>
      </Layout>
    )
  }
}

export default HomePage