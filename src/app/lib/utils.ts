import { Artwork, ArtworkFilterData } from './definitions'

// Define the API response shape.
type ArtworksPayload = {
    data: Artwork[]
    // other properties like pagination and config can be included if needed
}

export function buildFilterData(payload: ArtworksPayload): ArtworkFilterData {
    const artists = new Set<string>()
    const colors = new Set<string>()
    const placesOfOrigin = new Set<string>()
    const artworkTypes = new Set<string>()

    payload.data.forEach((artwork) => {
        if (artwork.artist_title) {
            artists.add(artwork.artist_title)
        }
        if (artwork.color) {
            // Convert the color object to a simple HSL string.
            const { h, l, s } = artwork.color
            colors.add(`hsl(${h}, ${s}%, ${l}%)`)
        }
        if (artwork.place_of_origin) {
            placesOfOrigin.add(artwork.place_of_origin)
        }
        if (artwork.artwork_type_title) {
            artworkTypes.add(artwork.artwork_type_title)
        }
    })

    return {
        artists: Array.from(artists),
        colors: Array.from(colors),
        placesOfOrigin: Array.from(placesOfOrigin),
        artworkTypes: Array.from(artworkTypes),
    }
}