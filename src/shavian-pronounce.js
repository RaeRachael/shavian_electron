const formButtonPronounce = document.querySelector("#form-pronounce")
const buttonPronounce = document.getElementById("pronounce")

buttonPronounce.addEventListener('click', function (event) {
  event.preventDefault();

  pronouceWord(word.ipa)
})

formButtonPronounce.addEventListener("submit", function (event) {
  event.preventDefault();   // stop the form from submitting

  let submitted = document.getElementById("shavian-pronounce-input").value
  let uipa = getIPA(submitted)

  console.log(submitted, uipa)
  pronouceWord(uipa)
})

function getIPA(text) {
  var mappings = [
    { 'src': "𐑐", 'dest': "p" },
    { 'src': "𐑑", 'dest': "t" },
    { 'src': "𐑒", 'dest': "k" },
    { 'src': "𐑓", 'dest': "f" },
    { 'src': "𐑔", 'dest': "θ" },
    { 'src': "𐑕", 'dest': "s" },
    { 'src': "𐑖", 'dest': "ʃ" },
    { 'src': "𐑗", 'dest': "tʃ" },
    { 'src': "𐑘", 'dest': "j" },
    { 'src': "𐑙", 'dest': "ŋ" },

    { 'src': "𐑚", 'dest': "b" },
    { 'src': "𐑛", 'dest': "d" },
    { 'src': "𐑜", 'dest': "g" },
    { 'src': "𐑝", 'dest': "v" },
    { 'src': "𐑔", 'dest': "ð" },
    { 'src': "𐑟", 'dest': "z" },
    { 'src': "𐑠", 'dest': "ʒ" },
    { 'src': "𐑡", 'dest': "dʒ" },
    { 'src': "𐑢", 'dest': "w" },
    { 'src': "𐑣", 'dest': "h" },

    { 'src': "𐑤", 'dest': "l" },
    { 'src': "𐑮", 'dest': "r" },
    { 'src': "𐑥", 'dest': "m" },
    { 'src': "𐑯", 'dest': "n" },

    { 'src': "𐑦", 'dest': "ɪ" },
    { 'src': "𐑰", 'dest': "iː" },
    { 'src': "𐑧", 'dest': "ɛ" },
    { 'src': "𐑱", 'dest': "eɪ" },
    { 'src': "𐑨", 'dest': "æ" },
    { 'src': "𐑲", 'dest': "aɪ" },

    { 'src': "𐑩", 'dest': "ə" },
    { 'src': "𐑳", 'dest': "ʌ" },
    { 'src': "𐑪", 'dest': "ɒ" },
    { 'src': "𐑴", 'dest': "əʊ" },
    { 'src': "𐑫", 'dest': "ʊ" },
    { 'src': "𐑵", 'dest': "uː" },
    { 'src': "𐑬", 'dest': "aʊ" },
    { 'src': "𐑶", 'dest': "ɔɪ" },
    { 'src': "𐑭", 'dest': "ɑː" },
    { 'src': "𐑷", 'dest': "ɔː" },

    { 'src': "𐑸", 'dest': "ɑː" },
    { 'src': "𐑹", 'dest': "ɔː" },
    { 'src': "𐑺", 'dest': "ɛə" },
    { 'src': "𐑻", 'dest': "ɜː" },
    { 'src': "𐑼", 'dest': "ə" },
    { 'src': "𐑽", 'dest': "ɪər" },
    { 'src': "𐑾", 'dest': "ɪə" },
    { 'src': "𐑿", 'dest': "ju" },
  ]
  for (var i = 0; i < mappings.length; i++) {
    text = text.replace(mappings[i].src, mappings[i].dest);
  }
  return text
}

