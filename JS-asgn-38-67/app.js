
// chapters 38 - 42 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 1
// function power(a, b)
// {
//     var baseNum = a;
//     var expNum = b;
//     var res = 1;
//     var count = 0;
//     while(count < expNum)
//     {

//         res = res * baseNum;
//         count++;    
//     }
//     return res;
// }

// var base = +prompt("Enter the base number: ", 2);
// var exponent = +prompt("Enter the exponent: ", 3);
// var output = power(base, exponent);
// document.write(`${base} raised to ${exponent} is ${output}`);




// 2
// function leapYear(year)
// {
//     if( (year % 4) == 0)
//         return true;
//     else
//         return false;
// }

// var year = prompt("Enter an year: ", 2020);
// if(leapYear(year))
//     document.write(`${year} is a leap year.`);
// else 
//     document.write(`${year} is NOT a leap year.`);




// 3
// function areaTriangle(a, b, c)
// {
//     var s = semiPerimeterTriangle(a, b, c);
//     var area = Math.pow( (s * (s - a) * (s - b) * (s -c)), 0.5 );
//     return area;
// }

// function semiPerimeterTriangle(a, b, c)
// {
//     var semiPerimeter = (a + b + c) / 2;
//     return semiPerimeter;
// }

// var side1 = +prompt("Enter length of first side: ", 3);
// var side2 = +prompt("Enter length of second side: ", 3);
// var side3 = +prompt("Enter length of third side: ", 3);
// var area = areaTriangle(side1, side2, side3);
// // area = Math.round(4);
// document.write(`Area of triangle with sides ${side1}, ${side2}, ${side3} is ${area}`);




// 4
// function mainFunction(a, b, c)
// {
//     var avg = average(a, b , c);
//     var percent = percentage(a, b, c);
//     document.write(`Marks received by student: <br>${a}/100 <br>${b}/100 <br>${c}/100`);
//     document.write(`<br> Average: ${avg} <br> Percentage: ${percent}&percnt;`);
// }

// function average(a, b, c)
// {
//     var res = (a + b + c) / 3;
//     return res;
// }

// function percentage(a, b, c)
// {
//     var res = ( (a + b + c) / 300 ) * 100;
//     return res;
// }

// var marks1 = +prompt("Enter marks in first subject: ", 90);
// var marks2 = +prompt("Enter marks in second subject: ", 90);
// var marks3 = +prompt("Enter marks in third subject: ", 90);
// mainFunction(marks1, marks2, marks3);




// 5
// function indexOfChar(str, char)
// {
//     var flag = -1;
//     // count here basically works as [i] in for loop
//     var count = 0;
//     while(count < str.length)
//     {
//         if(str[count] == char)
//         {
//             flag = count;
//             break;
//         }
//         count++;
//     }
//     return flag;
// }
// var string = prompt("Enter a string: ", "string");
// var char = prompt("Enter character you are searching: ", "i");
// var index = indexOfChar(string, char);
// document.write(`First occurrence of '${char}' in '${string}' is at index ${index}`);




// 6
// function delVowels(str)
// {
//     var arrStr = str.split('');
//     var newArr;
//     var i = 0;
//     while(i < str.length)
//     {
//         switch(arrStr[i].toLowerCase())
//         {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 arrStr[i] = '';
//         }
//         i++;
//     }
//     // to break off in words wherever is space
//     newArr = arrStr.join('');
//     return newArr;
// }

// var string = 'AHabiba Sultaana ieos a gIirl.'
// var res = delVowels(string);
// document.write(`Original String: ${string} <br> Without vowels: ${res}`);




