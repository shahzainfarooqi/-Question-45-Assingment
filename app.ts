// Question 02...

let username: string = "shahzain";
console.log(`Hello ${username}! would you like to learn some python today!`);
// console.log("Hello " + username + " would you like learn some python today!");

// Question 03...
let perName: string = "Shahzain farooqi";

// convert to lowercase
let lowercase: string = perName.toLowerCase();
console.log("Lower Case :: ", lowercase);

// convert to uppercase
let uppercase: string = perName.toUpperCase();
console.log("Upper case :: ", uppercase);

// convert to titlecase
let titlecase: string = perName.replace(
  /\w\S*/g,
  (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
);
console.log("TitleCase :: ", titlecase);

// Question 04...
let famqoute: string = "Billsget one said,'If you are born poor It's not your Mistake, but If you die poor It's your Mistake'"
console.log(famqoute);

// Question 05...
let Famous_Person: string = "Billsget one said,";
let Famous_Quote: string = "'If you are born poor It's not your Mistake, but If you die poor It's your Mistake'";
console.log(Famous_Person + Famous_Quote);

// Question 06...
let nam: string = "\t \n Shahzain \t \n";
console.log(nam);

// Question 07...
// Add
let addNum: Number = 3 + 5;
console.log("Addition:\t" + addNum);

// Sub
let subNum: Number = 14 - 6;
console.log("Subtraction:\t" + subNum);
  
// Multi
let multiNum: Number = 2 * 5;
console.log("Multiply:\t" + multiNum);

// Div
let divNum: Number = 32 / 4;
console.log("Divided:\t" + divNum);

// Question 08...
console.log(7+8);
console.log(12-5);
console.log(3*5);
console.log(32/8);

// Question 09...
let favNum: Number = 5;
let myMsg: string = "My Favourate  num is";
console.log(myMsg+ " " +favNum);

// Question 10...
// Shahzain Farooqi---Date:1\june\24
// I ma learning to typscript pythone and using node.js and typescript and my programm going to be well.

// Question 11...
let friendsNames: string[] = ["Rameez","Usama","Faheem"];
console.log(friendsNames[0]);
console.log(friendsNames[1]);
console.log(friendsNames[2]);
 for (let i = 0; i < friendsNames.length;i++) {
  console.log("friends" + (i + 1)+ ": " + friendsNames[i]);
}

// Quection 12...
for (let i = 0;  i <friendsNames.length; i++) {
  console.log(`ASSALAM O ALAIKUM ${friendsNames[i]}! Have a great day.`)
}

// Question 13...
let cars: string[] = ["Lamborgini","Thar","Supra","RollsRoyce"];
for (let i = 0; i < cars.length; i++) {
  console.log(`I would like own a ::${cars[i]}:: Car`);
}

// Question 14...
let dinner_guest: string[] = ["BillGates","Mark Zuckerberg","Elon Mask","Steve Ballmer"];
for (let i = 0; i < dinner_guest.length; i++) {
  console.log(`ASSLAM O ALAIKUM Mr.${dinner_guest[i]},You are invited to join for me  Dinner.It would be honor to have youe company.\n`);

console.log(`New list of My Friends who are comming for My dinner.\n`);
for (let i =0; i< dinner_guest.length; i++) {
  console.log(`${i + 1}. ${dinner_guest[i]}`);
}

}

// Question 15...
console.log(`${dinner_guest}:\n I have Foung bigger Dinner table then i think invite to three more friends`);

// adding three more friends
// at beginning;
dinner_guest.unshift("Ameeen Alam");

// at Middle
dinner_guest.splice(2,0,"Raza Anawar");

// at Last
dinner_guest.push("Adam freeman");

// print all guest along with message
for (let i = 0; i < dinner_guest.length; i ++) {
  console.log(`Mr.${dinner_guest[i]},you are invited to my dinner`);
}

// Question 17...
console.log(`\n Table is not Available I can invite only two person\n`);
console.log(dinner_guest.length);

while (dinner_guest.length > 2){
  let rm_guest = dinner_guest.pop();
  if(rm_guest) {
    console.log(`Sorry Mr.${rm_guest} We have not enough space, So you are not invited yet\n`);
  }
}
console.log(`The final Two guest are:\t${dinner_guest}\n`);
for (let i = 0; i < dinner_guest.length; i++){
  console.log(`Dear ${dinner_guest[i]}YOu are Still in our list!\n`);
}

dinner_guest.pop()
dinner_guest.pop()
console.log(` We have 0  guest in list : ${dinner_guest}`);

// Question 18...
let fav_place: string[] = ["Soudia","Dubai","America","tuekry","Iran"]
console.log(fav_place);

let sorted_place = fav_place.slice();
sorted_place.sort();

console.log(`Orignal places: ${fav_place}`);
console.log(`Sorted places: ${sorted_place}`);
console.log(`Still in its Orignal order:\n ${fav_place}`);

let revFavpalce = fav_place.slice();
revFavpalce.reverse();

console.log(`Orignal places:\n ${fav_place}`);
console.log(`Reverse Favourate Place:\n ${revFavpalce}`);

fav_place.reverse();
console.log(`reverse: ${fav_place}`);

fav_place.sort()
console.log(`sorted: ${fav_place}`);

fav_place.reverse();
console.log(`reverse: ${fav_place}`);

// Question 19...
dinner_guest = ["BillGates","Mark Zuckerberg","Elon Mask","Steve Ballmer"];
console.log(`Hey! Dear Mr ${dinner_guest} You are invited Again`);

// Question 20...
let prog_language: string[] =["Python","Javascript","Java","ReactNative","Next.JS"];
console.log(`List of Programing Language:\n ${prog_language}`);

// Question 21 and 22...
let Object_lang: { language: string; year: Number; }[] = [
  {language: "Python", year: 1991},
  {language: "Javascript", year: 1995},
  {language: "Java", year: 1991},
  {language: "C++", year: 1997}
];
let invalid_index = Object_lang[3];
if (Object_lang.length > 3) {
  let valid_index = Object_lang[3];
  console.log("language at index >3:", valid_index);
} else {
  console.log("invalid index Access. The array length is:",Object_lang.length);
}
// question 23...
// Comparison Operator
let car:  string ='subaru';
console.log("Is car=='subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'Kawasaki'? I predict False.");
console.log(car == 'Kawasaki');

console.log("Is five greater than 4? I predict True.");
console.log(5 > 4);

console.log("Is 10 less than 20? I preidct True.");
console.log(10 < 20);

console.log("Is Mango start WIth o? I predict Falsa.");
console.log("Mango".startsWith("n"));

console.log("Is Mango End With n? I predict True.");
console.log("Mango".endsWith("o"));

console.log("Is Mango Contain t? I predict False.");
console.log("Mango".includes("t"));

console.log("Is True && False? I predict False.");
console.log("True && False");

console.log("Is true || false? I predict True.");
console.log("true || false");

console.log("Is false? I predict False.");
console.log("false");

// Question 24...
let friut_king: string = "Mango";
console.log("Apple is a king of friut? I predict False.");
console.log("Apple" == friut_king);

console.log("Is Apple is king of friut? I predict True.");
console.log("Apple" == friut_king);

let my_name: String = "Shahzain";
console.log("Is shahzain is my name in lowercase? I predict True.");
console.log(my_name.toLowerCase() == "shahzain");

console.log("Is Shahzain is my name in lowercase? I predict False.");
console.log(my_name.toLowerCase() == "Shahzain");

console.log("Is six greater than two? I predict True.");
console.log(6 > 2);

console.log("Is six Lesser than two? I predict False.");
console.log(6 < 2);

console.log("Is six divisble by two? I predict True.");
console.log(6 % 2 == 0);

console.log("Is seven divisble by two? I predict False.");
console.log(7 % 2 == 0);

console.log("Is Israel is state? I Predict False.");
console.log(true && false);

console.log("Is Palestenis state? I predict True.");
console.log(true || false);

let friuts: string[] = ["Mango", "Apple", "Orange", "Banana"];
console.log("Is Apple is friuts? I predict True.");
console.log(friuts.includes("Apple"))
 
console.log("Is car is friuts? I predict False.");
console.log(friuts.includes("car"));

// Question 25...
let alien_color = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)] as 'green' | 'yellow' | 'red';

