const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send({'name': 'Arun', 'age': '24', 'designation': 'Apps Developer'});
});

const PORT = process.env.PORT || 1000;

app.listen(PORT);