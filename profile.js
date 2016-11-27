'use strict'

const https = require('https')

let printData = (name, public_repos, followers) => {
  return `${name} owns ${public_repos} repo(s) and has ${followers} follower(s).`
}

let printError = (error) => {
  console.log(error.message)
}

let get = (username) => {
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
    // [x] Read the data
    let body = ""
    response.on('data', (data) => {
      body = body + data
    })

    response.on('end', () => {
      if (response.statusCode === 200) {
        // [x] Parse the data
        let profile = JSON.parse(body)
        // [x] Print the data out
        // prints out name, public_repos, followers
        console.log(printData(profile.name, profile.public_repos, profile.followers))

      } else {
        printError({message: `Profile with username '${username}' not found. (${response.statusCode}).` })
      }
    })

  })

  request.end()

  request.on('error', printError)
}

module.exports.get = get
