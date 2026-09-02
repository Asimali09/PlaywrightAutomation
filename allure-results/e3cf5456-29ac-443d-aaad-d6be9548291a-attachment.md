# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\newapi.spec.js >> User Backend API
- Location: tests\newapi.spec.js:35:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | //register
  5  | // test('User Backend API', async ({request}) => {
  6  | // const response = await request.post('https://api-testing-postman.vercel.app/api/v1/users/register',{
  7  | // data:{
  8  | //   "fullname": "Asim Ali",
  9  | //   "email": "asimali@gmail.com",
  10 | //    "username": "asimali01",
  11 | //    "password": "Asim123$"
  12 | // }
  13 | 
  14 | // });
  15 | // console.log(await response.json());
  16 | // expect(response.status()).toBe(201);
  17 | // });
  18 | 
  19 | 
  20 | //login
  21 | // test('User Backend API', async ({request}) => {
  22 | // const response = await request.post('https://api-testing-postman.vercel.app/api/v1/users/login',{
  23 | // data:{
  24 | //   "username": "asimali01",
  25 | //   "email": "asimali@gmail.com",
  26 | //   "password": "Asim123$"
  27 | // }
  28 | 
  29 | // });
  30 | // console.log(await response.json());
  31 | // expect(response.status()).toBe(200);
  32 | // });
  33 | 
  34 | //get all data
  35 | test('User Backend API', async ({request}) => {
  36 | const response = await request.get('https://api-testing-postman.vercel.app/api/v1/users/current-user');
  37 | console.log(await response.json());
> 38 | expect(response.status()).toBe(200);
     |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  39 | 
  40 | });
  41 | 
  42 | 
  43 | //put/update
  44 | // test('User Backend API', async ({request}) => {
  45 | // const response = await request.put('https://api-testing-postman.vercel.app/api/v1/users/replace-account',{
  46 | // data:{
  47 | //   "fullname": "Asim Ali",
  48 | //   "email": "asimali123@gmail.com",
  49 | //   "username": "asimali011",
  50 | // }
  51 | 
  52 | // });
  53 | // console.log(await response.json());
  54 | // expect(response.status()).toBe(201);
  55 | // });
  56 | 
  57 | 
  58 | //delete
  59 | // test('User Backend API', async ({request}) => {
  60 | // const response = await request.delete('https://api-testing-postman.vercel.app/api/v1/users/delete-account');
  61 | // console.log(await response.json());
  62 | // expect(response.status()).toBe(201);
  63 | // });
```