var Answers = {
  0: { hint: "A four-wheeled vehicle", answer: "car" },
  1: { hint: "Flies high in the sky", answer: "plane" },
  2: { hint: "King of the jungle", answer: "lion" },
  3: { hint: "A place to keep money", answer: "bank" },
  4: { hint: "A tropical fruit with yellow skin", answer: "banana" },
  5: { hint: "The opposite of light", answer: "dark" },
  6: { hint: "A hot beverage", answer: "coffee" },
  7: { hint: "A popular pet that purrs", answer: "cat" },
  8: { hint: "Frozen water", answer: "ice" },
  9: { hint: "A large body of salt water", answer: "ocean" },
  10: { hint: "You need this to breathe", answer: "air" },
  11: { hint: "A very tall building", answer: "skyscraper" },
  12: { hint: "A tool to tell time", answer: "clock" },
  13: { hint: "A tasty Italian food", answer: "pizza" },
  14: {
    hint: "Grows on trees and can be red, green, or yellow",
    answer: "apple",
  },
  15: { hint: "Man’s best friend", answer: "dog" },
  16: { hint: "Used to unlock doors", answer: "key" },
  17: { hint: "A musical instrument with keys", answer: "piano" },
  18: { hint: "A place to sleep at night", answer: "bed" },
  19: { hint: "Something you wear on your feet", answer: "shoes" },
};
var hang = {
  0: "head",
  1: "body",
  2: "left-hand",
  3: "right-hand",
  4: "left-leg",
  5: "right-leg",
};
function sizeOfArray(array) {
  let size = 0;
  for (let key in array) {
    if (array.hasOwnProperty(key)) {
      size++;
    }
  }
  return size;
}

//replace a character at a particular index from geeksforgeeks
function replaceChar(origString, replaceChar, index) {
  let firstPart = origString.substr(0, index);
  let lastPart = origString.substr(index + 1);

  let newString = firstPart + replaceChar + lastPart;
  return newString;
}

var randm_answer = Math.floor(Math.random() * sizeOfArray(Answers));
var hint_answer = Answers[randm_answer];
var answer = hint_answer.answer.toUpperCase();
var hint = hint_answer.hint;
var try_count = 0;
var succ_count = 0;
var hint_section = document.getElementById("hint-section");
var answer_section = document.getElementById("answer-section");
var letters = document.querySelector(".letters");
answer_section.innerHTML = "-".repeat(answer.length);
hint_section.innerHTML = hint;

const divs = document.querySelectorAll(".letter");

divs.forEach((div) => {
  div.addEventListener("click", (event) => {
    var real_live_answer = document.getElementById("answer-section");
    var letter = event.target.innerHTML;
    var index_char = answer.indexOf(letter);
    console.log("real_live_answer", real_live_answer.innerHTML);
    console.log("letter", letter);
    console.log("index_char", index_char);
    console.log("try_count", try_count);
    console.log("answer", answer);
    if (index_char >= 0) {
      real_live_answer.innerHTML = replaceChar(
        real_live_answer.innerHTML,
        letter,
        index_char
      );
      answer = replaceChar(answer, "-", index_char);
      if (real_live_answer.innerHTML == hint_answer.answer.toUpperCase()) {
        alert("success");
        letters.style.visibility = "hidden";
      }
    } else {
      document.getElementById("hang").innerHTML =
        document.getElementById("hang").innerHTML +
        '<img src="./assets/' + hang[try_count] + '.svg" class="' + hang[try_count] + '" />';
      try_count += 1;
    }

    if (try_count >= 6) {
      letters.style.visibility = "hidden";
    }
  });
});
