import Artwork from "@/app/ui/gallery/artwork";
import { fetchArtwork } from "@/app/lib/api";
import { notFound } from 'next/navigation';


const Page = async (props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;
    const id = Number(params.id);
    const artwork = await fetchArtwork(id)

    if (!artwork) {
        notFound();
    }

    return (
        <Artwork artwork={artwork} />
    );
}

export default Page;