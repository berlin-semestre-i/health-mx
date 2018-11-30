import React from 'react'
import { Tab, Grid, List } from 'semantic-ui-react'
import styled from 'styled-components'
import ValueItem from '../../../shared/ValueItem'
import CsvList from './CsvList'

const patientData = ( beneficiary ) => {
  return {
    menuItem: 'Información del paciente',

    render: () => {
      return (
        <React.Fragment>
          <TabPane attached={false} name="information">
            <TabHeader className="ui header">Información del paciente</TabHeader>
            <Grid>
              <Grid.Column mobile={16} computer={5}>
                <ValueItem keyName="Nombre(s)" value={beneficiary.firstName} />
                <ValueItem keyName="Apellido paterno" value={beneficiary.fatherLastName} />
                <ValueItem keyName="Apellido materno" value={beneficiary.motherLastName} />
                <ValueItem keyName="NSS" value={beneficiary.nss} />
                <ValueItem keyName="CURP" value={beneficiary.curp} />
                <ValueItem keyName="Clínica" value={beneficiary.clinic} />
                <ValueItem keyName="UMF" value={beneficiary.umf} />
                <ValueItem keyName="Dependientes" value={beneficiary.dependents} />
                <ValueItem keyName="Médico familiar" value={beneficiary.doctor} />
              </Grid.Column>
              <Grid.Column mobile={16} computer={6}>
                <ValueItem keyName="Antecedentes Quirúrgicos" value={<a href="#">Ver más</a>} />
                <div><b>Alergias: </b> <CsvList array={beneficiary.allergies} /></div>
                <div><b>Padecimientos: </b> <CsvList array={beneficiary.ailment} /></div>
              </Grid.Column>
              <Grid.Column mobile={16} computer={5}>
                <ValueItem keyName="AHD (Antecedentes Heredo Familiares)" value="" />
                <List bulleted items={['Diabetes tipo 2 (padre)', 'Cáncer de colon (abuelo)']} />
              </Grid.Column>
            </Grid>
          </TabPane>
        </React.Fragment>
      )
    },
  }
}

export default patientData

const TabPane = styled(Tab.Pane)`
  &.ui.segment {
    border: none;
    padding: 23px;
  }

  &[name="information"] .column>div:not(:last-child) {
    margin-bottom: 1rem;
  }
`
const TabHeader = styled.h3`
  &.ui.header {
    font-size: 12px;
    margin-bottom: 20px;
  }
`