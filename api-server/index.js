const express = require('express')

const app = new express()
const port = 3000
// const greeting = {message: "Hello Node"}

app.get('/number/max', (req, res) => {
    const num1 = parseFloat(req.query.num1)
    const num2 = parseFloat(req.query.num2)

    const a = require('../util')

    const maxNumber = a.maxNumber(num1,num2)

    res.json(maxNumber)
})

app.get('/numbers/avg', (req, res) => {
    // const num = req.query
    const num = req.query.num ? req.query.num.split(',').map(Number) : [];

    console.log(num)
    const h = require('../util')

    const averageArr = h.average(num)

    console.log(averageArr)
    res.json(averageArr)


})

app.get('/number/min', (req, res) => {

    const num1 = parseFloat(req.query.num1)
    const num2 = parseFloat(req.query.num2)

    const f = require('../util')

    const minNumber = f.minNumber(num1, num2)

    // if (isNaN(num1) || isNaN(num2)) {
    //     console.log('this is not a number enter a correct number')
    //     res.json("both values must be numbers")
    // } else {
    //     res.json({min : num1 < num2 ? num1 : num2})
    // }

    // res.json(greeting)
    // res.json(Math.min(num1, num2))
    res.json(minNumber)
   
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})