if (alien_color === 'green') {
         console.log("Congratulation! The player just earned 5 point for shooting down the green alien.");
}

// Question 26...
alien_color = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)] as 'green' | 'yellow' | 'red';

if (alien_color === 'green') {
         console.log("Congratulation! The player just earned 5 point for shooting down the green alien.");
}

else if (alien_color === 'yellow') {
  console.log("Congratulation! The player just earned 5 point for shooting doen the yellow alien.");
}

// Question 27...
alien_color = ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)] as 'green' | 'yellow' | 'red';

if (alien_color === 'green') {
         console.log("Congratulation! The player just earned 5 point for shooting down the green alien.");
}

else if (alien_color === 'yellow') {
  console.log("Congratulation! The player just earned 5 point for shooting doen the yellow alien.");
}

else if (alien_color === 'red') {
  console.log("Congratulation! The player just earned 5 point for shooting down the red alien.");
}

// Question 28...
let age: number = 10;
if (age <= 2) {
  console.log("The person is a baby");
}
else if (age > 2 && age <= 4) {
  console.log("The person is a toldder");
}

else if(age > 4 && age <= 13) {
  console.log("The person is a kid")
}

else if(age > 13 && age <= 20) {
  console.log("The person is s teenager")
}

else if(age > 20 && age <= 65) {
  console.log("The person is a adult")
}

