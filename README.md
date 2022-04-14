# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vandal19/lotide`

**Require it:**

`const _ = require('@vandal19/lotide')`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: assert whether two arrays are equal
* `assertEqual(...)`: assert if two values are equal
* `assertObjectsEqual(...)`: assert if two objects are equal
* `countLetters(...)`: counting the number of specified letter within a specifc string
* `countOnly(...)`: counting the number of specified item within an array
* `eqArrays(...)`: to check if two arrays are equal
* `eqObjects(...)`: to check if two objects are equal
* `findKey(...)`: finding the key of an object using callback
* `findKeyByValue(...)`: finding the key of an object given its value
* `flatten(...)`: return a nested array into a single array
* `head(...)`: return the value of the first index in an array
* `letterPositions(...)`: return the index of the specified letter within a string in an array based on the individual alphabet
* `maps(...)`: using callback function to every value inside an array
* `middle(...)`: return the value of the middle index of an array
* `tail(...)`: return the value of the index of an array except the first one
* `takeUntil(...)`: return a slice of the array with elements taken from the beginning until it stops
* `without(...)`: filtering an array to remove the value of a specified item
