a. Create functions and call them with parameters.
Code 1:
function calculateSalary(name, basicSalary){
let bonus = 5000;
let totalSalary = basicSalary + bonus;
console.log("Employee Nmae:", name);
console.log("Basic Salary: ", basicSalary);
console.log("Bonus: ", bonus);
console.log("Total Salary: ", totalSalary);
console.log("Pranay T003")
}
calculateSalary("Pranay", 20000);

Code 2:
function genrateBill(product, quantity, price)
{
let total = quantity * price;

let bill = total + (total * 0.09);
console.log("Product: ", product);
console.log("Quantity: ", quantity);
console.log("Price per iem: ", price);
console.log("Total Bill : ", bill);
console.log("Pranay T003");
}
//Function Call
genrateBill("Mobile", 2, 20000);

b. Work with arrays and objects in JavaScript.
Code:
//Array
let fruits = ["Apple", "Banana", "Mango"];
//Object
let student = {
name: "Pranay",
age: 22,
city: "Mumbai",
};
console.log("Fruits: ", fruits);
console.log("Second Fruits: ", fruits[1]);
console.log("Student name: ", student.name);
console.log("Student age: ", student.age);
console.log("Student city: ", student.city);
console.log("Pranay T003");

c. Demonstrate use of arrow functions.
Code:
//Arrow function
let add = (a,b) => {
return a + b;
}
let multiply = (a,b) => {
return a * b;
}
let subtract = (a,b) => {
return a - b;
}
console.log("Addition: ", add(10, 20));
console.log("Multiplication: ", multiply(10, 20));
console.log("Subtraction: ", subtract(20, 10));
console.log("Pranay T003");

d. Write a program using array methods (map, filter, reduce).
Code:
let numbers = [10, 20, 30, 40, 50];
//Map()
let doubled = numbers.map((num) => num * 2);

//filter()
let greater25 = numbers.filter((num) => num > 25);
//reduce()
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Original Array: ", numbers);
console.log("Map: ", doubled);
console.log("Filter: ", greater25);
console.log("Reduce: ", total);
console.log("Pranay T003");

e. Create a program that manipulates objects and displays output.
Code:
//Creating an Object
let student ={
rollNo:103,
name:"Pranay",
marks: 90,
};
console.log("Original Object:");
console.log(student);
// 2. Accessing Properties
console.log("\nAccessing Properties: ");
console.log("Name:", student.name);
console.log("Marks:",student.marks);
//Updating Properties
student.marks = 95;
console.log("\nAfter Updating Marks:");
console.log(student);

//4.Adding New Properties
student.city = "Mumbai";
console.log("\nAfter Adding City:");
console.log(student);
//5. Deleting a Property
delete student.rollNo;
console.log("\nAfter Deleting Roll No:");
console.log(student);
console.log("Pranay T003");

f. Implement a small JavaScript program combining functions, arrays,
and objects.
Code:
//Array of objects
let students = [
{
rollNo: 103,
name: "Pranay",
marks: 90,
},
{
rollNo: 104,
name: "Rahul",
marks: 85,
},
{
rollNo: 105,
name: "Priya",
marks: 95,
}
];
//Finction to display student details
function display(s)
{
console.log("student details");
console.log(`--------------------`);
for(let stud of s)
{
console.log(`Roll No: , ${stud.rollNo}`);
console.log(`Name: , ${stud.name}`);
console.log(`Marks: , ${stud.marks}`);
console.log(`--------------------`);
}
}
//Function Call
display(students);
console.log("Pranay T003");

