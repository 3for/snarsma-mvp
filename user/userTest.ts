import * as generateTx from './generateTx';
import * as bigInt from 'big-integer'
import * as ethKeys from '../user/hardcodedKeys'
import { TIMEOUT } from 'dns';

// Cast of 10 characters

let keys = ethKeys.ethKeys;

const zeroPrivKey = '0x0000000000000000000000000000000000000000000000000000000000000000'
const alicePrivKey = keys[0]['priv'];
const bobPrivKey = keys[1]['priv'];
const charliePrivKey = keys[2]['priv'];
const davePrivKey = keys[3]['priv'];
const evePrivKey = keys[4]['priv'];
const frankPrivKey = keys[5]['priv'];
const gracePrivKey = keys[6]['priv'];
const heidiPrivKey = keys[7]['priv'];
const judyPrivKey = keys[8]['priv'];
const malloryPrivKey = keys[9]['priv'];

const zeroA = generateTx.A(zeroPrivKey)
const zeroPubKey = generateTx.pubKey(zeroA)

const aliceA = generateTx.A(alicePrivKey)
const alicePubKey = generateTx.pubKey(aliceA)

const bobA = generateTx.A(bobPrivKey)
const bobPubKey = generateTx.pubKey(bobA)

const charlieA = generateTx.A(charliePrivKey)
const charliePubKey = generateTx.pubKey(charlieA)

const daveA = generateTx.A(davePrivKey)
const davePubKey = generateTx.pubKey(daveA)

const eveA = generateTx.A(evePrivKey)
const evePubKey = generateTx.pubKey(eveA)

const frankA = generateTx.A(frankPrivKey)
const frankPubKey = generateTx.pubKey(frankA)

const graceA = generateTx.A(gracePrivKey)
const gracePubKey = generateTx.pubKey(graceA)

const heidiA = generateTx.A(heidiPrivKey)
const heidiPubKey = generateTx.pubKey(heidiA)

const judyA = generateTx.A(judyPrivKey)
const judyPubKey = generateTx.pubKey(judyA)

const malloryA = generateTx.A(malloryPrivKey)
const malloryPubKey = generateTx.pubKey(malloryA)

// Alice deposit
let tx0: generateTx.ITransaction = {
    from: zeroPubKey,
    to: alicePubKey,
    amount: bigInt(10),
    nonce: bigInt(1)
}

const sig0 = generateTx.signTx(tx0, zeroPrivKey)
// generateTx.makeJson(tx0,sig0,zeroA,'tx0')

// Alice transfer to Bob
let tx1: generateTx.ITransaction = {
    from: alicePubKey,
    to: bobPubKey,
    amount: bigInt(5),
    nonce: bigInt(2)
}

const sig1 = generateTx.signTx(tx1, alicePrivKey)
// generateTx.makeJson(tx1,sig1,aliceA,'tx1')


// Alice withdraw
let tx4: generateTx.ITransaction = {
    from: alicePubKey,
    to: zeroPubKey,
    amount: bigInt(5),
    nonce: bigInt(3)
}

const sig4 = generateTx.signTx(tx4, alicePrivKey)
// generateTx.makeJson(tx4,sig4,aliceA,'tx4')


setTimeout(function() {generateTx.makeJson(tx0,sig0,zeroA,'tx0')},1000)
setTimeout(function() {generateTx.makeJson(tx1,sig1,aliceA,'tx1')},2000)
setTimeout(function() {generateTx.makeJson(tx4,sig4,aliceA,'tx4')},3000)

// // Charlie to Bob transfer
// let tx2: generateTx.ITransaction = {
//     from: charliePubKey,
//     to: bobPubKey,
//     amount: bigInt(5),
//     nonce: bigInt(1)
// }

// const sig2 = generateTx.signTx(tx2, charliePrivKey)
// generateTx.makeJson(tx2,sig2,charlieA,'tx2')

// Bob withdraw
// let tx3: generateTx.ITransaction = {
//     from: bobPubKey,
//     to: zeroPubKey,
//     amount: bigInt(5),
//     nonce: bigInt(1)
// }

// const sig3 = generateTx.signTx(tx3, bobPrivKey)
// generateTx.makeJson(tx3,sig3,bobA,'tx3')

