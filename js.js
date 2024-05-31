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

// lesson №4
// let num1 = parseFloat(prompt("Введіть перше число: "));
// let operator = prompt("Введіть дію (+, -, *, /):");
// let num2 = parseFloat(prompt("Введіть друге число: "));
// let result;
// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     if (num2 != 0) {
//       result = num1 / num2;
//     } else {
//       console.log("Но но но! Не можна ділити на 0!!!");
//     }
//     break;
//   default:
//     result = "Інвалід";
// }

// console.log(result);

// let primpt = parseFloat(prompt("Введіть число для перевірки"));
// if (primpt >= 55 && primpt <= 99) {
//   alert("Число потрапляє в діапазон");
// } else {
//   alert("Число не потрапляє в діапазон");
// }

// let maksim = 55;
// let result;
// if (maksim >= 0 && maksim <= 16) {
//   result = "kids";
// } else {
//   if (maksim >= 17 && maksim <= 60) {
//     result = "adult";
//   } else {
//     if (maksim >= 61 && maksim <= 100) {
//       result = "pensioners";
//     } else {
//       alert("Помилка!");
//     }
//   }
// }

// alert(result);

// let yourName = prompt("Введіть ваше ім'я");
// let yourLastName = prompt("Введіть ваше прізвище");
// if (yourName.length >= 4 && yourLastName.length >= 5) {
//   alert(parseInt(yourLastName.length) + parseInt(yourName.length));
// } else {
//   alert("УПС");
// }

// DZ №5

// select

// document.querySelector("select").addEventListener("change", function (e) {
//   alert(`Ви вибрали: ${e.target.value}`);
// });

// input

// let inputik = prompt("Введіть день тиждня:");
// switch (inputik) {
//   case "Понеділок":
//     alert("Робочий день");
//     break;
//   case "Вівторок":
//     alert("Робочий день");
//     break;
//   case "Середа":
//     alert("Робочий день");
//     break;
//   case "Четвер":
//     alert("Робочий день");
//     break;
//   case "П'ятниця":
//     alert("Робочий день");
//     break;
//   case "Суббота":
//     alert("Вихідний");
//     break;
//   case "Неділя":
//     alert("Вихідний");
//     break;
//   default:
//     alert("Це не є ні робочим днем, ні вихідним");
// }

// input №2

// let inputik = prompt("Введіть число місяця:");
// switch (inputik) {
//   case "12":
//     alert("Зима");
//     break;
//   case "1":
//     alert("Зима");
//     break;
//   case "2":
//     alert("Зима");
//     break;
//   case "3":
//     alert("Весна");
//     break;
//   case "4":
//     alert("Весна");
//     break;
//   case "5":
//     alert("Весна");
//     break;
//   case "6":
//     alert("Літо");
//     break;
//   case "7":
//     alert("Літо");
//     break;
//   case "8":
//     alert("Літо");
//     break;
//   case "9":
//     alert("Осінь");
//     break;
//   case "10":
//     alert("Осінь");
//     break;
//   case "11":
//     alert("Осінь");
//     break;
//   default:
//     alert("Це не числом місяця");
// }

// input №3

// let inputik = prompt("Введіть число місяця:");
// switch (inputik) {
//   case "12":
//     alert("Це грудень, в ньому 31 день");
//     break;
//   case "1":
//     alert("Це січень, в ньому 31 день");
//     break;
//   case "2":
//     alert("Це лютий, в ньому 28 день, але, кожні 4 роки в лютому 29 днів");
//     break;
//   case "3":
//     alert("Це березень, в ньому 31 день");
//     break;
//   case "4":
//     alert("Це квітень, в ньому 30 день");
//     break;
//   case "5":
//     alert("Це травень, в ньому 31 день");
//     break;
//   case "6":
//     alert("Це червень, в ньому 30 день");
//     break;
//   case "7":
//     alert("Це липень, в ньому 31 день");
//     break;
//   case "8":
//     alert("Це серпень, в ньому 31 день");
//     break;
//   case "9":
//     alert("Це вересень, в ньому 31 день");
//     break;
//   case "10":
//     alert("Це жовтень, в ньому 31 день");
//     break;
//   case "11":
//     alert("Це листопад, в ньому 30 день");
//     break;
//   default:
//     alert("Це не числом місяця");
// }

// colors

// let pro = prompt("Введіть колір:");

