/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:

    34578 Dolphin Street, Wonka NY, 44506
*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let addNumber = getRandomInt(1,3000);


let str = ['James Street
Grove Street
Canal Street
Walnut Avenue
Hawthorne Lane
Maiden Lane
Clinton Street
Bridle Lane
Queen Street
Warren Avenue
White Street
William Street
Prospect Avenue
11th Street
School Street
New Street
Old York Road
Adams Avenue
Oxford Court
Hillcrest Drive
Main Street North
8th Street West
Country Lane
York Road
Woodland Avenue
Colonial Drive
Aspen Drive
12th Street East
Cambridge Road
Jones Street
Elizabeth Street
Maple Avenue
Buttonwood Drive
Grove Avenue
Laurel Drive
Hamilton Street
Hill Street
Sherwood Drive
Pleasant Street'];
console.log(str.split("\n"));


console.log(addNumber);
