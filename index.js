const express = require('express')
const app = express()
const port = 4400
const axios = require('axios');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//get
app.get('/tesapi', (req, res) => {
  axios.get('http://localhost:3000/nasabah')
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.log(error);
  });
})

//create
app.post('/tesapi', (req, res) => {
  axios.post('http://localhost:3000/nasabah',{
    nama : req.body.nama,
    alamat : req.body.alamat,
    rekening : req.body.rekening
  })
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.log(error);
  });
})

//update
app.patch('/tesapi/:id', (req, res)=>{
  axios.patch(`http://localhost:3000/nasabah/${req.params.id}`, {
    params : req.params.id,
    nama : req.body.nama,
    alamat : req.body.alamat,
    rekening : req.body.rekening
  })
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.log(error);
  });
})

//delete
app.delete('/tesapi/:id', (req, res)=>{
  axios.delete(`http://localhost:3000/nasabah/${req.params.id}`, {
    params : req.params.id
  })
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.log(error);
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})