

// chapters 21 - 25


// 1
// var firstName = prompt ("Enter first name: ", "First");
// var lastName = prompt ("Enter last name: ", "Last");
// var fullName = firstName + " " + lastName;
// alert ("Welcome " + fullName);


// 2
// var model = prompt ("Enter your favorite mobile phone model: ", "model name");
// var len = model.length;
// document.write ("My favorite mobile phone model: " + model + "<br>");
// document.write ("Length of string: " + len);


// 3
// var str = "Pakistani";
// var index = str.indexOf("n");
// document.write ("String: " + str +"<br>" + "Index of 'n': " + index);


// // 4
// var str = "Hello World";
// var index = str.lastIndexOf("l");
// document.write ("String: " + str +"<br>" + "Last index of 'l': " + index);


// 5
// var str = "Pakistani";
// var char = str.charAt(3);
// document.write ("String: " + str +"<br>" + "Character at index 3: " + char);


// 6
// var firstName = prompt ("Enter first name: ", "First");
// var lastName = prompt ("Enter last name: ", "Last");
// var fullName = firstName.concat(" ", lastName);
// alert ("Welcome " + fullName);


// 7
// var city = "Hyderabad";
// var city2 = city.replace ("Hyder", "Islam");
// document.write (`City: ${city} <br> After replacement: ${city2} `);


// 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message2 = message.replace (/and/g, "&");
// document.write (`Original string: ${message} <br> After replacement: ${message2}`);


// 9
// var str = "472";
// var typeStr = typeof str;
// var num = Number(str);
// var typeNum = typeof num;
// document.write (`Value: ${str} <br> Type: ${typeStr} <br><br>`);
// document.write (`Value: ${num} <br> Type: ${typeNum} <br>`);


// 10
// var userInput = prompt ("Enter a string in lower case: ", "write here");
// var upperCase = userInput.toUpperCase();
// document.write (`User Input: ${userInput} <br> Upper Case: ${upperCase}`);


// 11
// var userInput = prompt ("Enter a string: ", "write here");
// var strArr = userInput.split(" ");
// for (var i = 0; i < strArr.length; i++)
// {
//     strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase(); 
// }
// var titleCase = strArr.join(" ");
// document.write (`User input: ${userInput} <br>`);
// document.write (`Title case: ${titleCase} <br>`);


// 12
// var num = 35.36;
// var str = num.toString();
// // using replace
// var newStr = str.replace (".36", "36");
// document.write(`Number: ${num} <br> Result: ${newStr} <br>`);

// // using slice
// var dot = str.indexOf(".");
// var newStr = str.slice(0, dot) + str.slice(dot+1);
// document.write(`Number: ${num} <br> Result: ${newStr}`);


// 13
// var userName = prompt ("Enter username: ", "Name");
// for (var i = 0; i < userName.length; i++)
// {
//     if ( userName[i].charCodeAt() == 33 || userName[i].charCodeAt() == 44 || userName[i].charCodeAt() == 46 || userName[i].charCodeAt() == 64 )
//         alert ("Please enter a valid username");
// }


// 14
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


// 15
// var userPwd = prompt ("Enter password: ", "password");
// var flag = 0;
// for (var i = 0; i < userPwd.length; i++)
// {
//     if ( (userPwd[i].charCodeAt() >= 65 && userPwd[i].charCodeAt() <= 90) || (userPwd[i].charCodeAt() >= 97 && userPwd[i].charCodeAt() <= 122) || (userPwd[i].charCodeAt() >= 48 && userPwd[i].charCodeAt() <= 57) )
//         flag++;
//     else {
//         document.write ("Password can only contain numbers and alphabets.<br>Please enter a valid password.");
//         break;
//     }
// }
// if ( (flag) === userPwd.length )
// {
//     var firstChar = userPwd[0].charCodeAt();
//     if ( firstChar >= 48 && firstChar <= 57 )
//     {
//         document.write ("Entered password: " + userPwd + "<br>");
//         document.write ("Password can not begin with a number.<br>Please enter a valid password.");
//     }
//     else if ( userPwd.length < 6)
//     {
//         document.write ("Entered password: " + userPwd + "<br>");
//         document.write ("Password must be at least 6 charcters long.<br>Please enter a valid password.");
//     }
//     else 
//         document.write ("Valid Password. <br>");  
// }


