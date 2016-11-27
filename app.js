// Problem: We need a simple way to look at JavaScript Developer in Indonesia
// Solution: Use NodeJS to connect to GitHub API to get profile information and print out to the console

'use strict'

const profile = require('./profile.js')

const users = ['rizafahmi', 'mhaidarh', 'rubicode']
users.map((user) => {
  return profile.get(user)
})
// or equal to this beautiful one line: `users.map(profile.get)`
