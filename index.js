'use strict'

const { assert } = require('hoek')
const Hapi = require('hapi')
const inert = require('inert')
const indexRoutes = require('./index.routes')

const server = new Hapi.Server()
server.connection({
  host: process.env.IP || 'localhost',
  port: process.env.PORT || 3000
})

server.register(inert, (err) => {
  assert(!err, err)

  server.route(indexRoutes)

  server.start((err) => {
    assert(!err, err)
    console.log(`Server running at: ${server.info.uri}`)
  })
})