// 16
// var university = "University of Karachi";
// var uniArray = university.split("");
// for (var i = 0; i < uniArray.length; i++)
//     document.write (`${uniArray[i]} <br>`);


// 17
// var userInput = prompt ("Enter a string: ", "write here");
// var lastCharIndex = userInput.length - 1;
// var lastChar = userInput.charAt(lastCharIndex);
// document.write (`User input: ${userInput} <br>`);
// document.write (`Character at last index: ${lastChar} <br>`); 


// 18
// var str = "The quick brown fox jumps over the lazy dog.";
// var flag = 0;
// for (var i = 0; i < str.length; i++)
// {
//     if ( str.slice(i, i+3).toLowerCase() === "the" )
//     flag++;
// }
// document.write (`Text: ${str} <br> There are ${flag} occurrence(s) of the word 'the'.`);




// chapters 26 - 30


// 1
// var num = +prompt("Enter a positive floating point number: ", 1.5);
// if (num > 0 && !Number.isInteger(num))
// {
//     // 1a
//     document.write (`Number: ${num} <br>`);

//     // 1b
//     var roundOff = Math.round (num);
//     document.write (`Rounded off value: ${roundOff} <br>`);

//     // 1c
//     var floorNum = Math.floor (num);
//     document.write (`Floor value: ${floorNum} <br>`);

//     // 1d
//     var ceilNum = Math.ceil (num);
//     document.write (`Ceiling value: ${ceilNum} <br>`);
// }
// else 
//     document.write ("Please enter a positive floating point number only!");


// 2
// var num = +prompt("Enter a negative floating point number: ", 1.5);
// if (num < 0 && !Number.isInteger(num))
// {
//     // 2a
//     document.write (`Number: ${num} <br>`);

//     // 2b
//     var roundOff = Math.round (num);
//     document.write (`Rounded off value: ${roundOff} <br>`);

//     // 2c
//     var floorNum = Math.floor (num);
//     document.write (`Floor value: ${floorNum} <br>`);

//     // 2d
//     var ceilNum = Math.ceil (num);
//     document.write (`Ceiling value: ${ceilNum} <br>`);
// }
// else 
//     document.write ("Please enter a negative floating point number only!");


// 3
// var num = -4;
// var absNum = Math.abs(num);
// document.write(`Absolute value of ${num} is ${absNum} <br>`);


// 4
// var randNum, dice;
// for (var i = 0; i < 10; i++)
// {
//     randNum = Math.random() * 6;
//     dice = Math.floor(randNum + 1);
//     document.write(`Random dice value: ${dice} <br>`);
// }


// 5
// var randNum, coin;
// for (var i = 0; i < 5; i++)
// {
//     randNum = Math.random() * 2;
//     coin = Math.floor(randNum + 1);
//     if (coin === 1)
//         document.write(`${coin} <br> Random coin toss value: Tails <br>`);
//     else 
//         document.write(`${coin} <br> Random coin toss value: Heads <br>`);
//     document.write("<br>");    
// }


// 6
// var randNum = Math.random() * 100;
// var improvedNum = Math.floor(randNum + 1);
// document.write(`Random number between 1 and 100: ${improvedNum}<br>`);


// 7
// var weightInput = prompt("Enter your weight in kilograms: ", "50kgs");
// var weightNum = parseFloat(weightInput);
// document.write("The weight of the user is " + weightNum + " kilograms. <br>");


