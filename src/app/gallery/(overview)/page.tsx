import Artworks from "@/app/ui/gallery/artworks";
import { fetchArtworks } from "@/app/lib/api";

export default async function Gallery() {
    const initialArtworks = await fetchArtworks(50, 0);
    return (
        <main className="mx-auto max-w-7xl">
            <Artworks initialArtworks={initialArtworks} />
        </main>
    );
}
