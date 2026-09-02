// 201-200	Successful registration
// 400	Bad/invalid request data
// 401	Missing/invalid authentication
// 403	Authenticated but not allowed
// 404	Endpoint/resource doesn't exist
// 409	Conflict, e.g. existing user
// 500  A server error has occurred

import { test, expect } from '@playwright/test';

//1 200 success
// test('Get All Books API Test', async ({request}) => {
// const response = await request.get('https://demoqa.com/BookStore/v1/Books');
// console.log(await response.json());
// expect(response.status()).toBe(200);
 
 
// });

//2 fail due to Book
// test('Get All Books API Test', async ({request}) => {
// const response = await request.get('https://demoqa.com/BookStore/v1/Book');
// console.log(await response.json());
// expect(response.status()).toBe(200);
 
 
// });

// 3 post data 409 user already registered
// test('Get All Books API Test', async ({request}) => {
// const response = await request.post('https://api-testing-postman.vercel.app/api/v1/users/register',{
// data:{
//   "fullname": "Asim Ali",
//   "email": "test@example.com",
//   "username": "asimali0123",
//   "password": "asimali12356"
// }

// });
// console.log(await response.json());
// expect(response.status()).toBe(201);
 
 
// });

//4 new user 201 or 200 success
// test('Register New User', async ({ request }) => {

//     const response = await request.post(
//         'https://api-testing-postman.vercel.app/api/v1/users/register',
//         {
//             data: {
//                 fullname: "Asim Ali",
//                 email: "asim987654321@example.com",
//                 username: "asim987654321",
//                 password: "asimali12356"
//             }
//         }
//     );

//     console.log('Status:', response.status());
//     console.log('Response:', await response.json());

//     expect(response.status()).toBe(201);
// });

// 404 Negative Test
// test('Register User - Invalid Endpoint - 404', async ({ request }) => {

//     const response = await request.post(
//         'https://api-testing-postman.vercel.app/api/v1/users/register123',
//         {
//             data: {
//                 fullname: "Asim Ali",
//                 email: "newuser123@example.com",
//                 username: "newuser123",
//                 password: "asimali12356"
//             }
//         }
//     );

//     console.log('Status:', response.status());
//     console.log('Response:', await response.json());

//     expect(response.status()).toBe(404);
// });

//delete user
// test('Delete User Account API Test', async ({ request }) => {

//     const response = await request.delete(
//         'https://api-testing-postman.vercel.app/api/v1/users/delete-account'
//     );

//     console.log('Status:', response.status());
//     console.log('Response:', await response.text());

//     expect(response.status()).toBe(200);
// });