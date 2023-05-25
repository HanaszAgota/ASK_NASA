const API_KEY = '1Pj3D3xLuzlgf4xeuzJk28OfHUqQwe0LksLWgJLN'
const root = document.querySelector('#root')
let API_DATE = " "

async function getFetch(url) {
const response = await fetch(url)
const dataResponse = await response.json()

return dataResponse
}

console.log()

function createElements() {
  let a = async function () {
    let data = await getFetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    )
      console.info(data)

    const container = document.createElement("section")
    container.classList.add("section")

    const h1 = document.createElement("h1")
    h1.innerText = data.title

    const h3 = document.createElement("h3")
    h3.innerText = data.explanation

    const img = document.createElement("img")
    img.src = data.url

    container.append(h1, h3, img)
    root.append(container)
  }

  const label = document.createElement("label")
  label.setAttribute("for", "date")
  label.innerText = "Please select a date:"

  const date = document.createElement("input")
  date.id = "date"
  date.type = "date"

  root.append(label, date)

  a()
}
createElements()

function addEvent () {
  const date = document.querySelector('#date')

  date.addEventListener("change", function (event) {
    API_DATE = date.value

    const cont = document.querySelector('.section')

    let a = async function () {
      let data = await getFetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${API_DATE}`
      )

      const cont = document.querySelector('.section')
      cont.innerHTML = " "

      const h1 = document.createElement("h1")
      h1.innerText = data.title

      const h3 = document.createElement("h3")
      h3.innerText = data.explanation

      const img = document.createElement("img")
      img.src = data.url

      const label = document.createElement("label")
      label.setAttribute("for", "date")
      label.innerText = " "

      cont.append(h1, h3, img, label)
    }
    a()
  })
}
addEvent()








// const API_KEY = '1Pj3D3xLuzlgf4xeuzJk28OfHUqQwe0LksLWgJLN'
// let API_DATE = '2023-02-28'
// const rootElement = document.querySelector('#root')

// let div1
// let div2

// const fetchApod = async function(url) {
//   const response = await fetch(url)
//   const apodData = await response.json() 
//   return apodData
// }

// // explanation, date, eventListener - dinamikus
// // statikus soha nem lesz cserélve (dátumválasztó)
// const createSkeleton = function() {
  
//   div1 = document.createElement('div')
//   div1.classList.add('input-container')

//   div2 = document.createElement('div')
//   div2.classList.add('data-container')
//   rootElement.append(div1, div2)
// }


// const createApodElement = function(parentElement, data) {
//   //parentElement.innerHTML = '' (az elem önmagát fűzi hozzá) 
//   const date = document.createElement('date')
//   date.innerText = data.date
//   div1.append(date)

//   const h1 = document.createElement('h1')
//   h1.innerText = data.title
//   div2.append(h1)

//   const explanation = document.createElement('explanation')
//   explanation.innerText = data.explanation 
//   div2.append(explanation)

//   const img = document.createElement('img')
//   img.src = data.url
//   div2.append(img)

//   parentElement.append(h1, explanation, img)
// }

// const kkk = function() {
//   console.info("iii")
// }

// function addEvent () {
//   const date = document.querySelector("date")

//   date.addEventListener("change", function (event) {
//     API_DATE = date.value

//     const container = document.querySelector(".input-container")

//     let a = async function () {
//       let data = await getFetch (
//         'https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${API_DATE}'
//       )

//       const container = document.querySelector (".input-container")
//       container.innerHTML = ""

//       const h1 = document.createElement('h1')
//       h1.innerText = data.title

//       const explanation = document.createElement('explanation')
//       explanation.innerText = data.explanation 

//       const img = document.createElement('img')
//       img.src = data.url

//       const label = document.createElement('label')
//       label.setAttribute('for', 'date')
//       label.innerHTML = ""

//       container.append(h1, explanation, img, label)
//     }
//     a()
//   })
// }
// addEvent()

// const init = async function() {
//   createSkeleton()
//   const inputContainer = document.querySelector('.input-container')
//   const dataContainer = document.querySelector('.data-container')
//   const apodData = await fetchApod(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${API_DATE}`)
//   console.info(apodData)
//   createApodElement(dataContainer, apodData)
//   console.info(div1, div2)
//   kkk()
// }

// init()

// // function createDog (name, age, color) { 
// //   // const dog = 'morzsa'
// //   // const age = 2
// //   const h2 = document.createElement('h2')
// //   h2.classList.add('dog')
// //   h2.innerText = `${name}, age: ${age}, color: ${color}`
// //   rootElement.append(h2)

// // }
// // createDog('Artúr', 1, 'barna')

// // createDog('Süti', 4, 'fehér')