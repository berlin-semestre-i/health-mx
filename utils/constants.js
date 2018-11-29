const testsConstants = {
  userRole: 'medic',
  userGender: 'male',
  newMedication: {
    dose: '20ml',
    medicine: 'Dramamine',
    frequency: '8 hrs',
    duration: '4 días',
  },
  newStudy: {
    study: 'Rayos X',
    indications: 'Sin indicaciones',
  },
  errorMessage: 'Llena todos los campos.',
  somatometry: {
    nurse: 'Rodrigo Fernández',
    height: 169,
    weight: 63,
    pulse: 68,
    imc: 22.06,
    temperature: 36,
  },
}

const defaultManAvatar = '/static/images/man-avatar.png'
const defaultWomanAvatar = '/static/images/woman-avatar.png'

export { testsConstants, defaultManAvatar, defaultWomanAvatar }