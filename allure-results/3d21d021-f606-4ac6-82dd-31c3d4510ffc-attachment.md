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
Received: 400
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
  65  |   // Login first to get access token
  66  |   const tokenResponse = await request.post(
  67  |     'https://api-testing-postman.vercel.app/api/v1/users/login',
  68  |     {
  69  |       data: {
  70  |         username: 'asimali01',
  71  |         email: 'asimali@gmail.com',
  72  |         password: 'Asim123$'
  73  |       }
  74  |     }
  75  |   );
  76  | 
  77  |   const tokenData = await tokenResponse.json();
  78  |   const token = tokenData.token;
  79  | 
  80  |   // Update user
  81  |   const updateResponse = await request.put(
  82  |     'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
  83  |     {
  84  |       headers: {
  85  |         Authorization: `Bearer ${token}`
  86  |       },
  87  | 
  88  |       // 👇 PUT data goes here
  89  |       data: {
  90  |         username: 'asimali_updated',
  91  |         email: 'asimali_updated@gmail.com',
  92  |         password: 'NewPassword123$'
  93  |       }
  94  |     }
  95  |   );
  96  | 
  97  |   console.log('Status:', updateResponse.status());
  98  |   console.log('Response:', await updateResponse.json());
  99  | 
> 100 |   expect(updateResponse.status()).toBe(200);
      |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  101 | });
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
  113 | 
  114 | 
  115 | 
  116 | //delete
  117 | 
  118 | // test('Delete User API Test', async ({ request }) => {
  119 | //   const tokenResponse = await request.post(
  120 | //     'https://api-testing-postman.vercel.app/api/v1/users/login',
  121 | //     {
  122 | //        data: {
  123 | //         "username": "asimali01",
  124 | //         "email": "asimali@gmail.com",
  125 | //         "password": "Asim123$"
  126 | //       }
  127 | //     }
  128 | //   );
  129 |  
  130 | //   const tokenData = await tokenResponse.json();
  131 | //   const token = tokenData.token;
  132 | //   const deleteResponse = await request.delete(
  133 | //     `https://api-testing-postman.vercel.app/api/v1/users/delete-account`,
  134 | //     {
  135 | //       headers: {
  136 | //         Authorization: `Bearer ${token}`
  137 | //       }
  138 | //     }
  139 | //   );
  140 | //         console.log('Status:', deleteResponse.status());
  141 | //         console.log('Response:', await deleteResponse.json());
  142 | //   expect(deleteResponse.status()).toBe(200);
  143 | // });
```