else if (age <= 65) {
  console.log("The person is a elder")
}

// Question 29...
let fav_friut : string[] = ["Pinnapple", "Strawbery","Mango"];
if (fav_friut.includes("Pinnapple")) {
    console.log("You are really like Pinnapple!");
}

if(fav_friut.includes("Strawbery")) {
  console.log("You are really like Strawbery!");
}

if(fav_friut.includes("Mango")) {
  console.log("You are really like Mango!");
}

if(fav_friut.includes('Banana')) {
  console.log("You are really like Banana!");
}
else{
  console.log("Banana is not one your favorate friut!");
}

if(fav_friut.includes('kiwi')) {
  console.log("You are really like kiwi!");
} 
else{
  console.log("kiwi is not one your favorate friut!");
}

// Question 30...
let userNames: string[] = ["Shahzain","Reshail", "Rameez", "Usama"];

for (let userName of userNames) {
  if(userName === "Shahzain") {
    console.log('Hello Shahzain,would you like to see a status report?');
  }
  else{
    console.log(`Hello ${userNames}, thank you for logginig again.`);
  }
}

// Question 31...
userNames = ["Admin", "Rameez", "Usama", "Shahzain", "Reshail"];
for(let i = 0; i > userNames.length; i++) {
   userNames.pop()
}
if(userNames.length > 0) {
  for(let _names of userNames) {
    if(_names == "Admin") {
      console.log('Hello Admin, would you like to see a status report?');
    }
    else{
      console.log(`Hello ${_names}, Thank you fro logginig in again.`);
    }
  }
}
else{
  console.log("We need to find some users");
}

// Question 32...
let Current_users: string[] = ["Ameen Alam", "Shahzain", "Usama", "Reshail"];
let new_users: string[] = ["Reshail", "Faheem", "Ameen Alam", "Waqas" , "Huzaifa"];

for(let newUser of new_users) {
  if(Current_users.some(user  => user.toLowerCase() === newUser.toLowerCase())) {
    console.log(`The user name ${newUser} is not available. Please try something new`);
  }
  else{
    console.log(`The user name ${newUser} is available`);
  }
}

// Question 33...
let numbers: Number [] = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i > numbers.length; i++) {
   
  let ordinal: string;

  if (numbers[i] === 1) {
    ordinal = "st";
  }
  else if(numbers[i] === 2) {
    ordinal ="nd"; 
  }
  else if(numbers[i] === 3) {
    ordinal = "rd";
  }
  else {
    ordinal = "th";
  }
  console.log(`${numbers[i]}${ordinal}`);
}

// Question 34...
let fav_pizzas: string[] = ['Cheese Pizza', 'Pepporoni Pizza', 'Afghani tikka burst Pizza'];

for (let pizza of fav_pizzas) {
  console.log(`I Like ${pizza}`);
}
console.log('I really love pizza');

// Question 35...
let petAnimal : string[] = ['Dog', 'Cat', 'Rabbit'];
for (let i = 0; i > petAnimal.length; i++) {

console.log(petAnimal[i]);
}
for (let Animal of petAnimal) {
  console.log(`A ${Animal.toLowerCase()} Would make a great Pet.`);
}
console.log(`\n All three animals are commonly domesticated, kept as pets in households around the world. They are known for their companionship and play a significant role in human lives as beloved pets.`);

