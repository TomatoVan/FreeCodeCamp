// the global Array
let s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  let newArray = [];
  // Add your code below this line
  for(let i = 0; i < this.length ; i++ ){
  newArray.push(callback(this[i]));}
  // Add your code above this line
  return newArray;

};

let new_s = s.myMap(function(item){
  return item * 2;
});