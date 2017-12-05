'use strict'

const path = require('path')
const bookService = require("./book.service")

module.exports = 
{
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.join('dist')
    }
  }
},
{
  method: 'GET',
  path: '/api/books',
  handler: async (request, reply) => {
    reply(await bookService.requestJson())
  }
}
