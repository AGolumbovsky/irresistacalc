const express = require('express');


const app = express();

const PORT = process.env.PORT || 8787;

// just using dirname for now, it works
app.use(express.static(__dirname));

app.listen(PORT, function() {
    console.log("irresistacalc is live on port", PORT);
});