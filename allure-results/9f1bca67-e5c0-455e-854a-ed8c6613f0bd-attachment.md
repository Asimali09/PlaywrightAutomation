# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\newapidynamiclogin.spec.js >> Delete User API Test
- Location: tests\newapidynamiclogin.spec.js:183:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  102 |       }
  103 |     }
  104 |   );
  105 | 
  106 |   const getData = await getResponse.json();
  107 | 
  108 |   console.log('Get User Status:', getResponse.status());
  109 |   console.log('Get User Response:', getData);
  110 | 
  111 |   expect(getResponse.status()).toBe(200);
  112 | });
  113 | 
  114 | 
  115 | // ======================================================
  116 | // 4. UPDATE USER
  117 | // ======================================================
  118 | 
  119 | test('Update User API Test', async ({ request }) => {
  120 | 
  121 |   // Login using CURRENT user details
  122 |   const loginResponse = await request.post(
  123 |     'https://api-testing-postman.vercel.app/api/v1/users/login',
  124 |     {
  125 |       data: {
  126 |         username: user.username,
  127 |         email: user.email,
  128 |         password: user.password
  129 |       }
  130 |     }
  131 |   );
  132 | 
  133 |   const loginData = await loginResponse.json();
  134 | 
  135 |   console.log('Login Status:', loginResponse.status());
  136 | 
  137 |   // Get access token dynamically
  138 |   const token = loginData.data.accessToken;
  139 | 
  140 |   // Generate new unique details
  141 |   const updatedTimestamp = Date.now();
  142 | 
  143 |   const updatedUsername = `asimali_updated_${updatedTimestamp}`;
  144 |   const updatedEmail = `asimali_updated_${updatedTimestamp}@gmail.com`;
  145 | 
  146 |   // PUT request
  147 |   const updateResponse = await request.put(
  148 |     'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
  149 |     {
  150 |       headers: {
  151 |         Authorization: `Bearer ${token}`
  152 |       },
  153 | 
  154 |       data: {
  155 |         fullname: 'Asim Ali Updated',
  156 |         username: updatedUsername,
  157 |         email: updatedEmail
  158 |       }
  159 |     }
  160 |   );
  161 | 
  162 |   const updateData = await updateResponse.json();
  163 | 
  164 |   console.log('Update Status:', updateResponse.status());
  165 |   console.log('Update Response:', updateData);
  166 | 
  167 |   expect(updateResponse.status()).toBe(200);
  168 | 
  169 |   // Update our local user object
  170 |   user.username = updatedUsername;
  171 |   user.email = updatedEmail;
  172 |   user.fullname = 'Asim Ali Updated';
  173 | 
  174 |   console.log('New Username:', user.username);
  175 |   console.log('New Email:', user.email);
  176 | });
  177 | 
  178 | 
  179 | // ======================================================
  180 | // 5. DELETE USER
  181 | // ======================================================
  182 | 
  183 | test('Delete User API Test', async ({ request }) => {
  184 | 
  185 |   // Login using CURRENT user details
  186 |   const loginResponse = await request.post(
  187 |     'https://api-testing-postman.vercel.app/api/v1/users/login',
  188 |     {
  189 |       data: {
  190 |         username: user.username,
  191 |         email: user.email,
  192 |         password: user.password
  193 |       }
  194 |     }
  195 |   );
  196 | 
  197 |   const loginData = await loginResponse.json();
  198 | 
  199 |   console.log('Login Status:', loginResponse.status());
  200 |   console.log('Login Response:', loginData);
  201 | 
> 202 |   expect(loginResponse.status()).toBe(200);
      |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  203 | 
  204 |   // Get access token dynamically
  205 |   const token = loginData.data.accessToken;
  206 | 
  207 |   // Delete account
  208 |   const deleteResponse = await request.delete(
  209 |     'https://api-testing-postman.vercel.app/api/v1/users/delete-account',
  210 |     {
  211 |       headers: {
  212 |         Authorization: `Bearer ${token}`
  213 |       }
  214 |     }
  215 |   );
  216 | 
  217 |   const deleteData = await deleteResponse.json();
  218 | 
  219 |   console.log('Delete Status:', deleteResponse.status());
  220 |   console.log('Delete Response:', deleteData);
  221 | 
  222 |   expect(deleteResponse.status()).toBe(200);
  223 | });
  224 | 
  225 | 
```