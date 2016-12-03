// Problem: We need a simple way to look at JavaScript Developer in Indonesia
// Solution: Use NodeJS to connect to GitHub API to get profile information and print out to the console

'use strict'

const profile = require('./profile.js')

const users = process.argv.slice(2)
users.map(profile.get)
