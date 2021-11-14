function rangeOfNumbers(startNum, endNum) {
  return startNum <= endNum ? [startNum].concat(rangeOfNumbers(startNum+1, endNum)) : []
}
console.log(rangeOfNumbers(5, 10));