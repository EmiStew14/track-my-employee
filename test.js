const express = require('express');
const router = express.Router();
const db = require('./db/connection');
const cTable = require('console.table');

const showTable = cTable.getTable([
    {
      name: 'foo',
      age: 10
    }, {
      name: 'bar',
      age: 20
    }
  ]);
  
  console.log(showTable);
  