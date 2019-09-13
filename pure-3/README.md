
### findNewLand()

Using the same dataset, write a function that takes your array of places and returns a **new array** of **new place objects** with the place name preceded by 'new' and 10% of the old population.

```js
//using the same dataset

findNewLand(places) /*
[
  {
    place: 'New Java',
    population: 14137000
  },
  {
    place: 'New Honchu',
    population: 10400000
  }
  // ...etc
]

*/
```

### doctorByDuration() 

Write a function that takes two arguments: an array of doctor objects and a number of years. It should return a **new array** of doctor objects containing doctors who were serving after this number of years. 

```js
const doctors = [
    { number: 1,  actor: "William Hartnell",      begin: 1963, end: 1966 },
    { number: 2,  actor: "Patrick Troughton",     begin: 1966, end: 1969 },
    { number: 3,  actor: "Jon Pertwee",           begin: 1970, end: 1974 },
    { number: 4,  actor: "Tom Baker",             begin: 1974, end: 1981 },
    { number: 5,  actor: "Peter Davison",         begin: 1982, end: 1984 },
    { number: 6,  actor: "Colin Baker",           begin: 1984, end: 1986 },
    { number: 7,  actor: "Sylvester McCoy",       begin: 1987, end: 1989 },
    { number: 8,  actor: "Paul McGann",           begin: 1996, end: 1996 },
    { number: 9,  actor: "Christopher Eccleston", begin: 2005, end: 2005 },
    { number: 10, actor: "David Tennant",         begin: 2005, end: 2010 },
    { number: 11, actor: "Matt Smith",            begin: 2010, end: 2013 },
    { number: 12, actor: "Peter Capaldi",         begin: 2013, end: 2017 },
    { number: 13, actor: "Jodie Whittaker",       begin: 2017, end: 2017 } 
];

doctorByDuration(doctors, 4) 
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