function pronouceWord(uipa) {
  // nothing to process
  if (uipa == null || uipa.length == 0) {
    return;
  }

  //translate
  var mappings = [
    { 'src': /^\s*\//g, 'dest': '' },
    { 'src': /\/\s*$/g, 'dest': '' },

    { 'src': /(\.)/g, 'dest': '%' },
    { 'src': /(\u02c8)/g, 'dest': '\'' },
    { 'src': /(\u02cc)/g, 'dest': ',' },
    { 'src': /(\u0251)/g, 'dest': 'A:' },
    { 'src': /(\u02d0)/g, 'dest': ':' },
    { 'src': /(\u0251\u02d0)/g, 'dest': 'A' },
    { 'src': /(\u0251\u0279)/g, 'dest': 'A' },
    { 'src': /(a\u02d0)/g, 'dest': 'A' },

    // feedback from formantzero via r/linguistics
    { 'src': /(\u0329)/g, 'dest': 'r' },

    // feedback from scharfes_s via r/linguistics
    { 'src': /(\u027e)/g, 'dest': 't' },

    { 'src': /(\xe6)/g, 'dest': 'a' },
    { 'src': /(a)/g, 'dest': 'a' },
    { 'src': /(\u028c)/g, 'dest': 'V' },
    { 'src': /(\u0252)/g, 'dest': '0' },
    { 'src': /(\u0254)/g, 'dest': '0' },
    { 'src': /(a\u028a)/g, 'dest': 'aU' },
    { 'src': /(\xe6\u0254)/g, 'dest': 'aU' },
    { 'src': /(\u0259)/g, 'dest': '@' },
    { 'src': /(\u025a)/g, 'dest': '3' },
    { 'src': /(\u0259\u02d0)/g, 'dest': '3:' },
    { 'src': /(a\u026a)/g, 'dest': 'aI' },
    { 'src': /(\u028c\u026a)/g, 'dest': 'aI' },
    { 'src': /(\u0251e)/g, 'dest': 'aI' },
    { 'src': /(b)/g, 'dest': 'b' },
    { 'src': /(t\u0283)/g, 'dest': 'tS' },
    { 'src': /(\u02a7)/g, 'dest': 'tS' },
    { 'src': /(d)/g, 'dest': 'd' },
    { 'src': /(\xf0)/g, 'dest': 'D' },
    { 'src': /(\u025b)/g, 'dest': 'E' },
    { 'src': /(e)/g, 'dest': 'E' },
    { 'src': /(\u025d)/g, 'dest': '3:' },
    { 'src': /(\u025c\u02d0)/g, 'dest': '3:' },
    { 'src': /(\u025b\u0259)/g, 'dest': 'e@' },
    { 'src': /(e)/g, 'dest': 'E' },
    { 'src': /(\u025d)/g, 'dest': '3:' },
    { 'src': /(\u025c\u02d0)/g, 'dest': '3:' },
    { 'src': /(e\u026a)/g, 'dest': 'eI' },
    { 'src': /(\xe6\u026a)/g, 'dest': 'eI' },
    { 'src': /(f)/g, 'dest': 'f' },
    { 'src': /(\u0261)/g, 'dest': 'g' },
    { 'src': /(g)/g, 'dest': 'g' },
    { 'src': /(h)/g, 'dest': 'h' },
    { 'src': /(\u026a)/g, 'dest': 'I' },
    { 'src': /(\u0268)/g, 'dest': 'I' },
    { 'src': /(\u026a\u0259)/g, 'dest': 'i@' },
    { 'src': /(\u026a\u0279)/g, 'dest': 'i@' },
    { 'src': /(\u026a\u0279\u0259)/g, 'dest': 'i@3' },
    { 'src': /(i)/g, 'dest': 'i:' },
    { 'src': /(i\u02d0)/g, 'dest': 'i:' },
    { 'src': /(d\u0292)/g, 'dest': 'dZ' },
    { 'src': /(\u02a4)/g, 'dest': 'dZ' },
    { 'src': /(k)/g, 'dest': 'k' },
    { 'src': /(x)/g, 'dest': 'x' },
    { 'src': /(l)/g, 'dest': 'l' },
    { 'src': /(d\u026b)/g, 'dest': 'l' },
    { 'src': /(m)/g, 'dest': 'm' },
    { 'src': /(n)/g, 'dest': 'n' },
    { 'src': /(\u014b)/g, 'dest': 'N' },
    { 'src': /(\u0259\u028a)/g, 'dest': 'oU' },
    { 'src': /(o)/g, 'dest': 'oU' },
    { 'src': /(o\u028a)/g, 'dest': 'oU' },
    { 'src': /(\u0259\u0289)/g, 'dest': 'V' },
    { 'src': /(\u0254\u026a)/g, 'dest': 'OI' },
    { 'src': /(o\u026a)/g, 'dest': 'OI' },
    { 'src': /(p)/g, 'dest': 'p' },
    { 'src': /(\u0279)/g, 'dest': 'r' },
    { 'src': /(s)/g, 'dest': 's' },
    { 'src': /(\u0283)/g, 'dest': 'S' },
    { 'src': /(t)/g, 'dest': 't' },
    { 'src': /(\u027e)/g, 'dest': 't' },
    { 'src': /(\u03b8)/g, 'dest': 'T' },
    { 'src': /(\u028a\u0259)/g, 'dest': 'U@' },
    { 'src': /(\u028a\u0279)/g, 'dest': 'U@' },
    { 'src': /(\u028a)/g, 'dest': 'U' },
    { 'src': /(\u0289\u02d0)/g, 'dest': 'u:' },
    { 'src': /(u\u02d0)/g, 'dest': 'u:' },
    { 'src': /(u)/g, 'dest': 'u:' },
    { 'src': /(\u0254\u02d0)/g, 'dest': 'O:' },
    { 'src': /(o\u02d0)/g, 'dest': 'O:' },
    { 'src': /(v)/g, 'dest': 'v' },
    { 'src': /(w)/g, 'dest': 'w' },
    { 'src': /(\u028d)/g, 'dest': 'w' },
    { 'src': /(j)/g, 'dest': 'j' },
    { 'src': /(z)/g, 'dest': 'z' },
    { 'src': /(\u0292)/g, 'dest': 'Z' },
    { 'src': /(\u0294)/g, 'dest': '?' },

    // special edits
    { 'src': /(k\'a2n)/g, 'dest': 'k\'@n' },
    { 'src': /(ka2n)/g, 'dest': 'k@n' },
    { 'src': /(gg)/g, 'dest': 'g' },
    { 'src': /(@U)/g, 'dest': 'oU' },
    { 'src': /rr$/g, 'dest': 'r' },
    { 'src': /3r$/g, 'dest': '3:' },
    { 'src': /([iU]|([AO]:))@r$/g, 'dest': '$1@' },
    { 'src': /([^e])@r/g, 'dest': '$1:3' },
    { 'src': /e@r$/g, 'dest': 'e@' },
    { 'src': /e@r([bdDfghklmnNprsStTvwjzZ])/g, 'dest': 'e@$1' },

    // edits arising from testing
    { 'src': /(\'k)+/g, 'dest': 'k\'' },
    { 'src': /(\ː)+/g, 'dest': ':' },
    { 'src': /(\:)+/g, 'dest': ':' },
    { 'src': /(ᵻ)/g, 'dest': 'I' },
    { 'src': /(ɜ)/g, 'dest': '3' },
    { 'src': /(ɔ)/g, 'dest': 'O' },

    // feedback from formantzero via r/linguistics
    { 'src': /\u0361(.)/g, 'dest': '$1\'' },
    { 'src': /3$/g, 'dest': 'R' }
  ];

  for (var i = 0; i < mappings.length; i++) {
    uipa = uipa.replace(mappings[i].src, mappings[i].dest);
    //console.log(mappings[i].src + uipa);
  }
  console.log(uipa);
  spoken = meSpeak.speak('[[' + uipa + ']]', { 'rawdata': 'mime' });
  if (spoken == null) {
    alert("An error occurred: speaking failed.");
  }

  meSpeak.play(spoken);
}
