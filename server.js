const puppeteer = require("puppeteer");
const path = require('path');
const express = require('express');
const app = express();
const config = require('config');

const { HOST, UI_PORT, NODE_PORT } = config;

app.get('/health', function(req, res) {
    res.send('Serwer is up and running');
});

app.get('/pdf', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        await page.goto(`http://${HOST}:${UI_PORT}`, {
            waitUntil: "networkidle2"
        });
        await page.setViewport({ width: 794, height: 1123 });
        page.emulateMediaType('screen')
        const todays_date = new Date();
        const pdfURL = path.join(__dirname, 'files', todays_date.getTime() + '.pdf');
        
        const pdf = await page.pdf({ 
            path: pdfURL,
            format: "A4",
            scale: 0.7,
            printBackground: true,
            displayHeaderFooter: true,
        });
    
        await browser.close();
    
        res.set({
            "Content-Type": "application/pdf",
            "Content-Length": pdf.length
        });
        res.sendFile(pdfURL);
    } catch (error) {
        console.log(error);
    }
});

app.listen(NODE_PORT, ()=> {
    console.log(`Server started on port ${NODE_PORT}`)
});