import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

var app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 3400;

app.listen(port, () => {
    console.log("listening on port: ", port);
});

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});