// if (pro == "Червоний") {
//   alert("Стоп");
// } else {
//   if (pro == "Жовтий") {
//     alert("Чекати");
//   } else {
//     if (pro == "Зелений") {
//       alert("Йдіть");
//     } else {
//       alert("Це не колір який є в списку");
//     }
//   }
// }

// calculater

// let number1 = parseFloat(prompt("Введіть перше число:"));
// let operator = prompt("Введіть дію ( + , - , * , /):");
// let number2 = parseFloat(prompt("Введіть друге число:"));
// let result;
// switch (operator) {
//   case "+":
//     result = number1 + number2;
//     break;
//   case "-":
//     result = number1 - number2;
//     break;
//   case "*":
//     result = number1 * number2;
//     break;
//   case "/":
//     if (number2 !== 0) {
//       result = number1 / number2;
//     } else {
//       result = "Не можна ділити на 0!";
//     }
//     break;
//   default:
//     result = "Invalid operation";
// }
// console.log(`Результат : ${result}`);

// lesson №5

// let sum = 10;
// for (let i = 0; i <= sum; i++){
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i)
// }

// let n = 1;
// while (n <= 5) {
//   n++;
//   console.log(n);
// }

// let employees = 10;
// let totalSalary;
// let zp = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;

// for (totalSalary = 1; totalSalary <= employees; totalSalary++) {
//   totalSalary = totalSalary * zp;
//   console.log(totalSalary);
// }

// console.log(totalSalary);

// let min = parseInt(prompt("Введіть число"));
// let max = parseInt(prompt("Введіть число"));
// let sum = 0;
// for (i = min; i <= max; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   sum += i;
// }
// console.log(sum);

// lesson №7

// const irr = "JavaScript"
// for ( i of irr) {
//   console.log(i)
// }

// let arr1 = [1, 5, '4', 'hello']
// let arr2 = [true, 2, {}, ['a'], 222]

// console.log(arr1[1] + arr2[1])

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (i of cart) {
//   total += i;
// }
// console.log(total);

// const arr1 = [1, 5, "4", "hello"];
// const arr2 = [true, 2, {}, ["a"], 222];
// console.log(arr1[1]);
// console.log(arr2[1]);
// console.log(arr1[1] + arr2[1]);

// console.log("____________");

// arr1[arr1.length] = 22;
// for (i of arr1) {
//   console.log(i);
// }

// console.log("____________");

// for (i of arr2) {
//   console.log(i);
//   console.log(typeof i);
// }

// console.log("____________");

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for (i of numbers) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);

// console.log("____________");

// const users = ["user1", "user2", "user3"];
// const pro = prompt("Введіть логін");
// for (i of users) {
//   if (i === pro) {
//     alert("Знайдено");
//   } else {
//     alert("Не знайдено");
//   }
// }

// if (users.includes(pro)) {
//   alert("Знайдено");
// } else {
//   alert("Не знайдено");
// }

// DZ №7

// Масив 1

// let a1 = [3, 2, 56];

// a1[1] = 10;

// console.log(a1)

// Масив 2

// let a2 = [
//   ["a1", "b1", "c1"],
//   ["a2", "b2", "c2"],
//   ["a3", "b3", "c3"]
// ];

// console.log(a2);

// a2[a2.length] = ["a4", "b4", "c4"];

// console.log(a2);

// Масив 3

// let a3 = [1, 4, 8, 8];

// let total = 0;

// for (i of a3) {
//   total += i;
// }

// console.log(total);

// Масив 4

// let a4 = [1, 4, 8, 8, 44];

// for (let i = 0; i < a4.length; i++) {
//   console.log(a5[i])
// }

// Масив 5

// let a5 = [
//   [1, 4, 8, 8],
//   ["H", "H"],
//   [1, 4, 8, 8, 44],
//   [4, 4],
//   ["N", "N"],
// ];

// for (i of a5) {
//   if (i.length == 5) {
//     console.log(i)
//   }
// }

// Масив 6

// let a6 = [1, 4, 8, 8, 44, 100, 54, 63, 32, 5];
// const maxValue = Math.max.apply(null, a6);
// console.log(maxValue)

// Масив 7

// let a7 = [1, 4, 8, 8, 44, 100, 54, 63, 32, 5];
// for (let i = 0; i < a7.length; i++) {
//   if (a7[i] % 2 === 0) {
//     console.log(a7[i]);
//   }
// }
