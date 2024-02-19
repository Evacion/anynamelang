let statement = "Happy Birthday to you! Hehe"
let vowelCount = 0;
let consonantCount = 0;
statement.split('').forEach(letter => {
    if ("aeiou".split('').includes(letter.toLowerCase())) {vowelCount++;}
    if ("bcdfghjklmnpqrstvwxyz".split('').includes(letter.toLowerCase())) {consonantCount++;}
})
console.log("Length: ", statement.length)
console.log("Vowel Count: ", vowelCount);
console.log("Consonant Count: ", consonantCount);