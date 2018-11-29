import React from 'react'
import styled from 'styled-components'
import Card from '../../../shared/Card'
import ValueItem from '../../../shared/ValueItem'

const Somatometry = ({somatometry}) => (
  <React.Fragment>
    <Card header="Somatometría Previa" iconName="pencil" iconColor="blue">
      <SomatometryData>
        <ValueItem keyName="Enfermero(a)" value={somatometry.nurse} />
      </SomatometryData>
      <SomatometryData>
        <ValueItem keyName="Estatura" value={`${somatometry.header} cm`} />
      </SomatometryData>
      <SomatometryData>
        <ValueItem keyName="Peso" value={`${somatometry.weight} Kg`} />
      </SomatometryData>
      <SomatometryData>
        <ValueItem keyName="Presión y pulso" value={`${somatometry.pulse} p/m`} />
      </SomatometryData>
      <SomatometryData>
        <ValueItem keyName="IMC" value={somatometry.imc} />
      </SomatometryData>
      <SomatometryData>
        <ValueItem keyName="Temperatura" value={`${somatometry.temperature} °C`} />
      </SomatometryData>
    </Card>
  </React.Fragment>
)

export default Somatometry

const SomatometryData = styled.div`
  margin-bottom: 1rem;

  b {
    display: block;
  }
`