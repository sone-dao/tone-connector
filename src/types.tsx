export type ServiceInfo = {
    name: string // A unique name for your service for the Tone protocol. (Max: 80 char, no spaces or special characters)
    display: string // The display name for your service
    platforms: string[] // String array of platform unique ids from the Tone metadata database (https://platforms.dev.tone.audio)
    desc?: string // Description of the service
    image?: string // Accessible image url for the service
    wallet?: string // For tips
}

export type SearchResult = {
    id: string // Unique identifier of the result on the platform
    displayName?: string // Display name for the result
    displayImage?: string // Display image for the result
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
    id: string // Unique identifier of the release on the platform
    name: string // Name for the release
    songs: string[] // A string array containing platform unique identifiers to the songs that fall under this release
    cover?: string // Path to an image for this release
    performers?: string // Display text for the performers of this release
    producers?: string // Display text for the producers of this release
    engineers?: string // display text for the engineers of this release

}

type Stream = {
    path: string // URL path to the file to stream, to be expanded on to include other metadata
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