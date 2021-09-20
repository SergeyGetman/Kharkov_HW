// 1) Написать функцию, которая принимает на вход 2 массива. На выходе функция должна выдать элемент, который в обоих массивах повторялся чаще всего
// Пример:
// Исходные массивы: [1, 2, 3, 3, 'a', 'test'], ['test', 2, 7,  'a', 'a']
// Результат выполнения: yourFunc([1, 2, 3, 3, 'a', 'test'], ['test', 2, 7,  'a', 'a']) // 'a'

let arr = [1, 2, 3, 3, 'a', 'test']
let arr2 = ['test', 2, 7, 'a', 'a']

const findElement = (array, array2) => {
  let doubleArrays = array.concat(array2)
  let counter = {}

  doubleArrays.reduce((_, current) => {
    counter[current] = (counter[current] || 0) + 1
  })

  let newRes = Object.entries(counter)
  let min = 1,
    findNum = ''

  for (let [keys, elem] of newRes) {
    if (min < elem) min = elem
    if (min == elem) findNum = keys
  }
  return findNum
}
console.log(findElement(arr, arr2))

// 2) Написать функцию, которая принимает на входе массив и на выходе выдает новый массив без дублирующихся элементов
// Пример:
// Исходный массив: [1, 2, 3, 3, 'a', 'test']
// Результат выполнения: yourFunc([1, 2, 3, 3, 'a', 'test']) // [1, 2, 3, 'a', 'test']

let arr = [1, 2, 3, 3, 'a', 'test']

const clearDoubleElement = (array) => [...new Set(array)]

// Пример: Исходный массив:
// Результат выполнения: yourFunc([111896, 9999, 9985, 1024, 999999, 1000100, 60044943])
// [111,90K, 10K, 9,99K 1,02K, 1M, 1M, 60,05M]

let arr = [111896, 9999, 9985, 1024, 999999, 1000100, 60044943]

const treepleStep = (number) => {
  number = number.join(',').split('.')
  number[0] = number[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  let num = number.join('').replace(/\,/g, ' ').split(' ')

  return num.map((elem) => {
    return elem.length <= 7
      ? (elem = Math.round(elem) + 'K')
      : parseInt(elem) + 'M'
  })
}
console.log(treepleStep(arr))
