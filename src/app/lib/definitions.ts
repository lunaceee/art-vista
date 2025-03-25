import { z } from 'zod';

export const ArtworkSchema = z.object({
    id: z.number(),
    title: z.string(),
    alt_titles: z.string().array().nullable(),
    place_of_origin: z.string().nullable(),
    description: z.string().nullable(),
    short_description: z.string().nullable(),
    colorfulness: z.number().nullable(),
    color: z.object({
        h: z.number(),
        l: z.number(),
        s: z.number(),
    }).nullable(),
    artwork_type_title: z.string().nullable(),
    artwork_type_id: z.number().nullable(),
    artist_id: z.number().nullable(),
    artist_title: z.string().nullable(),
    image_id: z.string().nullable(),
});

export type Artwork = z.infer<typeof ArtworkSchema>;

export const ArtworkResponseSchema = z.object({
    data: ArtworkSchema,
});

export const ArtworksResponseSchema = z.object({
    pagination: z.object({
        total: z.number(),
        limit: z.number(),
        offset: z.number(),
        total_pages: z.number(),
        current_page: z.number(),
        // prev_url: z.string().nullable(),
        next_url: z.string(),
    }),
    data: z.array(ArtworkSchema),
});

