   //Chapter 1  (Alerts)
  
  //1.  (a)
  alert("fatima");
   
  //    (b)
alert("mustufa");

  //    (c)
alert("fatimamustufa6@gmail.com");

  //    (d)
alert("03123456789");

  //2.
alert("You're learning Java Script!");

  //3.
alert("Welcome to the page");


   //Chapter 2  (Variables for string)
  
  //1.
var fname = "fatima";

var lname = "mustufa";

console.log(fname + " " + lname);
  
  //2.
var num1 = 20;

var num2 = "20";

console.log(typeof num1 + typeof num2);

 //3.
var TeamName = "Your Team Name";

alert(TeamName);

 //4.
var bestMan = "Charlie";

console.log(bestMan);

  //Chapter 3  (Variable for numbers)

  //1,2.
var caseQty = 144;

console.log(caseQty);

  //3.
var num = "9";

var numAsNumber = Number(num); 

var result = numAsNumber + 1;

console.log(num + " " + result);

 //4.
var sum = 2;

console.log(sum + 5)

  //5
var merchTotal = 100; 

var shippingCharge = 10; 

var orderTotal = merchTotal + shippingCharge;

console.log(merchTotal + shippingCharge);

  //6
let value = 10; 

value += 5; 

console.log(value);


    //MATH EXPRESSIONS
  
 //1.
var three = 3;

var five = 5;

var eight = 8;

document.write("Sum of" + " " + three + " " + "and" + " " + five + " " + "is" + " " + eight);

console.log(three + five + eight);

 //2.
console.log(three - five - eight);

console.log(three * five * eight);

console.log(three / five / eight);

 //4.
// Store the ticket price in a variable
var ticketPrice = 600;

// Calculate the cost of 5 tickets
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;

// Display the result
document.write("<br> The cost of buying " + numberOfTickets + " tickets is " + totalCost + " PKR. <br>");

 //6.
// Part a: Store a Celsius temperature into a variable
var celsiusTemp = 30; // Example: 30°C

// Part b: Convert Celsius to Fahrenheit
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;

document.write("<br>" + celsiusTemp + "°C is " + fahrenheitTemp + "°F");

// Part c: Store a Fahrenheit temperature into a variable
var fahrenheitTemp2 = 86; // Example: 86°F

// Part d: Convert Fahrenheit to Celsius
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;

document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2.toFixed(2) + "°C <br>");

 //7.
// Variables
var itemPrice = 1000;         // Price of a single item (in PKR)
var itemQuantity = 3;         // Number of items purchased
var shippingCharges = 150;    // Shipping charges (in PKR)
var discountPercent = 10;     // Discount percentage
var taxPercent = 8;           // Tax percentage

// Calculations
var totalItemCost = itemPrice * itemQuantity;           // Calculate total cost of items
var discountAmount = (totalItemCost * discountPercent) / 100;  // Calculate discount amount
var discountedPrice = totalItemCost - discountAmount;   // Price after discount
var taxAmount = (discountedPrice * taxPercent) / 100;   // Calculate tax amount
var finalTotal = discountedPrice + taxAmount + shippingCharges; // Final total including shipping and taxes

// Output the results
document.write("<h1>Shopping Cart</h1>I tem Price: " + itemPrice + " PKR <br>");
document.write("Quantity: " + itemQuantity);
document.write("Total Item Cost: " + totalItemCost + " PKR <br>");
document.write("Discount (" + discountPercent + "%): -" + discountAmount + " PKR <br>");
document.write("Price after Discount: " + discountedPrice + " PKR <br>");
document.write("Tax (" + taxPercent + "%): +" + taxAmount + " PKR <br>");
document.write("Shipping Charges: +" + shippingCharges + " PKR <br> <br>");
document.write("Final Total:" + finalTotal + " PKR <br> <br>");

 //8.
// Store total marks and marks obtained by the student
var totalMarks = 500;      // Example: total marks
var marksObtained = 400;   // Example: marks obtained by the student

// Compute the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser using document.write()
document.write(" <h1>Mark Sheet</h1>Marks Obtained: " + marksObtained + " out of " + totalMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%"); // rounding to 2 decimal places

  //9.
// Exchange rates
var usdToPkr = 104.80;    // 1 US Dollar = 104.80 PKR
var riyalToPkr = 28;      // 1 Saudi Riyal = 28 PKR

// Total amount in US dollars and Saudi Riyals
var usDollars = 10;
var saudiRiyals = 25;

// Convert the total currency to Pakistani Rupees in a single expression
var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * riyalToPkr);

// Display the result
document.write(" <h1> Currency in PKR</h1>Total in Pakistani Rupees: " + totalPkr + " PKR");

 //10.
// Initialize a variable with a number
var number = 20;  // You can change this number as needed

// Perform the calculations in a single expression
var result = ((number + 5) * 10) / 2;

// Display the result
console.log("The result is: " + result);

  //11.
// Store the current year in a variable
var currentYear = 2024; // Example: current year

// Store their birth year in a variable
var birthYear = 1990;   // Example: birth year

// Calculate the possible ages
var age1 = currentYear - birthYear;   // If they've had their birthday this year
var age2 = age1 - 1;                  // If they haven't had their birthday yet this year

// Output the result
document.write("<h1>Age Calculator</h1>They are either " + age2 + " or " + age1 + " years old.");

 //12.
// Store the radius into a variable
var radius = 10;  // Example: radius of the circle

// Constants
var pi = 3.142;   // Approximate value of π (Pi)

// Calculate the circumference of the circle (C = 2 * π * r)
var circumference = 2 * pi * radius;

// Calculate the area of the circle (A = π * r^2)
var area = pi * radius * radius;

// Output the results
document.write(" <h1>The Geometrizer</h1>The circumference is " + circumference + "<br>");
document.write("The area is " + area);

  //13.
// Store your favorite snack into a variable
var favoriteSnack = "chocolate bars"; // Example snack

// Store your current age into a variable
var currentAge = 25; // Example: your current age

// Store a maximum age into a variable
var maximumAge = 80; // Example: the age you plan to live until

// Store an estimated amount per day (as a number)
var amountPerDay = 2; // Example: 2 chocolate bars per day

// Calculate the total amount needed for the rest of your life
var totalYears = maximumAge - currentAge; // Calculate remaining years
var totalDays = totalYears * 365; // Approximate total days left (ignoring leap years)
var totalSnackAmount = totalDays * amountPerDay; // Total amount of snack needed

// Output the result to the screen
document.write(" <h1>The Lifetime Supply Calculator</h1>You will need " + totalSnackAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");

