const { getPlace } = require('./handler')

const route = [
  {
    method: 'GET',
    path: '/api/places',
    handler: getPlace,
  },
]

module.exports = route
