import foods from './foods';
import {choice, remove} from './helpers'

// randomly draw a fruit from the array
let fruit = choice(foods);
// log the message "i'd like one RandomFruit, please."
console.log(`I'd like one ${fruit}, please.`);
// log the message "Here you go: Randomfruit"
console.log(`Here you go: ${fruit}`);
// Log the message "Delicious! May I have another?"
console.log('Delicious! May I have another?');
// Remove the fruit from he array of fruits
let remaining = remove(foods, fruit);
// Log the message "I'm sorry, we're all out. We have FruitSleft left."
console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);
