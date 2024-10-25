var Answers = {
    0: {hint: "A four-wheeled vehicle", answer: "car"},
    1: {hint: "Flies high in the sky", answer: "plane"},
    2: {hint: "King of the jungle", answer: "lion"},
    3: {hint: "A place to keep money", answer: "bank"},
    4: {hint: "A tropical fruit with yellow skin", answer: "banana"},
    5: {hint: "The opposite of light", answer: "dark"},
    6: {hint: "A hot beverage", answer: "coffee"},
    7: {hint: "A popular pet that purrs", answer: "cat"},
    8: {hint: "Frozen water", answer: "ice"},
    9: {hint: "A large body of salt water", answer: "ocean"},
    10: {hint: "You need this to breathe", answer: "air"},
    11: {hint: "A very tall building", answer: "skyscraper"},
    12: {hint: "A tool to tell time", answer: "clock"},
    13: {hint: "A tasty Italian food", answer: "pizza"},
    14: {hint: "Grows on trees and can be red, green, or yellow", answer: "apple"},
    15: {hint: "Man’s best friend", answer: "dog"},
    16: {hint: "Used to unlock doors", answer: "key"},
    17: {hint: "A musical instrument with keys", answer: "piano"},
    18: {hint: "A place to sleep at night", answer: "bed"},
    19: {hint: "Something you wear on your feet", answer: "shoes"}
};
function sizeOfArray (array) {
    let size = 0;
    for (let key in array) {
        if (array.hasOwnProperty(key)) {
        size++;
        }
    }
    return size;
}

var randm_answer = Math.floor(Math.random() * sizeOfArray(Answers));
var hint_answer = Answers[randm_answer];
var answer = hint_answer.answer.toUpperCase();
var hint = hint_answer.hint;
var try_count = 0;
var succ_count = 0;
var hint_section = document.getElementById('hint-section');
var answer_section = document.getElementById('answer-section');
var letters = document.querySelector('.letters');

answer_section.innerHTML = "-".repeat(answer.length);
hint_section.innerHTML = hint;

const divs = document.querySelectorAll('.letter');

divs.forEach((div) => {
    div.addEventListener('click', (event) => {
        var letter = event.target.innerHTML;        
    });
});


