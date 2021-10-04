// 1. Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

//reliz one

function printNumbers(from, to) {
  for (let i = from; i < to; i++) {
    setInterval(() => {
      console.log(i)
    }, 1000)
  }
}
console.log(printNumbers(0, 5))

//reliz two

function printNumbers(from, to) {
  return setInterval(function printNumbers() {
    for (let i = from; i < to; i++) {
      console.log(i)
    }
  }, 1000)
}

// 2. Напишите часы с использованием setInterval (с выводом в консоль), при каждом новом выводе (каждую секунду) очищать сонсоль (console.clear)

function clock() {
  setInterval(function () {
    let x = new Date().getMinutes() + ':' + new Date().getSeconds()
    console.clear()
    console.log(x)
  }, 1000)
}
// clock()

//3.

function debounce(callback, delay) {
  let timerId = null

  return function () {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }

    timerId = setTimeout(function () {
      callback()
      timerId = null
    }, delay)
  }
}

let f = debounce(alert, 3000)
f(1) // выполняется немедленно
f(2) // проигнорирован

setTimeout(() => f(3), 100) // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100) // выполняется
setTimeout(() => f(5), 1500) // проигнорирован (прошло только 400 мс от последнего вызова)
