const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();


massive( process.env.CONNECTION_STRING )
.then( dbInstance => console.log(dbInstance))

// app.use(express.static('public'));

const app = express();
app.use(bodyParser.json());
const property = [{
    id: ''
}]
let locations = ['']


app.get('/api/property', (req, res) => {
    res.send(property)
});


app.get('/api/property/:id', (req, res) => {
    let { properties } = req.params
    res.send(propertyAdded[0])
})

app.post('/api/property_create', (req, res) => {
    let { properties } = req.body
    controller.push(properties)
    res.send(properties)
})



 app.put('/api/property/:id', (req, res) => {
    let propertyIndex = null
    property.forEach((property, index) => {
    if(property.id === Number(req.params.id)) {
        propertyIndex = index
    }
    })
    property[propertyIndex] = {
        id: property[propertyIndex],
    }

    res.send(property)
});


app.delete('/api/property/:id', (req, res) => {
    property.forEach((property, index) => {
        if (property.id === Number(req.params.id)){
            property.splice(index, 1)
        }
    })
    res.status(200).send('Deleted')
});




app.listen(6666, console.log(`We are many, You are one ${6666}`))