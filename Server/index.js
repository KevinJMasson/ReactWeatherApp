import express from 'express';
const app = express();
const port = 3000;

import getWeather from './src/WeatherGetter.js'

app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.listen(port, () => {
    console.log(`listening on port ${port}.`);
});

app.get("/:location", async function(req,res) {
    console.log(req.params.location);
    try {
        const data = await getWeather(req.params.location);
        console.log(data);
        res.send(data);
    } catch (e) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});