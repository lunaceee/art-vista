export type GalleryPayload = {
    pagination: Pagination;
    data: Artwork[];
};

export type Pagination = {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
};

export type Artwork = {
    id: number;
    title: string;
    alt_titles: string | null;
    place_of_origin: string;
    description: string | null;
    short_description: string | null;
    colorfulness: number | null;
    color: ColorData | null;
    artwork_type_title: string;
    artwork_type_id: number;
    artist_id: number;
    artist_title: string;
    image_id: string | null;
};

export type ColorData = {
    h: number;
    l: number;
    s: number;
};

