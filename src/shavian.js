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

  let submitted = document.getElementById("latin_text")
  displayResults(submitted.value.trim().toLowerCase())
  submitted.value = ""
  displayShavian()
})

function displayResults(submitted) {
  const simulationResults = document.getElementById('result')
  let result_words = dictionary.filter(word_data => word_data.latin == submitted)
  let result_word = result_words.find(word_found => word_found.ipa == word.ipa) || { ipa: "" }
  let result = result_word.ipa == word.ipa
  let colour = result ? "green" : "red"

  console.log(word, submitted, result, result_words)

  resultHTML = `<p> submitted: ${submitted} : ${result_word.ipa} </p> <p style="color: ${colour};"> ${(result ? "correct" : "wrong")} </p><p> ${word.shavian} : ${word.latin} : ${word.ipa} </p>`
  simulationResults.innerHTML = resultHTML
}

function displayShavian() {
  const simulationResults = document.getElementById('shavian')
  word = dictionary[Math.floor(Math.random() * dictionary.length)]
  resultHTML = "<ul>" + word.shavian + "</ul>"
  simulationResults.innerHTML = resultHTML
}
