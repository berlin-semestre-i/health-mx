import React from 'react'
import { Form } from 'semantic-ui-react'
import Card from '../../../shared/Card'
import styled from 'styled-components'

const Information = ({ motive, physicalExploration, conclusion, onChange }) => (
  <React.Fragment>
    <Card header="Información de Consulta" className="nth-col-first">
      <Form name="information">
        <FormTextArea
          name="motive"
          label="Motivo de la consulta:"
          placeholder="Escribe aquí el motivo de la consulta."
          value={motive}
          onChange={onChange}
        />
        <FormTextArea
          name="physicalExploration"
          label="Exploración física:"
          placeholder="En caso de aplicar,
                    ingresa las observaciones de la exploración física."
          value={physicalExploration}
          onChange={onChange}
        />
        <FormTextArea
          name="conclusion"
          label="Observaciones y conclusiones de la consulta:"
          placeholder="Escribe aquí las observaciones finales de la consulta."
          value={conclusion}
          onChange={onChange}
        />
      </Form>
    </Card>
  </React.Fragment>
)

export default Information

const FormTextArea = styled(Form.TextArea)`
   & textarea {
    font-family: -apple-system,system-ui,BlinkMacSystemFont, 
    "Segoe UI",Roboto,'Helvetica Neue',Arial,Helvetica,sans-serif;
   }
`