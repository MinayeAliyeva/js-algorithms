// const sentence = "fun&!! tim....!e ...";
//keep empties and remove characters  after fint longest word  result:time

const sentence = "I love Azerbaijan";
//find the longest world in the sentence fun time

//1
const findLongestWorld = (sentence) => {
  const arr = sentence.split(" ");

  let word = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i]?.length > word.length) {
      word = arr[i];
    }
  }
  return word;
};
console.log(findLongestWorld(sentence));

//2
const findLongestWorld2 = (sentence) => {
  const arr = sentence.split(" ");

  arr.sort();
  //   return word;
};
console.log(findLongestWorld2(sentence));
const arr = [3, 4, 2, 1, 4, 5];
console.log(arr.sort((a, b) => a - b));
const arrStr = ["Azerbaycan", "Azerz", "Baba", "Basak"];

console.log(arrStr.sort((a, b) => a.length - b.length));
