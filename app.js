const express = require('express')
const api = express()

const port = process.env.PORT || 1928

api.get('/', (req, res) => {
    res.status(200).json({
        message: 'success'
    })
    res.end()
})

api.listen(port, () => {
    console.log('Listening on:', port)
})