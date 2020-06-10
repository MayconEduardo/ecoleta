import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Hello World');

    response.json([
        'Maycon',
        'Yan',
        'Alexsandra',
        'Sofia'
    ]);
});

app.listen(3333);