// 7
// function count2vowels(string)
// {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     var string = string.toLowerCase();
//     var count = 0;
//     var vowelStr = '';
//     for(var i = 0; i < string.length; i++)
//     {
//         switch(string[i])
//         {
//             case 'a':
//                 for(var j = 0; j < vowels.length; j++)
//                 {
//                     if(string[i+1] == vowels[j] )
//                     {   
//                         vowelStr += string[i]+string[i+1]+", ";
//                         count++;
//                     } 
//                 }
//                 break;
//             case 'e':
//                 for(var j = 0; j < vowels.length; j++)
//                 {
//                     if(string[i+1] == vowels[j] )
//                     {   
//                         vowelStr += string[i]+string[i+1]+", ";
//                         count++;
//                     } 
//                 }
//                 break;
//             case 'i':
//                 for(var j = 0; j < vowels.length; j++)
//                 {
//                     if(string[i+1] == vowels[j] )
//                     {   
//                         vowelStr += string[i]+string[i+1]+", ";
//                         count++;
//                     } 
//                 }
//                 break;
//             case 'o':
//                 for(var j = 0; j < vowels.length; j++)
//                 {
//                     if(string[i+1] == vowels[j] )
//                     {   
//                         vowelStr += string[i]+string[i+1]+", ";
//                         count++;
//                     } 
//                 }
//                 break;        
//             case 'u':
//                 for(var j = 0; j < vowels.length; j++)
//                 {
//                     if(string[i+1] == vowels[j] )
//                     {   
//                         vowelStr += string[i]+string[i+1]+", ";
//                         count++;
//                     }
//                 }
//                 break;                
//         }   
//     }
//     return {count, vowelStr};
// }

// var str = "Please read this application and give me gratuity."
// let a = count2vowels(str);
// let vowelCount = a.count, 
//     vowelOccur = a.vowelStr;
// document.write(`Original String: ${str} <br> 
//                 2 vowels occur successively: ${vowelCount} times <br>
//                 Those occurrences are: ${vowelOccur} <br>`);




// 8
// function toMeters(distance)
// {
//     var res = distance * 1000;
//     return res;
// }

// function toFeet(distance)
// {
//     var res = distance * 3280.84  ;
//     return res;
// }

// function toInches(distance)
// {
//     var res = distance * 39370.1;
//     return res;
// }

// function toCentimeters(distance)
// {
//     var res = distance * 100000;
//     return res;
// }

// var distKm = +prompt("Enter distance bewteen 2 cities in km: ", 5);
// var inFeet = toFeet(distKm);
// var inInches = toInches(distKm);
// var inCentimeters = toCentimeters(distKm);
// document.write(`${distKm} km = ${inFeet} ft = ${inInches} in = ${inCentimeters} cm <br>  `);




// 9
// function calcOverTimePay(hrs)
// {
//     var pay;
//     var ratePerHr = 12.00;
//     var over = hrs - 40;
//     if(over > 0)
//         pay = over * ratePerHr;
//     else 
//         pay = 0;
//     return pay;
// }

// var hrsWorked = +prompt("Enter total hours worked in numbers: ", 40);
// var overTimePay = calcOverTimePay(hrsWorked);
// document.write(`Overtime pay is Rs ${overTimePay}`);




// 10
// function currencyNotes(amount) 
// {
//     var lastIndex = amount.length - 1;
//     // [var hundreds] for hundreds place, [var tens] for tens place
//     var tens = '';
//     tens += amount[lastIndex - 1];
//     var hundreds = '';
//     var noteArr = [];
//     // for(var i = 0; i <= (lastIndex - 2); i++ )
//     // {
//     //     hundreds += amount[i];    
//     // }
//     var count = 0;
//     while(count <= (lastIndex - 2))
//     {
//         hundreds += amount[count];
//         count++;
//     }
//     var inter = tens - 5;
//     if(inter < 5 && inter > 0)
//     {
//         noteArr[0] = Number(hundreds);
//         noteArr[1] = 1;
//         noteArr[2] = inter;
//         return noteArr;
//     }
//     else if(inter == 0)
//     {
//         noteArr[0] = Number(hundreds);
//         noteArr[1] = 1;
//         noteArr[2] = inter;
//         return noteArr;
//     }
//     else if(inter < 0)
//     {
//         noteArr[0] = Number(hundreds);
//         noteArr[1] = 0;
//         noteArr[2] = tens;
//         return noteArr;
//     }
// }

// var amount = prompt("Enter amount to withdraw in hundreds: ", '1000');
// var notes = currencyNotes(amount);
// document.write('Amount to withdraw: ' + amount + '<br>');
// document.write(`Hundred notes: ${notes[0]} <br> Fifty notes: ${notes[1]} <br>
//                 Ten notes: ${notes[2]}<br>`);




