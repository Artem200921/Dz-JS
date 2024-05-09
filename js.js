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

// const const_age = "14";
// console.log(const_age);
// let let_age = "14";
// console.log(let_age);

// // name

// const const_name = "Artem";
// console.log(const_name);
// let let_name = "Artem";
// console.log(let_name);

// // isStudent

// const const_isStudent = true;
// console.log(const_isStudent);
// let let_isStudent = true;
// console.log(let_isStudent);

// // myString

// const const_myString = prompt(
//   "Пробачте, в мене не має улюбленої цитати, але, я би хотів дізнатись яка ваша:"
// );
// console.log(const_myString);
// let let_myString = prompt(
//   "Пробачте, в мене не має улюбленої цитати, але, я би хотів дізнатись яка ваша:"
// );
// console.log(let_myString);

// // myNumber

// const const_myNumber = parseFloat("19");
// console.log(const_myNumber + 10);
// let let_myNumber = parseFloat("19");
// console.log(let_myNumber + 10);

// // myNull

// const const_myNull = null;
// console.log(const_myNull);
// let let_myNull = null;
// console.log(let_myNull);

// // prompt_name

// const const_prompt_name = prompt("Будь-ласка, введіть ваше ім'я:");
// console.log("Ось ваше ім'я:", const_prompt_name)
// let let_prompt_name = prompt("Будь-ласка, введіть ваше ім'я:");
// console.log("Ось ваше ім'я:", let_prompt_name);

// // confirm

// const const_confirm = confirm("Доброго дня, чи підтверджуєте ви дію?");
// if (false == const_confirm) {
//   alert("Дію відмінено!");
// } else {
//   alert("Дякую за підтвердження!");
// }
// let let_confirm = confirm("Доброго дня, чи підтверджуєте ви дію?");
// if (false == let_confirm) {
//   alert("Дію відмінено!");
// } else {
//   alert("Дякую за підтвердження!");
// }

// // alert

// const const_alert = alert("Увага! Ця дія небезпечна");
// let confirmSecond = confirm("Чи підтверджуєте цю дію?");
// if (true == confirmSecond) {
//   alert("Дякую за підтвердження!");
// } else {
//   alert("Дію відмінено");
// }
// console.log(confirmSecond);

// console.log(const_alert);
// let let_alert = alert("Увага! Ця дія небезпечна");
// let confirmSecond2 = confirm("Чи підтверджуєте цю дію?");
// if (true == confirmSecond2) {
//   alert("Дякую за підтвердження!");
// } else {
//   alert("Дію відмінено");
// }
// console.log(confirmSecond);

// console.log(let_alert);

// lesson №2

// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = Math.round(Math.random()*10);

// console.log(a1, a2, a3, a4, a5)

// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + Number('3');
// let a9 = 5 - Number("3");
// let a10 = 75 + "кг";

// alert(a6)
// alert(a7)
// alert(a8)
// alert(a9)
// alert(a10)

// let float = Math.random()+1;
// let float2 = Math.random() * (10 - 1) + 1;
// console.log(float)
// console.log(float2)

// let numb1 = parseFloat(prompt('Введіть перше число:'));
// let numb2 = parseFloat(prompt('Введіть друге число:'));
// let suma = numb1 + numb2;
// alert(suma)

// DZ №2

// degree

// let celcium = prompt(
//   "Введіть градуси в цельсіях щоб перевести їх в фарангейти:"
// );
// let suma = parseInt((celcium * 9) / 5 + 32);
// console.log(suma);
// let text = document.getElementById("title");
// let div = document.getElementById("textView");
// let forText = String(`Фарангейти: ${suma} Цельсій: ${celcium}`);
// text.innerHTML = forText;
// let button = document.querySelector("button");
// button.addEventListener("click", () => {
//   div.style.display = "none";
// });

// amount

// let amount = 30;
// let hour = amount * 24;
// let minutes = amount * 1440;
// console.log(hour, "hours");
// console.log(minutes, "minutes");

// gameHp

// let hp = 100;
// alert(`У вас залишилось HP: ${hp - Math.floor(Math.random() * (100 - 1) + 1)}`);
// alert(`У вас залишилось ST: ${hp - Math.floor(Math.random() * (100 - 1) + 1)}`);

