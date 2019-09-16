# Making Pure functions

Implement the following functions using TDD ...

## addAlbumCounts()

Implement a function that takes an array of objects, each object featuring information about an artist and their discography. The function should

- return a new array of new objects
- each new object must now include an `albumCount` property giving a count of all the albums in the `discography` property.
- none of the original objects in the input should be mutated

```js
const albums = [
  {
    artist: 'Radiohead',
    discography: [{ title: 'Pablo Honey' }, { title: 'The Bends' },{ title: 'OK Computer' }],
  },
  {
    artist: 'Wire'
    discography: [{ title: 'Pink Flag' },{ title: 'Chairs Missing' }]
  }
];
addAlbumCounts(albums);
/*
return [
  {
    artist: 'Radiohead',
    discography: [{ title: 'Pablo Honey' }, { title: 'The Bends' },{title: 'OK Computer'}],
    albumCount: 3
  },
  {
    artist: 'Wire'
    discography: [{title: 'Pink Flag'},{title: 'Chairs Missing'}],
    albumCount: 2
  }
];
*/
```

## `removeNthItem()`

Implement a function that takes an array and returns a new array with the item at the nth index in the array removed. If the index is greater than the array length - 1 then it should return a copy of the original array.

```js
const alphabetSample = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

removeNthItem(alphabetSample, 2); // returns ['a', 'b', 'd', 'e', 'f', 'g'];

removeNthItem(alphabetSample, 4); // returns ['a', 'b','c','d', 'f', 'g'];
```

## `findNewLand()`

Write a function that takes your array of places and returns a **new array** of **new place objects** with the place name preceded by 'new' and 10% of the old population.

```js
const places = [
  {
    place: 'Java',
    population: 141370000,
  },
  {
    place: 'Honchu',
    population: 104000000,
  },
  {
    place: 'Great Britain',
    population: 61700000,
  },
  {
    place: 'Luzon',
    population: 53336000,
  },
];

findNewLand(places);
/* returns
[
  {
    place: 'New Java',
    population: 14137000
  },
  {
    place: 'New Honchu',
    population: 10400000
  }
]
*/
```

## `doctorByDuration()`

Write a function that takes two arguments: an array of doctor objects and a number of years. It should return a **new array** of doctor objects containing doctors who were serving after this number of years.

```js
const doctors = [
  { number: 1, actor: 'William Hartnell', begin: 1963, end: 1966 },
  { number: 2, actor: 'Patrick Troughton', begin: 1966, end: 1969 },
  { number: 3, actor: 'Jon Pertwee', begin: 1970, end: 1974 },
  { number: 4, actor: 'Tom Baker', begin: 1974, end: 1981 },
  { number: 5, actor: 'Peter Davison', begin: 1982, end: 1984 },
  { number: 6, actor: 'Colin Baker', begin: 1984, end: 1986 },
  { number: 7, actor: 'Sylvester McCoy', begin: 1987, end: 1989 },
  { number: 8, actor: 'Paul McGann', begin: 1996, end: 1996 },
  { number: 9, actor: 'Christopher Eccleston', begin: 2005, end: 2005 },
  { number: 10, actor: 'David Tennant', begin: 2005, end: 2010 },
  { number: 11, actor: 'Matt Smith', begin: 2010, end: 2013 },
  { number: 12, actor: 'Peter Capaldi', begin: 2013, end: 2017 },
  { number: 13, actor: 'Jodie Whittaker', begin: 2017, end: 2017 },
];

doctorByDuration(doctors, 4);
/* 
[
  {
    number: 3,  
    actor: "Jon Pertwee", 
    begin: 1970, 
    end: 1974
  },
  {
    number: 4,  
    actor: "Tom Baker",             
    begin: 1974, 
    end: 1981
  },
  { 
    number: 10, 
    actor: "David Tennant",  
    begin: 2005, 
    end: 2010 
  },
  { 
    number: 12,
    actor: "Peter Capaldi",
    begin: 2013,
    end: 2017 
  }
] */
```

## `createNewProfile()`

This function should:

- take a profile object and any number of arguments afterwards representing hobbies
- return a new profile object with the passed hobbies added to the current list of hobbies on the profile object
- the original object and the original array of hobbies on the profile object should not be mutated

```js
const profileData = {
  name: 'Anat',
  hobbies: ['art', 'reading'],
};

createNewProfile(profileData, 'guitar', 'pottery');

/* returns profile object:
{
  name: 'Anat',
  hobbies: ['art', 'reading','guitar', 'pottery']
}
*/
```
