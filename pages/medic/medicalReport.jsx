import React from 'react'
import Layout from '../../components/Layout'
import MedicalReport from '../../components/pages/Medic/MedicalReport'

const medicalReport = () => (
  <Layout userRole="medic" userGender="male">
    <MedicalReport />
  </Layout>
)

export default medicalReport