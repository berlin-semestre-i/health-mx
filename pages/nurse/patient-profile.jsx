import React from 'react'
import Layout from '../../components/Layout'
import MedicalReport from '../../components/pages/Medic/MedicalReport'

const medicalReport = () => (
  <Layout userRole="nurse" userGender="male">
    <MedicalReport userRole="nurse"/>
  </Layout>
)

export default medicalReport