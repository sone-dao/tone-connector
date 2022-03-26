import { json } from 'body-parser'
import express from 'express'
import { Artist } from "../types"

export const artistRouter = (): express.Router => {
    const router = express.Router()

    router.get('/:id', (req, res) => {
        const artistId = req.params.id

        const result: Artist = {
            id: artistId,
            name: '',
            releases: ['']
            //songs: ['']
            //location?: ''
            //bio: ''
            //members: ['']
            //platformName: ''
            //platformUrl: ''
        }

        return res.status(200).json({ result })
    })

    return router
}

export default artistRouter