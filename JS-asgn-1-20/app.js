
// chapter 1


// 1
// alert ("Welcome to The Learners' Institute");


// 2
// window.alert ("Error! Please enter a valid password.");


// 3
// alert ("Welcome to JS Land...\nHappy Coding");


// 4 
// alert ("Welcome to JS Land...");
// alert ("Happy Coding!\nPrevent this page from creating additional dialogs.");


// 5 (written directly on browser console)
// alert ("Hello... I can run JS through my web browser's console") ;


// 6 (uncomment [chapter1, part6] in html & css files)
// alert ("Welcome to my custom-built website!"); 


// 7 (uncomment [chapter1, part7] in html & css files one at a time)
// JS works the same in each case




// chapter 2


// 1
// var username;


// 2
// var myName = "Habiba Sultana";


//3 
// var message = "Hello World";
// alert (message);


// 4
// var studentName = "John Doe";
// var studentAge = "15 years old";
// var enrolledIn = "Certified Mobile Application Development"; 
// alert (studentName);
// alert (studentAge);
// alert (enrolledIn);


// 5
// var pizza = "PIZZA";
// alert (`${pizza} \n${pizza.slice (0, 4)} \n${pizza.slice (0,3)} \n${pizza.slice (0,2)} \n${pizza.slice (0,1)}`);
// alert (pizza + "\n" + pizza.slice (0,4) + "\n" );


// 6
// var email = "habiba_sultana@outlook.com";
// alert ("My email address is " + email);


// 7
// var book = "A Smarter Way to learn JavaScript" ;
// alert ("I am trying to learn from the book " + book);


// 8 
// document.write ("Yah! I can write HTML content through JavaScript");


// 9
// var str = "-----------ஜ ۩۞۩ ஜ----------";
// alert (str);
// document.write (str);




// chapter 3


// 1
// var age = 25;
// alert ("I am " + age + " years old.");


// 2
// var visits = 20;
// alert ("You have visited this site " + visits + " times.");


// 3
// var birthYear = 1994;
// document.write ("My birth year is " + birthYear + ".<br>Data type of my declared variable is number.");


// 4
// var visitorName = "John Doe";
// var productName = "T-shirts";
// var orderQuantity = 5;
// document.write (`${visitorName.bold()} ordered ${orderQuantity} ${productName.bold()}(s) on XYZ Clothing store.`);




// chapter 4


// 1
// var name, age, city;


// 2
// var _name, email2, Country, $flag, dangerAlert; //legal 
// var prompt, 5book, thank you, climb>tree, high-rise; //illegal


// 3
// var rule = "Rules for naming JS variables";
// var rule1 = "Variable names can only contain letters, numbers, $ and _ . For example $my_1stVariable"
// var rule2 = "Variables must begin with a letter, $ or _ . For example $name, _name or name";
// var rule3 = "Variable names are case-sensitive.";
// var rule4 = "Variable names should not be JS keywords.";
// document.write (`${rule.bold()} <br><br><br> ${rule1} <br> ${rule2} <br> ${rule3} <br> ${rule4}`);




// chapter 5

// 1
// var num1 = 20;
// var num2 = 11;
// var res = num1 + num2;
// document.write (`Sum of ${num1} and ${num2} is ${res}.`);


// 2 subtract
// var num1 = 30;
// var num2 = 40;
// var res = num1 - num2;
// document.write (`Difference of ${num1} and ${num2} is ${res}.`);

// 2 multiply
// var num1 = 3;
// var num2 = 4;
// var res = num1 * num2;
// document.write (`Product of ${num1} and ${num2} is ${res}.`);

// 2 divide
// var num1 = 324;
// var num2 = 4;
// var res = num1 / num2;
// document.write (`Division of ${num1} and ${num2} is ${res}.`);

// 2 modulus
// var num1 = 7;
// var num2 = 5;
// var res = num1 % num2;
// document.write (`Modulus of ${num1} and ${num2} is ${res}.`);