// chapters 43 - 48 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 1    // uncomment part "1" from html
// function showAlert()
// {
//     alert("You clicked on the link");
// }




// 2    // uncomment part "2" from html
// function showThanks() 
// {
//     alert("Thanks for purchasing a phone from us.");
// }




// 3    // uncomment part "3" from html
// function deleteRow(id)
// {
//     var row = document.getElementById(id);
//     // row.parentNode.removeChild(row);
//     row.remove();
// }




// 4    // uncomment part "4" from html
// function changePic(source)
// {
//     var imgSrc = document.getElementById('scenery');
//     imgSrc.src = source;
//     // document.getElementById('scenery').src = source;
// }




// 5    // uncomment part "5" from html
// function increase() 
// {
//     var up = document.getElementById('counter');
//     var count = up.innerHTML;
//     if(count >= 0)
//     {
//         count++;
//         up.innerHTML = count;
//     }
// }

// function decrease() 
// {
//     var down = document.getElementById('counter');
//     var count = down.innerHTML;
//     if(count > 0)
//     {
//         count--;
//         down.innerHTML = count;
//     }
// }




// chapters 49 - 52 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 1    // uncomment part "1" from html
// function displayForm()
// {
//     var firstName = document.getElementById("first").value;
//     var lastName = document.getElementById("last").value;
//     var email = document.getElementById("emailId").value;
//     var password = document.getElementById("pwd").value;

//     var div = document.createElement('div');
//     div.innerHTML += "<r><br>Your Sign-up Details: <br><br> "
//     div.innerHTML += "First Name: " + firstName + "<br>";
//     div.innerHTML += "Last Name: " + lastName + "<br>";
//     div.innerHTML += "Email: " + email + "<br>";
//     div.innerHTML += "Password: " + password + "<br>";
//     document.body.appendChild(div);
// }




// 2    // uncomment part "2" from html
// function showMore() 
// {
//     var prevText = document.getElementById("first");
//     var text = document.getElementById("second").innerHTML;
//     prevText.innerHTML = text;      
// }




// 3    // uncomment part "3" from html  
// function upSNo()
// {
//     var num = document.getElementById("s_no").innerText;
//     if(num >= 0)
//     {
//         num++;
//     }
//     document.getElementById("s_no").innerHTML = num;    
//     return num;
// }

// function showTable()
// {
//     var table = document.getElementById("studentTable");
//     table.style.display = 'block';
//     var name = document.getElementById("studentName");
//     var stu_class = document.getElementById("studentClass");
//     var marks = document.getElementById("studentMarks");
//     var num = upSNo();
//     var table = document.getElementById("studentTable");
//     var row = table.insertRow(-1);

//     row.setAttribute("id", "studentRow"+num);

//     var c0 = row.insertCell(0);
//     var c1 = row.insertCell(1);
//     var c2 = row.insertCell(2);
//     var c3 = row.insertCell(3);
//     var c4 = row.insertCell(4);
//     var c5 = row.insertCell(5);

//     c0.innerHTML = num;
//     c1.innerHTML = name.value;
//     c2.innerHTML = stu_class.value;
//     c3.innerHTML = marks.value;               

//     var btn1 = document.createElement("button"); 
//     btn1.innerHTML = "Edit";                  
//     c4.appendChild(btn1); 
//     btn1.setAttribute('onclick', 'editRow(this, this.parentNode.parentNode.id)');

//     var btn2 = document.createElement("button"); 
//     btn2.innerHTML = "Delete";                  
//     c5.appendChild(btn2); 
//     btn2.setAttribute("onclick", "delRow(this)");

//     name.value = '';
//     stu_class.value = '';
//     marks.value = '';
// }

// function editRow(a, z)
// {
//     var form = document.getElementById("form3");
//     form.style.display = 'block';
//     var resub = document.getElementById("reSubmit");
//     resub.style.display = 'inline';
//     var index = a.parentNode.parentNode;

//     var name = document.getElementById("studentName3");
//     var stClass = document.getElementById("studentClass3");
//     var marks = document.getElementById("studentMarks3");

