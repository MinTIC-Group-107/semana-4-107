const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).send('Api categoria funcionando')
})

module.exports = router