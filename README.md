# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @saranyasagi/lotide`

**Require it:**

`const _ = require('@saranyasagi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: displays first item of the array
* `tail`: displays trailing items of firts item in array.
* `middle`: takes array, checks if even or odd, or single element and double elements, and outputs the middle most number/numbers accordingly. 
* `assertEqual`: Own version of assert.equal that checks if expected is strictly equal to actual
* `eqArrays`: Check if 2 arrays are equal in length and values. 
* `assertArraysEqual`: Assertion test version to check if expected array matched actual value in length and values. 
* `without`: takes in 2 parameters, a given array and items to remove in a separate parameter, based on the parameter, outputs array with the items to remove items removed. 
* `takeUntil`: return a slice of array with elements taken from the beginning, has 2 parameters an array and a callback
* `map`: has 2 parameters, an array and a callback, returns new array based on callback results or conditions. 
* `letterPositions`: takes in a single sentence/string parameter, returns all the indeces where the letters occur in arrays without counting spaces. 
* `findKey`: 2 parameters a callback and object, scan the object and return first key that callback says is truthy. 
* `eqObjects`: test to see that 2 objects are equal, they should have same number of keys and value of each object key should also be checked to be equal. 2 parameters are object 1 and object 2. 
* `countOnly`: takes in 2 parameters allItems and itemstoCount, based on itemstoCount parameter matched outputs resulting count only for those matched. 
* `countLetters`: take in a sentence and return count of each letter not including spaces and output data as an object with key values. 
* `assertObjectsEqual`: won't be doing assertion test with this, just for manual checks, there will be side effects. 
