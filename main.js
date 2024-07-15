// let shahar1 = prompt(
//     "Savol: Uzbekistoning poytaxti: a)Qoyliq b)Toshkent c) Andijon"
// );

// switch (shahar1) {
//     case "a":
//         console.log(" bu poytaxt emas");
//         break;

//     case "b":
//         console.log(" bu poytaxt");
//         break;

//     case "c":
//         console.log(" bu poytaxt emas");
//         break;

// }

// let shahar2 = prompt(
//     "Savol:  kamalakda nechta rang bor:  a) 5 b) 6 c)7 "
// );

// switch (shahar1) {
//     case "a":
//         console.log(" notogri");
//         break;

//     case "b":
//         console.log(" notogri");
//         break;

//     case "c":
//         console.log("togri");
//         break;

// }

// let shahar3 = prompt(
//     "Savol:  Uzbekistoning bayrogida necta yulduz bor: a) 32 b) 12 c) 2 "
// );

// switch (shahar1) {
//     case "a":
//         console.log(" notogri");
//         break;

//     case "b":
//         console.log(" togri");
//         break;

//     case "c":
//         console.log("notogri");
//         break;

// }




// let shahar4 = prompt(
//     "Savol:  Turkiyaning poytaxti: a) Istanbul b) Ankara c) Antaliya "
// );

// switch (shahar1) {
//     case "a":
//         console.log(" notogri");
//         break;

//     case "b":
//         console.log(" togri");
//         break;

//     case "c":
//         console.log("notogri");
//         break;

// }


// let shahar5 = prompt(
//     "Savol:  32+2 qoshsag nechi boladi: a) 34 b)100 c) 0 "
// );

// switch (shahar1) {
//     case "a":
//         console.log(" togri");
//         break;

//     case "b":
//         console.log(" notogri");
//         break;

//     case "c":
//         console.log("notogri");
//         break;

// }



// let array = [
//   {
//     savol: "Muhabbat qoshigini kim etgan",
//     javob: "Anvar Sanayev",
//   },

//   {
//     savol: "Toshkent poytaxti",
//     javob: "Qoyliq",
//   },

//   {
//     savol: "Qoyliq poytaxti",
//     javob: "Nurafshon kochasi",
//   },
// ];

// let savol = document.querySelector("#savol");
// let check = document.querySelector("#checkQuestion");
// let input = document.querySelector("input");
// let button = document.querySelector("button");

// let i = 0;

// savol.innerHTML = "Savol: " + array[i].savol + "?";

// button.addEventListener("click", () => {
//   switch (input.value) {
//     case array[i].javob:
//       check.classList.add("text-emerald-500", "text-3xl");
//       check.innerHTML = "TOGRI JAVOB";
//       break;

//     default:
//       check.classList.add("text-red-500", "text-3xl");

//       check.innerHTML = "NOTOGRI JAVOB";
//       break;

//   }
//   i++;
//   savol.innerHTML = "Savol: " + array [i].savol + "?";
// });






function isWeekday(day) {
    return (day >= 1 && day <= 7);
}

const currentDate = new Date();
const currentDay = currentDate.getDay();
const userInput = prompt("Введите число:");

const number = parseInt(userInput);
if (isWeekday(currentDay)) {
    switch (number) {
        case 1:
            alert("Сегодня понедельник, ваше число: 1");
            break;
        case 2:
            alert("Сегодня вторник, ваше число: 2");
            break;
        case 3:
            alert("Сегодня среда, ваше число: 3");
            break;
        case 4:
            alert("Сегодня четверг, ваше число: 4");
            break;
        case 5:
            alert("Сегодня пятница, ваше число: 5");
            break;
            case 6:
            alert("Сегодня суббота, ваше число: 6");
            break;
            case 7:
            alert("Сегодня воскресенье, ваше число: 7");
            break;
        default:
            alert("Сегодня будний день, но ваше число не соответствует текущему дню недели.");
    }
} else {
    alert("Сегодня выходной или вы ввели некорректное число.");
}










