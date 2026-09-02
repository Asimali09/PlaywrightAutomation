# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\newapidynamiclogin.spec.js >> Delete User API Test
- Location: tests\newapidynamiclogin.spec.js:115:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'accessToken')
```

# Test source

```ts
  1   | 
  2   | import { test, expect } from '@playwright/test';
  3   | 
  4   | 
  5   | let user = {
  6   |   fullname: 'Asim Ali',
  7   |   email: 'asimali@gmail.com',
  8   |   username: 'asimali01',
  9   |   password: 'Asim123$'
  10  | };
  11  | 
  12  | 
  13  | async function login(request) {
  14  | 
  15  |   const tokenResponse = await request.post(
  16  |     'https://api-testing-postman.vercel.app/api/v1/users/login',
  17  |     {
  18  |       data: {
  19  |         username: user.username,
  20  |         email: user.email,
  21  |         password: user.password
  22  |       }
  23  |     }
  24  |   );
  25  | 
  26  |   const tokenData = await tokenResponse.json();
  27  | 
  28  |   return {
> 29  |     token: tokenData.data.accessToken,
      |                           ^ TypeError: Cannot read properties of undefined (reading 'accessToken')
  30  |     user: tokenData.data.user
  31  |   };
  32  | }
  33  | 
  34  | 
  35  | test('User Backend API - Register', async ({ request }) => {
  36  | 
  37  |   const response = await request.post(
  38  |     'https://api-testing-postman.vercel.app/api/v1/users/register',
  39  |     {
  40  |       data: {
  41  |         fullname: user.fullname,
  42  |         email: user.email,
  43  |         username: user.username,
  44  |         password: user.password
  45  |       }
  46  |     }
  47  |   );
  48  | 
  49  |   console.log(await response.json());
  50  |   expect(response.status()).toBe(201);
  51  | });
  52  | 
  53  | 
  54  | test('User Backend API - Login', async ({ request }) => {
  55  | 
  56  |   const loginData = await login(request);
  57  | 
  58  |   console.log('Token:', loginData.token);
  59  |   console.log('User:', loginData.user);
  60  | 
  61  |   expect(loginData.token).toBeTruthy();
  62  | });
  63  | 
  64  | 
  65  | test('get User API Test', async ({ request }) => {
  66  | 
  67  |   const loginData = await login(request);
  68  | 
  69  |   const getResponse = await request.get(
  70  |     'https://api-testing-postman.vercel.app/api/v1/users/current-user',
  71  |     {
  72  |       headers: {
  73  |         Authorization: `Bearer ${loginData.token}`
  74  |       }
  75  |     }
  76  |   );
  77  | 
  78  |   console.log('Status:', getResponse.status());
  79  |   console.log('Response:', await getResponse.json());
  80  | 
  81  |   expect(getResponse.status()).toBe(200);
  82  | });
  83  | 
  84  | 
  85  | test('Update User API Test', async ({ request }) => {
  86  | 
  87  |   const loginData = await login(request);
  88  | 
  89  |   const updateResponse = await request.put(
  90  |     'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
  91  |     {
  92  |       headers: {
  93  |         Authorization: `Bearer ${loginData.token}`
  94  |       },
  95  | 
  96  |       data: {
  97  |         fullname: 'Asim Ali Updated',
  98  |         email: 'asimali_updated@gmail.com',
  99  |         username: 'asimali_updated'
  100 |       }
  101 |     }
  102 |   );
  103 | 
  104 |   console.log('Status:', updateResponse.status());
  105 |   console.log('Response:', await updateResponse.json());
  106 | 
  107 |   expect(updateResponse.status()).toBe(200);
  108 | 
  109 |   user.fullname = 'Asim Ali Updated';
  110 |   user.email = 'asimali_updated@gmail.com';
  111 |   user.username = 'asimali_updated';
  112 | });
  113 | 
  114 | 
  115 | test('Delete User API Test', async ({ request }) => {
  116 | 
  117 |   const loginData = await login(request);
  118 | 
  119 |   const deleteResponse = await request.delete(
  120 |     'https://api-testing-postman.vercel.app/api/v1/users/delete-account',
  121 |     {
  122 |       headers: {
  123 |         Authorization: `Bearer ${loginData.token}`
  124 |       }
  125 |     }
  126 |   );
  127 | 
  128 |   console.log('Status:', deleteResponse.status());
  129 |   console.log('Response:', await deleteResponse.json());
```