// 3
// var num;
// document.write (`Value after variable declaration is ${num}. <br>`);
// num = 9;
// document.write (`Initial value: ${num}. <br>`);
// num = num + 1;
// document.write (`Value after increment is: ${num}. <br>`);
// num = num + 7;
// document.write (`Value after addition is: ${num}. <br>`);
// num = num - 1;
// document.write (`Value after decrement is: ${num}. <br>`);
// num = num % 3;
// document.write (`The remainder is: ${num}. <br>`);


// 4
// var ticketPrice = 600;
// var ticketQuantity = 5;
// var totalCost = ticketPrice * ticketQuantity ;
// document.write (`Total cost to buy ${ticketQuantity} tickets to a movie is ${totalCost}PKR. `);


// 5
// var num = 8;
// document.write (`Table of 8<br>`);
// document.write (`${num}x1=${num * 1}<br>`);
// document.write (`${num}x2=${num * 2}<br>`);
// document.write (`${num}x3=${num * 3}<br>`);
// document.write (`${num}x4=${num * 4}<br>`);
// document.write (`${num}x5=${num * 5}<br>`);
// document.write (`${num}x6=${num * 6}<br>`);
// document.write (`${num}x7=${num * 7}<br>`);
// document.write (`${num}x8=${num * 8}<br>`);
// document.write (`${num}x9=${num * 9}<br>`);
// document.write (`${num}x10=${num * 10}<br>`);


// 6
// var tempCelsius = 35;
// var tempFahren = 104;
// var CelsiusToFahren = (tempCelsius * (9 / 5)) + 32;
// var FahrenToCelsius = (tempFahren - 32) * (5 / 9);
// document.write (`${tempCelsius}&deg;C is ${CelsiusToFahren}&deg;F. <br>`);
// document.write (`${tempFahren}&deg;F is ${FahrenToCelsius}&deg;C.`);


// 7
// var priceItem1 = 230;
// var orderQuantity1 = 4;
// var priceItem2 = 1100;
// var orderQuantity2 = 2;
// var shipCharge = 150;
// var totalCost = (priceItem1 * orderQuantity1) + (priceItem2 * orderQuantity2) + shipCharge;
// var heading = "Shopping Cart";
// document.write (`${heading.fontsize(6).bold()} <br><br><br>`);
// document.write (`Price of item 1 is ${priceItem1}. <br> `);
// document.write (`Quantity of item 1 is ${orderQuantity1}. <br> `);
// document.write (`Price of item 2 is ${priceItem2}. <br> `);
// document.write (`Quantity of item 2 is ${orderQuantity2}. <br> `);
// document.write (`Shipping charges are ${shipCharge}. <br> `);
// document.write (`<br> Total cost of your order is ${totalCost}. <br> `);


// 8
// var obtainMarks = 900;
// var totalMarks = 1100;
// var percent = (obtainMarks / totalMarks) * 100;
// document.write ("Marks Sheet".bold().fontsize(6) + "<br><br><br>");
// document.write (`Total marks: ${totalMarks} <br>`);
// document.write (`Marks obtained: ${obtainMarks} <br>`);
// document.write (`Percentage: ${percent}&percnt; <br>`);


// 9
// var numUSD = 10;
// var numSR = 25;
// var exchangeUSD = 104.80;
// var exchangeSR = 28;
// var totalPKR = ( numUSD * exchangeUSD) + (numSR * exchangeSR);
// document.write ("Currency in PKR".bold().fontsize(6) + "<br><br><br>");
// document.write ("Total currency in PKR: " + totalPKR);


// 10
// var num = 17;
// var res = ((num + 5) * 10) / 2;
// document.write (`The result is ${res}`);


// 11 
// var currentYear = 2020;
// var birthYear = 1996;
// var age = currentYear - birthYear;
// document.write (`Age Calculator <br><br>`.bold().fontsize(6));
// document.write (`Current Year: ${currentYear} <br> Birth Year: ${birthYear} <br>`);
// document.write (`They are either ${age} or ${age - 1} years old.`);


// 12
// var radius = 75;
// var pi = 3.142;
// var circumference = 2 * pi * radius;
// var area = pi * (radius * radius);
// document.write (`The Geometrizer`.bold().fontsize(6));
// document.write (`<br><br><br> Radius of a circle is ${radius} <br>`);
// document.write (`The circumference is ${circumference} <br>`);
// document.write (`The area is ${area} <br>`);


