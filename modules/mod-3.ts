/**
  "Fixing the company's address database"

   You are a software engineer at a large company, and you have been
   tasked with fixing the company's address database. The database is a mess,
   and it contains many entries with missing or incorrect information.
   Your job is to write some code to clean up the database and make it usable.

  - The database is represented as an array of objects, where each
     object has the following properties:
    - name: the employee's name
    - street: the street name
    - city: the city name
    - state: the state name
    - zipCode: the zip code, but may be null
    - country: the country name

  - Write a function filterAddresses() that takes an array of employee objects and a predicate,
    and returns a new array that contains only the entries for which the predicate returns true.

  - Write a function isValidAddress() that takes an employee object and returns true if all of the
    address information is not null or undefined.

  - Use the filterAddresses() and isValidAddress() functions to filter the database and remove any
    entries with missing or incorrect address information.

  > The filtered database should only include entries with valid address information. For example,
    given the following database:

    > The filtered database should only include the entries for Alice and Bob,
      because their address information is complete and correct.
      Carol's entry should be removed, because her zip code is missing.

  (*) To solve this task, you will need to use functions, interfaces, generic and
      predicates.
 */

import { filter, isNil } from 'ramda'

const database: Employee[] = [
  {
    name: 'Alice',
    street: '123 Main St.',
    city: 'Anytown',
    state: 'NY',
    zipCode: 10001,
    country: 'USA',
  },
  {
    name: 'Bob',
    street: '456 Maple Ave.',
    city: 'Anytown',
    state: 'NY',
    zipCode: 10002,
    country: 'USA',
  },
  {
    name: 'Carol',
    street: '789 Oak Ave.',
    city: 'Anytown',
    state: 'NY',
    zipCode: null,
    country: 'USA',
  },
]

// -- Solution -- //
