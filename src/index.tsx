import 'dotenv/config'
import express from 'express'

import healthRouter from './routes/health'
import infoRouter from './routes/info'
import searchRouter from './routes/search'
import artistRouter from './routes/artist'
import releaseRouter from './routes/release'
import songRouter from './routes/song'

const app = express()
const port = process.env.PORT || 8080

app.use('/', healthRouter())
app.use('/info', infoRouter())
app.use('/search', searchRouter())
app.use('/artist', artistRouter())
app.use('/release', releaseRouter())
app.use('/song', songRouter())

app.listen(port, () => {
	console.log(`Tone Connector running on ${port}`)
})