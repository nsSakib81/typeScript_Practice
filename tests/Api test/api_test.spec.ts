import { test, request, expect } from "playwright/test";

test('Api Delete Request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    console.log(response.status())

    expect(response.status()).toBe(204);
})


test('Api put request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Sakib piash",
            "job": "Associate software engineer"
        }
    });
    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('Sakib');
    console.log(await response.json());
})



test('Api post request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Sakib",
            "job": "Trainee"
        }
    });
    expect(response.status()).toBe(201);

    const text = await response.text();
    expect(text).toContain('Sakib');
    console.log(await response.json());
})





test('Api Get Request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    console.log(response.status())

    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('janet');
    console.log(await response.json());
})