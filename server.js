const express = require('express');

const app = express();

const PORT = process.env.PORT || 8787;

// just using dirname for now, it works
app.use(express.static(__dirname));

// let timestamp = syst
let timestamp = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

app.listen(PORT, function() {
    console.log("irresistacalc is live on port", PORT, '\n', timestamp);
});