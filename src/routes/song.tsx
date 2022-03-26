import express from 'express'
import { Song } from "../types"

export const songRouter = (): express.Router => {
    const router = express.Router()

    router.get('/:id', (req, res) => {
        const artistId = req.params.id

        const result: Song = {
            id: artistId,
            title: '',
            artists: [''],
            streams: [{ path: '' }]
        }

        return res.status(200).json({ result })
    })

    return router
}

export default songRouter