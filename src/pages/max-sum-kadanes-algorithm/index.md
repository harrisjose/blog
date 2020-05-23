---
title: Maximum Sum using Kadane's
date: 2018-02-01 08:14:31
tags: [algorithms, cs, refreshers]
---

The Maximum Sum Subarray is a very commonly used example to demonstrate how dynamic programming works. Given an array of numbers, the challenge is to find out

- The maximum subarray sum within the array
- The contiguous subarray that gives you this sum

## Kadane's Algorithm

Okay so moving on to the first problem, a really cool way to find out the maximum subarray sum was proposed by this dude called [Kadane](https://en.wikipedia.org/wiki/Joseph_Born_Kadane)<sup>[1]</sup>. The straightforward version of it is that if you know the maximum sum at a point **A** in your array then the maximum sum at **A+1** is going to be **Maximum at A + Element at A+1** or **Element at A+1** depending on which one is greater.

In practice this is a whole lot simpler that what the above might suggest,

```javascript
const array = [1, -2, 2, 5, -3, -4]
let sum = array[0],
  maximum = array[0]

for (let i = 1; i < array.length; i++) {
  let element = array[i]

  sum = max(sum + element, element)

  if (sum > maximum) {
    maximum = sum
  }
}

console.log(`Maximum sum is ${maximum}`)
```

## Finding the Maximum Subarray

To find the subarray that gives the maximum sum, you can use trackers to keep track of the start and end positions<sup>[2]</sup>.

```javascript
const array = [1, -2, 2, 5, -3, -4]
let sum = array[0],
  maximum = array[0]
let currentStart = 0,
  start = 0,
  end = 0

for (let i = 1; i < array.length; i++) {
  let element = array[i]

  sum = max(sum + element, element)

  if (sum + element < element) {
    currentStart = i + 1
  }

  if (sum > maximum) {
    maximum = sum
    start = currentStart
    end = i
  }
}

console.log(`Maximum sum is ${maximum}`)
console.log(`Maximum subarray is ${start} - ${end}`)
```

## References

[1] - [Kadane's algoritm - Wikipedia](https://en.wikipedia.org/wiki/Maximum_subarray_problem)
[2] - [Maximum Sum Subarray - Geeksforgeeks](https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/)
