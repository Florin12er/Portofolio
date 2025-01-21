---
title: "Arrays in JavaScript, What they are, why use them and how to use them 🔥🔥🔥"
date: "2024-11-15"
tags: ["Javascript", "Tutorial", "Web Development"]
image: "/images/array.png"
---

# What is an Array in JavaScript? 🧐

An array in JavaScript is a structured collection of values that allows you to store multiple items in a single
variable. This makes it easier to manage and manipulate groups of related data. To clarify, consider this analogy:
imagine you have several dogs, each with unique names. Instead of creating a separate variable for each dog's name, you
can use an array to group them all together in one convenient list.

```javascript
// Traditional Variable Approach
let dog_1 = "andrew";
let dog_2 = "bob";
let dog_3 = "charlie";

// Array Approach
let dogs = ["andrew", "bob", "charlie"];
```



# Why use Arrays in JavaScript? 🤔

Now that you hopefully know what is an array, let's talk why to use an array in JavaScript.

- Arrays are a convenient way to store and manipulate multiple values.
- They minimize the amount of code you need to write.
- They are more efficient than using separate variables for each value.
- They are easier to read and understand.
- They are more flexible and can be used in a variety of situations.

# How to use Arrays in JavaScript 💻

As shown earlier in the code snippet, you can create an array by first declaring the keyword for the variable type :
'let', 'var' or 'const'(more info about those [here](https://www.w3schools.com/js/js_variables.asp)) and then name the
array then equal sign then open square brackets.
in the square brackets you can add the values that you want to store in the array separated by commas.

```javascript
let dogs = ["andrew", "bob", "charlie"];
```

## Accessing Array Values 👀

You can access the values in an array by using the index of the value you want to access.

<div class="error">
 An array starts with index 0, not 1. Meaning, the first value in the array is at index 0, the second one at index 1, 
    and so on.
</div>


```javascript
let dogs = ["andrew", "bob", "charlie"];

console.log(dogs[0]); // andrew
console.log(dogs[1]); // bob
console.log(dogs[2]); // charlie
```

## Adding Values to an Array 👉

There are multiple ways to add values to an array. But the easiest are the push() and concat() methods.

```javascript
let dogs = ["andrew", "bob", "charlie"];

dogs.push("danny"); // adding a value to the end of the array
dogs.push("eric"); // adding a value to the end of the array
// or
dogs = dogs.concat(["danny", "eric"]); // adding multiple values to the end of the array
```

## Removing Values from an Array 👈

like adding values to an array, there are multiple ways to remove values from an array. But the easiest are the pop()
and splice() methods.

```javascript
let dogs = ["andrew", "bob", "charlie"];

dogs.pop(); // removes the last value from the array
dogs.pop(); // removes the second to last value from the array
// or
dogs.splice(1, 1); // removes the second value from the array
```

## Finding the Length of an Array 📏

To find the length of an array, you can use the length property.

<div class="error">
    This is not the same as the position of the value in the array. Instead, it is the number of values in the array like you 
    may normally think.
</div>

```javascript
let dogs = ["andrew", "bob", "charlie"];

console.log(dogs.length); // 3
```

## Looping through an Array 🧠

To loop through an array, you can use a for loop or the forEach() method.

```javascript
let dogs = ["andrew", "bob", "charlie"];

for (let i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);
}

dogs.forEach(function (dog) {
  console.log(dog);
});
```

## Copying an Array 📋

You can copy an array by using the slice() method.

```javascript
let dogs = ["andrew", "bob", "charlie"];

let copy = dogs.slice();
```

## Sorting an Array 

You can sort an array by using the sort() method.

```javascript
let dogs = ["charlie", "bob", "andrew"];
let numbers = [5, 2, 1, 4, 3];

dogs.sort();
numbers.sort();

console.log(dogs); // ["andrew", "bob", "charlie"]
console.log(numbers); // [1, 2, 3, 4, 5]
```

## Reversing an Array 🙃

You can reverse an array by using the reverse() method.

```javascript
let dogs = ["charlie", "bob", "andrew"];

dogs.reverse();

console.log(dogs); // ["andrew", "bob", "charlie"]
```

# Conclusion 🎉

Arrays are a powerful tool in JavaScript that can help you store and manipulate multiple values in a single variable.
They are easy to use and understand, and can be used in a variety of situations.


Yey🥳 you got to end of the blog have fun coding with arrays in JavaScript and don't forget to like it and share it to your friends!


