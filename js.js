// lesson №1

// const old = parseFloat(prompt("Введіть свій вік"));
// const oldFriend = parseFloat(prompt("Введіть вік вашого друга"));
// console.log(old + oldFriend);
// const team = "FE_1y_10_23";
// console.log("Я навчаюся в GoITeens в групі:", team);

// const a = parseFloat(prompt("Число 1"));
// const b = parseFloat(prompt("Число 2"));
// console.log(a + b);

// const name = prompt("Введіть ваше ім'я:");
// console.log("Ваше ім'я:", name)

// DZ №1

// age

const const_age = "14";
console.log(const_age);
let let_age = "14";
console.log(let_age);

// name

const const_name = "Artem";
console.log(const_name);
let let_name = "Artem";
console.log(let_name);

// isStudent

const const_isStudent = true;
console.log(const_isStudent);
let let_isStudent = true;
console.log(let_isStudent);

// myString

const const_myString = prompt(
  "Пробачте, в мене не має улюбленої цитати, але, я би хотів дізнатись яка ваша:"
);
console.log(const_myString);
let let_myString = prompt(
  "Пробачте, в мене не має улюбленої цитати, але, я би хотів дізнатись яка ваша:"
);
console.log(let_myString);

// myNumber

const const_myNumber = parseFloat("19");
console.log(const_myNumber + 10);
let let_myNumber = parseFloat("19");
console.log(let_myNumber + 10);

// myNull

const const_myNull = null;
console.log(const_myNull);
let let_myNull = null;
console.log(let_myNull);

// prompt_name

const const_prompt_name = prompt("Будь-ласка, введіть ваше ім'я:");
console.log("Доброго дня,", const_prompt_name);
let let_prompt_name = prompt("Будь-ласка, введіть ваше ім'я:");
console.log("Доброго дня,", let_prompt_name);

// confirm

const const_confirm = confirm("Доброго дня, чи підтверджуєте ви дію?");
if (false == const_confirm) {
  alert("Дію відмінено!");
} else {
  alert("Дякую за підтвердження!");
}
console.log(const_confirm);
let let_confirm = confirm("Доброго дня, чи підтверджуєте ви дію?");
if (false == let_confirm) {
  alert("Дію відмінено!");
} else {
  alert("Дякую за підтвердження!");
}
console.log(let_confirm);

// alert

const const_alert = alert("Увага! Ця дія небезпечна");
let confirmSecond = confirm("Чи підтверджуєте цю дію?");
if (true == confirmSecond) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено");
}
console.log(confirmSecond);

console.log(const_alert);
let let_alert = alert("Увага! Ця дія небезпечна");
let confirmSecond2 = confirm("Чи підтверджуєте цю дію?");
if (true == confirmSecond2) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено");
}
console.log(confirmSecond);

console.log(let_alert);
