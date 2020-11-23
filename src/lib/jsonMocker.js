const randomWords = require('random-words')
const  JSONValidator = require("../lib/jsonValidator")

var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");

// {
//   "city": 'City 1',
//   "stateAbbreviation": 'PA',
//   "zipCode": '98765',
//   "zipPlusFour": '1331',
//   "county": 'County Good',
//   "full": '123 Good Street, City 1, PA 98765',
//   "isPrimary": true,
// }

// {
//   "businessDaysToDueDate": 2,
//   "stateCode": 'PA',
//   "newCaseName": 'LTSS SC/CM',
//   "newCaseType": 'SC 1',
//   "taskActivityOption": 'New Member',
//   "taskPriority": 'HIGH',
//   "taskDescription": 'SC Assigned per Membership Report',
//   "noteText": 'SC Assigned per Membership Report',
// }

// {
//   "cnId": 'Bilbo Baggins',
//   "firstName": 'Bilbo',
//   "lastName": 'Baggins',
// }

// numbers = random val + - 5
// bools = stay the  same
// split by ' ', '-', '/'

// stringify

//Undefined	"undefined"
// Null	"object" (see below)
// Boolean	"boolean"
// Number	"number"
// BigInt (new in ECMAScript 2020)	"bigint"
// String	"string"
// Symbol (new in ECMAScript 2015)	"symbol"
// Function object (implements [[Call]] in ECMA-262 terms)	"function"
// Any other object

let  getRandomValue = (value) => {

  // get value type
  let valueType = typeof value
  switch( valueType ){
    case 'boolean':
      return !!(Math.floor(Math.random() * Math.floor(2))) // return true or false
    case 'number':
      let numAsString = (value).toString()
      return Math.random().toString().slice(2,2 + numAsString.length)
    case 'string':
      let curString = value

      // const splitByDash = curString.split("-")
      // if(splitByDash.length > 1){
      //   console.log("entered splitByDash")
      //   curString = getRandomValue(splitByDash)
      //   curString.join("-")
      // }

      // const splitBySpace = curString.split(" ")
      // if(splitBySpace.length > 1){
      //   console.log("entered splitBySpace")
      //   curString = getRandomValue(splitBySpace)
      //   curString.join(" ")
      // }

      // const splitBySlash = curString.split("/")
      // if(splitBySlash.length > 1){
      //   console.log("entered splitBySlash")
      //   curString = getRandomValue(splitBySlash)
      //   curString.join("/")
      // }

      // console.log("curString:", curString)

      let randomWordArray = randomWords({exactly: 1, maxLength: curString.length})

      return randomWordArray.length ? randomWordArray[0] : curString
    case 'object':
      return recursiveLoop(value)
    case 'function':
      return value
  }



  if (value.isArray()){
    console.log('we hit the array')
    return ['temp']
  }

  console.log("made it to the end oops")
  return "asdb"
}

const recursiveLoop = (input, key, previousInput) => {

  // if ( JSONValidator.isJson(input)  && JSONValidator.isJson(value) !== null){
  //   for(const [key, value] in input){
  //     console.log("about to enter recursive loop")
  //     newValue = recursiveLoop(value)
  //     input[key] = newValue
  //   }
  // }

  // if (input.isArray()) {
  //   for(let i = 0; i  < input.length; i++){
  //     console.log("about to enter random value")
  //     input[i] = getRandomValue(input[i])
  //   }
  // } else if (JSONValidator.isJson(input)) { // check if object
  //   for(const [key, value] in input){
  //     console.log("about to enter recursive loop")
  //     newValue = getRandomValue(value)
  //     input[key] = newValue
  //   }
  // } else {
  //   console.log("entered else in recursive")
  //   // getRandomValue(input)
  // }

  // no arrays right now

  console.log(input)

  for(const [key, value] in input){
    console.log(key, value)
      let newValue = getRandomValue(value)
      input[key] = newValue
  }

  return input

}

// {
//   "firstName": "David"
//   // "testArray": ["123", "567"]
// }

const Mockinate = (array) => {

  if (array.length === 0) {
    return []
  }

  let firstObject = array[0]
  let result = recursiveLoop(firstObject)
  return result

}

console.log("entered mockinate")

window.Mockinate = Mockinate

module.exports = {
  mockinate : Mockinate
}