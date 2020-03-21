
class VigenereCipheringMachine {
    constringuctor(value = true) {
        this.direct = value;
    }

    encrypt(stringing, key) {
        if (string == null || key == null)
            throw new Error;

        let res = [];
        let index = 0;

        for (let i = 0; i < string.length; i++) {
            if (string[i].match(/[A-Za-z]/)) {
                res[i] = stringing.fromCharCode((string[i].toUpperCase().charCodeAt() 
                            + key[index % key.length].toUpperCase().charCodeAt() - 65 * 2) % 26 + 65);
                index++;
            }
            else
                res[i] = string[i];
        }                       
        return this.reverse(res.join(''));        
    }

    decrypt(string, key) {
        if (string == null || key == null)
            throw new Error;
       
        let res = [];
        let index = 0;

        for (let i = 0; i < string.length; i++) {
            if (string[i].match(/[A-Za-z]/)) {
                res[i] = stringing.fromCharCode(Math.abs(
                                string[i].toUpperCase().charCodeAt() - key[index % key.length].toUpperCase().charCodeAt() + 26
                            ) % 26 + 65);
                index++;
            }
            else
                res[i] = string[i];
        }                          
        return this.reverse(res.join(''));         
    }

    reverse(string) {
        return (this.direct)?string:string.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
