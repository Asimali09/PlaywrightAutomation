# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\newapi.spec.js >> Update User API Test
- Location: tests\newapi.spec.js:102:5

# Error details

```
Error: apiRequestContext.post: getaddrinfo ENOTFOUND api-testing-postman.vercel.app
Call log:
  - → POST https://api-testing-postman.vercel.app/api/v1/users/login
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.7922.34 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/json
    - content-length: 74

```

# Test source

```ts
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
  63  | //1
  64  | // test('Update User API Test', async ({ request }) => {
  65  | 
  66  | //   const tokenResponse = await request.post(
  67  | //     'https://api-testing-postman.vercel.app/api/v1/users/login',
  68  | //     {
  69  | //       data: {
  70  | //         username: 'asimali_update',
  71  | //         email: 'asimali_updated@gmail.com',
  72  | //         password: 'Asim123$'
  73  | //       }
  74  | //     }
  75  | //   );
  76  | 
  77  | //   const tokenData = await tokenResponse.json();
  78  | //   const token = tokenData.token;
  79  | 
  80  | //   const updateResponse = await request.put(
  81  | //     'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
  82  | //     {
  83  | //       headers: {
  84  | //         Authorization: `Bearer ${token}`
  85  | //       },
  86  | 
  87  | //       data: {
  88  | //         fullname: 'Asim Ali',
  89  | //         email: 'asimali@gmail.com',
  90  | //         username: 'asimali01'
  91  | //       }
  92  | //     }
  93  | //   );
  94  | 
  95  | //   console.log('Status:', updateResponse.status());
  96  | //   console.log('Response:', await updateResponse.json());
  97  | 
  98  | //   expect(updateResponse.status()).toBe(200);
  99  | // });
  100 | 
  101 | //2
  102 | test('Update User API Test', async ({ request }) => {
  103 | 
> 104 |   const tokenResponse = await request.post(
      |                                       ^ Error: apiRequestContext.post: getaddrinfo ENOTFOUND api-testing-postman.vercel.app
  105 |     'https://api-testing-postman.vercel.app/api/v1/users/login',
  106 |     {
  107 |       data: {
  108 |         username: 'asimali01',
  109 |         email: 'asimali@gmail.com',
  110 |         password: 'Asim123$'
  111 |       }
  112 |     }
  113 |   );
  114 | 
  115 |   const tokenData = await tokenResponse.json();
  116 |   const token = tokenData.token;
  117 | 
  118 |   const updateResponse = await request.put(
  119 |     'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
  120 |     {
  121 |       headers: {
  122 |         Authorization: `Bearer ${token}`
  123 |       },
  124 | 
  125 |       data: {
  126 |         fullname: 'Asim Ali',
  127 |         email: 'asimali@gmail.com',
  128 |         username: 'asimali01'
  129 |       }
  130 |     }
  131 |   );
  132 | 
  133 |   console.log('Status:', updateResponse.status());
  134 |   console.log('Response:', await updateResponse.json());
  135 | 
  136 |   expect(updateResponse.status()).toBe(200);
  137 | });
  138 | 
  139 | 
  140 | 
  141 | 
  142 | 
  143 | 
  144 | 
  145 | 
  146 | 
  147 | 
  148 | 
  149 | 
  150 | 
  151 | //delete
  152 | 
  153 | // test('Delete User API Test', async ({ request }) => {
  154 | //   const tokenResponse = await request.post(
  155 | //     'https://api-testing-postman.vercel.app/api/v1/users/login',
  156 | //     {
  157 | //        data: {
  158 | //         "username": "asimali01",
  159 | //         "email": "asimali@gmail.com",
  160 | //         "password": "Asim123$"
  161 | //       }
  162 | //     }
  163 | //   );
  164 |  
  165 | //   const tokenData = await tokenResponse.json();
  166 | //   const token = tokenData.token;
  167 | //   const deleteResponse = await request.delete(
  168 | //     `https://api-testing-postman.vercel.app/api/v1/users/delete-account`,
  169 | //     {
  170 | //       headers: {
  171 | //         Authorization: `Bearer ${token}`
  172 | //       }
  173 | //     }
  174 | //   );
  175 | //         console.log('Status:', deleteResponse.status());
  176 | //         console.log('Response:', await deleteResponse.json());
  177 | //   expect(deleteResponse.status()).toBe(200);
  178 | // });
```