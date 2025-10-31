const { expect, test } = require('@playwright/test');
const { request } = require('http');

test.describe('API Test', () => {

    test('Test get method', async ({ request }) => {

        const response = await request.get('https://jsonplaceholder.typicode.com')
        const responseObj = await response.json()
        console.log(responseObj);
        expect(response.status()).toBe(200)
    })

    test('Test Post Method', async ({ request }) => {
        const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
            data: {
                "title": "API Testing with JSONPlaceholder",
                "body": "This is a fake post for testing purpose.",
                "userId": 1
            }
        })
        const responseObj = await response.json()
        console.log(responseObj);
        expect(response.status()).toBe(201);
        expect(responseObj.title).toEqual('API Testing with JSONPlaceholder')
    })

    test('Test Post Method with Auth', async ({ request }) => {
        const response = await request.post('https://restful-booker.herokuapp.com/booking', {
            headers: {
                Authorization: 'Bearer abc123xyz'
            },
            data: {

                "firstname": "Babu",
                "lastname": "Tester",
                "totalprice": 120,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2025-11-01",
                    "checkout": "2025-11-05"
                },
                "additionalneeds": "Breakfast"
            }
        })

        const responseObj = await response.json()
        console.log(responseObj);
        expect(responseObj).toHaveProperty('bookingid')
        expect(responseObj.booking.firstname).toEqual('Babu')
        expect(responseObj.booking.lastname).toEqual('Tester')

    })
})