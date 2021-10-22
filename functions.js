// age = 17
// if (age >= 18 && age < 60) {
//         console.log ("that will be £10.95 please")
//     } else if (age < 18) {
//         console.log ("that will be £8 please")
//     } else if (age >= 60){
//         console.log("that will be £7.50 please")
//     }

// let favouriteColour = () => {
//     console.log("my favourite colour is yellow")
// }

// favouriteColour()


// const favouriteColour = (color) => {
//     console.log(`my favourite colour is ${color}`)
// }

// favouriteColour("yellow")



// // Activity 1
// const factorial = (n) => {
//     if ((n === 0) ||(n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));



// // activity 2

// let order_count = 0

// let take_order = (toppings1, toppings2, toppings3) => {
//      console.log (`pizza with ${toppings1} ${toppings2} and ${toppings3}`)
//     order_count += 1
//    console.log(order_count)}

//  take_order ("pinapple", "tuna" , "ham")


// activity 3
// let pin = (1932); 
// let balance = (275);

// const withdrawal = () => {
//     if (pin == 1932 && balance <= 275){
//     console.log(`your £${balance} is being despenced please wait`);
// } else {
//     console.log(" This transaction cannot be processed");
// }
// }
// withdrawal (pin, balance);




let favSongs = ["MGK Down fall", "ED Sheeren Shivers"]
const person = {
    name: "steven",
    age: 20,
    favSongs:[
        "MGK Down fall",
        "ED Sheeren Shivers",
    ],
    myName(){
        return this.name
    }
} 


// console.log(person.name,favSongs[1])
// console.log(person["name"])
console.log(person.myName())



