const data = require('../dataset/database-tempat.json')

const getPlace = async (request, h) => {
  try {
    const response = h.response({
      status: 'success',
      data: data.data,
    })
    response.code(200)
    return response
  } catch (error) {
    console.log(error)
    const response = h.response({
      status: 'failed',
      message: 'System failure',
    })
    response.code(500)
    return response
  }
}

module.exports = { getPlace }
