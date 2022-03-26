import express from 'express'
import { SearchResult } from '../types'

export const searchRouter = (): express.Router => {
    const router = express.Router()

    router.get('/', (_, res) => res.status(200).json({ status: "200" }))

    router.get('/artist', (req, res) => {
        const term = req.query.q
        const results: SearchResult[] = []

        res.status(200).json({ results })
    })

    router.get('/release', (req, res) => {
        const term = req.query.q
        const results: SearchResult[] = []

        res.status(200).json({ results })
    })

    router.get('/song', (req, res) => {
        const term = req.query.q
        const results: SearchResult[] = []

        res.status(200).json({ results })
    })

    return router
}

export default searchRouter