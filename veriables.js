// let is a veriable that can be changed 
// const is a veriable that connot be changed
// let i = 10;
// console.log (i * i + 5)




// let favouriteColour = "yellow";
// let name = "steven";
// let age = 20;
// console.log(`Hi my name is ${name}. my favourite Colour is ${favouriteColour}, And my age is ${age}`)




// let breakfast = "kraze";
// let dinner = "bacon muffin";
// let tea = "Domino's";

// console.log(`Today I had ${breakfast} for breakfast and a  ${dinner} for lunch and for tea im having ${tea}.`);

// breakfast = "more Kraze";
// dinner = "tuna mayo buguette";
// tea = "stew";

// console.log(`Tomorrow I plan to eat ${breakfast} for breakfast, ${dinner} for lunch and ${tea} for dinner.`);




// num date1 = new Date('04/08/2022'); num date2 = new Date();
// num difference = date1. getTime() - date2. getTime();
// num days = Math. ceil(difference / (1000 * 3600 * 24)); console. log(days + ' days to your birthday');





// const space1 = "O"
// const space2 = "O"
// const space3 = "O"
// const space4 = "O"
// const space5 = "X"
// const space6 = "X"
// const space7 = "X"
// const space8 = "X"
// const space9 = "X"



// console.log (`   |   |`)
// console.log (` ${space5} | ${space1} |`)
// console.log (`   |   |`)
// console.log (`-----------`)
// console.log (`   |   |`)
// console.log (` ${space6} | ${space7} |`)
// console.log (`   |   |`)
// console.log (`-----------`)
// console.log (`   |   |`)
// console.log (` ${space2} |   |`)
// console.log (`   |   |`)




// let weather = "sunny";

// if (weather == "sunny") {
//     console.log("well i better wear some sun screen")
// } else if (weather == "rainy") {
//     console.log("better grab my umbrella")
// } else {
//     console.log("hmmm, it could go either way!")
// }



// == doesn't check the data type
// === checks that the data type is the same
// != means not equal
// !== means not equal and checks the data types are the same

// let place = "Manc"
// let weather = "Cloudy"

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check Again")
// } else if (place == "Manc" && weather == "Rain")
//     console.log("obvs");

// && allows two veriables to be used


//
// challenge 1

// age = 16
// country = "uk"
// if (age >= 30 && country == "uk") {
//     console.log ("i can serve you, here's a cold one")
// } else if (age <= 18 && country == "uk") {
//     console.log ("let me see some ID")
// } else
//     console.log ("i can't serve you sorry come back when you are of age! ")

//
// challenge 2
// let toppinng = "tuna"
// switch (toppinng) {

//     case  "pinapple":
//       console.log("ew gross no thanks")
//       break;
    
//     case "tuna":
//       console.log("yes please i love tuna")
//       break;
    
//     default:
//       console.log("i don't mind having that on it")
//     }

//
// challenge 3

// password = "Password"
// if ((password.length ) < 8) {
//     console.log ("that password is too short")
// } else {
//     console.log ("password accepted")
// }


//
// challenge 4

// num = 15

// if (num % 5 == 0 && num % 3 ==0)
//     console.log("fizz buzz")
// else if (num % 5 ==0)
//     console.log ("fizz")
// else if (num % 3 ==0)
//     console.log ("buzz")
// else
//     console.log ("the number provided cannot be divided by 3 or 5")


//
// challenge 5


// function checkPalindrome(word) {    
//     var l = word.length;
//     for (var i = 0; i < l / 2; i++) {
//         if (word.charAt(i) !== word.charAt(l - 1 - i)) {
//             return false;
//         }
//     }
//     return true;
// }

// if (checkPalindrome("1122332211")) {
//     console.log("The word is a palindrome");
// } else {
//     console.log("The word is NOT a palindrome");
// }


//
// challenge 6

// time = 14
// workplace = "working"
// home = "resting"
// commuting = "travelling"
// if (time < 8 && time > 18){
// console.log(home)
// } else if (time > 9 && time < 17){
// console.log (workplace)
// }else {
// console.log (commuting)
// }


//
// challenge 7
let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let vowelArr = ['a', 'e', 'i', 'o', 'u'];
let highestIndex =0;
// counter go through whole array using length as limiter
for (let i = 0; i < vowelArr.length; i++){
//  console.log(string.lastIndexOf(vowelArr[i]));
// gets index of vowel in current iteration
    index = string.lastIndexOf(vowelArr[i]);
// compares current index to find highest index
if (index >= highestIndex ){
// so new highestindex becomes index
    highestIndex = index;
// won't reach last two nums in vowelarray
    lastVowel = vowelArr[i];
}
}

// This like logs the last Vowel to the console. 
console.log(lastVowel); 
// This line logs the index number of the last vowel. 
console.log(highestIndex)





// challenge 8

//palindrome checker

// function reverse( str )
// {
//   // variable holds reverse string
//   let rev_str = "";
//   for( let i = str.length-1 ;i >= 0 ;i--)
//   {
//     rev_str+= str[i];
//   }
//   // return reverse string
//   return rev_str;
// }

// //  function checking string is palindrome or not
// function is_palindrome( str )
// {
//   reverse_str = reverse(str);
//   //  condition checking if reverse str is
//   // same as string it is palindrome
//   // else not a palindrome
//   if( reverse_str === str)
//   {
//     console.log("true");
//   }
//   else
//   {
//     console.log("faulse")
//   }
// }
// let test = "hellolleh";
// is_palindrome(test);

