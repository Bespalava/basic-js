//*const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(direct = true) {
      this.direct = direct;
    }
    encrypt(message, key) {
      if (!message || !key) throw new Error("Error");
      let result = this.crypt(message.toLowerCase(), this.filterKey(key.toLowerCase()))
      return this.direct ? result : result.split("").reverse().join("")
    }
  
    decrypt(message, key) {
      if (!message || !key) throw new Error("Error");
      let result = this.crypt(message.toLowerCase(), this.filterKey(key.toLowerCase()), 'decrypt')
      return this.direct ? result : result.split("").reverse().join("")
    }
  
    crypt(input, key, mode) {
      let result = "";
      if (mode == 'decrypt') {
        for (let i = 0; i < key.length; i++)
          key[i] = (26 - key[i]) % 26;
      }
      for (let i = 0, j = 0; i < input.length; i++) {
        let c = input.charCodeAt(i);
        if (this.letter(c)) {
          result += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
          j++;
        } else {
          result += input.charAt(i);
        }
      }
      return result.toUpperCase();
    }
  
    letter(c) {
        return 97 <= c && c <= 122
    }

    filterKey(key) {
      let result = [];
      for (let i = 0; i < key.length; i++) {
        let c = key.charCodeAt(i);
        if (this.letter(c))
          result.push((c - 65) % 32);
      }
      return result;
    }
  }

module.exports = VigenereCipheringMachine;
