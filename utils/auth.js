import { medic, beneficiary, nurse, error, admin } from '../components/Layout/rolesProperties.json'

const getPropertiesFromRole = (userRole) => {
  if ( userRole === 'medic' ) {
    return medic
  }
  else if ( userRole === 'beneficiary' ) {
    return beneficiary
  }
  else if ( userRole === 'nurse' ) {
    return nurse
  }
  else if ( userRole === 'admin' ) {
    return admin
  }
  else {
    return error
  }
}

export { getPropertiesFromRole }