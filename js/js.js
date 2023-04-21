let email = "@";
let string1 = "men.people@gmail.com";
console.log(string1.includes(email));
 
const Mynameis = "Andrey";
const lastName = "Viktor";
const fullName = Mynameis + " " + lastName;
console.log(fullName);

const userName = "Олександра";
const payment = 300; 
const final = "Дякуємо, Олександро! До сплати 300 гривень";
alert(final);


let myName = "Андрій";
myName = myName.replace("А", "@");
console.log(myName);

const index = fullName.indexOf(" ");
console.log(index);


const balance = "Ваш баланс поповнено на 1";
let quantity = balance + "000000000000000";
quantity = quantity.length;
console.log(quantity);


const result = 5 + 5 + "5";
console.log(result);


const productName = "Droid";
const pricePerItem = 3500;
const message1 = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(message1);

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = 800 * 6 + 50 * 6;
const message2 = `You ordered droids worth ${totalPrice} credits. Delivery (<delivery fee> credits) is included in total price`;
console.log(message2);

const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
console.log(courseTopicLength);
const firstElement = courseTopic.indexOf("J");
console.log(firstElement);
const lastElement = courseTopic.indexOf("s");
console.log(lastElement);

let string = "Я Зробив, а ви такі";
const substring= string.padStart(100, "@");
string = string.length;
console.log(string);
