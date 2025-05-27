const express = require('express');
const app = express();
app.use(express.json());
const stock =
{ 
"stocks": { 
"Advanced Micro Devices, Inc.": "AMD", 
"Alphabet Inc. Class A": "GOOGL", 
"Alphabet Inc. Class C": "GOOG", 
"Amazon.com, Inc.": "AMZN", 
"Amgen Inc.": "AMGN", 
"Apple Inc.": "AAPL", 
"Berkshire Hathaway Inc.": "BRKB", 
"Booking Holdings Inc.": "BKNG", 
"Broadcom Inc.": "AVGO", 
"CSX Corporation": "CSX", 
"Eli Lilly and Company": "LLY", 
"Marriott International, Inc.": "MAR", 
"Marvell Technology, Inc.": "MRVL", 
"Meta Platforms, Inc.": "ΜΕΤΑ", 
"Microsoft Corporation": "MSFT", 
"Nvidia Corporation": "NVDA", 
"PayPal Holdings, Inc.": "PYPL", 
"TSMC": "2330TW", 
"Tesla, Inc.": "TSLA", 
"Visa Inc.": "V" 
} 
};
app.get('/evaluation-service/stock',(req,res)=>
{
    res.status(200).json(stock);
});

app.listen(3000,()=>
{
    console.log("Server is running at http://20.244.56.144/evaluation-service/");
});