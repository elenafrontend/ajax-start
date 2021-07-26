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

  // * fetch - promise - возвращает промис при получении ответа от сервера 
  // * -> метод .text - promise - берет необраб данные с сервера и возвращает промис, когда преобраз данные в текст 
  // * -> далее функция принимает данные и меняет текстоввое содержимое poemDisplay 
  // fetch(url).then(function (response) {
  //   response.text().then(function (text) {
  //     poemDisplay.textContent = text;
  //   });
  // });

  // * можно записать в последовательном варианте, без вложенности
  fetch(url).then(function(response){
    return response.text()
  }).then(function(text) {
    poemDisplay.textContent = text;
  });
}

updateDisplay(verseChoose.value);
