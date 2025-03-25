'use client';

import Artworks from "@/app/ui/gallery/artworks";
import { Suspense } from "react";

export default function Gallery() {
    return (
        <main className="mx-auto max-w-7xl">
            <Suspense fallback={<div>AWWWWWWW...</div>}>
                <Artworks />
            </Suspense>
        </main >
    );
}
