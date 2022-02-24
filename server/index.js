const express = require('express')
const path = require('path')

// include and initialize the rollbar library with your access token
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: '9efe4c2a22a8498d9f9503e5bd6f0d60',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Listening on port ${port}.`))