'use server';

import { ArtworksResponseSchema, ArtworkResponseSchema } from "@/app/lib/definitions";

export const fetchArtworks = async (limit: number) => {
    // Make a GET request to the API endpoint
    const res = await fetch(`https://api.artic.edu/api/v1/artworks?limit=${limit}`);
    const data = await res.json();

    // Validate the response with Zod. This will throw if the data shape is unexpected.
    const parsedData = ArtworksResponseSchema.parse(data);

    return {
        artworks: parsedData.data,
    };
};


export const fetchArtwork = async (id: number) => {
    // Make a GET request to the API endpoint
    const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
    const data = await res.json();

    // Validate the response with Zod. This will throw if the data shape is unexpected.
    const parsedData = ArtworkResponseSchema.parse(data);

    return parsedData.data
}