//     name.value = index.childNodes[1].innerHTML;
//     stClass.value = index.childNodes[2].innerHTML;
//     marks.value = index.childNodes[3].innerHTML;
//     //assiagn row-id to use it for re-submit
//     studentRowId = z;
// }

// function reSubmit(a) 
// {   
//     var index = a.previousSibling;
//     var changeName = index.childNodes[1].value;
//     var changeClass = index.childNodes[3].value;
//     var changeMarks = index.childNodes[5].value;
//     var tableRow = document.getElementById(studentRowId);
//     // assign to table
//     tableRow.childNodes[1].innerHTML = changeName;
//     tableRow.childNodes[2].innerHTML = changeClass;
//     tableRow.childNodes[3].innerHTML = changeMarks;
//     // hide form upon resubmission
//     var originalTable = document.getElementById("studentTable");
//     var hiddenForm = document.getElementById("form3");
//     hiddenForm.style.display = 'none';
//     var hiddenBtn = document.getElementById("reSubmit");
//     hiddenBtn.style.display = 'none';
// }

// function delRow(a)
// {
//     // var index = a.parentNode.parentNode;
//     // index.parentNode.removeChild(index);
//     var row = a.parentNode.parentNode;
//     row.remove();
// }




// chapters 52 - 57 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// 1  // uncomment part "1" from html 
// var imgArr = ['images/3.jpg', 'images/4.png', 'images/5.jpg', 'images/6.jpg'];
// var image;
// for(var i = 0; i < 4; i++)
// {
//     image = document.createElement('img');
//     image.setAttribute('src', imgArr[i]);
//     image.setAttribute('width', '150px');
//     image.setAttribute('height', '100px');
//     image.style.margin = '10px';
//     image.style.cursor = 'pointer';
//     image.setAttribute("onclick", "displayModal(this)");
//     document.body.appendChild(image);
// }

// function displayModal(a)
// {
//     var modal = document.getElementById('modal');
//     modal.classList.add('modal-open');
//     modal.classList.remove('modal-close');
//     modal.style.display = 'block';
//     var modalImg = document.getElementById("modalImg");
//     modalImg.setAttribute('src', a.src);
   
// }

// function closeModal(btn) {
//     var modal = document.getElementById('modal');
//     modal.classList.add('modal-close');
//     modal.classList.remove('modal-open');    
//     modal.style.display = 'none';
// }




// 2  // uncomment part "2" from html
// function zoomIn()
// {
//     var para = document.getElementById("para");
//     var paraFontSize = window.getComputedStyle(para, null).getPropertyValue('font-size');
//     var currentPx = parseFloat(paraFontSize);
//     currentPx = currentPx + 10;
//     para.style.fontSize = currentPx + "px";
// }

// function zoomOut()
// {
//     var para = document.getElementById("para");
//     var paraFontSize = window.getComputedStyle(para, null).getPropertyValue('font-size');
//     var currentPx = parseFloat(paraFontSize);
//     currentPx = currentPx - 10;
//     para.style.fontSize = currentPx + "px";
// }




// chapters 58 - 67 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// open "dom.html" instead of "index.html"


// 1 (part i)
// var anElement = document.getElementById('main-content');
// console.log(anElement);




// 1 (part ii)
// var anElement = document.getElementById('main-content');
// var childEl = anElement.childNodes;
//     // use console please
// for(var i = 0; i < childEl.length; i++)
// {
//     // because question says to display child "elements", and not child "nodes", 
//           // that's why used "nodeName"
//     console.log(childEl[i].nodeName);

//     // if qs said child "nodes", then no need for "nodeName"
//     // console.log(childEl[i]);

// }




// 1 (part iii)
// var renderEl = document.getElementsByClassName('render');

// // creating a new div to display all elements with class "render"
// var newDiv = document.createElement('DIV');
// // to insert the new div at the end of main div (main-content's parent div)
// var anElement = document.getElementById('main-content');
// var n = anElement.parentNode;
// var thirdChild = n.childNodes[2];

