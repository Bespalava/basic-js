//*const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direct = true) {
        this.direct = direct;
    }

    encrypt( message, key) {
        var count = 0;
        var finalMessage =[];
        if(message === undefined || key === undefined){
            throw new Error('Parameters not defined');
        }
        if(this.direct === false){
            key = key.split('').reverse().join('');
        }
        for (i = 0; i < message.length; i++) {
            if(message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90 || message[i].charCodeAt(0) >= 97 && message[i].charCodeAt(0) <= 122){
                var indexLet = message[i].toUpperCase().charCodeAt(0) + key[count % key.length].toUpperCase().charCodeAt(0) - 65;
                if(indexLet > 90){
                    indexLet = indexLet - 91 + 65;
                }
                finalMessage.push(String.fromCharCode(indexLet));
                count++;
            }else{
                finalMessage.push(message[i]);
            }
        }
        return finalMessage.join('');
    }

    decrypt(encryptedMessage, key ) {
        var count = 0;
        var finalMessage =[];
        if(encryptedMessage === undefined || key === undefined){
            throw new Error('Parameters not defined');
        }
        if(this.direct === false){
            encryptedMessage = encryptedMessage.split('').reverse().join('');
            key = key.split('').reverse().join('');
        }
        for (i = 0; i < encryptedMessage.length; i++) {
            if (encryptedMessage[i].charCodeAt(0) >= 65 && encryptedMessage[i].charCodeAt(0) <= 90 || encryptedMessage[i].charCodeAt(0) >= 97 && encryptedMessage[i].charCodeAt(0) <= 122) {
                var indexLet = 65 + encryptedMessage[i].toUpperCase().charCodeAt(0) - key[count % key.length].toUpperCase().charCodeAt(0);
                if (indexLet < 65){
                    indexLet = 91 - (65 - indexLet);
                } 
                finalMessage.push(String.fromCharCode(indexLet));
                count++;
            }
            else {
                finalMessage.push(encryptedMessage[i]);
            }
        }
        if (this.direct === false) {
            finalMessage = finalMessage.reverse();
        }
        return finalMessage.join('');
    }
}

module.exports = VigenereCipheringMachine;
