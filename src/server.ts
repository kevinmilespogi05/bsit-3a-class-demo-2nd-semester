import express from 'express';

const app = express();
const port = 3000;

app.get('/404', (req, res) => {
    res.status(404).send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});