// 13
// var snackName = "Ice Cream";
// var currentAge = 25;
// var maxAge = 60;
// var perDay = 2;
// var totalSnack = (maxAge - currentAge) * perDay;
// document.write (`The Lifetime Supply Calculator`.bold().fontsize(6));
// document.write (`<br><br><br> Favorite snack: ${snackName} <br>`);
// document.write (`Current age: ${currentAge} <br>`);
// document.write (`Estimated maximum age: ${maxAge} <br>`);
// document.write (`Estimated amount of snacks per day: ${perDay} <br>`);
// document.write (`You will need ${totalSnack} ${snackName} to last you until the ripe old age of ${maxAge} `);




// chapters 6 - 9


// 1
// var num = 6;
// document.write (`Result: <br><br>`);
// document.write (`The value of num is ${num} <br>...................................... <br>`);

// document.write (`<br> The value of ++num is ${++num} <br>`);
// document.write (`Now the value of num is ${num} <br>`);

// document.write (`<br> The value of num++ is ${num++} <br>`);
// document.write (`Now the value of num is ${num} <br>`);

// document.write (`<br> The value of --num is ${--num} <br>`);
// document.write (`Now the value of num is ${num} <br>`);

// document.write (`<br> The value of num-- is ${num--} <br>`);
// document.write (`Now the value of num is ${num} <br>`);


// 2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write (`a is ${a} <br>`);
// document.write (`b is ${b} <br>`);
// document.write (`result is ${result} <br>`);

        // explaining: ([] show the var value in memory)       
        //     result = --a  -  --b   +  ++b   +  b--
        //              1[1] -  0[0]  +  1[1]  +  1[0]
        //               3     [ a = 1, b = 0]     

        // explaining the output at each stage:
        //      --a  = 1
        //      (--a) - --b = (1) - 0 = 1
        //      (--a - --b) + ++b = (1) + 1 = 2
        //      (--a - --b + ++b) + b-- = (2) + 1 = 3     


// 3
// var userName = prompt ("Enter your name: ", "User Name");
// EITHER EITHER EITHER EITHER
// alert ("welcome " + userName);
// OR OR OR OR OR
// document.write (`Welcome ${userName}`.fontsize(7));


// 5
// var num = +prompt ("Enter a number for multiplication table: ", "5");
// var defaultNum = 5;
// if (num != 5)
// {
//     document.write (`Table of ${num}<br><br>`.bold().fontsize(6));
//     document.write (`${num}x1=${num * 1}<br>`);
//     document.write (`${num}x2=${num * 2}<br>`);
//     document.write (`${num}x3=${num * 3}<br>`);
//     document.write (`${num}x4=${num * 4}<br>`);
//     document.write (`${num}x5=${num * 5}<br>`);
//     document.write (`${num}x6=${num * 6}<br>`);
//     document.write (`${num}x7=${num * 7}<br>`);
//     document.write (`${num}x8=${num * 8}<br>`);
//     document.write (`${num}x9=${num * 9}<br>`);
//     document.write (`${num}x10=${num * 10}<br>`);
// }
// else 
// {
//     document.write (`Table of ${defaultNum}<br><br>`.bold().fontsize(6));
//     document.write (`${defaultNum}x1=${defaultNum * 1}<br>`);
//     document.write (`${defaultNum}x2=${defaultNum * 2}<br>`);
//     document.write (`${defaultNum}x3=${defaultNum * 3}<br>`);
//     document.write (`${defaultNum}x4=${defaultNum * 4}<br>`);
//     document.write (`${defaultNum}x5=${defaultNum * 5}<br>`);
//     document.write (`${defaultNum}x6=${defaultNum * 6}<br>`);
//     document.write (`${defaultNum}x7=${defaultNum * 7}<br>`);
//     document.write (`${defaultNum}x8=${defaultNum * 8}<br>`);
//     document.write (`${defaultNum}x9=${defaultNum * 9}<br>`);
//     document.write (`${defaultNum}x10=${defaultNum * 10}<br>`);
// }


