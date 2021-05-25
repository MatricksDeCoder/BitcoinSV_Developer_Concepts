const bsv = require('bsv')

// Elliptic curves are special curves fulfilling the equation:
// y2 = 𝑥2 + a𝑥 + 𝑏 where, 4𝑎3 + 27𝑏3 ≠ 0
// Koblitz curves defined under secp256k1 standard.
// y2 = (𝑥3 + 7) mod p
// for any point P on the curve, there always exists some p such that P = pG.
// A private key in bitcoin is a point on this curve which is described above always. 
// If p is a private key, then P = pG and P will be the public key. 

// Diffie-Helman key exchange: aB = abG = baG = bA
// Above arrive at same number which is the shared secret


// Alice's private key times Bob's public key is the same thing as Bob's private key times Alice's public key. 
// This is a secret that can only be derived by Alice or Bob and no one else. 

// generating a point on secp256k1  curve
let getPoint = bsv.crypto.Point
console.log(getPoint)
// get Base Point G with an x and y value, every other point can be generated from G
let G = getPoint.getG()
console.log(G)
console.log(G.x)
console.log(G.getX())
console.log(G.getX().toString())

// multiply point
let bx = bsv.crypto.BN
let n = bx.fromNumber(5)
let R = G.mul(n)
console.log(R)
console.log(R.getX())
console.log(R.getX().toString())

// create a public key P from base point G
var hex = bsv.crypto.Random.getRandomBuffer(32) // random private key
var phex = bsv.crypto.Random.getRandomBuffer(32).toString('hex')
var p = bsv.crypto.BN.fromBuffer(Buffer.from(phex, 'hex'))

var P = G.mul(p)
console.log(P)
console.log(P.x)
console.log(P.getX().toString('hex'))

// bitcoin addresses are 33 bytes (1 byte tells if y coordinate is odd or even)


