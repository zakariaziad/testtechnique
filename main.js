const http = require('http');
const express = require('express');
const app = express();

app.use(express.json());

let rectangle = {
    "id": 1,
    "length": 4,
    "width": 5
};


app.get('/client.html', function (request, response) {
    response.sendfile('./client.html');
});

console.log(`affichage du rectangle: longueur ${rectangle.length} et la largeur est ${rectangle.width}`);

app.get('/rectangle', (req, res) => {
    res.send(rectangle)
});



app.put('/rectangle/:id', async (req, res) => {
    //const rectangle = rectangles.find(r => r.id === parseInt(req.params.id));
    //if (!rectangle) res.status(404).send('The rectangle with the given id was not found');

    rectangle.length = req.body.length;
    rectangle.width = req.body.width;
    console.log(`affichage du nouveau rectangle: longueur ${rectangle.length} et la largeur est ${rectangle.width}`);
    res.send(rectangle)
});

app.listen(8080);