// 6
// var subject1 = prompt ("Enter first subject name: ", "Subject name");
// var subject2 = prompt ("Enter second subject name: ", "Subject name");
// var subject3 = prompt ("Enter third subject name: ", "Subject name");
// var totalSubMarks = 100;
// var obtMarks1 = +prompt (`Enter obtained marks in ${subject1}`, `90`);
// var obtMarks2 = +prompt (`Enter obtained marks in ${subject2}`, `90`);
// var obtMarks3 = +prompt (`Enter obtained marks in ${subject3}`, `90`);
// var percent1 = (obtMarks1 / totalSubMarks) * 100;
// var percent2 = (obtMarks2 / totalSubMarks) * 100;
// var percent3 = (obtMarks3 / totalSubMarks) * 100;
// var totalObtMarks = obtMarks1 + obtMarks2 + obtMarks3;
// var totalPercent = (totalObtMarks / (totalSubMarks * 3)) * 100;

// document.write (`<table> <tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr>
//                 <tr> <td>${subject1}</td> <td>${totalSubMarks}</td> <td>${obtMarks1}</td> <td>${percent1}&percnt;</td> </tr>
//                 <tr> <td>${subject2}</td> <td>${totalSubMarks}</td> <td>${obtMarks2}</td> <td>${percent2}&percnt;</td> </tr>
//                 <tr> <td>${subject3}</td> <td>${totalSubMarks}</td> <td>${obtMarks3}</td> <td>${percent3}&percnt;</td> </tr>
//                 <tr> <td></td> <td>${totalSubMarks*3}</td> <td>${totalObtMarks}</td> <td>${totalPercent}&percnt;</td> </tr>
//                 </table>`)




// chapters 9 - 11


// 1
// var city = prompt ("Enter city name", 'write city here');
// if  (city.toLowerCase() == "karachi")
// {
//     alert ("Welcome to the city of lights");
// }


// 2
// var gender = prompt ("Enter gender", 'write gender here');
// if (gender.toLowerCase() == 'male') 
// {
//     alert ("Good Morning Sir");
// }
// else if (gender.toLowerCase() == "female")
// {
//     alert ("Good Morning Ma'am");
// }
// else 
//     alert ("Wrong answer");


// 3
// var signalColor = prompt ("Enter the color of traffic signal:", "write color here");
// if (signalColor.toLowerCase() == "red")
// {
//     alert ("Must Stop");
// }
// else if (signalColor.toLowerCase() == "yellow")
// {
//     alert ("Ready to move");
// }
// else if (signalColor.toLowerCase() == 'green')
// {
//     alert ("Move now");
// }
// else 
//     alert ("Wrong signal color");


// 4
// var remainFuel = +prompt ("Enter the amount of remaining fuel in liters: ", "write amount here");
// if (remainFuel < 0.25)
// {
//     alert ("Please refill the fuel in your car.");
// }


// 5a   (output: alert is displayed)
// var a = 4; 
// if (++a === 5)
// {
//       alert("given condition for variable a is true"); 
// }

// 5b    (output: alert not displayed)
// var b = 82; 
// if (b++ === 83)
// { 
//     alert("given condition for variable b is true"); 
// }

// 5c     (output: alert 2 and alert 4 displayed only)
// var c = 12; 
// if (c++ === 13)
// { 
//     alert("condition 1 is true"); 
// } 
// if (c === 13)
// { 
//     alert("condition 2 is true"); 
// } 
// if (++c < 14)
// { 
//     alert("condition 3 is true"); 
// } 
// if(c === 14)
// { 
//     alert("condition 4 is true"); 
// }

// 5d     (output: alert displayed)
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost)
// { 
//     alert("The cost equals"); 
// }

// 5e    (output: alert 1 displayed only)
// if (true)
// { 
//     alert("True"); 
// } 
// if (false)
// { 
//     alert("False"); 
// }

// 5f   (output: alert displayed)
// if("car" < "cat")
// { 
//     alert("car is smaller than cat");  
// }