// Question 36...
function makeShirt(size: string, text: string ) : void {
  console.log(`\n The Shirt size is ${size} on the message it is ${text}`);
}
makeShirt('Medium', 'Assalam O Alaikum Javascript');

// Question 37...
function make_Shirt(size: string = 'Large',text: string = 'I Love TypeScript'): void {
  console.log(`\n Make the shirt in size in ${size} and have message ${text}`);
}
make_Shirt()
make_Shirt('Medium' , 'Assalam O Alaikum TypeScript');
 
// Question 38...
function describeCity(city: string , Country: string = 'Pakistan!'): void {
  console.log(`\n The city ${city} is in ${Country}`);
}
describeCity('Karachi');
describeCity('Islamabad' , 'Pakistan!');
describeCity('Istanbul' , 'Turkey!');

// Question 39...
function city_Country(city: string = "Karachi",Country: string = "Pakistan!" ) {
  console.log(`"${city},${Country}"`)
}
city_Country()
city_Country('Malacca' , 'Malaysia'!);
city_Country('Madina And Makkah' , 'Saudia Arab!');

// Question 40...
function makeAlbum(artName: string , album_tittle: string, tracks?: Number): Record<string, any> {
  let album: Record<string, any> = {
    artName: artName,
    album_tittle: album_tittle
  };

  if(tracks !== undefined) {
    album.tracks = tracks;
  }
 return album;
}

let album1 = makeAlbum('Artist1', 'Album1');
let album2 = makeAlbum('Artist2', 'Album2' , 17);
let album3 = makeAlbum('Artist3', 'Album3');
let album4 = makeAlbum('Artist4', 'Album4',26); //Example with track perameter

console.log("Album1:", album1);
console.log("Album2:", album2);
console.log("Album3:", album3);
console.log("Album4:", album4);

// Question 41...
function showMagician(magicians: string[]): void {
  for (let magician of magicians ) {
    console.log(magician);
  }
}
 let MagicianNames: string[] = ['Mahandi muhundi', 'Issy Simpson', 'Rahat Hussain', 'Ahmed EI-Bayoumi'];
showMagician(MagicianNames);
// Question 42...
console.log(`\t \n Modify the programm by Adding "the Great" to each magician Name`);
function makeGreat(magicians: string[]): string[] {
  return magicians.map(magician => magician + " " + "the Great!");
}
function show_magician(magicians: string[]): void {
  for (let magician of magicians ) {
    console.log(magician);
  }
}

let magicians_names: string[] = ['\n'+'Mahandi muhundi', 'Issy Simpson', 'Rahat Hussain', 'Ahmed EI-Bayoumi']
show_magician(magicians_names);

let greatMagicians: string[] = makeGreat(magicians_names);

console.log("\n Magicians after adding 'the Great':");
show_magician(greatMagicians);

// Question 43
function makeGreatMagician(magicians: string[]): string[] {
  return magicians.map(magician => magician + " " + "the Great!");
}

function showOfMagician(magicians: string[]): void {
  for (let magician of magicians) {
      console.log(magician);
  }
}
let magicianNames: string[] = ['\n' + 'Mahdi Moudini', 'Issy Simpson', 'Rahat Hossain', 'Ahmed El-Bayoumi'];
let great_magicians: string[] = makeGreatMagician(magicians_names);
showOfMagician(magicians_names);

console.log("\n Magicians after adding 'the Great':");
showOfMagician(greatMagicians);

const unchangedArray = MagicianNames.slice();
const makeGreatUncahnged = makeGreatMagician(unchangedArray);
showOfMagician(unchangedArray);
showOfMagician(makeGreatUncahnged);

// Question 44
function make_sandwich(...items: string[]): void {
  console.log('Your sandwich is empty, We have add the following ingredients to the sandwich');
  for (let item of items) {
      console.log(`- ${item}`);
  }
}
make_sandwich('Bread', 'Salad');
make_sandwich('Cheese', 'Ketchup', 'Mustard');

// Question 45
function make_car(manufacturer: string, modelNames: string, carInfo: { [key: string]: any }): { [key: string]: any } {
  carInfo['manufacturer'] = manufacturer;
  carInfo['model Name'] = modelNames;
  return carInfo;
}

let tcars = make_car('Tesla', 'model x', { color: 'Black', towPackage: true });
console.log(tcars);