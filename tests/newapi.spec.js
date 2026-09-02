import { test, expect } from '@playwright/test';


//register
// test('User Backend API', async ({request}) => {
// const response = await request.post('https://api-testing-postman.vercel.app/api/v1/users/register',{
// data:{
//   "fullname": "Asim Ali",
//   "email": "asimali@gmail.com",
//    "username": "asimali01",
//    "password": "Asim123$"
// }

// });
// console.log(await response.json());
// expect(response.status()).toBe(201);
// });


//login
// test('User Backend API', async ({request}) => {
// const response = await request.post('https://api-testing-postman.vercel.app/api/v1/users/login',{
// data:{
//   "username": "asimali01",
//   "email": "asimali@gmail.com",
//   "password": "Asim123$"
// }

// });
// console.log(await response.json());
// expect(response.status()).toBe(200);
// });

//get all data
// test('get User API Test', async ({ request }) => {
//   const tokenResponse = await request.post('https://api-testing-postman.vercel.app/api/v1/users/login',
//     {
//       data: {
//         "username": "asimali01",
//         "email": "asimali@gmail.com",
//         "password": "Asim123$"
//       }
//     }
//   );
 
//   const tokenData = await tokenResponse.json();
//   const token = tokenData.token;
//   const getResponse = await request.get(
//     `https://api-testing-postman.vercel.app/api/v1/users/current-user`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }
//   );
//     console.log('Status:', getResponse.status());
//     console.log('Response:', await getResponse.json());
//   expect(getResponse.status()).toBe(200);
// });


//put/update
//1
// test('Update User API Test', async ({ request }) => {

//   const tokenResponse = await request.post(
//     'https://api-testing-postman.vercel.app/api/v1/users/login',
//     {
//       data: {
//         username: 'asimali_update',
//         email: 'asimali_updated@gmail.com',
//         password: 'Asim123$'
//       }
//     }
//   );

//   const tokenData = await tokenResponse.json();
//   const token = tokenData.token;

//   const updateResponse = await request.put(
//     'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       },

//       data: {
//         fullname: 'Asim Ali',
//         email: 'asimali@gmail.com',
//         username: 'asimali01'
//       }
//     }
//   );

//   console.log('Status:', updateResponse.status());
//   console.log('Response:', await updateResponse.json());

//   expect(updateResponse.status()).toBe(200);
// });



//2
// test('Update User API Test', async ({ request }) => {

//   const tokenResponse = await request.post(
//     'https://api-testing-postman.vercel.app/api/v1/users/login',
//     {
//       data: {
//         username: 'asimali_updated12',
//         email: 'asimali_updated1@gmail.com',
//         password: 'Asim123$'
//       }
//     }
//   );

//   console.log('Login Status:', tokenResponse.status());

//   const tokenData = await tokenResponse.json();
//   console.log('Login Response:', tokenData);

//   const token = tokenData.token;

//   const updateResponse = await request.put(
//     'https://api-testing-postman.vercel.app/api/v1/users/replace-account',
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       },

//       data: {
//         fullname: 'Asim Ali Updated54',
//         email: 'asimali_updated4@gmail.com',
//         username: 'asimali_updated12322'
//       }
//     }
//   );

//   console.log('Update Status:', updateResponse.status());
//   console.log('Update Response:', await updateResponse.json());

//   expect(updateResponse.status()).toBe(200);
// });



//delete

// test('Delete User API Test', async ({ request }) => {
//   const tokenResponse = await request.post(
//     'https://api-testing-postman.vercel.app/api/v1/users/login',
//     {
//        data: {
//         "username": "asimali_updated12322",
//         "email": "asimali_updated4@gmail.com",
//         "password": "Asim123$"
//       }
//     }
//   );
 
//   const tokenData = await tokenResponse.json();
//   const token = tokenData.token;
//   const deleteResponse = await request.delete(
//     `https://api-testing-postman.vercel.app/api/v1/users/delete-account`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }
//   );
//         console.log('Status:', deleteResponse.status());
//         console.log('Response:', await deleteResponse.json());
//   expect(deleteResponse.status()).toBe(200);
// });