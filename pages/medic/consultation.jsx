import React from 'react'
import Layout from '../../components/Layout'
import Consultation from '../../components/pages/Medic/Consultation'
import moment from 'moment'

moment.locale('es')

const date = moment().format('LL')

const consultation = () => (
  <Layout userRole="medic" userGender="male">
    <Consultation date={date} />
  </Layout>
)

export default consultation
