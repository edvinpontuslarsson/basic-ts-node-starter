// TODO get something working then remove deps, fix simple test

// TODO also test watch, would be nice

import {getGreeting} from './lib/greeting'

const input = process.argv[2]

const greeting = getGreeting(input)

console.log(greeting)
