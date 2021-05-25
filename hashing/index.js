const bsv = require('bsv')

/*
Algorithm              Output          Description                      Usage
---------------------------------------------------------------------------
sha256                 32 bytes        Unique 256 value for  text       POW
sha256d                32 bytes        Double hash sha256(sha256)       Blocks + Transactions
sha512                 64 bytes        Unique 512 value for  text       Wallet encryption (AES with paraphrase)
ripemd160              20 bytes        Unique 160 value for  text       Generate Bitcoin address
SHA256RIPEMD160        20 bytes        ripemd160(sha256)                Generate Bitcoin address
sha256HMAC/sha512HMAC  32 bytes        prevent lenght extension attack(HMAC(data1, data2) vs hash(data1+data2))  Generate Bitcoin address
*/

var hash1 = bsv.crypto.Hash.sha256(Buffer.from('Bitcoin is a global public blockchain')).toString('hex')
console.log(hash1)
// Displays:
// '595526048c7692ab8b12372be9a78a856b6a456791d1adb9b374a62f639d8936'

// Base58 and Base58 Check classes! Base 58 is used to create addresses as it has unique properties
// Base58 avoids usage of special characters which could be misleading like - lower case “L” or...
// upper case “I” which both look as “l”, and few others like “/” and “=” or a “0” or “O”.
// the encoding scheme includes a hash checksum to make errors in copying an address almost impossible.

const string = "my random string"
const strBuffer = Buffer.from(string)
const base58String = bsv.encoding.Base58(strBuffer)
console.log(base58String) 
console.log(base58String.toString()) // EX4GGfMqowb3SahgwQS6bg

// using Base58 check encoding
const base58Check = bsv.encoding.Base58Check.fromBuffer(Buffer.from(string)).toString()
console.log(base58Check) // 2XTb6Gp8zqqq1g5ED7YDsUXom9an

// Decode Base58String
const decoded1 = bsv.encoding.Base58.fromString(base58String.toString()).toBuffer().toString()
console.log(decoded1) // "my random string"
const decoded2 = bsv.encoding.Base58.fromString("EX4GGfMqowb3SahgwQS6bg").toBuffer().toString()
console.log(decoded2) // "my random string"

// Decode using Base58Check
const decodedCheck = bsv.encoding.Base58Check.fromString(base58Check).toBuffer().toString()
console.log(decodedCheck) // "my random string"

