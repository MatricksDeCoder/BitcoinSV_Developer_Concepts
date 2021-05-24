const bsv = require('bsv')

// generate random hex number 32 bytes/256 bits
const hex = bsv.crypto.Random.getRandomBuffer(32)
console.log(hex)
console.log(hex.toString('hex'))

// create a bignumber from hex
const bn = bsv.crypto.BN.fromBuffer(hex)
console.log(bn)
console.log(bn.toString())

// adding and subtracting Big Numbers
let bx = bsv.crypto.BN
let n = bx.fromNumber(5)
let m = bx.fromNumber(6)
console.log(n.add(m).toString())
