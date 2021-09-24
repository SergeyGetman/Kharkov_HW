// // 1) Написать функцию, которая раскладывает число на входе на простые множители
// // а) В императивном стиле
// // б) В декларативном стиле

// // 2) Реализуйте класс Validator, который будет иметь методы isEmail, isUrkainianPhoneNumber и isDate, которые будут возвращать true, если переданная строка является имейлом(включает в себя @ и домен), датой(в формате YYYY-MM-DD), номером телефона (включает в себя код Украины +38 и номер из 10 цифр)

// // imperative style
// function getPrimeFactors(number) {
//   function isPrime(n) {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       console.log(i)
//       console.log(n)
//       if (n % i === 0) {
//         return false
//       }
//     }
//     return true
//   }

//   let sequence = []

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0 && isPrime(i)) {
//       sequence.push(i)
//     }
//   }

//   return sequence
// }

// //declerative
// function fact(num) {
//   let b = 2
//   let steps = ''
//   while (num > b) {
//     while (num % b == 0) {
//       num /= b
//       steps += b
//     }
//     b++
//     if (num == b) {
//       steps += b
//     }
//   }
//   return steps.split('')
// }

class Validator {
  constructor() {}

  isEmail(value) {
    if (typeof value !== 'string') throw new Error('Вводите только строку')
    let rega = new RegExp(/@\w+\.\w+/g)
    if (rega.test(value)) return true
    return false
  }
  isUrkainianPhoneNumber(number) {
    //entered number inside ""
    if (number.length < 13)
      throw new Error(
        'Введите номер в формате +38 + ваш мобильный номер, недостаточно цифр',
      )
    if (number.length > 13)
      throw new Error('Введенные цифры не соотвецтвуют длинне номера')
    if (/\+38\d{10}/g.test(number)) return true
  }

  isDate(date) {
    date = date.replace(/-|\*|\ |\.|\//g, '-')
    if (date.search(/[a-z]/g) != -1) throw new Error('Вводите только цифры')
    let reg = /\d{4}\-\d{2}\-\d{2}/g
    if (reg.test(date) && date.length < 11) return true
    return false
  }
}
