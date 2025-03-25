import Artwork from "@/app/ui/gallery/artwork";
import { fetchArtwork } from "@/app/lib/api";

const Page = async (props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;
    const id = Number(params.id);
    const artwork = await fetchArtwork(id)


    return (
        <Artwork artwork={artwork} />
    );
}

export default Page;