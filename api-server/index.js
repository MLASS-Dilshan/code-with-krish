const express = require("express");

const app = new express();
const port = 3000;
// const greeting = {message: "Hello Node"}

// Maximum number
app.get("/number/max", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  const a = require("../util");

  const maxNumber = a.maxNumber(num1, num2);

  res.json(maxNumber);
});

// Minimum Number
app.get("/number/min", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  const f = require("../util");

  const minNumber = f.minNumber(num1, num2);

  res.json(minNumber);
});

// Average
app.get("/numbers/avg", (req, res) => {
  // const num = req.query
  const num = req.query.num ? req.query.num.split(",").map(Number) : [];

  console.log(num);
  const h = require("../util");

  const averageArr = h.average(num);

  console.log(averageArr);
  res.json(averageArr);
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

// Ascending order

app.get("/number/sort/asc", (req, res) => {
  const num = req.query.num ? req.query.num.split(",").map(Number) : [];

  const b = require("../util");

  const sortedAscending = b.ascendingOrder(num);

  console.log(b.ascendingOrder(num));
  res.json(sortedAscending);
});

// descending order

app.get("/number/sort/des", (req, res) => {
  const num = req.query.num ? req.query.num.split(",").map(Number) : [];

  const b = require("../util");

  const sortedDescending = b.descendingOrder(num);

  console.log(sortedDescending);
  res.json(sortedDescending);
});
