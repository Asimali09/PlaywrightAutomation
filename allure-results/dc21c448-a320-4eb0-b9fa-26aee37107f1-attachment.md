# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\newapi.spec.js >> Update User API Test
- Location: tests\newapi.spec.js:63:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | 
  4   | //register
  5   | // test('User Backend API', async ({request}) => {
  6   | // const response = await request.post('https://api-testing-postman.vercel.app/api/v1/users/register',{
  7   | // data:{
  8   | //   "fullname": "Asim Ali",
  9   | //   "email": "asimali@gmail.com",
  10  | //    "username": "asimali01",
  11  | //    "password": "Asim123$"
  12  | // }
  13  | 
  14  | // });
  15  | // console.log(await response.json());
  16  | // expect(response.status()).toBe(201);
  17  | // });
  18  | 
  19  | 
  20  | //login
  21  | // test('User Backend API', async ({request}) => {
  22  | // const response = await request.post('https://api-testing-postman.vercel.app/api/v1/users/login',{
  23  | // data:{
  24  | //   "username": "asimali01",
  25  | //   "email": "asimali@gmail.com",
  26  | //   "password": "Asim123$"
  27  | // }
  28  | 
  29  | // });
  30  | // console.log(await response.json());
  31  | // expect(response.status()).toBe(200);
  32  | // });
  33  | 
  34  | //get all data
  35  | // test('get User API Test', async ({ request }) => {
  36  | //   const tokenResponse = await request.post('https://api-testing-postman.vercel.app/api/v1/users/login',
  37  | //     {
  38  | //       data: {
  39  | //         "username": "asimali01",
  40  | //         "email": "asimali@gmail.com",
  41  | //         "password": "Asim123$"
  42  | //       }
  43  | //     }
  44  | //   );
  45  |  
  46  | //   const tokenData = await tokenResponse.json();
  47  | //   const token = tokenData.token;
  48  | //   const getResponse = await request.get(
  49  | //     `https://api-testing-postman.vercel.app/api/v1/users/current-user`,
  50  | //     {
  51  | //       headers: {
  52  | //         Authorization: `Bearer ${token}`
  53  | //       }
  54  | //     }
  55  | //   );
  56  | //     console.log('Status:', getResponse.status());
  57  | //     console.log('Response:', await getResponse.json());
  58  | //   expect(getResponse.status()).toBe(200);
  59  | // });
  60  | 
  61  | 
  62  | //put/update
  63  | test('Update User API Test', async ({ request }) => {
  64  | 
  65  |   const tokenResponse = await request.post(
  66  |     'https://api-testing-postman.vercel.app/api/v1/users/login',
  67  |     {
  68  |       data: {
  69  |         username: 'asimali01',
  70  |         email: 'asimali@gmail.com',
  71  |         password: 'Asim123$'
  72  |       }
  73  |     }
  74  |   );
  75  | 
  76  |   const tokenData = await tokenResponse.json();
  77  |   const token = tokenData.token;
  78  | 
  79  |   const updateResponse = await request.put(
  80  |     'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
  81  |     {
  82  |       headers: {
  83  |         Authorization: `Bearer ${token}`
  84  |       },
  85  | 
  86  |       data: {
  87  |         fullname: 'Asim Ali',
  88  |         email: 'asimali@gmail.com',
  89  |         username: 'asimali01'
  90  |       }
  91  |     }
  92  |   );
  93  | 
  94  |   console.log('Status:', updateResponse.status());
  95  |   console.log('Response:', await updateResponse.json());
  96  | 
> 97  |   expect(updateResponse.status()).toBe(200);
      |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  98  | });
  99  | 
  100 | 
  101 | 
  102 | 
  103 | 
  104 | 
  105 | 
  106 | 
  107 | 
  108 | 
  109 | 
  110 | 
  111 | 
  112 | 
  113 | //delete
  114 | 
  115 | // test('Delete User API Test', async ({ request }) => {
  116 | //   const tokenResponse = await request.post(
  117 | //     'https://api-testing-postman.vercel.app/api/v1/users/login',
  118 | //     {
  119 | //        data: {
  120 | //         "username": "asimali01",
  121 | //         "email": "asimali@gmail.com",
  122 | //         "password": "Asim123$"
  123 | //       }
  124 | //     }
  125 | //   );
  126 |  
  127 | //   const tokenData = await tokenResponse.json();
  128 | //   const token = tokenData.token;
  129 | //   const deleteResponse = await request.delete(
  130 | //     `https://api-testing-postman.vercel.app/api/v1/users/delete-account`,
  131 | //     {
  132 | //       headers: {
  133 | //         Authorization: `Bearer ${token}`
  134 | //       }
  135 | //     }
  136 | //   );
  137 | //         console.log('Status:', deleteResponse.status());
  138 | //         console.log('Response:', await deleteResponse.json());
  139 | //   expect(deleteResponse.status()).toBe(200);
  140 | // });
```