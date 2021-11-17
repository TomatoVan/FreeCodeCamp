function findLongestWordLength(str) {
  let max = 0;
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > max) max = strArr[i].length;
  }
  return max
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");