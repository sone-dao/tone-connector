import express from 'express'
import config from '../config.json'

export const healthRouter = (): express.Router => {
    const router = express.Router()

    router.get('/', (_, res) => res.status(200).json({ config }))

    return router
}

export default healthRouter