// 8
// var randNum = Math.random() * 10;
// var secretNum = Math.floor(randNum + 1);
// var guessNum = +prompt("Enter a number between 1 and 10: ", 5);
// if (guessNum >= 1 && guessNum <= 10)
// {
//     if (guessNum === secretNum)
//         alert ("Congratulations! You guessed correctly.");
//     else
//         alert ("Try again!");
// }
// else 
//     alert ("Out of range input");




// chapters 31 - 34


// 1
// var today = new Date();
// document.write(today);


// 2
// var today = new Date();
// var monthIndex = today.getMonth();
// var months = ["January", "February", "March", "April", "May" , "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = months[monthIndex];
// alert("Current month: " + currentMonth);


// 3
// var today = new Date();
// var dayIndex = today.getDay();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currentDay = days[dayIndex];
// var shortDay = currentDay.slice(0, 3);
// alert("Current day: " + shortDay);


// 4
// var today = new Date();
// var dayIndex = today.getDay();
// if (dayIndex === 6 || dayIndex === 0)
//     alert ("It's Fun Day!");


// 5
// var today = new Date();
// var currentDate = today.getDate();
// if (currentDate >= 1 && currentDate < 16)
//     alert("First fifteen days of the month.");
// else
//     alert("Last days of the month.");


// 6
// var today = new Date();
// var millisecJan70 = today.getTime();
// var minuteJan70 = millisecJan70 / 60000;
// document.write("Current date: " + today + "<br>");
// document.write("Elapsed milliseconds since midnight, January 1, 1970: " + millisecJan70 + "<br>");
// document.write("Elapsed minutes since midnight, January 1, 1970: " + minuteJan70 + "<br>");


// 7
// var today = new Date();
// var currentTime = today.getHours();
// if (currentTime >= 0 && currentTime < 12)
//     alert("It's AM");
// else 
//     alert("It's PM");

    
// 8
// var laterDate = new Date();
// laterDate.setFullYear(2020);
// laterDate.setMonth(11);
// laterDate.setDate(31);
// laterDate.setHours(00);
// laterDate.setMinutes(00);
// laterDate.setSeconds(00);
// document.write("Later date: " + laterDate);


// 9
// var ramdanFirst = new Date("April 24, 2020 19:02:00");
// var currentDate = new Date();
// var msDiff = currentDate.getTime() - ramdanFirst.getTime();
// var daysDiff = Math.floor( msDiff / (1000 * 60 * 60 * 24) );
// alert(daysDiff + " days have passed since 1st Ramadan of 2020");


// 10
// var start2015 = new Date("January 1, 2015 00:00:00");
// var refDate = new Date ("December 5, 2015 22:50:16");
// var msDiff = refDate.getTime() - start2015.getTime();
// var secDiff = Math.floor( msDiff / 1000  );
// document.write(`On reference date ${refDate}, ${secDiff} seconds had passed since the beginning of 2015`);

// // OR REFERENCE DATE AS CURRENT DATE
// // var start2015 = new Date("January 1, 2015 00:00:00");
// // var refDate = new Date ();
// // var msDiff = refDate.getTime() - start2015.getTime();
// // var secDiff = Math.floor( msDiff / 1000  );
// // document.write(`On reference date ${refDate}, ${secDiff} seconds have passed since the beginning of 2015`);


// 11
// var dateHourAhead = new Date();
// var currentHour = dateHourAhead.getHours();
// dateHourAhead.setHours(currentHour + 1);
// var dateCurrent = new Date();
// dateCurrent.setHours(currentHour);
// document.write(`Current date: ${dateHourAhead}. <br> 1 hour ago, it was ${dateCurrent}`);


// 12
// var current = new Date();
// var back = new Date();
// back.setFullYear(back.getFullYear() - 100);
// alert(`Current date: ${current} \n100 years ago: ${back}`);


// 13
// var userAge = +prompt("Enter your age in numbers:", 25);
// var today = new Date();
// var currentYr = today.getFullYear();
// var userBirthYr = currentYr - userAge;
// document.write(`Your age is ${userAge} years. <br>`)
// document.write(`Your birth year is either ${userBirthYr} or ${userBirthYr - 1}.`);


