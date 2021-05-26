import express from 'express';

const app = express();
const port = 5000;

app.get('/', (_, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Server is now running on port: ${port}`)
})