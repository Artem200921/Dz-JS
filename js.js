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

// let a4 = [1, 8, 4, 8, 44];

// for (let i = 0; i < a4.length; i++) {
//   console.log(a4[i]);
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

// lesson 8

// let a1 = "Aboba a g are arr";
// let a2 = [7, 4, 3, 2, 44];

// console.log(a2.indexOf(3))

// console.log(a2);
// a2.push(132);
// console.log(a2);
// let a3 = [
//   [324, 4214, 53],
//   [41, 43, 252],
//   [43, 63, 1553],
// ];
// console.log(a3);
// a3.pop();
// console.log(a3);

// console.log(a1.split(" "));
// console.log(a2.join(" "));
// console.log(a2.join(","));
// console.log(a2.join("-"));

// console.log(a2.indexOf(1));
// console.log(a2.indexOf(2));
// console.log(a2.includes("abia"));
// console.log(a2.includes("aia"));

// a2.push("aga");
// console.log(a2);
// a2.pop();
// console.log(a2);
// a2.unshift(43);
// console.log(a2);
// a2.shift();
// console.log(a2);

// lesson 10

// let a9 = [1, 5, 2, 5, 6, 3, 7, 4, 7, 1488];
// console.log(a9.indexOf(3));
// console.log(a9);

// let a8 = a9.slice(0, 5);

// console.log(a8);

// let a10 = [
//   ["a1", "b1", "c1"],
//   ["a2", "b2", "c2"],
//   ["a3", "b3", "c3"],
// ];

// console.log(a10);
// console.log(a10.join(","));

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// let sumi = array1.concat(array2);

// let total = 0;

// for (i of sumi) {
//   total += i;
// }

// console.log(sumi);

// let total = 0;

// for (i of array1) {
//   total += i;
// }

// for (i of array2) {
//   total += i;
// }

// console.log(total);

// const styles = ["Jaz", "Blues"];

// console.log(styles);
// styles.push("Rock and Roll");
// console.log(styles);
// styles.splice(2, 0, "Classic");
// console.log(styles);
// console.log(styles.shift());
// console.log(styles);
// styles.splice(0, 0, "Rap", "Reggae");
// console.log(styles);

// let string = "JavaScript"
// let swap = "";
// for (let i = 0; i < string.length; i++) {
//   let a = string[i];
//   if (a === a.toUpperCase()) {
//     swap += a.toLowerCase();
//   } else {
//     swap += a.toUpperCase();
//   }
// }
// console.log(swap)

// DZ №8

// // 1

// let friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let result = "";
// for (let i = 0; i < friends.length; i++) {
//   result += friends[i];
//   if (i !== friends.length - 1) {
//     result += ", ";
//   }
// }
// console.log(result);

// console.log(friends.join(", "))

// // 2

// let cards = [
//   "Карточка-1",
//   "Карточка-2",
//   "Карточка-3",
//   "Карточка-4",
//   "Карточка-5",
// ];
// console.log("__________1___________");
// console.log(cards);

// cards.splice(2, 1);

// console.log("__________2___________")

// console.log(cards);

// cards.splice(2, 0, "Карточка-6");

// console.log("__________3___________");

// console.log(cards);

// cards.splice(3, 1, "Карточка-4");

// console.log(cards);

// lesson 10

// function sum(ar) {
//   let totalSuma = 0;
//   for (i of ar) {
//     totalSuma += i;
//   }
//   return totalSuma / ar.length;
// }
// const arr = [3, 3];
// console.log(sum(arr));

// function sum() {
//   let totalSuma = 0;
//   for (i of arguments) {
//     totalSuma += i;
//   }
//   return totalSuma / arguments.length;
// }

// console.log(sum(2,2));

// function am(a) {
//   if (a % 2 === 0) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }

// console.log(am(3));

// function sum(ar) {
//   let total = Math.max.apply(null, ar);
//   return total;
// }
// const arr = [5, 1, 4, 2, 100];
// console.log(sum(arr));

// function factorial(n) {
//   return n != 1 ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(4));

// function myAverageScore(arr) {
//   for (aru of arr) {
//     if (aru > 91 && aru < 100) {
//       console.log("My average score: A");
//     } else if (aru > 81 && aru < 90) {
//       console.log("My average score: B");
//     } else if (aru > 71 && aru < 80) {
//       console.log("My average score: C");
//     } else if (aru <= 70) {
//       console.log("My average score: D");
//     }
//   }
//   }
//   console.log(myAverageScore([100, 75, 81, 96]));

// DZ №9

// 1

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// const myArray = ["Mango", "Poly", "Ajax"];
// logItems(myArray);

// // 2

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(" ");

//   const totalCost = words.length * pricePerWord;

//   return totalCost;
// }

// const messages = "Це приклад повідомлення для гравіювання";

// const result = calculateEngravingPrice(messages, 10);

// console.log(`Вартість гравіювання: $${result}`);

// 3

// function longestWord(string) {
//   const word = string.split(" ");
//   let longest = "";

