// import express, { json } from "express";
const express = require('express');
const morgan = require('morgan');

//IMPORTING ROUTES
const projectRoutes = require("./routes/projects");

const app = express();

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

//ROUTES
app.use("/api/projects", projectRoutes);

module.exports = app;
