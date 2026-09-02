# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\newapi.spec.js >> Get All Books API Test
- Location: tests\newapi.spec.js:5:5

# Error details

```
Error: apiRequestContext.post: getaddrinfo ENOTFOUND api-testing-postman.vercel.app
Call log:
  - → POST https://api-testing-postman.vercel.app/api/v1/users/register
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.7922.34 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/json
    - content-length: 101

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | 
  5  | test('Get All Books API Test', async ({request}) => {
> 6  | const response = await request.post('https://api-testing-postman.vercel.app/api/v1/users/register',{
     |                                ^ Error: apiRequestContext.post: getaddrinfo ENOTFOUND api-testing-postman.vercel.app
  7  | data:{
  8  |   "fullname": "Asim Ali",
  9  |   "email": "test@example.com",
  10 |   "username": "asimali0123",
  11 |   "password": "asimali12356"
  12 | }
  13 | 
  14 | });
  15 | console.log(await response.json());
  16 | expect(response.status()).toBe(201);
  17 | });
```