//   for (let i = 0; i < word.length; i++) {
//     if (longest.length < word[i].length) {
//       longest = word[i];
//     }
//   }

//   return longest;
// }

// // Приклад виклику функції:
// const inputString = "a wf attatatattatatat";
// const longestWord = longestWord(inputString);
// console.log("Найдовше слово: " + longestWord);

// 4

// function formatString(string) {
//   if (string.length <= 40) {
//     return string;
//   } else {
//     return string.slice(0, 40) + "...";
//   }
// }

// // Приклад виклику функції:
// const inputString = "Це приклад рядка, який може бути довшим за 40 символів.";
// const formattedString = formatString(inputString);
// console.log("Форматований рядок: " + formattedString);

// 5

// function checkingWord(message) {
//   message = message.toLowerCase();
//   if (message.includes("spam") || message.includes("sale")) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// checkingWord("ahahdsg sd sale");

// 6

// let input;
// const numbers = [];
// let total = 0;

// while (true) {
//   input = prompt("Введіть число:");
//   if (input === null) {
//     break;
//   }
//   const parseNumber = parseFloat(input);
//   if (!isNaN(parseNumber)) {
//     numbers.push(parseNumber);
//   } else {
//     alert("Було введено не число, спробуйте ще раз.");
//   }
// }

// if (numbers.length > 0) {
//   for (const number of numbers) {
//     total += number;
//   }
//   console.log(`Загальна сума чисел дорівнює ${total}`);
// }

// 7

// function isLoginValid(login) {
//   const minLength = 4;
//   const maxLength = 16;
//   return login.length >= minLength && login.length <= maxLength;
// }

// function isLoginUnique(allLogins, login) {
//   return !allLogins.includes(login);
// }

// function addLogin(allLogins, login) {
//   if (!isLoginValid(login)) {
//     return 'Помилка! Логін повинен бути від 4 до 16 символів';
//   }

//   if (!isLoginUnique(allLogins, login)) {
//     return 'Такий логін уже використовується!';
//   }

//   allLogins.push(login);
//   return 'Логін успішно доданий!';
// }

// const logins = ['Jordan', 'Marzia', 'Ryan'];
// const newLogin = prompt("Введіть логін:");

// console.log(addLogin(logins, newLogin));
// console.log(logins)

// DZ №10

// 1

// const button = document.getElementById("butt");

// button.addEventListener("click", () => {
//   alert("Hello World!");
// });

// 2

// const targetNumber = Math.floor(Math.random() * 100) + 1;

// const userGuess = parseInt(prompt("Введіть число від 1 до 100:"));

// if (userGuess === targetNumber) {
//     alert("Вітаємо! Ви вгадали число!");
// } else {
//     alert(`На жаль, правильне число було ${targetNumber}. Спробуйте ще раз!`);
// }

// 3

// const button = document.getElementById("myButton");

// let clickCount = 0;

// button.addEventListener("click", () => {
//   clickCount++;
//   console.log(`Кількість кліків: ${clickCount}`);
// });

// 4

// class

// let hotel = {
//   name: 'Hotel',
//   stars: 5,
//   showStars() {
//     console.log(this.stars)
//   },
//   changeStars(value) {
//     this.stars = value;
//   }
// }
// hotel.showStars();
// hotel.changeStars(6);
// hotel.showStars();

// class

// 2

// let myArray = {
//   name: "Artem",
//   ages: 14,
//   city: "Kiev",
//   occupation: "No",
//   increaseAge(age) {
//     return this.ages + age;
//   },
//   changeOccupation(position) {
//     return this.occupation = position;
//   },
// };
// // NAME
// console.log(myArray.name);
// myArray.name = "Igor";
// console.log(myArray.name);
// // AGE
// console.log(myArray.ages);
// myArray.ages = 20;
// console.log(myArray.ages);
// console.log(myArray.increaseAge(2));
// // CITY
// console.log(myArray.city);
// myArray.city = "Donbas";
// console.log(myArray.city);
// // OCCUPATION
// console.log(myArray.occupation);
// myArray.occupation = "Flower shop";
// console.log(myArray.occupation);
// console.log(myArray.changeOccupation("Front-end developer"));

// DZ №11

// 1

