const express = require('express')

const router = express.Router()

router.use(express.json())

const unit = ['RX-78-2', 'Lunamarias-Gunner','Build-Strike', 'Unicorn-Gundam', 'Build-Strike-Cosmos' ]

router.get('/', (req,res) => {
  setTimeout(() => {
    res.json(unit)
  }, 2500)
})



module.exports = router