# Building pure functions

These katas are designed to make you think about building functions that are **pure** and part of this means creating functions without _side effects_ so they don't for example mutate the data they are passed as arguments. Functions that have _side effects_ can expose you to bugs that are often difficult to find, so avoiding side effects as soon as possible is a very good habit to get in to from the beginning.

As with previous days, you will need to set up a few things first:

1. Create a `package.json`

2. Install your dependencies (the amazing Jest as ever)

3. Update the scripts section of your `package.json` so you can get Jest to run your test files

## Pre-sprint

Look through the **pre-sprint** section and have a go at fixing the exercises in order to ensure they pass all the tests and then answer the questions in `index.md`. These tasks will serve as a good immediate way of assessing your understanding after the lecture and will help to orient you towards the more independent tasks in the main sprint.

---

## Main sprint

Implement the following functions using TDD ...

### `reverseItems`

This function should take as its arguments:

- one array of _primitive_ values

The function should return an array of the same length with the items in reverse order. The function should work similarly to `Array.reverse()` however it should _not_ mutate the original array. And, of course, you may **not** use `Array.reverse()` in your implementation

```js
const letters = ['a', 'b', 'c'];
reverseItem(letters);
// should return ['c','b','a'];

// letters not mutated so should still be ['a', 'b', 'c']
```

---

### `removePersonWithID`

This function should take as its arguments:

- an array of people objects, each with `id` and `name` properties
- an id of the person that needs to be removed

This function should return a new array of new people objects with but with the person of the given id removed.

```js
const tutors = [
  { id: 1, name: 'foluso' },
  { id: 2, name: 'suneet' },
  { id: 3, name: 'paul r' },
  { id: 4, name: 'liam' },
  { id: 5, name: 'anat' },
  { id: 6, name: 'sam' },
  { id: 7, name: 'tom' },
  { id: 8, name: 'alex' },
];
removePersonWithID(tutors, 4);
/* should return
[
  { id: 1, name: 'foluso' },
  { id: 2, name: 'suneet' },
  { id: 3, name: 'paul r' },
  { id: 5, name: 'anat' },
  { id: 6, name: 'sam' },
  { id: 7, name: 'tom },
  { id: 8, name: 'alex' },
]
person 4 has been removed */
```

---

### `updateTasks`

This function should take as its arguments:

- a person object (with name and tasks properties)
- one or more new tasks

The function should return a new person object with a new tasks properties. The tasks property from the input object should not be mutated.

```js
updateTasks(
  { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] },
  'read books',
  'tidy room'
);
/* should return 
{
  name: 'Anat',
  tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room']
}
*/
```

---

### `raiseSalaries`

This function should take as its arguments:

- an array representing a list of employees and a number (representing a percentage increase)
- each employee will be represented as an object with a `name` and a `salary` property

It should return a new array of employees with their salary now increased by the given percentage increase. The new salaries should be rounded up to the nearest integer. None of the original employee objects should be mutated.

```js
raiseSalaries(
  [
    { name: 'Alice', salary: 3000 },
    { name: 'Bob', salary: 2000 },
    { name: 'Vel', salary: 4500 },
  ],
  10
);
/* should return 
[{ name: 'Alice', salary: 3300 },
 { name: 'Bob', salary: 2200 }, 
 { name: 'Vel', salary: 4950 }
]
*/
```

---

### `cloneObject`

This function should take as its arguments:

- a target object (values are only primitives)
- a source object (values are only primitives)

The function should create a new object with all the key-value pairs from the source object copied over into a copy of the target object. This function has identical functionality to [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

### `getFragment`

---

This function should take as its arguments:

- an array (of primitives only)
- a start index (optional)
- an end index (optional)

The function should return a **new array** with items from the old array taken from the start index and up to but not including the end index. This function has identical functionality to [`Array.slice()`](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/array/slice). You should use the MDN documentation as a guide to helping you decide what functionality you need to implement for this function. And, of course, you cannot use `Array.slice()` in your own implementation.
