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

// 'Donuts'
// Description: Our app delivers donuts.
// Every 'donut' has
// - a flavor
// - is flavor new boolean
// - in what quantity available (single, half dozen, dozen)
// - time available (when hot, removed from oven)
// Every 'donut' can
// - notify user with new flavor and quantity information
// - notify user when donut of any flavor is available

// 'Concerts'
// Description: App that tracks specific live concerts
// Every 'concert' has
// - band or act
// - genre
// - venue name
// - location
// - date and time
// - are tickets still available boolean
// Every 'Concert' can
// - notify user if there's a concert of a genre they follow
// - notify user when there are new concerts at venue they follow / location nearby
// - offer same-day ticket discounts for concerts on that day when tickets still available.


// 'Workout'
// Description: App that logs workouts from smartwatch
// Every 'workout' has
// - time start
// - time end
// - duration dervied from start/end
// - number of steps taken
// - distance
// - goal speed
// Every 'Workout' can
// - notify user what the mph speed was of workout
// - determine if the distance / duration meets or fails goal speed


// Answer Ends Here


// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address





// Answer Starts Here

let pet_owner = {
  name: "Mike Smith",
  address: "1259 Scott Street, San Francisco, CA, 94114",
  petType: "dog",
  petName: "Mitzy"
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

// Answer Starts Here
let some_pet = {
  name: "Mitzy",
  species: "dog",
  breed: "sheep dog",
  noise: "bark",
  makeNoise: function() {
    console.log(this.name + " " + this.species + " " + "likes to " + this.noise);
  }
};
// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done!

/////////////////////////////////////////////////////////////