// for(var i = 0; i < renderEl.length; i++)
// {
//     newDiv.innerHTML += renderEl[i].innerHTML + "<br>";
// }
// n.insertBefore(newDiv, thirdChild.nextSibling);




// 1 (part iv)
// var fName = document.getElementById("first-name");
// fName.setAttribute("value", "Habiba");




// 1 (part v)
// var lName = document.getElementById("last-name");
// lName.setAttribute("value", "Sultana");
// var eMail = document.getElementById("email");
// eMail.setAttribute("value", "habiba_sultana@outlook.com");




// 2 (part i)
// var n = document.getElementById('form-content');
// var nType = n.nodeType;
// if(nType === 1)
//     document.write("node type: "+nType+", meaning node is an ELEMENT");
// else if(nType === 3)
//     document.write("node type: "+nType+", meaning node is a TEXT")




// 2 (part ii) 
//    //  i undersand k element with "lastName" wale element ki nodetype display karni he
//    //  and us elemnt ke child node ko bhi display karna he
// var n = document.getElementById("lastName");
// var nType = n.nodeType;
// var type;
// if(nType === 1)
//     type = "element";
// else if(nType === 3)
//     type = "text";

//     // gives an object array with childNodes
// // var nChild = n.childNodes;

//     // gives an object text with firstChild
// var nChild = n.childNodes[0];
//     // please use console
// console.log("node type is " + type, nChild);
//     // if i display result on browser, actual html me se cut out ho kr
//     // append ho raha he
    
//     // uncomment below part as well to show on browser
// // var h = document.createElement('h1');
// // var t = document.createTextNode("RESULT");
// // h.appendChild(t);

// // var newDiv1 = document.createElement('DIV');
// // var t1 = document.createTextNode("node type is " +type);
// // newDiv1.appendChild(t1);

// // var newDiv2 = document.createElement('DIV');
// // newDiv2.appendChild(nChild);

// // var anElement = document.getElementById('main-content');
// // var n1 = anElement.parentNode;
// // n1.appendChild(h);
// // n1.appendChild(newDiv1);
// // n1.appendChild(newDiv2);




// 2 (part iii) 
//      // by "update", I understand that "lastName" ki value ko change karna he
// var n = document.getElementById("lastName");
// var nChild = n.childNodes[0];
// nChild.nodeValue = "Last Name: Swayer";




// 2 (part iv) 
// var n = document.getElementById("main-content");
// var a = n.firstChild;
// var z = n.lastChild;
//     // please use console
// console.log(a, z);
//     // if i display result on browser, actual html me se cut out ho kr
//     // append ho raha he
    
//     // uncomment below part as well to show on browser
// // var h = document.createElement('h1');
// // var t = document.createTextNode("RESULT");
// // h.appendChild(t);
// // var n1 = n.parentNode;
// // n1.appendChild(h);
// // n1.appendChild(a);
// // n1.appendChild(z);





// 2 (part v) 
// var n = document.getElementById("lastName");
// var prev = n.previousSibling;
// var nxt = n.nextSibling;
//     // please use console
// console.log(prev, nxt);
//         // if i display result on browser, actual html me se cut out ho kr
//         // append ho raha he
    
//         // uncomment below part as well to show on browser
// // var h = document.createElement('h1');
// // var t = document.createTextNode("RESULT");
// // h.appendChild(t);
// // var n1 = document.getElementById('main-content').parentNode;
// // n1.appendChild(h);
// // n1.appendChild(prev);
// // n1.appendChild(nxt);



// 2 (part vi) 
// var n = document.getElementById("email");
// var nType = n.nodeType;
// var type;
// if(nType === 1)
//     type = "element";
// else if(nType === 3)
//     type = "text";
// var nParent = n.parentNode;
//       // please use console
// console.log("node type is " + type, nParent);
//         // if i display result on browser, actual html me se cut out ho kr
//         // append ho raha he     

//         // uncomment below part as well to show on browser
// // var h = document.createElement('h1');
// // var t = document.createTextNode("RESULT");
// // h.appendChild(t);
// // var n1 = document.getElementById('main-content').parentNode;
// // n1.appendChild(h);
// // n1.appendChild(nParent);


