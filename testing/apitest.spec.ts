import { expect, test, request } from '@playwright/test';

const baseURL = 'https://rahulshettyacademy.com/api/ecom/auth/login';
const userPayload = {
    userEmail: "rakeshbabu123@gmail.com",  // Changed to lowercase email
    userPassword: "Automation2020@"
};

test('API test', async ({ request }) => {
    const response = await request.post(baseURL, {
        data: userPayload,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    // Log detailed response information
    const responseBody = await response.json();
    console.log('Status:', response.status());
    console.log('Response Headers:', response.headers());
    console.log('Response Body:', responseBody);
    
    // Add assertions to help debug
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty('token');
});