// 6
// var obtSubMarks1 = +prompt ("Enter obtained marks in first subject: ", "90");
// var obtSubMarks2 = +prompt ("Enter obtained marks in second subject: ", "90");
// var obtSubMarks3 = +prompt ("Enter obtained marks in third subject: ", "90");
// var totalSubMarks1 = +prompt ("Enter total marks in first subject: ", "100");
// var totalSubMarks2 = +prompt ("Enter total marks in second subject: ", "100");
// var totalSubMarks3 = +prompt ("Enter total marks in third subject: ", "100");
// var obtMarks = obtSubMarks1 + obtSubMarks2 + obtSubMarks3;
// var totalMarks = totalSubMarks1 + totalSubMarks2 + totalSubMarks3;
// var percent = (obtMarks / totalMarks) * 100;
// var grade, remarks;
// if ( percent >= 80)
// {
//     grade = "A-One";
//     remarks = "Excellent";
// }
// else if (percent >= 70)
// {
//     grade = "A";
//     remarks = "Good";
// }
// else if (percent >= 60)
// {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else if ( (percent < 60) && (percent >= 0) ) 
// {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// else {
//     grade = 'N/A';
//     remarks = 'N/A';
// }

// document.write ("Marks Sheet".bold().fontsize(6) + "<br><br>");
// document.write (`Total Marks: ${totalMarks} <br>`);
// document.write (`Obtained Marks: ${obtMarks} <br>`);
// document.write (`Percentage: ${percent}&percnt; <br>`);
// document.write (`Grade: ${grade} <br>`);
// document.write (`Remarks: ${remarks} <br>`);


// 7
// var secretNum = 9;
// var guessNum = +prompt ("Guess a number ranging from 1 to 10, both inclusive: ", "1");
// if ( (guessNum >= 0) && (guessNum <= 10) )
// {
//         if (guessNum === secretNum)
//         {
//             alert ("Bingo! Correct answer");   
//         }
//         else if ( (guessNum + 1) === secretNum)
//         {
//             alert ("Close enough to the correct answer");
//         }
//         else 
//         {
//             alert ("Wrong answer");
//         }
// }
// else 
//         alert ("Input out of range");


// 8
// var userNum = +prompt ("Enter the number to be checked: ", "0");
// if ( (userNum % 3) === 0 )
// {
//     alert ("Given number is divisible by 3");
// }
// else 
//     alert ("Given number is not divisble by 3");


// 9
// var userNum = +prompt("Enter a number:", "0");
// if ( (userNum % 2) === 0)
// {
//     alert("Even number");
// }
// else
//     alert("Odd number");


// 10
// var temperature = +prompt ("Enter the temperature: ", "34");
// if ( temperature > 40 )
// {
//     alert ("It is too hot outside.");
// }
// else if ( temperature > 30 )
// {
//     alert ("The Weather today is Normal.");
// }
// else if ( temperature > 20 )
// {
//     alert ("Today’s Weather is cool.");
// }
// else if ( temperature > 10 )
// {
//     alert ("OMG! Today’s weather is so Cool.");
// }
// else 
//     alert ("Out of range");


// 11
// var num1 = +prompt('Enter your first number');
// var op = prompt('Enter your operation', '+ - * / %' );
// var num2 = +prompt('Enter your second number');
// var res;
// if (op == '+')
// {
//     res = num1 + num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else if (op == '-')
// {
//     res = num1 - num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else if (op == '*')
// {
//     res = num1 * num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else if (op == '/')
// {
//     res = num1 / num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else if (op == '%')
// {
//     res = num1 % num2;
//     alert(num1 + op + num2 + "=" + res);
// }
// else 
//     alert("Invalid operation");




// chapters 12 -13


// 1
// var char = prompt ("Enter any character of (uppercase/lowercase) string or number:", "write here");
// if ( (isNaN(char.substr(0, 1))) == false )
// {
//     alert ("Input is a number.");
// }
// else 
// {
//     if ( (char.charCodeAt(0) >= 65) && (char.charCodeAt(0) <= 90) )
//     {
//         alert ("Input is an uppercase letter.");    
//     }
//     else if ( (char.charCodeAt(0) >= 97) && (char.charCodeAt(0) <= 122) )
//     {
//         alert ("Input is a lowercase letter.");
//     }
//     else 
//     {
//         alert ("Input is neither a letter nor a number.");
//     }
// }


