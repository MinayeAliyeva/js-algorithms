//1
const questionMark = (str) => {
  const seperetedArr = str.split("");
  let newArr = [];
  let isCheck = false;
  for (i = 0; i < seperetedArr.length; i++) {
    if (!isNaN(+seperetedArr[i]) || seperetedArr[i] === "?") {
      newArr.push(seperetedArr[i]);
    }
  }

  for (i = 0; i < newArr.length; i++) {
    if (
      !isNaN(newArr[i]) &&
      !isNaN(newArr[i + 4]) &&
      +newArr[i] + +newArr[i + 4] == 10
    ) {
      isCheck = true;
    }
  }

  return isCheck;
};
console.log(questionMark("acc?7??sss?3rr1??????5"));
//2

const questionMark1 = (str) => {
  const newStr = str.replace(/A-z/g, "");
};
console.log(questionMark1("acc?7??sss?3rr1??????5"));
