/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.


// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here

'Cal'
Description: Our app keeps track of things.
Every 'cal' has
- a day of week
- a date
- a month
- a year
Every 'cal' can
- save an event to a date
- delete an event
- create an all day event
- display a day view
- display a week view
- display a month view
- display a year view

'Kitchen'
Description: Our app helps you plan how to cook dinner.
Every 'kitchen' has
- sink
- stove
- refridgerator
- oven
Every 'kitchen' can
- cook a stovetop meal
- cook an oven meal
- cook a refridgerator meal
- wash the dishes

'Bus'
Description: Our app shows you the bus route times.
Every 'bus' has
- a bus number
- a route number
- a driver
- a vin
Every 'bus' can
- be in service
- be out of service
- be low on fuel

// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

let pet_owner = {
  'owner':[
    {
      'ownerName': 'Jared Jones',
      'ownerAddress': '1234 Fulton Street, San Francisco, CA, 94117',
    };

// Answer Ends Here


// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.


let some_pet = {
  petName: 'Darcy',
  species: 'chow chow',
  petBreed: 'mutt',
  noise: 'growl'
};

// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done!

/////////////////////////////////////////////////////////////
