import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import Card from '../../../shared/Card'

const healthStatusOptions = [{
  text: 'Regular', value: 0,
}, {
  text: 'Crítico', value: 1,
}]

const HealthStatus = ({ healthStatus, onChange }) => (
  <React.Fragment>
    <Card header="Estado de Salud">
      <Dropdown
        name="healthStatus"
        value={healthStatus}
        placeholder="Seleccionar Estado"
        fluid selection
        options={healthStatusOptions}
        onChange={onChange}
      />
    </Card>
  </React.Fragment>
)

export default HealthStatus