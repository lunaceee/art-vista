import { CardsSkeleton } from "@/app/ui/skeletons";

const Loading = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <CardsSkeleton />
        </div>
    );
};

export default Loading;