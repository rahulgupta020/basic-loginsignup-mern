import http from 'http'
import express from 'express'
import './services/mongoose/index'
import router from './api/mernbasic/index'
// import cors from "cors"
const cors = require("cors")

const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 9002
const ip = process.env.IP || '0.0.0.0'
const env = process.env.NODE_ENV || 'development'

app.use(express.json())
app.use(cors())
app.use(router)

setImmediate(() => {
    server.listen(port, ip, () => {
      console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
    })
  })