// let bankAccount = {
//   ownerName: "Іван",
//   accountNumber: "123456",
//   balance: 1000,
//   deposit(amount) {
//     this.balance += amount;
//     console.log(
//       `Рахунок поповнено на ${amount} грн. Загальний баланс: ${this.balance} грн.`
//     );
//   },
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       console.log(
//         `Знято ${amount} грн. Загальний баланс: ${this.balance} грн.`
//       );
//     } else {
//       console.log("Недостатньо коштів на рахунку!");
//     }
//   },
// };

// let button1 = document.getElementById("button1");

// button1.addEventListener("click", () => {
//   let input1 = parseInt(document.getElementById("input1").value);
//   bankAccount.deposit(input1);
// });

// let button2 = document.getElementById("button2");

// button2.addEventListener("click", () => {
//   let input2 = parseInt(document.getElementById("input2").value);
//   bankAccount.withdraw(input2);
// });

// 2

// let weather = {
//   temperature: 0,
//   humidity: "53%",
//   windSpeed: "4 km/h",
//   selectTemp(c) {
//     if (c < 0) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   },
// };

// let p = parseInt(prompt("Напишіть температуру:"));
// weather.selectTemp(p);

// 3

// let user = {
//   name: "Artem",
//   email: "fedorovartem1411@gmail.com",
//   password: "123456",
//   login(e, p) {
//     if (e === this.email && p === this.password) {
//       alert("Ви успішно зайшли в аккаунт!");
//     } else if (e !== this.email || p !== this.password) {
//       alert("Невірний емейл чи пароль!");
//     } else {
//       alert("Unknown error");
//     }
//   },
// };

// let emailP = prompt("Введіть адресу:");
// let passwordP = prompt("Введіть пароль:");

// user.login(emailP, passwordP);

// 4

// let target = document.querySelector("#div");

// let movie = {
//   title: "Хлопаки",
//   directors:
//     "	Стефан Шварц, Філіп Сгріккіа, Фред Туа, Деніел Еттіес, Ерік Кріпке, Дженніфер Фанг, Метт Шекман, Ден Трахтенберг, Сара Бойд, Стів Бойум, Ліз Фрідлендер, Себастіан Сільва",
//   year: 2019,
//   rating: 8,
//   checker() {
//     if (this.rating >= 8) {
//       target.insertAdjacentHTML(
//         "afterBegin",
//         `<p class='p'>${movie.rating}</p>`
//       );
//       target.insertAdjacentHTML("afterBegin", `<p class='p'>${movie.year}</p>`);
//       target.insertAdjacentHTML(
//         "afterBegin",
//         `<p class='p'>${movie.directors}</p>`
//       );
//       target.insertAdjacentHTML(
//         "afterBegin",
//         `<a class='p__true' href="https://uakino.club/seriesss/drama_series/10304-hlopc-hlopaki-1-sezon.html" target="_blank">${movie.title}</a>`
//       );
//     } else {
//       target.insertAdjacentHTML(
//         "afterBegin",
//         `<p class='p'>${movie.rating}</p>`
//       );
//       target.insertAdjacentHTML("afterBegin", `<p class='p'>${movie.year}</p>`);
//       target.insertAdjacentHTML(
//         "afterBegin",
//         `<p class='p'>${movie.directors}</p>`
//       );
//       target.insertAdjacentHTML(
//         "afterBegin",
//         `<a class='p' href="https://uakino.club/seriesss/drama_series/10304-hlopc-hlopaki-1-sezon.html" target="_blank">${movie.title}</a>`
//       );
//     }
//   },
// };

// movie.checker()

// class

// let person = {
//   name: "George",
//   age: 28,
//   gender: "Man",
//   search() {
//     for (let i of Object.entries(person)) {
//       const key = i[0];
//       const value = i[1];
//       console.log(`${key}: ${value}`);
//     }
//   },
// };

// person.search()

// book

// let book = {
//   title: "Гарі Потер",
//   author: "Джоан Роулінг",
//   year: 2001,
//   genre: 'Фентезі',
//   change(key, value) {
//     book[key] = value
//   }
// };

// book.change('title', 'Harry Potter')
// console.log(book.title)
// book.change("author", "Joanne Rowling");
// console.log(book.author)
// book.change("year", 2005);
// console.log(book.year)
// book.change("genre", 'Fantasy');
// console.log(book.genre)

// console.log(book)

// class

// let products = [
//   {
//     name: "Apple",
//     price: 2,
//     category: "Fruits",
//     stock: 1,
//   },
//   {
//     name: "Banana",
//     price: 5,
//     category: "Fruits",
//     stock: 7,
//   },
//   {
//     name: "Tomato",
//     price: 10,
//     category: "Vegetables",
//     stock: 10,
//   },
// ];

// function summing(products, category) {
//   let total = 0;
//   for (const product of products) {
//     if (product.category === category) {
//       total += product.price * product.stock;
//     }
//   }
//   return total;
// }

// const category = "Vegetables";
// const stock = summing(products, category);
// console.log(
//   `Загальна вартість товарів в наявності у категорії "${category}": $${stock}`
// );

// 2

// let person = {
//   firstName: "Artem",
//   lastName: "Fedorov",
//   fullName() {
//     return `Ім'я - ${this.firstName} прізвище - ${this.lastName}`;
//   },
// };

// alert(person.fullName())

// 3

// let product = {
//   name: "Mobile phone",
//   price: 1000,
//   quantity: 3,
//   prices() {
//     return `Ціна - ${this.price} $`;
//   },
// };

// console.log(product.price)

// class

// 1

// let person = {
//   name: "Igor",
//   last: "Redko",
//   age: 20,
// };

// function searcher(obj) {
//   const { name, last, age } = obj;
//   console.log(`Мене звати ${name} ${last} і мені ${age} років`);
// }

// searcher(person);

// 2

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   features: ["power windows", "rear camera", "navigation"],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true,
//   },
// };

// const { make, model, year, features, safety } = car;
// console.log(make, model, year, features, safety);

// 3

// const movie = {
//   title: "The Shawshank Redemption",
//   director: {
//     name: "Frank Darabont",
//     nationality: "American",
//   },
//   actors: ["Tim Robbins", "Morgan Freeman"],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90,
//   },
// };

// const { title, director, actors, release_year, ratings } = movie;
// console.log(title, director, actors, release_year, ratings);

// 4

// const student = {
//   name: "Bruce",
//   surname: "Lee",
//   grades: [4, 5, 3],
// };

// function find(obj) {
//   const { grades } = obj;
//   const [first, second, third] = grades
//   return `Середня оцінка: ${(first + second + third) / 3}`
// }

// console.log(find(student))

// 5

// const items = [
//   { name: "Футболка", price: 250, quantity: 2 },
//   { name: "Джинси", price: 800, quantity: 1 },
//   { name: "Кросівки", price: 1200, quantity: 1 },
// ];

// function calc(items) {
//   let total = 0;

//   for (const i of items) {
//     const { price, quantity } = i
//     total += price * quantity;
//   }

//   return total;
// }

// console.log(`Загальна вартість товарів: ${calc(items)}$`);

// 6

// const person = {
//   name: "John",
//   emails: ["john@gmail.com", "john@example.com", "john123@yahoo.com"],
// };

// function first(obj) {
//   const [first] = obj.emails
//   return first;
// }

// console.log(`Перший емейл: ${first(person)}`)

// 7

// const data = {
//   users: [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 17 },
//     { name: "Bob", age: 30 },
//     { name: "Alice", age: 20 },
//   ],
// };

// function adult(data) {
//   const { users } = data;
//   const adultUsers = users.filter(({ age }) => age > 18);
//   return adultUsers;
// }

// console.log(adult(data));

// 8

// const musicLibrary = {
//   count: 2,
//   artists: [
//     {
//       name: "The Beatles",
//       albums: [
//         {
//           title: "Sgt. Pepper's Lonely Hearts Club Band",
//           year: 1967,
//           tracks: [
//             { title: "With a Little Help from My Friends", duration: "2:44" },
//             { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
//             { title: "A Day in the Life", duration: "5:33" },
//           ],
//         },
//         {
//           title: "Abbey Road",
//           year: 1969,
//           tracks: [
//             { title: "Come Together", duration: "4:19" },
//             { title: "Something", duration: "3:01" },
//             { title: "Here Comes the Sun", duration: "3:06" },
//           ],
//         },
//       ],
//     },
//     {
//       name: "Pink Floyd",
//       albums: [
//         {
//           title: "The Wall",
//           year: 1979,
//           tracks: [
//             { title: "Another Brick in the Wall, Part 2", duration: "3:59" },
//             { title: "Comfortably Numb", duration: "6:23" },
//             { title: "Hey You", duration: "4:40" },
//           ],
//         },
//         {
//           title: "Dark Side of the Moon",
//           year: 1973,
//           tracks: [
//             { title: "Speak to Me/Breathe", duration: "3:58" },
//             { title: "Time", duration: "7:06" },
//             { title: "Money", duration: "6:22" },
//           ],
//         },
//       ],
//     },
//   ],
// };

// const {
//   artists: [
//     {
//       albums: [title, year],
//     },
//   ],
// } = musicLibrary;

// console.log(title);
// console.log(year);

// DZ №12

// 1

// const button = document.getElementById("butt");

// const obj = {
//   name1: "Hello World!",
// };

// const { name1 } = obj;

// button.addEventListener("click", () => {
//   alert(name1);
// });

// 2

// const target = {
//   rand: Math.floor(Math.random() * 100) + 1,
//   pars: parseInt(prompt("Введіть число від 1 до 100:")),
// };

// const { rand, pars} = target;

// pars;

// if (pars === rand) {
//   alert("Вітаємо! Ви вгадали число!");
// } else {
//   alert(`На жаль, правильне число було ${rand}. Спробуйте ще раз!`);
// }

// 3

// const obj = { button: document.getElementById("myButton") };

// const { button } = obj;

// let clickCount = 0;

// button.addEventListener("click", () => {
//   clickCount++;
//   console.log(`Кількість кліків: ${clickCount}`);
// });

// 4

// function applyCallbackToEachElement(arr, callback) {
//   const result = [];
//   for (const element of arr) {
//     result.push(callback(element));
//   }
//   return result;
// }

// const arr = [1, 2, 3, 4, 5];
// const squareCallback = (x) => x * x;

// const squaredArray = applyCallbackToEachElement(arr, squareCallback);
// console.log(squaredArray);

// 5

// const obj = {
//   price: 100,
//   discount: 10,
// };

// const { price, discount } = obj;

// const calculateDiscountedPrice = (price, discount) => {
//   const discountedPrice = price * (1 - discount / 100);
//   return discountedPrice;
// };

// const finalPrice = calculateDiscountedPrice(price, discount);
// console.log(`Дисконтна ціна: ${finalPrice} грн`);

// class

// 1

// const array = [32, 4, 5, 2, 56, 34, 20];

// const result = array.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(result);

// 2

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const result = players.map((num) => {
//   parseInt(num.points *= 1.1);
// });

// console.log(result);

// console.log(players);

// _____________________________________________

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const online = players.filter((player) => player.online);

// console.log(online);

// 3

// const people = [
//   { name: "John", age: 32, occupation: "programmer" },
//   { name: "Jane", age: 26, occupation: "teacher" },
//   { name: "Mike", age: 42, occupation: "engineer" },
//   { name: "Emily", age: 17, occupation: "designer" },
// ];

// const res = people.map((num) => {
//   num.age > 18 ? console.log(num.name, num.age) : console.log("Є людина якій меньше за 18!");
// });

// 4

// const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
// const array2 = [5, 12, 3, 14, 4, 5, 6, 6, 7];

// const combined = array1.concat(array2);

// let total = [];
// for (let i = 0; i < combined.length; i++) {
//   if (total.indexOf(combined[i]) === -1) {
//     total.push(combined[i]);
//   }
// }

// console.log(total);

// DZ №14

// 1

// const names = [
//   {
//     name: "Artem",
//     age: 14,
//     colour_eye: "Brown",
//     gender: "Boy",
//     activity: true,
//     email: "artem@gmail.com",
//   },
//   {
//     name: "Egor",
//     age: 13,
//     colour_eye: "Blue",
//     gender: "Boy",
//     activity: false,
//     email: "egor@gmail.com",
//   },
//   {
//     name: "Ivan",
//     age: 24,
//     colour_eye: "Brown",
//     gender: "Boy",
//     activity: false,
//     email: "ivan@gmail.com",
//   },
//   {
//     name: "Jenny",
//     age: 12,
//     colour_eye: "Blue",
//     gender: "Girl",
//     activity: false,
//     email: "jenny@gmail.com",
//   },
// ];

// let array = [];

// const res = names.map((num) => {
//   array.push(num.name);
// });

// console.log(array)

// 2

// const res = names.map(eye => {
//   eye.colour_eye === "Brown"
//     ? array.push(eye.name)
//     : console.log();
// })

// console.log(array)

// 3

// const res = names.map(gender => {
//   gender.gender === "Girl"
//     ? array.push(gender.name)
//     : console.log();
// })

// console.log(array)

// 4

// const res = names.map((actv) => {
//   actv.activity === false
//     ? array.push(actv.name, actv.activity)
//     : console.log();
// });

// console.log(array);

// 5

// const res = names.map((emai) => {
//   emai.email === "jenny@gmail.com" ? array.push(emai.name) : console.log;
// });

// console.log(array)

// 6

// const res = names.map(ag => {
//   ag.age >= 14 && ag.age <= 24 ? array.push(ag.name) : console.log()
// })

// console.log(array)

// class

// 1

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const res = players.reduce((acc, value) => acc + value.timePlayed, 0);
// console.log(res);

// 1.2

// const res = players.reduce((acc, value) => acc + value.points, 0);
// console.log(res);

// 1.3

// const mid = res / players.length;
// console.log(mid)

// 2

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// let array = [];

// const res = tweets.reduce((acc, value) => {
//   array.push(...value.tags);
//   return array;
// });

// console.log(res);

// 2.2

// const stat = {};

// tweets.forEach((tweet) => {
//   tweet.tags.forEach((tag) => {
//     if (stat[tag]) {
//       stat[tag]++;
//     } else {
//       stat[tag] = 1;
//     }
//   });
// });

// console.log(stat);

// class

// 1

// const arr = ["Artem", "Dan", "Ban", "Ivan", "Johny"];
// console.log(arr)
// console.log(arr.sort())

// 2

// const names = [
//   {
//     name: "John",
//     dayActivity: 2,
//   },
//   {
//     name: "Lusy",
//     dayActivity: 51,
//   },
//   {
//     name: "Igor",
//     dayActivity: 7,
//   },
// ];

// const sorting = (a, b) => b.dayActivity - a.dayActivity;
// console.log(names.sort(sorting));

// 3

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// Time

// const sorting = (a, b) => a.timePlayed - b.timePlayed;

// console.log(players.sort(sorting));

// Points

// const sortingPoints = (a, b) => a.points - b.points;

// console.log(players.sort(sortingPoints))

// 4

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const res = cart.reduce((acc, value) => acc + value.quantity, 0);

// console.log(res)

// 5

// const arr = [
//   { name: "John", age: 32 },
//   { name: "Jane", age: 26 },
//   { name: "Mike", age: 42 },
//   { name: "Artem", age: 29 },
// ];

// arr.sort((a, b) => a.name.localeCompare(b.name))

// console.log(arr)

// class

// 1

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   };
//   getFullName(firstName, lastName) {
//     return `${this.firstName} ${this.lastName}`
//   };
// }

// const person1 = new Person("John", "Doe");
// console.log(person1.getFullName());

// 2

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea(width, height) {
//     return this.width * this.height;
//   }
// }

// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea());

// 3

// class Calculator {
//   constructor(firstNum, secondNum) {
//     this.firstNum = firstNum
//     this.secondNum = secondNum
//   }
//   add(firstNum, secondNum) {
//     return firstNum + secondNum;
//   }
//   subtract(firstNum, secondNum) {
//     return firstNum - secondNum;
//   }
//   multiply(firstNum, secondNum) {
//     return firstNum * secondNum
//   }
//   divide(firstNum, secondNum) {
//     if (firstNum / secondNum === Infinity) {
//       return "Ділити на нуль не можна!";
//     } else {
//       return firstNum / secondNum;
//     }
//   }
// }

// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0));

// 4

// class Product {
//   constructor(productName, price, discount) {
//     this.productName = productName;
//     this.price = price;
//     this.discount = discount;
//   }
//   getDiscountPrice() {
//     return this.price - this.price * (this.discount / 100);
//   }
// }

// const product1 = new Product("Phone", 500, 20);

// if (product1.getDiscountPrice() === Product.price) {
//   console.log(`Ціна без знижки: ${Product.price}`);
// } else {
//   console.log(`Ціна зі знижкою: ${product1.getDiscountPrice()}`);
// }

// DZ №15

// 1

// const people = [
//   { name: "Ivan", balance: 100, friend: "Mark", friends: 2, skill: "Fly" },
//   { name: "Tom", balance: 200, friend: "Mark", friends: 6, skill: "Fly" },
//   {
//     name: "Leim",
//     balance: 400,
//     friend: "Artem",
//     friends: 3,
//     skill: "Ice punch",
//   },
// ];

// const res = people.reduce((acc, bal) => acc + bal.balance, 0);

// console.log(res);

// 2

// let arr = [];

// const res = people.map((person) => (person.friend === "Mark") ? arr.push(person.name) : console.log())

// console.log(arr);

// 3

// let arr = [];

// const first = (a, b) => b.friends - a.friends;

// const resu = people
//   .sort((a, b) => b.friends - a.friends)
//   .map((person) => person.name);

// arr.push(resu);

// console.log(arr);

// 4

// const uniqueSkills = [...new Set(people.map(person => person.skill))].sort();

// console.log(uniqueSkills);

// class

// 1

// const li = document.querySelectorAll("[class]");

// console.log(li)

// class

// 1

// const list = document.querySelector("ul");

// list.style = "background-color: yellow";

// 2

// const link = document.querySelector("a");

// link.classList.add("site-nav__item");

// const href = document.querySelector("[href='https://']");

// href.style = "font-size: 30px";

// 3

// const hrefs = document.querySelectorAll('a[href^="http"]');

// hrefs.forEach((href) => {
//   href.style.color = "orange";
// });

// const firstLink = document.querySelector("a[href]");
// firstLink.classList.add("style");
// const lastLink = hrefs[hrefs.length - 1];
// lastLink.classList.add("style");

// DZ 6

// 1

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// 2

// for (let i = 2; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// 3

// for (let i = 1; i <= 10; i++) {
//   console.log(`7 * ${i} = ${7 * i}`);
// }

// 4

// let arr = [1, 2, 3, 4, 5];
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// 5

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 7) {
//     break;
//   }
//   console.log(arr[i]);
// }

// 6

// let n = 15;
// for (let i = 1; i < n; i++) {
//   if (i >= n) {
//     break;
//   }
//   console.log(i);
// }

// 7

// let i = 1;
// while (i <= 20) {
//   if (i % 3 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// DZ №17

// // 1

// const butt = document.getElementById("butt");

// butt.addEventListener("click", () => {
//   const inp = document.getElementById("input").value;
//   butt.textContent = inp;
// });

// // 2

// const img = document.getElementById("image");
// img.src =
//   "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg";
// img.style.width = "100px";
// img.style.height = "100px";

// // 3

// const a = document.querySelector("a");
// img.alt = "Doggy";

// a.href = "https://www.google.com/";
// a.target = "_blank";

// // 4

// const listChild = document.querySelector("#list__child");
// listChild.textContent = "Це перша дитина списку!"

// Urok

// 1

// const butt = document.createElement("button");
// butt.style.position = "absolute";
// butt.style.top = "100px";
// butt.style.left = "100px";
// butt.textContent = "Natisny na mene!";

// const img = document.createElement("img");
// img.src =
//   "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg";
// img.alt = "Little doggy";
// img.style.width = "100px";
// img.style.height = "100px";

// const body = document.querySelector("body");

// body.prepend(butt, img);

// 2

// const list = document.getElementById("list");

// list.style = "font-weight:900";

// const lishka = document.createElement("li");

// lishka.textContent = "Privit!";

// list.append(lishka);
// list.rem

// 3

// const list = document.getElementById("list");

// list.insertAdjacentHTML("beforebegin", "<h1>Hello</h1>")

// 4

// const images = [
//   "https://images.pexels.com/photos/16053278/pexels-photo-16053278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/15851469/pexels-photo-15851469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// ];

// const div = document.getElementById("gallery");

// function imagese(imga) {
//   imga.forEach((img) =>
//     div.insertAdjacentHTML(
//       "beforebegin",
//       `<img style="width:100px; height:100px" src="${img}">`
//     )
//   );
// }

// imagese(images)

// DZ 18

// 1

// const list = document.querySelectorAll('#categories li');
// console.log(`У списку ${list.length} категорії.`);

// list.forEach(item => {
//   const title = item.textContent;
//   const count = item.querySelectorAll('li').length;
//   console.log(`Категорія: ${title}`);
//   console.log(`Кількість елементів: ${count}`);
// });

// 2

// const list = document.getElementById("ingredients");

// const ingredients = [
//   "Картопля",
//   "Гриби",
//   "Часник",
//   "Помідори",
//   "Зелень",
//   "Приправи",
// ];

// ingredients.forEach(item => {
//   const li = document.createElement(`li`);
//   li.textContent = item;
//   list.appendChild(li)
// });

// 3

// const list = document.getElementById("ingredients");

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// images.forEach((img) => {
//   const im = document.createElement(`img`);
//   const li = document.createElement("li");
//   im.src = img.url;
//   im.alt = img.alt;
//   im.classList.add("img")
//   li.classList.add("item")

//   list.appendChild(li);
//   li.appendChild(im);
// });

// 4

// const count = document.getElementById("counterValue");
// const plus = document.getElementById("increment");
// const minus = document.getElementById("decrement");

// let i = 0;

// function updateUI() {
//   count.textContent = i;
// }

// function increment() {
//   i += 1;
//   updateUI();
// }

// function decrement() {
//   i -= 1;
//   updateUI();
// }

// plus.addEventListener("click", increment);
// minus.addEventListener("click", decrement);

// lesson

// 1

// const form = document.querySelector("#form");

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault()
//   alert("Ви зареєструвалися успішно! Дякую!");
// });

// 2

// const input = document.querySelector("#input");

// const form = document.querySelector("#form");

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   alert(`Вітаю, ${input.value}`)
// });

// 3

// const clear = document.querySelector(".js-clear");
// const jsOutput = document.querySelector(".js-output");
// const output = document.querySelector(".output");

// let array = [];

// document.addEventListener("keypress", (evt) => {
//   array.push(evt.key);
//   jsOutput.textContent = array.join("");
// });

// clear.addEventListener("click", () => {
//   array = [];
//   jsOutput.textContent = "";
// });

// 4

// const message = document.querySelector("#message");
// const input = document.querySelector("#input");

// document.addEventListener("keypress", (evt) => {
//   if (evt.key == "Enter") {
//     message.textContent = input.value;
//   }
// });

// 5

// document.addEventListener("keydown", (evt) => {
//   console.log(evt.code);
// });

// 6

// const box = document.querySelector("#box");

// document.addEventListener("keydown", (evt) => {
//   if (evt.key === "y") {
//     box.classList.remove("green");
//     box.classList.add("yellow");
//   } else {
//     console.log("Error");
//   }
//   if (evt.key === "g") {
//     box.classList.remove("yellow");
//     box.classList.add("green");
//   } else {
//     console.log("Error");
//   }
// });

// DZ 19

// mode

const dark = document.querySelector(".dark-mode");
const light = document.querySelector(".light-mode");

dark.addEventListener("click", () => {
  document.body.classList.add("dark-bg", "dark-mode-text");
  document.body.classList.remove("light-bg", "light-mode-text");
});

light.addEventListener("click", () => {
  document.body.classList.add("light-bg", "light-mode-text");
  document.body.classList.remove("dark-bg", "dark-mode-text");
});

// dz

// 1

// const openModalBtn = document.querySelector('button[data-action="open-modal"]');
// const closeModalBtn = document.querySelector(
//   'button[data-action="close-modal"]'
// );
// const backdrop = document.querySelector(".js-backdrop");
// const modal = document.querySelector(".modal");

// openModalBtn.addEventListener("click", () => {
//   backdrop.classList.add("show-modal");
// });

// closeModalBtn.addEventListener("click", () => {
//   backdrop.classList.remove("show-modal");
// });

// backdrop.addEventListener("click", (event) => {
//   if (event.target === backdrop) {
//     backdrop.classList.remove("show-modal");
//   }
// });

// 3

// const radio = document.querySelectorAll(".radiob");

// const form = document.querySelector("form");

// radio.forEach((radioButton) => {
//   radioButton.addEventListener("change", (evt) => {
//     form.style.backgroundColor = evt.target.value;
//   });
// });

// 4

// const input = document.querySelector("#name-input");
// const span = document.querySelector("#name-output");

// let array = [];

// document.addEventListener("keypress", (evt) => {
//   array.push(evt.key);
//   span.textContent = array.join("");
//   if (input.value === "") {
//     array = [];
//     span.textContent = "незнайомець";
//   } else {
//     console.log("");
//   }
// });

// 4.1

// document.addEventListener("keypress", (evt) => {
//   if (evt.key == "Enter") {
//     const input = document.querySelector("#validation-input");

//     if (input.value.length >= input.dataset.length) {
//       input.classList.add("valid");
//       input.classList.remove("invalid");
//     } else if (input.value.length <= input.dataset.length) {
//       input.classList.add("invalid");
//       input.classList.remove("valid");
//     }
//   } else {
//     console.log("");
//   }
// });

// 5

// const changeFont = document.querySelector("#font-size-control");
// const subtitle = document.getElementById("text");

// changeFont.addEventListener(("input"), () => {
//   subtitle.style.fontSize = changeFont.value + "px"
// });

// DZ 20

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("image");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 2000);
// }

// Urok

// 1

// const list = document.getElementById("userList");
// list.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     event.target.remove();
//   }
// });

// 2

// const list = document.getElementById("task-list");
// const newTaskInput = document.getElementById("new-task");
// const addButton = document.getElementById("add-task");

// addButton.addEventListener("click", () => {
//   const text = newTaskInput.value.trim();
//   if (text !== "") {
//     const li = document.createElement("li");
//     li.innerHTML = `
//                 <input type="checkbox" class="task-checkbox">
//                 <span>${text}</span>
//                 <button class="delete-task">Видалити</button>
//             `;
//     list.appendChild(li);
//     newTaskInput.value = "";
//   }
// });

// list.addEventListener("click", (event) => {
//   if (event.target.classList.contains("delete-task")) {
//     const li = event.target.parentElement;
//     list.removeChild(li);
//   } else if (event.target.classList.contains("task-checkbox")) {
//     const li = event.target.parentElement;
//     if (event.target.checked) {
//       li.querySelector("span").classList.add("completed");
//     } else {
//       li.querySelector("span").classList.remove("completed");
//     }
//   }
// });

// 3

// const palette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");
// const item = document.querySelectorAll(".item");

// item.forEach((elem) => elem.style.backgroundColor = elem.dataset.color)

// palette.addEventListener("click", (event) => {
//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// });

// 4

// const jsNav = document.querySelector(".js-nav");
// const btn = document.querySelectorAll(".btn");

// jsNav.addEventListener("click", (event) => {
//   if (event.target.classList.contains("btn")) {
//     const activeButton = jsNav.querySelector(".active");
//     if (activeButton) {
//       activeButton.classList.remove("active");
//     }
//     event.target.classList.add("active");
//   }
// });

// Front-end 4, DZ 2

// 1

// const slider = document.querySelector(".slider__input");
// const image = document.querySelector(".slider__image");

// function resizeImage() {
//   const scale = slider.value / 100;
//   image.style.width = `${300 * scale}px`;
//   image.style.height = `${300 * scale}px`;
// }

// const debouncedResizeImage = _.debounce(resizeImage, 100);

// slider.addEventListener("input", debouncedResizeImage);

// 2

// const box = document.getElementById("box");

// function moveBox(event) {
//   box.style.left = `${event.clientX}px`;
//   box.style.top = `${event.clientY}px`;
// }

// const debouncedMoveBox = _.debounce(moveBox, 100);

// document.addEventListener("mousemove", debouncedMoveBox);

// urok

// 1

// const boxes = document.querySelectorAll(".box");

// const options = {
//   root: null,
//   threshold: 0.6,
// };

// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible");
//     } else {
//       entry.target.classList.remove("visible");
//     }
//   });
// };

// const observer = new IntersectionObserver(callback, options);
// boxes.forEach((box) => observer.observe(box));

// 2

// const list = document.querySelectorAll(".fruits-list li");
// const options = {
//   root: null,
//   threshold: 0.6,
// };

// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     const titleImg = entry.target.querySelector("h3");
//     const img = entry.target.querySelector("img");
//     if (entry.isIntersecting) {
//       img.style.opacity = 1;
//       titleImg.style.color = "red";
//       img.classList.add("visible");
//     } else {
//       img.style.opacity = 0;
//       titleImg.style.color = "black";
//       img.classList.remove("visible");
//     }
//   });
// };

// const observer = new IntersectionObserver(callback, options);
// list.forEach((box) => observer.observe(box));

// DZ - 2 №3

// const images = document.querySelectorAll("img[data-src]");

// const loadImages = (image) => {
//   image.src = image.getAttribute("data-src");
//   image.onload = () => {
//     image.removeAttribute("data-src");
//     const nextImage = image.nextElementSibling;
//     if (nextImage && nextImage.tagName === "IMG") {
//       imageObserver.observe(nextImage);
//     }
//   };
// };

// const imageObserver = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       loadImages(entry.target);
//       observer.unobserve(entry.target);
//     }
//   });
// });

// const firstImage = images[0];
// if (firstImage) {
//   imageObserver.observe(firstImage);
// }
