# MP utils

This series of challenges is designed to help you practice using TDD.
You can make use of excellent documentation on all of the array methods available in javascript by looking [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


# Tasks

Implement the following functions, be sure to follow the README and devise test cases for each of the different functions' behaviour.

# Unit testing 

Each of the functions below can be thought as a single unit. You can write your tests in `./mps-2/mps.test.js`

## `createMPIntroductions`

This function should take an array of MP objects and return an array of strings in the format: 

```js
createMPIntroductions([
  {
    'member_id': '41899',
    'person_id': '25227',
    'name': 'Robert Jenrick',
    'party': 'Conservative',
    'constituency': 'Newark',
    'office': [
      {
        'dept': '',
        'position': 'The Exchequer Secretary',
        'from_date': '2018-01-09',
        'to_date': '9999-12-31'
      }
    ]
  },
  {
    'member_id': '41679',
    'person_id': '25406',
    'name': 'Carol Monaghan',
    'party': 'Scottish National Party',
    'constituency': 'Glasgow North West',
    'office': [
      {
        'dept': '',
        'position': 'Shadow SNP Spokesperson (Armed Forces and Veterans)',
        'from_date': '2017-06-20',
        'to_date': '9999-12-31'
      },
      {
        'dept': '',
        'position': 'Shadow SNP Spokesperson (Education)',
        'from_date': '2017-06-20',
        'to_date': '9999-12-31'
      },
      {
        'dept': 'Science and Technology Committee (Commons)',
        'position': 'Member',
        'from_date': '2017-12-04',
        'to_date': '9999-12-31'
      }
    ]
  }])

/* should return
['The right honourable member for Newark: Robert Jenrick',
'The right honourable member for Glasgow North West: Carol Monaghan']
*/
```

## `getSurnames`

This function should take an array of MP objects and return an array of the MPs' surnames:

```js
getSurnames([
  {
    'member_id': '41797',
    'person_id': '11500',
    'name': 'Theresa Villiers',
    'party': 'Conservative',
    'constituency': 'Chipping Barnet',
    'office': [
      {
        'dept': 'National Security Strategy (Joint Committee)',
        'position': 'Member',
        'from_date': '2017-10-30',
        'to_date': '9999-12-31'
      }
    ]
  },
    {
    'member_id': '41560',
    'person_id': '11884',
    'name': 'Greg Clark',
    'party': 'Conservative',
    'constituency': 'Tunbridge Wells',
    'office': [
      {
        'dept': '',
        'position': 'The Secretary of State for Business, Energy and Industrial Strategy ',
        'from_date': '2016-07-14',
        'to_date': '9999-12-31'
      }
    ]
  }])

// should return ["Villiers", "Clark"]
```

## `removeOffice`

This function should take an array of MP objects and return an array of MP objects of the same length but the office property needs to be removed from each object.

```js
removeOffice([
  {
    'member_id': '41797',
    'person_id': '11500',
    'name': 'Theresa Villiers',
    'party': 'Conservative',
    'constituency': 'Chipping Barnet',
    'office': [
      {
        'dept': 'National Security Strategy (Joint Committee)',
        'position': 'Member',
        'from_date': '2017-10-30',
        'to_date': '9999-12-31'
      }
    ]
  },
    {
    'member_id': '41560',
    'person_id': '11884',
    'name': 'Greg Clark',
    'party': 'Conservative',
    'constituency': 'Tunbridge Wells',
    'office': [
      {
        'dept': '',
        'position': 'The Secretary of State for Business, Energy and Industrial Strategy ',
        'from_date': '2016-07-14',
        'to_date': '9999-12-31'
      }
    ]
  }])

/* should return [
  {
    'member_id': '41797',
    'person_id': '11500',
    'name': 'Theresa Villiers',
    'party': 'Conservative',
    'constituency': 'Chipping Barnet',
  },
    {
    'member_id': '41560',
    'person_id': '11884',
    'name': 'Greg Clark',
    'party': 'Conservative',
    'constituency': 'Tunbridge Wells',
  }
]
*/
```

## `getTories`

This function should return an array of all the MPs in the conservative party.

```js
getTories([
  {
    'member_id': '41797',
    'person_id': '11500',
    'name': 'Theresa Villiers',
    'party': 'Conservative',
    'constituency': 'Chipping Barnet',
    'office': [
      {
        'dept': 'National Security Strategy (Joint Committee)',
        'position': 'Member',
        'from_date': '2017-10-30',
        'to_date': '9999-12-31'
      }
    ]
  },
  {
    'member_id': '41460',
    'person_id': '10259',
    'name': 'David Hanson',
    'party': 'Labour',
    'constituency': 'Delyn',
    'office': [
      {
        'dept': 'Panel of Chairs',
        'position': 'Member',
        'from_date': '2017-06-22',
        'to_date': '9999-12-31'
      },
      {
        'dept': 'Justice Committee',
        'position': 'Member',
        'from_date': '2017-09-11',
        'to_date': '9999-12-31'
      },
      {
        'dept': 'Intelligence and Security Committee of Parliament',
        'position': 'Member',
        'from_date': '2017-11-16',
        'to_date': '9999-12-31'
      }
    ]
  },
  {
    'member_id': '41560',
    'person_id': '11884',
    'name': 'Greg Clark',
    'party': 'Conservative',
    'constituency': 'Tunbridge Wells',
    'office': [
      {
        'dept': '',
        'position': 'The Secretary of State for Business, Energy and Industrial Strategy ',
        'from_date': '2016-07-14',
        'to_date': '9999-12-31'
      }
    ]
  },
  {
    'member_id': '41899',
    'person_id': '25227',
    'name': 'Robert Jenrick',
    'party': 'Conservative',
    'constituency': 'Newark',
    'office': [
      {
        'dept': '',
        'position': 'The Exchequer Secretary',
        'from_date': '2018-01-09',
        'to_date': '9999-12-31'
      }
    ]
  },
  {
    'member_id': '41679',
    'person_id': '25406',
    'name': 'Carol Monaghan',
    'party': 'Scottish National Party',
    'constituency': 'Glasgow North West',
    'office': [
      {
        'dept': '',
        'position': 'Shadow SNP Spokesperson (Armed Forces and Veterans)',
        'from_date': '2017-06-20',
        'to_date': '9999-12-31'
      },
      {
        'dept': '',
        'position': 'Shadow SNP Spokesperson (Education)',
        'from_date': '2017-06-20',
        'to_date': '9999-12-31'
      },
      {
        'dept': 'Science and Technology Committee (Commons)',
        'position': 'Member',
        'from_date': '2017-12-04',
        'to_date': '9999-12-31'
      }
    ]
  })
/* should return [[
  {
    'member_id': '41797',
    'person_id': '11500',
    'name': 'Theresa Villiers',
    'party': 'Conservative',
    'constituency': 'Chipping Barnet',
    'office': [
      {
        'dept': 'National Security Strategy (Joint Committee)',
        'position': 'Member',
        'from_date': '2017-10-30',
        'to_date': '9999-12-31'
      }
    ]
  },
  {
    'member_id': '41560',
    'person_id': '11884',
    'name': 'Greg Clark',
    'party': 'Conservative',
    'constituency': 'Tunbridge Wells',
    'office': [
      {
        'dept': '',
        'position': 'The Secretary of State for Business, Energy and Industrial Strategy ',
        'from_date': '2016-07-14',
        'to_date': '9999-12-31'
      }
    ]
  },
    {
    'member_id': '41899',
    'person_id': '25227',
    'name': 'Robert Jenrick',
    'party': 'Conservative',
    'constituency': 'Newark',
    'office': [
      {
        'dept': '',
        'position': 'The Exchequer Secretary',
        'from_date': '2018-01-09',
        'to_date': '9999-12-31'
      }
    ]
  }]
*/
```

## `tallyMPsOfEachParty`

This function should return an object of key-value pairs for each party and the number of MPs in each party in the array i.e.

```js
tallyMPsOfEachParty([
  {
    'member_id': '41797',
    'person_id': '11500',
    'name': 'Theresa Villiers',
    'party': 'Conservative',
    'constituency': 'Chipping Barnet',
    'office': [
      {
        'dept': 'National Security Strategy (Joint Committee)',
        'position': 'Member',
        'from_date': '2017-10-30',
        'to_date': '9999-12-31'
      }
    ]
  },
  {
    'member_id': '41460',
    'person_id': '10259',
    'name': 'David Hanson',
    'party': 'Labour',
    'constituency': 'Delyn',
    'office': [
      {
        'dept': 'Panel of Chairs',
        'position': 'Member',
        'from_date': '2017-06-22',
        'to_date': '9999-12-31'
      },
      {
        'dept': 'Justice Committee',
        'position': 'Member',
        'from_date': '2017-09-11',
        'to_date': '9999-12-31'
      },
      {
        'dept': 'Intelligence and Security Committee of Parliament',
        'position': 'Member',
        'from_date': '2017-11-16',
        'to_date': '9999-12-31'
      }
    ]
  },
  {
    'member_id': '41560',
    'person_id': '11884',
    'name': 'Greg Clark',
    'party': 'Conservative',
    'constituency': 'Tunbridge Wells',
    'office': [
      {
        'dept': '',
        'position': 'The Secretary of State for Business, Energy and Industrial Strategy ',
        'from_date': '2016-07-14',
        'to_date': '9999-12-31'
      }
    ]
  },
  {
    'member_id': '41899',
    'person_id': '25227',
    'name': 'Robert Jenrick',
    'party': 'Conservative',
    'constituency': 'Newark',
    'office': [
      {
        'dept': '',
        'position': 'The Exchequer Secretary',
        'from_date': '2018-01-09',
        'to_date': '9999-12-31'
      }
    ]
  },
  {
    'member_id': '41679',
    'person_id': '25406',
    'name': 'Carol Monaghan',
    'party': 'Scottish National Party',
    'constituency': 'Glasgow North West',
    'office': [
      {
        'dept': '',
        'position': 'Shadow SNP Spokesperson (Armed Forces and Veterans)',
        'from_date': '2017-06-20',
        'to_date': '9999-12-31'
      },
      {
        'dept': '',
        'position': 'Shadow SNP Spokesperson (Education)',
        'from_date': '2017-06-20',
        'to_date': '9999-12-31'
      },
      {
        'dept': 'Science and Technology Committee (Commons)',
        'position': 'Member',
        'from_date': '2017-12-04',
        'to_date': '9999-12-31'
      }
    ]
  })
/*
should return { "Labour" : 1, "Conservative" : 3, "Scottish National Party" : 1 }
*/
```


