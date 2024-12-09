const Hapi = require('@hapi/hapi')
const route = require('./src/route')

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  })

  server.route(route)

  await server.start()
  console.log(`Server is running on port ${server.info.uri}`)
}

init()
