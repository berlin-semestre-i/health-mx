const beneficiary = {
  firstName: 'María del Carmen',
  fatherLastName: 'Hinojosa',
  motherLastName: 'Ramírez',
  nss: '8454321878',
  curp: 'JP0A170297SLMRH00',
  clinic: 'Zapopan 36',
  umf: 'Zapopan UMF2',
  dependents: 0,
  allergies: ['Penicilina'],
  ailment: [],
  ahd: ['Diabetes tipo 2 (padre)', 'Cáncer de colon (abuelo)'],
  doctor: 'César Rengiffo Pérez',
}
const studies = [{
  date: '12 Jul, 2018',
  area: 'Radiología',
  type: 'Rayos X',
  indications: 'Bla bla bla',
}]
const treatments = [{
  consultation: '03 Nov, 2017',
  startDate: '03 Nov, 2017',
  endDate: '11 Nov 2017',
  medication: ['Paracetamol', 'Diclofenaco sódico', 'Celebrex'],
}]
const consultations = [{
  date: '12 Jul, 2018',
  area: 'Medicina familiar',
  doctor: 'Luis Alfredo Ramírez',
  status: 'Regular',
}]
const tabsValues = [
  {name: 'prev-consultations', items: consultations},
  {name: 'lab-studies', items: studies},
  {name: 'treatments', items: treatments},
]

export { beneficiary, studies, treatments, consultations, tabsValues }