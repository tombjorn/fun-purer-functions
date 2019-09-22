# Katas

The following katas each come with a relatively detailed description of what they need to do. You need to devise unit tests for each of these functions. You can work through these problems in any order you like.

## `collectLikeTerms()`

Implement a function `collectLikeTerms` which takes an algebraic expression in a string like `'a + a + a` and then returns a string with a simplified algebraic expression, which in the previous case would be `3a`. The characters should be in alphabetical order by default. You can assume that the only operation connecting the letters is addition.

Here are some examples to help you build out your test suite:

```js
collectLikeTerms('1a'); // return 'a'
```

```js
collectLikeTerms('a + a + a'); // return '3a'
```

```js
collectLikeTerms('a + b + b + a'); // return '2a + 2b'
```

```js
collectLikeTerms('a + a + 2a + b'); // return '4a + b'
```

```js
collectLikeTerms('2c + a + b + 3c'); // return 'a + b + 5c'
```

## `rotateArray`

Implement a function called `rotateArray` which rotates the elements of an array x number of positions

The function takes two arguments, an array and a number.

The function should always returns an array.

Here are some examples to help you build out your test suite:

- If the number is zero return the array unchanged

```js
rotateArray([1, 2, 3], 0); // returns [1, 2, 3]
```

- If the number is positive return the array rotated x times to the right

```js
rotateArray([1, 2, 3], 1); // returns [3, 1, 2]

rotateArray([1, 2, 3, 4, 5], 3); // returns [3, 4, 5, 1, 2]
```

- If the number is negative return the array rotated x times to the left

```js
rotateArray([1, 2, 3], -1); // returns [2, 3, 1]

rotateArray([1, 2, 3, 4, 5], -3); // returns [4, 5, 1, 2, 3]
```

## `herdTheBabies`

Implement a function called `herdTheBabies` which takes a string as its argument. The string will consist of several 'baby' (lowercase) letters, that belong to a 'parent' (uppercase) letter.

The function should return a string that is sorted alphabetically, with the parent letter coming before its babies.

Here are some examples to help you build out your test suite:

```js
herdTheBabies('aA'); // should return 'Aa'
```

```js
herdTheBabies('aBA'); // should return 'AaB'
```

```js
herdTheBabies('bbaBccAC'); // should return 'AaBbbCcc'
```

## `caesarCipher`

The function `caesarCipher` should take a string and a number (`shift`) and return a new string with a caesar cipher applied.

A caesar cipher replaces each plaintext letter with a different one a fixed number of places up or down the alphabet.

`shift` represents the number of shifts up or down the alphabet that should be applied. It may be negative or positive.

```js
caesarCipher('hello', 2); // return 'jgnnq'

caesarCipher('hello world!', -3); // return 'ebiil tloia!'
```

## `reducePolymer`

A polymer is formed by smaller units which, when triggered, react with each other such that two adjacent units of the same type and opposite polarity are destroyed. Units' types are represented by letters; units' polarity is represented by capitalization. For instance, r and R are units with the same type but opposite polarity, whereas r and s are entirely different types and do not react.

For example:

- In `aA`, a and A react, leaving nothing behind.

- In `abBA`, bB destroys itself, leaving aA. As above, this then destroys itself, leaving nothing.

- In `abAB`, no two adjacent units are of the same type, and so nothing happens.

- In `aabAAB`, even though aa and AA are of the same type, their polarities match, and so nothing happens.

Now, consider a larger example, `dabAcCaCBAcCcaDA`:

```raw
dabAcCaCBAcCcaDA The first 'cC' is removed.
dabAaCBAcCcaDA This creates 'Aa', which is removed.
dabCBAcCcaDA Either 'cC' or 'Cc' are removed (the result is the same).
dabCBAcaDA No further actions can be taken.
```

After all possible reactions, the resulting polymer contains 10 units.

`reducePolymer` should return the number of units remaining once the polymer has been fully reacted. For this problem, there is also a large example in the data folder, which can be used for later test cases, for which the function should return 10766.

## `powerSet`

This function takes an array and generates a power set from the given array.
