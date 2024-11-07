// 1. შექმენით რიცხვების მასივი და foreach ციკლით დაბეჭდეთ მათი კვადრატი.
const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach(num => console.log(num * num));

// 2. შექმენით ხილის სახელების მასივი და foreach ციკლით დაბეჭდეთ თითოეული ხილის სახელი.
const fruits = ["ვაშლი", "ბანანი", "მარწყვი" , "ფორთოხალი"];
fruits.forEach(fruit => console.log(fruit));

// 3. მასივში არსებული რიცხვების ჯამი გამოიანგარიშეთ foreach ციკლით.
let sum = 0;
numbers.forEach(num => sum += num);
console.log(sum);

// 4. შექმენით მასივი სტუდენტების სახელებით და foreach ციკლით დაბეჭდეთ, რომელი სტუდენტი რომელ ადგილზეა.
const students = ["სუხო", "სანდრო", "ვალერი"];
students.forEach((student, index) => console.log(`${index + 1}. ${student}`));
// 5. შექმენით მასივი და მასში ჩაწერეთ მთელი რიცხვები. foreach ციკლით მხოლოდ ლუწი რიცხვები დაბეჭდეთ.
numbers.forEach(num => {
    if (num % 2 === 0) console.log(num);
  });
// 6. შექმენით რიცხვების მასივი და map მეთოდის საშუალებით მიიღეთ მათი კვადრატების ახალი მასივი.
const squares = numbers.map(num => num * num);
console.log(squares);

// 7. მასივში ჩაწერეთ სახელები და map მეთოდის გამოყენებით ყოველი სახელი ყველა ასოს პატარა ასოზე გადააკეთეთ.
const names = ["სუხო", "სანდრო", "ვალერი"];
const lowerCaseNames = names.map(name => name.toLowerCase());
console.log(lowerCaseNames);

// 8. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, სადაც ყველა რიცხვი 10-ზე გაიზარდა.
const increasedByTen = numbers.map(num => num + 10);
console.log(increasedByTen);
// 9. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის სტუდენტის სახელი და ქულა. map მეთოდით მიიღეთ ახალი მასივი მხოლოდ სტუდენტების სახელებით.
const studentScores = [
  { name: "სუხო", score: 90 },
  { name: "ლუკა", score: 85 },
  { name: "ალექსა", score: 78 }
];
const studentNames = studentScores.map(student => student.name);
console.log(studentNames);

// 10. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, რომელშიც ყველა ლუწი რიცხვი გაორმაგებულია, ხოლო კენტი არ შეცვლილა.
const modifiedNumbers = numbers.map(num => num % 2 === 0 ? num * 2 : num);
console.log(modifiedNumbers);

// 11. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ მხოლოდ ლუწი რიცხვების მასივი.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);


// 12. შექმენით სახელების მასივი და filter მეთოდით მხოლოდ ის სახელები ამოიღეთ, რომლებიც 5-ზე მეტ სიმბოლოს შეიცავს.
const longNames = names.filter(name => name.length > 5);
console.log(longNames);

// 13. შექმენით რიცხვების მასივი და filter მეთოდით მხოლოდ დადებითი რიცხვები მიიღეთ.
const positiveNumbers = numbers.filter(num => num > 0);
console.log(positiveNumbers);

// 14. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის პროდუქტების სახელები და ფასები. filter მეთოდით მიიღეთ მხოლოდ ის პროდუქტები, რომელთა ფასი 100-ზე მეტია.
const products = [
  { name: "ლეპტოპი", price: 1700},
  { name: "მობილური", price: 777 },
  { name: "ყურსასმენი", price: 70 }
];
const expensiveProducts = products.filter(product => product.price > 100);
console.log(expensiveProducts);

// 15. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ ყველა რიცხვი, რომელიც 50-ს აღემატება.
const overFifty = numbers.filter(num => num > 50);
console.log(overFifty);
// 16. დაწერეთ კოდი, რომელიც while ციკლით 1-დან 10-მდე რიცხვებს დაბეჭდავს.
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}


// 17. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში არსებული რიცხვების ჯამს გამოიანგარიშებს.let j = 0, sumWhile = 0;
while (s < numbers.length) {  
    sumWhile += numbers[s];     
    s++;                        
  }
  
  console.log(sumWhile);
  let s = 0;
let sumWhile = 0;

// 18. შექმენით ცვლადი რიცხვით 1 და while ციკლით იმატეთ 2-ით, სანამ რიცხვი არ მიაღწევს 20-ს.
let k = 1;
while (k < 20) {
  console.log(k);
  k += 2;
}


// 19. დაწერეთ პროგრამა, რომელიც while ციკლით რიცხვებს დაბეჭდავს 20-დან 10-მდე დაღმავალი თანმიმდევრობით.
let l = 20;
while (l >= 10) {
  console.log(l);
  l--;
}
// 20. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში ყველა ობიექტს გამოიკვლევს და თითოეული მათგანის სახელს დაბეჭდავს.
let m = 0;
while (m < studentScores.length) {
  console.log(studentScores[m].name);
  m++;
}