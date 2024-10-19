const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

export default class RandomNumberGen {
async generateString(length:number) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  async generateNumber(length:number) {
    let result = ' ';
    const numbersLength = numbers.length;
    for ( let i = 0; i < length; i++ ) {
        result += Math.floor(Math.random() * numbersLength);
    }
    return result;
  }
}  