// TASK 1
function binarySearch(arr, el) {
  const middleIndex = Math.floor(arr.length / 2);
  const supportElement = arr[middleIndex];
  if (supportElement === el) return supportElement;
  else if (arr.length === 1) return false;
  else if (supportElement > el) return binarySearch(arr.slice(0, middleIndex), el);
  else if (supportElement < el) return binarySearch(arr.slice(-middleIndex), el);
}
// console.log(binarySearch([1,2,3,4,5,6,7], 50));


// TASK 2 
const obj = {
  a: 2,
  prop: 8,
  z: {
    y: 5,
    a: 'string',
    foo: {
      a: '+1',
      bar: 'str',
    }
  }
}
function searchPropValues(obj, prop) {
  let rezArr = [];
  for (const [key, value] of Object.entries(obj)) {
    if (Object.getPrototypeOf(value) === Object.prototype) rezArr.push(...searchPropValues(value, prop));
    if (key === prop) rezArr.push(value);
  }
  return rezArr;
}
// console.log(searchPropValues(obj, 'foo'));


// TASK 3
 function largestSumOfTwoAdjacentNumbers(arr) {
  let maxSum = arr[0] + arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    const sumTwoNumbers = arr[i] + arr[i + 1]
    if (maxSum < sumTwoNumbers) maxSum = sumTwoNumbers;
  }
  return maxSum;
 }
//  console.log(largestSumOfTwoAdjacentNumbers([1,1,34,2,5,6,7]));


// TASK 4
const textTransformation = (delimiter, ...arr) => arr.join(' ').replaceAll(' ',delimiter);
// console.log(textTransformation('*','1','b','1c'));


// TASK 5
function fromArrayMakeAnObjectV1(arr) {
  let obj = {};
  arr.forEach(el => obj[el.name] = el.value);
  return obj;
}
//       OR
const fromArrayMakeAnObjectV2 = (arr) => arr.reduce((acc, cur) => {acc[cur.name] = cur.value; return acc},{})
// console.log(fromArrayMakeAnObjectV1([{name: 'width', value: 10},{name: 'height', value: 20}]));
// console.log(fromArrayMakeAnObjectV2([{name: 'width', value: 10},{name: 'height', value: 20}]));


// TASK 6
function bubbleSort(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(bubbleSort([1,564,23,8,54,34,8,9,56,34,5,7,34]));