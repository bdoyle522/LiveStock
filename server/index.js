import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';
//import dotenv from 'dotenv';
// dotenv.config();

const stock_api_start = "https://api.iextrading.com/1.0/stock/"

var app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3400;

app.listen(port, () => {
    console.log("listening on port: ", port);
});

app.get('/api/quote/', (req, res) => {
    const string = req.url.substring(req.url.indexOf("=") + 1, req.url.length);
    console.log(string);
    const quoteOne = decodeURI(req.url);
    console.log(quoteOne);
    // axios.all([
    //     axios.get(stock_api_start + "spy/quote"),
    //     axios.get(stock_api_start + "dia/quote"),
    // ]).then(axios.spread((res1, res2) => {
    //     res.json({
    //         DJIA: res1.data,
    //         SPY: res2.data
    //     })
    // }))

})
app.get('/api/hello', (req, res) => {
    res.send("Hello");
})