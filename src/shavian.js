const fs = require('fs');

let dictionary = JSON.parse(fs.readFileSync('./src/shavian_dictionary.json')).dictionary

const formButton = document.querySelector("#form")
let word = dictionary[Math.floor(Math.random() * dictionary.length)]

displayShavian()

// let nice_dictionary = { "dictionary": [] }
// let nice = JSON.parse(fs.readFileSync('./src/dictionary.json'))

// Object.keys(nice).forEach(word => {
//   console.log(nice[word][0])
//   console.log(nice[word][0].Latn.includes("-"))
//   if (nice[word][0].Latn.includes("-") || nice[word][0].Latn.includes(" ") || nice[word][0].Latn.includes("'")) {

//   } else if (nice[word][0].freq > 20) {
//     nice_dictionary.dictionary.push({ "latin": nice[word][0].Latn, "shavian": nice[word][0].Shaw, "ipa": nice[word][0].ipa })
//   }
// }
// )
// console.log(nice_dictionary.dictionary[1])

// fs.writeFile('./src/shavian_dictionary.json', JSON.stringify(nice_dictionary), (error) => {
//   if (error) throw error;
// });

formButton.addEventListener("submit", function (event) {
  event.preventDefault();   // stop the form from submitting

  let submitted = document.getElementById("latin_text").value
  displayResults(submitted)
  displayShavian()
})

function displayResults(submitted) {
  const simulationResults = document.getElementById('result')
  let result = submitted == word.latin

  console.log(word, submitted, result)

  resultHTML = `<ul> ${(result ? "correct" : "wrong")} </ul><br><ul> ${word.shavian} : ${word.latin} : ${word.ipa} </ul>`
  simulationResults.innerHTML = resultHTML
}

function displayShavian() {
  const simulationResults = document.getElementById('shavian')
  word = dictionary[Math.floor(Math.random() * dictionary.length)]
  resultHTML = "<ul>" + word.shavian + "</ul>"
  simulationResults.innerHTML = resultHTML
}
