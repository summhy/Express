//https://codeforgeek.com/render-html-file-expressjs/
const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();
const json = require("./datos.json");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1 style='color:red'>Hola Mundo!!!!</h1>");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).send("<h1 style='color:red'>Método POST</h1>");
});

app.put("/", (req, res) => {
  // console.log(req);
  res.send("<h1 style='color:red'>Método PUT</h1>");
});

app.get("/Contacto", (req, res) => {
  res.json(json);
});

app.get("/Contacto/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.send(nombre);
});

app.get("/sendFile", (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
});

app.listen(3000, () => {
  console.log("Levantado puerto 3000");
});
