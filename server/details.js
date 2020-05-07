const express = require('express')

const router = express.Router()

router.use(express.json())

const details = [{id:1, unit: 'RX-78-2', grade:'Real Grade', scale:'1/144', price:'$39.99' },
{id:2, unit: 'Lunamarias-Gunner', grade:'Master Grade', scale: '1/144', price:'$82.00' },
{id:3, unit: 'Build-Strike', grade: 'Master Grade', scale:'1/100', price:'$110.00'},
{id:4, unit: 'Unicorn-Gundam', grade: ' Perfect Grade', scale:'1/60', price:'$449.00'},
{id:5, unit: 'Build-Strike-Cosmos', grade: 'High Grade', scale:'1/144', price:'$49.00'}]


router.get('/:unit', (req, res) => {
  const {unit} = req.params
  setTimeout(() => {
    const detail = details.find(d => d.unit === unit)
    if (detail) {
      res.json(detail)
    } else {
      res.sendStatus(404)
    }
  }, 2000)
})

module.exports = router


