// const score = [45, 80, 90, 30, 100, 67]

const score = (scores) => {
    return scores.filter((num) => num >= 70)
}
console.log(score([45, 80, 90, 30, 100, 67]))
const numbersAbove50AndLessThan91 = (above) => {
    return above.filter((num) => num >= 50 && num <= 90)
}
console.log(numbersAbove50AndLessThan91([45, 80, 90, 30, 100, 67]))

const name = (names) =>{
   return names.filter((words) => words[0].toUpperCase() === 'A');
}
console.log(name(['John', 'Aman', 'Ada', 'Micheal', 'Ann']));

const greaterThan10AndEven = (tenAndEven) => {
   return tenAndEven.filter((num) => num > 10 && num % 2 == 0);
}
console.log(greaterThan10AndEven([5, 12, 18, 25, 30, 7]));

const startWithA = (capa) =>{
    return capa.filter((letter) => letter[0] === "A");
}
console.log(startWithA(['Apple', 'banana', 'Avocado', 'grape', 'Apricot', 'Melon']));

const endWithE = (ende) =>{
    return ende.filter((letter) => letter[letter.length-1] === 'e');
}
console.log(endWithE(['Apple', 'banana', 'Avocado', 'grape', 'Apricot', 'Melon']));

const startWithAEndWithT = (startend) => {
    return startend.filter((letter) => letter[0] === 'A' && letter[letter.length-1] === 't')
}
console.log(startWithAEndWithT(['Apple', 'banana', 'Avocado', 'grape', 'Apricot', 'Melon']));

const lengthGreaterThan5 = (greater5) =>{
    return greater5.filter((len) => len.length > 5);
}
console.log(lengthGreaterThan5(['Apple', 'banana', 'Avocado', 'grape', 'Apricot', 'Melon']));

function countVowels(letter){
    let vowelscount = 0;
    const vowels = 'aieouAIEOU';
    for(i=0; i<letter.length; i++){
        let charater = letter.charAt(i)
        if(vowels.includes(charater)){
            vowelscount++
        }
    }
    return {vowels : vowelscount}
}
console.log(countVowels('Rutherford'));

const countLetters = (str) =>{
    let vowelCount = 0;
    let consonantCount = 0;
    let vowels = 'aieouAIEOU';
    for(i=0; i<str.length; i++){
        let letters = str.charAt(i)
        if(vowels.includes(letters)){
            vowelCount++;
        }else{
            consonantCount++;
        }
    }
    return {
        vowels: vowelCount,
        consonant: consonantCount
    }
}
console.log(countLetters('Jousha'));

function wordAnalyzer(word){
    let vowelCount = 0;
    let consonantCount = 0;
    let vowel = 'aieouAIEOU';
    for(i=0; i<word.length; i++){
        let letters = word.charAt(i)
        if(vowel.includes(letters)){
            vowelCount++;
        }else{
            consonantCount++;
        }
    }
    let isStrongWord;
        if(consonantCount > vowelCount){
            isStrongWord = true;
        }else{
            isStrongWord = false;
        }
    let totalcount = word.length;
    return{
        vowels: vowelCount,
        consonants: consonantCount,
        totalLetters: totalcount,
        isStrongWord: isStrongWord
    }
}
console.log(wordAnalyzer('Daniel'))