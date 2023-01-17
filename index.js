
// ---- TASK 1 ----

// const { TableSortLabel } = require("@mui/material");

function checkAge(age) {
    return (age > 18) || confirm("Родители разрешили?")
}

// ---- TASK 2 ----

function pow(x, n){
    let result = 1;
    for(let i = 0; i < n; i++)
        result = x * result;
    return result;
}

// console.log(pow(2, 10));

// ---- TASK 3 ----

let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );

// ---- TASK 4 ----

let arr = [5, 2, 1, -10, 8];

function mySort (arr){
    arr.sort();
    let result = [];
    for(let i = arr.length - 1 ; i >= 0; i--){
        result.push(arr[i]);
    }
    return result;
}
arr = mySort(arr);
alert( arr ); // 8, 5, 2, 1, -10

// ---- TASK 5 ----

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = [];
users.map(e => names.push(e.name));

alert( names ); // Вася, Петя, Маша

// ---- TASK 6 ----

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let usersMapped = [];
users1.map(element => usersMapped.push({ fullName: element.name + " " + element.surname, id: element.id }));

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин


// ---- TASK 7 ----

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let users2 = [ vasya2, petya2, masha2 ];

function getAverageAge(users){
    return users.reduce((prev, curr) => prev + curr.age, 0) / users2.length;
}

alert( getAverageAge(users2) ); // (25 + 30 + 29) / 3 = 28