// suma

// let suma = Math.floor(Math.random() * (10 - 1) + 1);
// let alertik = alert(`${parseInt(suma * 0.9)} USD`);

// random

// let random = Math.random() * (10 - 1) + 1;
// alert(random);
// let floor = alert(`${parseInt(random)}`);
// console.log(random);
// console.log(floor);

// float

// let random = "1.54664";
// let float = parseFloat(random);
// console.log(random);
// console.log(float);

// integer

// let integer = "19";
// let secondInteger = parseInt(integer);
// console.log(integer)
// console.log(secondInteger)

// sqrt

// let number1 = 14;
// let number2 = Math.sqrt(number1)
// console.log(number1)
// console.log(number2)

// number

// let number1 = 14;
// let number2 = "88";
// let parse = parseFloat(number2)
// console.log(number1.toString())
// console.log(number2)
// console.log(parse)

// lesson №3

// let name = "JavaScript";
// console.log(name.substring(4, -6));

// // DZ №3

// // result

// let result = 5 + 5 + "5";
// console.log(result)
// console.log(typeof result)

// // email

// let email = "artemfedorov1411@gmail.com"
// console.log(email.indexOf("@"))
// console.log(email)

// // fullName

// let my = "My";
// let names = "Name";
// let is = "Is";
// let fullName = my + names + is + "Viktor";
// console.log(fullName)

// // userName

// let userName = "Олександро";
// let payment = 300;
// alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);

// lesson №3

// let myName = "Артем Федоров";
// let javaScript = "JavaScript"
// console.log(myName.replace("А", "@"))
// console.log(javaScript.substring(0, 4))

// let gost = "Ваш баланс поповнено на 1000";
// console.log("фрфрфрфр".padEnd(20, "foo"));
// "abc".padEnd(10, "foo")

// lesson №4

// let num1 = 10;
// let num2 = 5;
// let bigNumber = num1 > num2 ? num1 : num2;
// console.log(bigNumber)

// let names = prompt("Яка “офіційна” назва JavaScript?");
// if ((names == "ECMAScript")) {
//   alert("Правильно");
// } else {
//   alert("Ви не знаєте? ECMAScript!");
// }
// let result;
// let premt = parseFloat(prompt("Введіть число:"));
// if (premt > 0) {
//   result = 1;
// } else if (premt < 0) {
//   result = -1;
// } else {
//   result = 0;
// }
// alert(result)

// DZ №4

// input №1
// let button = document.querySelector("button");
// button.addEventListener("click", () => {
// let input1 = document.getElementById("input").value;
// let input2 = document.getElementById("input2").value;
//

//   if (input1.trim() && input2.trim() !== "") {
//     alert("Обидва поля заповнені");
//   } else {
//     alert("Не всі поля заповнені");
//   }
// });

// input №2

// let button = document.querySelector("button");

// button.addEventListener("click", () => {
//   let input1 = parseFloat(document.getElementById("input").value);
//   let input2 = parseFloat(document.getElementById("input2").value);
//   let sum = input1 + input2;
//   if (sum > 10) {
//     alert("Сума більша за 10");
//   } else {
//     alert("Сума менша або дорівнює 10");
//   }
// });

// input №3

// let button = document.querySelector("button");
// button.addEventListener("click", () => {
//   let input1 = document.getElementById("input").value;

//   if (input1 == "JavaScript") {
//     alert("Текст містить слово JavaScript");
//   } else {
//     alert("Текст не містить слово JavaScript");
//   }
// });

// input №4

// let button = document.querySelector("button");

// button.addEventListener("click", () => {
//   let input1 = parseFloat(document.getElementById("input").value);
//   if (input1 >= 10 && input1 < 20) {
//     alert("Число входить в діапазон від 10 до 20");
//   } else {
//     alert("Число не входить в діапазон від 10 до 20");
//   }
// });

// input №5

// let button = document.querySelector("button");

// button.addEventListener("click", () => {
//   let input3 = document.getElementById("input3").value;
//   if (input3.indexOf("@") !== -1) {
//     console.log("fafa");
//   } else {
//     alert("E-mail має містити @");
//   }
// });