// 2
// var integer1 = +prompt ("Enter first integer: ", 0); 
// var integer2 = +prompt ("Enter second integer: ", 0);
// if ( (Number.isInteger(integer1)) && (Number.isInteger(integer2)) )
// {
//         if (integer2 === integer1)
//         {
//                 alert ("Both integers are equal.");
//         }
//         else 
//         {
//                 (integer1 > integer2) ? alert (integer1) : alert (integer2);
//         }
// }
// else 
//         alert ("One or both inputs are not integer.");


// 3
// var num = +prompt ("Enter any integer: ", "0");
// if (Number.isInteger(num))
// {
//         if (num > 0)
//         {
//                 alert ("Input is a positive integer"); 
//         }
//         else if (num < 0)
//         {
//                 alert ("Input is a negative integer");
//         }
//         else
//         {
//                 alert ("Input is 0");
//         }
// }
// else 
//         alert ("Input is not an integer.");


// 4
// var char = prompt ("Enter a single character:", "write here");
// if ( ( char.substr(0, 1).toLowerCase() === "a") || ( char.substr(0, 1).toLowerCase() === "e") || ( char.substr(0, 1).toLowerCase() === "i") || ( char.substr(0, 1).toLowerCase() === "o") || ( char.substr(0, 1).toLowerCase() === "u") )
// {
//         alert ("Vowel");
//         // return true;
// }       
// else 
// {
//         alert ("Non-vowel");
//         // return false;
// }


// 5
// var correctPwd = "Alumnus2020";
// var userPwd = prompt ("Enter password: ", "");
// if ( (userPwd === "") || (userPwd === null) )
//         alert ("Please enter your password");
// else
// {
//         if (userPwd === correctPwd)
//         {
//                 alert ("Correct! The password you entered matches the original password.");
//         }
//         else 
//                 alert ("Incorrect password");
// }


// 6
// var greeting; 
// var hour = 13; 
// if (hour < 18)  
//         greeting = "Good day";        
// else 
//         greeting = "Good evening"; 


// 7
// var time = +prompt("Enter time in 24 hrs format: ", "1300");
// if ( (time >= 0000) && (time < 1200) )
//         alert ("Good Morning!");
// else if ( (time >= 1200) && (time < 1700) )
//         alert ("Good Afternoon!")
// else if ( (time >= 1700) && (time < 2100) )
//         alert ("Good Evening!")
// else if ( (time >= 2100) && (time <= 2359) )
//         alert ("Good Night!")
// else 
//         alert ("Wrong time");




// chapters 14 - 16


// 1      literal notation
// var studentNames = [];


// 2     object notation
// var studentNames = new Array ();


// 3
// var strArray = ["Habiba", "Sultana", "Pakistani", "Asian"];


// 4
// var numArray = [2, 3, 5, 7, 11];


// 5
// var boolArray = [true, false];


// 6
// var mixArray = ["happy", 10, false, true, "sad", 3];


// 7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "B.Com", "MS", "M.Phil", "Ph.D"];
// document.write ("Qualifications: <br>");
// // document.write (`1) ${qualifications[0]} <br> 2) ${qualifications[1]} <br> 3) ${qualifications[2]} <br>`);
// // document.write (`4) ${qualifications[3]} <br> 5) ${qualifications[4]} <br> 6) ${qualifications[5]} <br>`);
// // document.write (`7) ${qualifications[6]} <br> 8) ${qualifications[7]} <br>`); 
// for (var i = 0; i < qualifications.length; i++)
// {
//         document.write (`${i + 1}) ${qualifications[i]} <br>`);
// }


// 8
// var studentNames = ["Michael", "John", "Tony"];
// var studentMarks = [320, 230, 480];
// var totalMarks = 500;
// var percents = [];
// for (var i = 0; i < 3; i++)
// {
//         percents[i] = (studentMarks[i] / totalMarks) * 100;
// }
// for (var j = 0; j < 3; j++)
// {
//         document.write (`Score of ${studentNames[j]} is ${studentMarks[j]}. Percentage: ${percents[j]}&percnt; <br>`);
// }


