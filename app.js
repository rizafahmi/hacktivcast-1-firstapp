// Problem: We need a simple way to look at JavaScript Developer in Indonesia
// Solution: Use NodeJS to connect to GitHub API to get profile information and print out to the console

'use strict'
const https = require('https')

const username = 'rizafahmi'
// [x] Connect to the API with specific queries (https://api.github.com/users/username)
const options = {
  hostname: `api.github.com`,
  port: 443,
  path: `/users/${username}`,
  method: 'GET',
  headers: {
    'user-agent': 'node.js'
  }
}
let request = https.request(options, (response) => {
  console.log(response.statusCode)
  // [x] Read the data
  let body = ""
  response.on('data', (data) => {
    body = body + data
  })

  response.on('end', () => {
    console.log(body)
    console.log(typeof body)
  })
  // TODO: Parse the data
  // TODO: Print the data out

})

request.end()

request.on('error', (error) => {
  console.error(error)
})
