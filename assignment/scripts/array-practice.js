console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let topFoods = ['General Tso\'s Chicken', 'Salmon', 'Rice', 'Street Tacos'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log('My favorite food are', topFoods);


// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('There are', topFoods.length, 'foods in this array.');

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0]);

// 3.a. TODO: Log the second animal in the array 
console.log('Second animal is', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('Final animal is', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
finalAnimal = animalArray.length --;
console.log('The final animal is:', finalAnimal);


// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
topFoods.push('Grilled Cheese Sandwich');
console.log('My top foods are:',topFoods);


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let unfavoritedFood = topFoods.pop();
console.log('A',unfavoritedFood, 'is no longer one of my favorite foods.');
console.log('My new favorite foods are only:', topFoods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
topFoods.unshift('Chicken Penne');
console.log('Now my new favorite foods are:', topFoods);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
unfavoritedFood = topFoods.shift();
console.log(unfavoritedFood, 'is no longer one of my favorite foods.');
console.log(topFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
if(topFoods[1] === 'Salmon'){
    console.log(`I no longer like ${topFoods[1]}`);
    topFoods.splice(1, 1, 'Sugar Cookies');
}
console.log(`Now I like ${topFoods[1]}`);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
topFoods.sort(function(a, b){
if (a < b){
    return 1;
}
else{
    return 0;
}
});
console.log(topFoods);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
topFoods = topFoods.join(' and ');
console.log(topFoods);
console.log(`I love ${topFoods}`);


// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']
topFoodsAndAnimals = [topFoods, animalArray];
console.log(topFoodsAndAnimals);
