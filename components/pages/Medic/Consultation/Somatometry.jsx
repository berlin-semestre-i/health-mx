import React, {PureComponent} from 'react'
import styled from 'styled-components'
import Card from '../../../shared/Card'
import ValueItem from '../../../shared/ValueItem'
import SomatometryModal from './SomatometryModal'

class Somatometry extends PureComponent {

  state = {
    open: false,
  }

  open = () => this.setState({open: true})
  close = () => this.setState({open: false})
  save = ({ pulse, weight, height, temperature, imc}) => {
    this.props.update({ pulse, weight, height, temperature, imc})
    this.close()
  }

  render () {
    const {somatometry} = this.props
    const {open} = this.state

    return (
      <React.Fragment>
        <Card
          header="Somatometría Previa"
          iconName="pencil"
          iconColor="blue"
          callbackFn={this.open}
        >
          <SomatometryData>
            <ValueItem keyName="Enfermero(a)" value={somatometry.nurse} />
          </SomatometryData>
          <SomatometryData>
            <ValueItem keyName="Estatura" value={`${somatometry.height} cm`} />
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
        <SomatometryModal
          open={open}
          close={this.close}
          save={this.save}
          somatometry={somatometry}
        />
      </React.Fragment>
    )
  }
}

export default Somatometry

const SomatometryData = styled.div`
  margin-bottom: 1rem;

  b {
    display: block;
  }
`