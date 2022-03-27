import express from 'express'
import { Release } from "../types"

export const releaseRouter = (): express.Router => {
    const router = express.Router()

    router.get('/:id', (req, res) => {
        const releaseId = req.params.id

        const result: Release = {
            id: releaseId,
            name: '',
            songs: ['']
        }

        return res.status(200).json({ result })
    })

    return router
}

export default releaseRouter