// 14
// customer name
// var customerName = "Habiba Sultana";

// // current month
// var today = new Date();
// var monIndex = today.getMonth();
// var months = ["January", "February", "March", "April", "May" , "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = months[monIndex];

// // no. of units
// var numUnits = 650;

// // charges per unit
// var chargeUnit = 14.3776;
// var chargeUnitR = chargeUnit.toFixed(2);

// // net amount payable within due date
// var netAmount = (numUnits * chargeUnitR);
// var netAmountR = netAmount.toFixed(2);

// // late payment surcharge
// var lateSurcharge = 150;
// var lateSurchargeR = lateSurcharge.toFixed(2);

// // gross amount payable after due date
// var grossAmount = (netAmount + lateSurcharge);
// var grossAmountR = grossAmount.toFixed(2);

// document.write("K-Electric Bill".bold().fontsize(6) + "<br><br>");
// document.write(`Customer Name: ${customerName} <br>`);
// document.write(`Month: ${currentMonth} <br>`);
// document.write(`Number of Units: ${numUnits} <br>`);
// document.write(`Charges per Unit: ${chargeUnitR} PKR <br><br>`);
// document.write(`Net Amount Payable (within Due Date): ${netAmountR} PKR <br>`);
// document.write(`Late Payment Surcharge: ${lateSurchargeR} PKR <br>`);
// document.write(`Gross Amount Payable (after Due Date): ${grossAmountR} PKR <br>`);




// chapters 35 - 38


// 1
// function currentDateTime()
// {
//     var today = new Date();
//     document.write(today);
// }

// currentDateTime();


// 2
// function userFullName(a, b) 
// {
//     var fullName = a + " " + b;
//     alert("Welcome " + fullName + "\n");
// }

// var firstName = prompt("Enter your first name: ", "First");
// var lastName = prompt("Enter your last name: ", "Last");
// userFullName(firstName, lastName);


// 3   WITH PROMPT OUTSIDE THE FUNCTION
// function add(a, b)
// {
//     return a + b;
// }

// var num1 = +prompt("Enter first number to add: ", 1);
// var num2 = +prompt("Enter second number to add: ", 1);
// var result = add(num1, num2);
// document.write(`The sum of ${num1} and ${num2} is ${result}`);


// 3   WITH PROMPT INSIDE THE FUNCTION
// function add()
// {
//     var num1 = +prompt("Enter first number to add: ", 1);
//     var num2 = +prompt("Enter second number to add: ", 1);
//     return num1 + num2;
// }

// var result = add();
// document.write(`The sum is ${result}`);


// 4
// function calculator(num1, num2, operator)
// {
//     switch(operator) 
//     {
//         case "+":
//             return num1 + num2;
//             break;
//         case "-":
//             return num1 - num2;
//             break;
//         case "*":
//             return num1 * num2;
//             break;
//         case "/":
//             return num1 / num2;
//             break;
//         default:
//             return "Wrong Operation";
//     }
// }

// var num1 = +prompt("Enter first number: ", 1);
// var num2 = +prompt("Enter second number: ", 1);
// var op = prompt("Enter the operation: ", "+  -  *  /");
// var result = calculator(num1, num2, op);
// document.write(`${num1} ${op} ${num2} = ${result}`);


// 5
// function square(a)
// {
//     return a ** 2;
// }

// var num = 6;
// var result = square(num);
// document.write(`The square of ${num} is ${result}`);


// 6
// function factorial(a)
// {
//     var fact = a;
//     for (var i = (a-1); i >= 1; i--)
//     {
//         fact = fact * i;
//     }
//     return fact;
// }

// var num = 5;
// var res = factorial(num);
// document.write("The factorial of " + num + " is " + res);


