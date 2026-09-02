# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\newapi.spec.js >> Delete User API Test
- Location: tests\newapi.spec.js:63:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 500
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
  63  | test('Delete User API Test', async ({ request }) => {
  64  |   const tokenResponse = await request.post(
  65  |     'https://api-testing-postman.vercel.app/api/v1/users/login',
  66  |     {
  67  |        data: {
  68  |         "username": "asimali0123",
  69  |         "email": "asimali@gmail.com",
  70  |         "password": "Asim123$"
  71  |       }
  72  |     }
  73  |   );
  74  |  
  75  |   const tokenData = await tokenResponse.json();
  76  |   const token = tokenData.token;
  77  |   const updateResponse = await request.put(
  78  |     `https://api-testing-postman.vercel.app/api/v1/users/replace-account`,
  79  |     {
  80  |       headers: {
  81  |         Authorization: `Bearer ${token}`
  82  |       }
  83  |     }
  84  |   );
  85  |         console.log('Status:', updateResponse.status());
  86  |         console.log('Response:', await updateResponse.json());
> 87  |   expect(updateResponse.status()).toBe(200);
      |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  88  | });
  89  | 
  90  | 
  91  | 
  92  | 
  93  | 
  94  | 
  95  | 
  96  | 
  97  | 
  98  | 
  99  | 
  100 | 
  101 | 
  102 | 
  103 | //delete
  104 | 
  105 | // test('Delete User API Test', async ({ request }) => {
  106 | //   const tokenResponse = await request.post(
  107 | //     'https://api-testing-postman.vercel.app/api/v1/users/login',
  108 | //     {
  109 | //        data: {
  110 | //         "username": "asimali01",
  111 | //         "email": "asimali@gmail.com",
  112 | //         "password": "Asim123$"
  113 | //       }
  114 | //     }
  115 | //   );
  116 |  
  117 | //   const tokenData = await tokenResponse.json();
  118 | //   const token = tokenData.token;
  119 | //   const deleteResponse = await request.delete(
  120 | //     `https://api-testing-postman.vercel.app/api/v1/users/delete-account`,
  121 | //     {
  122 | //       headers: {
  123 | //         Authorization: `Bearer ${token}`
  124 | //       }
  125 | //     }
  126 | //   );
  127 | //         console.log('Status:', deleteResponse.status());
  128 | //         console.log('Response:', await deleteResponse.json());
  129 | //   expect(deleteResponse.status()).toBe(200);
  130 | // });
```