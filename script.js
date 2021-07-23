const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.onchange = function () {
  const verse = verseChoose.value;
  updateDisplay(verse);
};

// ! XHR

// function updateDisplay(verse) {
//   verse = verse.replace(" ", "");
//   verse = verse.toLowerCase();
//   const url = verse + ".txt";

//   const request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.responseType = "text";
//   request.onload = function () {
//     poemDisplay.textContent = this.response;
//   };
//   request.send();
// }

// ! Fetch

function updateDisplay(verse) {
  verse = verse.replace(" ", "");
  verse = verse.toLowerCase();
  const url = verse + ".txt";

  fetch(url).then(function (response) {
    response.text().then(function (text) {
      poemDisplay.textContent = text;
    });
  });
}

updateDisplay(verseChoose.value);
