import express from 'express'

const api = express()
const port = process.env.PORT || 3001

api.get('/', (req: express.Request, res: express.Response) => {
    res.json({
        message: "It work's!"
    })
    res.end()
})

api.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})