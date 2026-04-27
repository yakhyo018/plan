
function countDigits(str) {
    let count = 0;

    for (let char of str) {
        if (!isNaN(char) && char !== " ") {
            count++;
        }
    }

    return count;
}

console.log(countDigits("ad2a54y79wet0sfgb9"));



/* CallBack function o'rganish */

// const { rejects } = require("node:assert");
// const { error } = require("node:console");
// const { resolve } = require("node:dns");
// const { workerData } = require("node:worker_threads");

//   console.log("jack ma maslahatlari");
//   const list = [
//     "yahshi talaba boling", //0-20
//     "tog'ri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashni boshlang", // 30-40
//     "siz kuchli bolgan narslarni qiling", // 40-50
//     "yoshlarga iinvistitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60
//   ]

//   function maslahatBering(a, callback) {
//     if ( typeof a !== "number") callback("insert number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 20 && a <= 40) callback(null, list[2]);
//     else if (a > 20 && a <= 50) callback(null, list[3]);
//     else if (a > 20 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//            callback(null, list[5]);
//         }, 5000);
//     }
//   }

//   console.log("passed here 0");
//   maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("Javob:", data);
//     }
//   })
//   console.log("passed here 1");

// ==============//

// Async functionlar haqida 
// async function maslahatBering(a) {
//     if ( typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 20 && a <= 40) return list[2];
//     else if (a > 20 && a <= 50) return list[3];
//     else if (a > 20 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve,reject) => {
//            setTimeout(function() {
//              resolve(list[5]);
//         }, 5000);
//         })
        
//     }
    
// }

/* Cll via Then/Catch bilan chaqirish
// console.log("passed here");
// maslahatBering(30).then(data => {
//     console.log("Javob", data);
// }).catch(err => {
//     console.log("ERROR", err);
// });
// console.log("passed here");

/* Call vai Await bilan chaqirish*/
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(30);
//     console.log(javob);
//     javob = await maslahatBering(40);
//      console.log(javob);
//      javob = await maslahatBering(40);
//      console.log(javob);
// }
// run();
    
//CallBack function
// function maslahatBering(a, callback) {
//     if ( typeof a !== "number") callback("insert number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 20 && a <= 40) callback(null, list[2]);
//     else if (a > 20 && a <= 50) callback(null, list[3]);
//     else if (a > 20 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function() {
//            callback(null, list[5]);
//         }, 1000);
//     }
//   }

//   console.log("passed here 0");  
//   maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("Javob:", data);
//     }
//   })
//   console.log("passed here 1");


/* MIT TASK */
// function countLatter(e,engineer) {
//     let i = 0;
//     for(let letter of engineer) {
//       if(letter === e) {
//           i++
//         }
//     }
//         return i
// }
// console.log("javob:", countLatter("e", "engineer"))

