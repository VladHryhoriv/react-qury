import { GetCountriesResponse } from 'fetures/countries/dto'

export const countries: GetCountriesResponse = {
  results: 5,
  errors: {},
  paging: {
    current: 1,
    total: 5,
  },
  response: [
    {
      name: 'Afghanistan',
      code: null,
      flag: null,
    },
    {
      name: 'Albania',
      code: 'AL',
      flag: 'https://media.api-sports.io/flags/al.svg',
    },
    {
      name: 'Algeria',
      code: 'DZ',
      flag: 'https://media.api-sports.io/flags/dz.svg',
    },
    {
      name: 'American-Samoa',
      code: null,
      flag: null,
    },
    {
      name: 'Andorra',
      code: 'AD',
      flag: 'https://media.api-sports.io/flags/ad.svg',
    },
  ],
}
