# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\newapi.spec.js >> get User API Test
- Location: tests\newapi.spec.js:35:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 204
Received: 200
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
  35 | test('get User API Test', async ({ request }) => {
  36 |   const tokenResponse = await request.post('https://api-testing-postman.vercel.app/api/v1/users/login',
  37 |     {
  38 |       data: {
  39 |         "username": "asimali01",
  40 |         "email": "asimali@gmail.com",
  41 |         "password": "Asim123$"
  42 |       }
  43 |     }
  44 |   );
  45 |  
  46 |   const tokenData = await tokenResponse.json();
  47 |   const token = tokenData.token;
  48 |   const getResponse = await request.get(
  49 |     `https://api-testing-postman.vercel.app/api/v1/users/current-user`,
  50 |     {
  51 |       headers: {
  52 |         Authorization: `Bearer ${token}`
  53 |       }
  54 |     }
  55 |   );
  56 |      console.log(getResponse.status());
> 57 |   expect(getResponse.status()).toBe(204);
     |                                ^ Error: expect(received).toBe(expected) // Object.is equality
  58 | });
  59 | 
  60 | 
  61 | //put/update
  62 | // test('User Backend API', async ({request}) => {
  63 | // const response = await request.put('https://api-testing-postman.vercel.app/api/v1/users/replace-account',{
  64 | // data:{
  65 | //   "fullname": "Asim Ali",
  66 | //   "email": "asimali123@gmail.com",
  67 | //   "username": "asimali011",
  68 | // }
  69 | 
  70 | // });
  71 | // console.log(await response.json());
  72 | // expect(response.status()).toBe(201);
  73 | // });
  74 | 
  75 | 
  76 | //delete
  77 | // test('User Backend API', async ({request}) => {
  78 | // const response = await request.delete('https://api-testing-postman.vercel.app/api/v1/users/delete-account');
  79 | // console.log(await response.json());
  80 | // expect(response.status()).toBe(201);
  81 | // });
```