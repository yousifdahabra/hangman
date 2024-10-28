var Answers = [
  { hint: "A four-wheeled vehicle", answer: "car" },
  { hint: "Flies high in the sky", answer: "plane" },
  { hint: "King of the jungle", answer: "lion" },
  { hint: "A place to keep money", answer: "bank" },
  { hint: "A tropical fruit with yellow skin", answer: "banana" },
  { hint: "The opposite of light", answer: "dark" },
  { hint: "A hot beverage", answer: "coffee" },
  { hint: "A popular pet that purrs", answer: "cat" },
  { hint: "Frozen water", answer: "ice" },
  { hint: "A large body of salt water", answer: "ocean" },
  { hint: "You need this to breathe", answer: "air" },
  { hint: "A very tall building", answer: "skyscraper" },
  { hint: "A tool to tell time", answer: "clock" },
  { hint: "A tasty Italian food", answer: "pizza" },
  {
    hint: "Grows on trees and can be red, green, or yellow",
    answer: "apple",
  },
];
var hang = {
  0: "head",
  1: "body",
  2: "left-hand",
  3: "right-hand",
  4: "left-leg",
  5: "right-leg",
};

//replace a character at a particular index from geeksforgeeks
function replace_char(origString, replace_char, index) {
  let firstPart = origString.substr(0, index);
  let lastPart = origString.substr(index + 1);

  let newString = firstPart + replace_char + lastPart;
  return newString;
}

document.getElementById('answer-section').insertAdjacentHTML('beforebegin', '<div class="answer-section" id="hint-section"></div>');
var randm_answer = Math.floor(Math.random() * Answers.length);
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
    if (index_char >= 0) {
      real_live_answer.innerHTML = replace_char(
        real_live_answer.innerHTML,
        letter,
        index_char
      );
      answer = replace_char(answer, "-", index_char);
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
      alert(hint_answer.answer.toUpperCase())
      letters.style.visibility = "hidden";
    }
  });
});
