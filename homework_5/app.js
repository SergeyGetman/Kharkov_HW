const imageElement = document.getElementById('image')

function myFetch(url, options) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(options ? options.method : 'GET', url)

    xhr.responseType = 'blob'

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response))
      }
      // 400-499 ошибки клиента
      if (400 <= xhr.status && xhr.status < 500) {
        reject(new Error(`Ошибка клиента ${xhr.status}: ${xhr.statusText}`))
      }
      // 500-599 ошибки сервера
      if (500 <= xhr.status && xhr.status < 600) {
        reject(new Error(`Ошибка сервера ${xhr.status}: ${xhr.statusText}`))
      } else {
        reject('Loading error:' + xhr.statusText)
      }

      resolve({
        data: xhr.response,
      })
    }
    xhr.text() = function (response, reject) {
      return JSON.parse(this.response)
    }

    xhr.setRequestHeader('app-id', '6155fa5472aa4147002c1df3')

    xhr.send()

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 400) {
        return
      }

      if (xhr.status === 200) {
        console.log('result', xhr.responseText)
      } else {
        console.log('err', xhr.responseText)
      }
    }
  })
}

const blob = myFetch('https://picsum.photos/200/300')
const blobURL = window.URL.createObjectURL(blob) // This is the blob url

function abort(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()

    xhr.open('GET', url)

    xhr.responseType = 'json'

    xhr.onload = function () {
      if (xhr.status == 200) resolve('Успех')
      if (xhr.status > 300 && xhr.status < 400) reject(new Error('no Error !'))
      let responseObj = xhr.response

      let text = function (param) {
        return param.forEach((elem) => {})
      }
      let json = function () {
        return JSON.parse(JSON.stringify(responseObj))
      }
      json(responseObj)
      text(responseObj)
    }

    xhr.send()
  })
}

console.log(abort('https://jsonplaceholder.typicode.com/users'))
