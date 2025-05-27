
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const windowSize = 10;
let windowPrevState = [];
let windowCurrState = [];

const updateWindow = (newNumbers) => {
    newNumbers = newNumbers.filter(num => !windowCurrState.includes(num));
    windowPrevState = [...windowCurrState];
    windowCurrState = [...windowPrevState, ...newNumbers].slice(-windowSize);
};

const fetchNumbers = async (type) => {
    try {
        const { data } = await axios.get(`http://third-party-server.com/numbers/${type}`, { timeout: 500 });
        return data.numbers || [];
    } catch {
        return [];
    }
};

app.get('/numbers/:type', async (req, res) => {
    const type = req.params.type;
    if (!['p', 'f', 'e', 'r'].includes(type)) return res.status(400).json({ error: "Invalid type." });

    const newNumbers = await fetchNumbers(type);
    updateWindow(newNumbers);

    const avg = windowCurrState.length ? (windowCurrState.reduce((a, b) => a + b, 0) / windowCurrState.length).toFixed(2) : 0.00;
    
    res.json({ windowPrevState, windowCurrState, numbers: newNumbers, avg });
});


app.get('/evaluation-service/primes', (req, res) => {
    res.status(200).json(math.primes);
});

app.get('/evaluation-service/fibo', (req, res) => {
    res.status(200).json(math.fibo);
});

app.get('/evaluation-service/even', (req, res) => {
    res.status(200).json(math.even);
});

app.get('/evaluation-service/rand', (req, res) => {
    res.status(200).json(math.rand);
});

app.listen(9876, () => {
    console.log("Server is running at http://20.244.56.144/evaluation-service/");
});

app.listen(9876, () => console.log("Server running at http://localhost:9876/numbers/e"));
