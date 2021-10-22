// // Array
// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - whateve's new"
// ]

// console.log(coffeeOrder)
// console.log(coffeeOrder[2])
// coffeeOrder[1] = "Ann - Vanilla latte"
// console.log(coffeeOrder.length)
// coffeeOrder.push("Steven - Cappachino")
// console.log(coffeeOrder)

// activity 1

// let favourite_music = ["MGK Downfallhigh", "Rory Aurora","Dermot kennedy Giants"]

// console.log(favourite_music[0])
// console.log(favourite_music[1])
// console.log(favourite_music[2])

// favourite_music.push("juice world Lucid Dreams", "Shivers - Ed Sheeren")
// console.log(favourite_music[1])
// console.log(favourite_music.pop())


// let favourite_Drink = ["Coffee", "Gfuel","Water"]

// console.log(favourite_Drink[0])
// console.log(favourite_Drink[1])
// console.log(favourite_Drink[2])

// for (let i = 0; i < favourite_Drink.length; i++){
//     console.log(favourite_Drink[i])
// }


// let multiplesTwo = []

// for (let i = 0; i < 20; i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i)
//     }
// }

// console.log(`numbers divisible by 2 between 0 and 20 are ${multiplesTwo}.`)

// let card = ["dismond", "spade", "heart", "club"];
// let currentcard = "club";

// while(currentcard != "spade"){
//     console.log(currentcard);
//     currentcard = card[Math.floor(Math.random()*4)];
// }
// console.log(currentcard)



// // --- Activity 1 ---

// let favSongs = ['Africa', 'Take on Me', 'Never Gonna Give You Up']

// console.log(favSongs)

// // Stretch

// favSongs.push('September', 'Livin La Vida Loca')

// console.log(favSongs)

// // --- Activity 2 ---

// let numbers = [4, 9, 16, 25];
// let map = numbers.map(Math.sqrt)
// let shift = numbers.shift()
// let unshift = numbers.unshift(36)
// let splice = numbers.splice(2, 0, "Lemon", "Kiwi")

// console.log(map, shift, unshift)

// // --- Loops ---
// // --- Activity 1 ---

// let favFilms = ["Avatar", "1917", "Get Out", "Toy Story", "Star Wars"]

// favFilms.push("WALL-E", "Cars")

// for(let i = 0 ; i < favFilms.length; i++){
//   console.log(favFilms[i]);
// }

// // --- Activity 2 ---

// for(let i = 0 ; i < 6; i++){
//     console.log(Math.ceil(Math.random() * 50));
// }

// // --- Activity 3 ---

// for(let i = 9 ; i >= 0; i--){
//     console.log(i);
// }

// // --- Activity 4 ---

// let films = ["Soul", "Toy Story", "Ratatouille", "Up"]

// for(let i = 0 ; i < films.length; i++){
//     console.log(films[i]);
// }
// if(films[2] == "Ghostbusters"){
//     console.log("Yay its Ghostbusters")
// } else {
//     console.log("Boo! we want Ghostbusters")
// }

// // --- Activity 5 ---

// for(let i = 0 ; i < 6; i++){
//     let num = Math.ceil(Math.random() * 30);

//     if(num%7 == 0){
//         console.log(`${num} is divisible by 7`)
//     } else {
//         console.log(`${num} is not divisible by 7`)
//     }
// }

// // --- Activity 6 ---

// let bobsFollowers = ["Jean", "John", "Jack", "Jill"];
// let hannahsFollowers = ["Borris", "Bill", "Jack", "Jill"];

// for(let i = 0; i < bobsFollowers.length; i++){
//     for(let j = 0; j < hannahsFollowers.length; j++){
//         if(bobsFollowers[i] === hannahsFollowers[j]){
//             console.log(hannahsFollowers[j])
//         }
//     }
// }


// // --- Activity 7 ---

// // do while loop - does first then checks
// let text = "";
// let i = 0;
// do {
//     text = "The number is " + i;
//     console.log(text)
//     i++;
// }
// while (i < 5);

// i = 0;
// // for loop
// for (i = 0; i < 5; i++) {
//  (11 lines left")