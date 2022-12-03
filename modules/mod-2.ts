/*

"Dealing with a bad API"

As a software engineer at a company that is developing a new app, you are
tasked with making an API request to api.mediatool.com/user/b7
to retrieve information about a user. The problem is that the API documentation
is incomplete and unreliable, and you need to figure out the
types and properties of the user data on your own.

Your tasks are to:
1. Use the fetchB7User() function to make the API request,
   and return the user data.

2. Create a function that makes the API call and
   returns the name of the user's subsidiary.

3. Create a function fetchUserAge() that will be implemented
   in the future to retrieve the user's "age" from the API.

Here are some important things to note about the user data:
- The user's "id" can be either a string or a number.
- The user's "avatar" property type is not documented.
- The user's "age" property type is not documented.
- The user has a subsidiary property, which is a subset of the organization object.
- The organization object has the following properties:
  - id: string or number
  - name: string
  - createdAt: number
- The subsidiary object has the following properties:
  - parentId: string or number
- The user has a "alternativeAccounts" property, which is an array of user objects.
*/

import { fetchB7User } from '../mocks'

// -- Solution -- //
