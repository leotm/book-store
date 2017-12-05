const request = require('request-promise')
const url = 'https://goo.gl/Lk2MTJ'

exports.requestJson = requestJson;

function requestJson() {
  return request
  .get(url, {
    json: true
  })
}
