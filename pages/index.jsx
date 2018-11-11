import React, { PureComponent } from 'react'
import Layout from '../components/Layout'
import Login from '../components/Login'
import { Input, Button, Card, Grid } from 'semantic-ui-react'
import Link from 'next/link'
import styled from 'styled-components'

class HomePage extends PureComponent {
  render() {
    return (
      <Login />
      // <Layout userRole="medic">
      //   <h1 className="ui header">Header 1</h1>
      //   <h3 className="ui header">Header 3</h3>
      //   <Card>
      //     <Card.Content>
      //       <Card.Header>
      //         Elliot FU
      //       </Card.Header>
      //       <ExampleGrid>
      //         <Grid.Row>
      //           <p>Paragraph Example</p>
      //         </Grid.Row>
      //         <Grid.Row>
      //           <Link as="" href=""><a>Link example</a></Link>
      //         </Grid.Row>
      //         <Grid.Row>
      //           <Button secondary>Action button</Button>
      //         </Grid.Row>
      //         <Grid.Row>
      //           <Button primary>Primary button</Button>
      //         </Grid.Row>
      //         <Grid.Row>
      //           <Input placeholder="Basic input"/>
      //         </Grid.Row>
      //       </ExampleGrid>
      //     </Card.Content>
      //   </Card>
      // </Layout>
    )
  }
}

export default HomePage

// const ExampleGrid = styled(Grid)`
//   &&&& {
//     width: 250px;
//   }
// `