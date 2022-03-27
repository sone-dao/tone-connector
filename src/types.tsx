export type ServiceInfo = {
    name: string
    platforms: string[]
    desc?: string
    image?: string
    wallet?: string
}

export type SearchResult = {
    id: string
    displayName?: string
    displayImage?: string
}

export type Artist = {
    id: string // Unique identifier of the artist on the platform
    name: string // Name for the artist
    releases: string[] // A string array containing platform unique identifiers to releases that fall under this artist
    image?: string // Path to an image of this artist
    images?: string[] // A string array containing paths to images of this artist
    songs?: string[] // A string array containing platform unique identifiers to songs that fall under this artist
    location?: string // Name of the artist's location
    bio?: string // A written biography for the artist
    members?: string[] // A string array containing the full names of the members
    platformName?: string // The display name of the platform currently being used.
    platformUrl?: string // A URL to the artist's page/profile on the platform
}

export type Release = {
    id: string
    name: string
    songs: string[]
    cover?: string
    performers?: string
    producers?: string
    engineers?: string

}

type Stream = {
    path: string
}

export type Song = {
    id: string
    title: string
    artists: string[]
    streams: Stream[]
    releases?: []
    composers?: string
    engineers?: string
    producers?: string
    desc?: string
    trackNumber?: string
    genre?: []
    tags?: []
    bpm?: number
    key?: string
    license?: string
    isrc?: string
    locationCreated?: string
    image?: string
    name?: string
    externalUrl?: string
    animationUrl?: string
}