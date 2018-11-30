import React from 'react'
import Layout from '../../components/Layout'
import MedicalReport from '../../components/pages/Medic/MedicalReport'

const medicalReport = () => (
  <Layout userRole="medic" userGender="male">
    <MedicalReport userRole="medic"/>
  </Layout>
)

export default medicalReport