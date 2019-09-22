# Making pure functions

Implement the following functions using TDD ...

## `getFragment`

This function should take:

- an array (of primitives only)
- a start index (optional)
- an end index (optional)

The function should return a **new array** with items from the old array taken from the start index and up to but not including the end index. This function has identical functionality to [`Array.slice()`](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/array/slice). You should use the MDN documentation as a guide to helping you decide what functionality you need to implement for this function. And, of course, you cannot use `Array.slice()` in your own implementation.

## `cloneObject`

This function should take

- a target object (values are only primitives)
- a source object (values are only primitives)

The function should create a new object with all the key-value pairs from the source object copied over into a copy of the target object. This function has identical functionality to [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

## `reverseItems`

This function should take

- an array of primitive values

The function should return an array of the same length with the items in reverse order. The function should work similarly to `Array.reverse()` however it should _not_ mutate the original array. And, of course, you may **not** use `Array.reverse()` in your implementation

## `updateTasks`

This function should take

- a person object (with name and tasks properties)
- and one or more new tasks

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

## `removePersonWithID`

This function will take:

- an array of people objects, each with `id` and `name` properties
- an id of the person that needs to be removed

This function should return a new array of new people objects with but with the person of the given id removed.

```js
removePersonWithID(
  [
    { id: 1, name: 'foluso' },
    { id: 2, name: 'suneet' },
    { id: 3, name: 'paul r' },
    { id: 4, name: 'jonny' },
    { id: 5, name: 'anat' },
    { id: 6, name: 'sam' },
    { id: 7, name: 'tom' },
    { id: 8, name: 'alex' },
  ],
  4
);
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
*/
```

## `raiseSalaries`

This function will take

- a an array representing a list of employees and a number (representing a percentage increase)
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