// 9    
// var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// document.write (`Original array: ${colors} <br>`.fontsize(6));

// 9a 
// var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// document.write (`Original array: ${colors} <br>`.fontsize(6));
// var userColor = prompt ("Enter color you wish to enter at array's beginning: ", "color");
// colors.unshift (userColor);
// document.write (`Add at beginning: ${colors} <br>`.fontsize(6));

// 9b
// var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// document.write (`Original array: ${colors} <br>`.fontsize(6));
// var userColor1 = prompt ("Enter color you wish to enter at array's end: ", "color");
// colors.push (userColor1);
// document.write (`Add at end: ${colors} <br>`.fontsize(6));

// 9c
// var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// document.write (`Original array: ${colors} <br>`.fontsize(6));
// var userColor2 = prompt ("Enter color you wish to enter at array's beginning: ", "color");
// var userColor3 = prompt ("Enter another color you wish to enter at array's beginning: ", "color");
// colors.unshift (userColor2, userColor3);
// document.write (`Add 2 at beginning: ${colors} <br>`.fontsize(6));

// 9d
// var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// document.write (`Original array: ${colors} <br>`.fontsize(6));
// colors.shift ();
// document.write (`Remove 1st: ${colors} <br>`.fontsize(6));

// 9e
// var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// document.write (`Original array: ${colors} <br>`.fontsize(6));
// colors.pop ();
// document.write (`Remove last: ${colors} <br>`.fontsize(6));

// 9f
// var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// document.write (`Original array: ${colors} <br>`.fontsize(6));
// var colorIndex = +prompt ("Enter the index at which you want to add color: ", 4);
// var colorName =  prompt ("Enter the color you want to add: ", "color");
// colors.splice (colorIndex, 0, colorName);
// document.write (`Add in-between: ${colors} <br>`.fontsize(6));

// 9g
// var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// document.write (`Original array: ${colors} <br>`.fontsize(6));
// var colorIndex = +prompt ("Enter the index at which you want to delete color(s): ", 4);
// var colorNumber =  +prompt ("Enter the no. of color(s) you want to delete: ", 2);
// colors.splice (colorIndex, colorNumber);
// document.write (`Delete from in-between: ${colors} <br>`.fontsize(6));


// 10
// var studentScores = [320, 230, 480, 120];
// document.write (`Scores of students: ${studentScores} <br>`);
// studentScores.sort ( function (a, b) { return a - b} );
// document.write (`Ordered Scores of students: ${studentScores} <br>`);


// 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice (2, 5);
// document.write (`Cities list: <br> ${cities} <br><br> Selected cities list: <br> ${selectedCities}`);


// 12
// var arr =["This", "is", "my", "cat"];
// document.write (`Array: <br> ${arr} <br><br>`);
// document.write (`String: <br> ${arr.join(" ")}`);


// 13     FIFO
// var devices = [];
// devices.push ("keyboard");
// devices.push ("mouse");
// devices.push ("printer");
// devices.push ("monitor");
// document.write (`Devices: <br> ${devices} <br><br>`);
// var out = devices.shift ();
// document.write (`Out: <br> ${out} <br>`);
// var out = devices.shift ();
// document.write (`Out: <br> ${out} <br>`);
// var out = devices.shift ();
// document.write (`Out: <br> ${out} <br>`);
// var out = devices.shift ();
// document.write (`Out: <br> ${out} <br>`);


// 14    LIFO
// var devices = [];
// devices.push ("keyboard");
// devices.push ("mouse");
// devices.push ("printer");
// devices.push ("monitor");
// document.write (`Devices: <br> ${devices} <br><br>`);
// var out = devices.pop ();
// document.write (`Out: <br> ${out} <br>`);
// var out = devices.pop ();
// document.write (`Out: <br> ${out} <br>`);
// var out = devices.pop ();
// document.write (`Out: <br> ${out} <br>`);
// var out = devices.pop ();
// document.write (`Out: <br> ${out} <br>`);


