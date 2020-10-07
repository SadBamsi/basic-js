const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(straight = true) {
    this.straight = straight;
  }
  encrypt(message, key, straight) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let res = [];
    let counter = 0;
    if (!message || !key) throw new Error();
    for (let i = 0; i < message.length; i++) {
      if (counter > key.length - 1) { counter = 0 };
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        res.push(message[i].charCodeAt())
      }
      else {
        res.push((message[i].charCodeAt() + key[counter].charCodeAt()) % 26 + 65);
        counter++
      }
    }
    return this.straight ? String.fromCharCode(...res) : String.fromCharCode(...res.reverse());
  }
  decrypt(message, key, straight) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let res = [];
    let counter = 0;
    if (!message || !key) throw new Error();
    for (let i = 0; i < message.length; i++) {
      if (counter > key.length - 1) { counter = 0 };
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        res.push(message[i].charCodeAt())
      } else {
        res.push((message[i].charCodeAt() - key[counter].charCodeAt() + 26) % 26 + 65);
        counter++;
      }
    }
    return this.straight ? String.fromCharCode(...res) : String.fromCharCode(...res.reverse());
  }
}

module.exports = VigenereCipheringMachine;