// 7
// function counting() 
// {
//     var start = +prompt("Enter a starting number for counting: ", 1);
//     var end = +prompt("Enter an ending number for counting: ", 10);
//     for (var i = start; i <= end; i++)
//         document.write(i + "<br>");
// }

// counting();


// 8
// function calcSquare(num) 
// {
//     return num ** 2;
// }

// function calcHypotenuse(base, perp)
// {   
//     var hyp = ( calcSquare(base) + calcSquare(perp) ) ** (1/2);
//     return hyp;
// }

// var base = +prompt("Enter base of right-angled triangle: ", 3);
// var perpendicular = +prompt("Enter perpendicular of right-angled triangle: ", 4);
// var hypotenuse = calcHypotenuse(base, perpendicular);
// document.write(`The hypotenuse of right-angled triangle is ${hypotenuse} `);


// 9
// function areaRectangle(width, height)
// {
//     return width * height;
// }

// // 9i
// var result = areaRectangle(5, 4);
// document.write(`Area of rectangle is ${result} <br>`);

// // 9ii
// var width = +prompt("Enter width of rectangle: ", 3);
// var height = +prompt("Enter height of rectangle: ", 4);
// var res1 = areaRectangle(width, height);
// document.write(`Area of rectangle is ${res1}`);


// 10
// function checkPalindrome(string)
// {
//     var string = string.toLowerCase();
//     var arrStrReverse = string.split("").reverse();
//     var strArr = arrStrReverse.join("");
//     if (string == strArr)
//         return true;
//     else
//         return false;    
// }

// var str = prompt("Enter string: ", "madam");
// // var str = "Able was I ere I saw Elba";
// if (checkPalindrome(str))
//     document.write("Input string IS PALINDROME.");
// else
//     document.write("Input string IS NOT palindrome.");


// 11
// function convertTitleCase(string)
// {
//     var arrStr = string.split(" ");
//     for (var i = 0; i < arrStr.length; i++)
//     {
//         arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].slice(1).toLowerCase(); 
//     }
//     return arrStr.join(" ");
    
// }
// var userInput = prompt ("Enter a string: ", "write here");
// var output = convertTitleCase(userInput);
// document.write (`User input: ${userInput} <br>`);
// document.write (`Title case: ${output} <br>`);


// 12
// function longestWord(string)
// {
//     var arrStr = string.match(/\w[a-z]{0,}/gi)   //so that only alphabetic words are matched and not non-alph
//     var longest = arrStr[0];
//     for (var i = 0; i < arrStr.length; i++)
//     {
//         if (arrStr[i].length > longest.length)
//             longest = arrStr[i];
//     }
//     return longest;
// }

// var str = prompt("Enter a string: ", "web development tutorial");
// var out = longestWord(str);
// document.write(`Input string: ${str} <br> Longest word: ${out}`);


// 13
// function letterOccurs(string, letter)
// {
//     var flag = 0;
//     for (var i = 0; i < string.length; i++)
//     {
//         if ( string.slice(i, i+1).toLowerCase() === letter.toLowerCase() )
//         flag++;
//     }
//     return flag;
// }

// var toFindIn = prompt("Enter string: ", "write here");
// var toFind = prompt("Enter letter to find occurrences of: ", "e");
// var occur = letterOccurs(toFindIn, toFind);
// document.write(`There are ${occur} occurrences of the letter '${toFind}' in the string '${toFindIn}'. `);


// 14
// var pi = 3.142;
// function calcCircumference(radius)
// {
//     var output = (2 * pi * radius).toFixed(3);
//     document.write("The circumference of the circle with radius " + radius + " is " + output + "<br>");
//     return output;
// }

// function calcArea(radius)
// {
//     var output = (pi * (radius ** 2)).toFixed(3);
//     document.write("The area of the circle with radius " + radius + " is " + output + "<br>");
//     return output;
// }

// var circumferenceCircle = calcCircumference(5);
// var areaCircle = calcArea(3);
