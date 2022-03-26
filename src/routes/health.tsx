import express from 'express'

export const healthRouter = (): express.Router => {
    const router = express.Router()

    router.get('/', (_, res) => res.status(200).json({ status: "200" }))

    return router
}

export default healthRouter