// 15
// var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write (`<select>`);
// for (var i = 0; i < arr.length; i++)
// {
//         document.write (`<option value="${arr[i]}"> ${arr[i]} </option>`);
// }
// document.write (`</select>`);


// chapters 17 - 20


// 1
// EITHER USING LITERAL 
// var arr = [ [], [], []];

// OR USING FOR LOOP
// var arr = [];
// arr.length = 2;
// // for declaring multid-array
// for (var i = 0; i < arr.length; i++)
// {
//         arr[i]=[];
// }
// // for initializing empty multid-array
// for (var i = 0; i < arr.length; i++)
// {
//         for (var j = 0; j < arr.length; j++)
//         {
//                 arr[i][j]="";
//         }
// }

// // for printing
// for (var i = 0; i < arr.length; i++)
// {
//         for (var j = 0; j < arr.length; j++)
//         {
//                 document.write(arr[i][j] + ".");
//         }
//         document.write("<br>");
// } 


// 2
// var arr = [ [0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];


// 3
// for (var i = 1; i <= 10; i++)
//         document.write (i + "<br>");


// 4
// var tableNum = +prompt ("Enter the number for multiplication table: ", 2);
// var tableLength = +prompt ("Enter the length for multiplicatio table", 15);
// var product = [];
// document.write (`Multiplication Table of ${tableNum} <br> Length: ${tableLength} <br><br>`);
// // directly printing the products
// for (var i = 1; i <= tableLength; i++)
//         document.write (`${tableNum} x ${i} = ${tableNum*i} <br>`);

// // storing the products as well
// for (var i = 0; i < tableLength; i++)
// {
//         product[i]=tableNum*(i+1);
// }
// for (var i = 0; i < tableLength; i++)
// {
//         document.write(`${tableNum} x ${(i+1)} = ${product[i]} <br>`);
// }


// 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++)
//         document.write (`${fruits[i]}<br>`);
// document.write("<br>");
// for (var j = 0; j < fruits.length; j++)
//         document.write (`Element at index ${j} is ${fruits[j]}. <br>`);


// 6a
// document.write ("Counting: ".bold() + "<br><br>");
// for (var i = 1; i <= 15; i++)
// {
//         document.write (i + ", ")
// } 

// 6b      
// document.write ("<br><br>Reverse Counting: ".bold() + "<br><br>");
// for (var i = 10; i >= 1; i--)
// {
//         document.write (i + ", ")
// }

// 6c
// document.write ("<br><br>Even: ".bold() + "<br><br>");
// for (var i = 0; i <= 20; i=i+2)
// {
//         document.write (i + ", ")
// }    

// 6d 
// document.write ("<br><br>Odd: ".bold() + "<br><br>");
// for (var i = 1; i <= 20; i=i+2)
// {
//         document.write (i + ", ")
// }  

// 6e
// document.write ("<br><br>Series: ".bold() + "<br><br>");
// for (var i = 2; i <= 20; i=i+2)
// {
//         document.write (i + "k, ")
// }   


// 7
// var items = ["cake", "apple pie", "cookies", "chips", "patties"];
// var userItem = prompt ("What bakery item do you want? ", "cake");
// var flag = false;
// for (var i = 0; i < items.length; i++)
// {
//         if ( userItem.toLowerCase() === items[i] )
//         {
//                 var flag = true;
//                 document.write (`Item ${items[i]} is available at index ${i}`);
//                 break;
//         }   

// }
// if (flag === false)
//         document.write (`Sorry, ${userItem} is not available.`);


// 8
// var a = [24, 53, 78, 91, 12];
// document.write ("Array items: " + a + "<br>");
// a.sort (function (a, b) { return b - a});
// document.write("The largest number is " + a[0]);


// 9
// var a = [24, 53, 78, 91, 12];
// document.write ("Array items: " + a + "<br>");
// a.sort (function (a, b) { return a - b});
// document.write("The smallest number is " + a[0]);


// 10
// for (var i = 5; i <= 100; i=i+5)
// {
//         document.write (i + ", ");
// }
