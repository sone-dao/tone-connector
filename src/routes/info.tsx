import express from 'express'
import config from '../config.json'

export const infoRouter = (): express.Router => {
    const router = express.Router()

    router.get('/', (_, res) => res.status(200).json({ config }))

    return router
}

export default infoRouter