import Artwork from "@/app/ui/gallery/artwork";

const Page = async (props: { params: Promise<{ id: string }> }) => {
    const params = await props.params;
    const id = Number(params.id);

    return (
        <Artwork id={id} />
    );
}

export default Page;