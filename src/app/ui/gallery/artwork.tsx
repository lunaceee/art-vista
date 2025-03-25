'use client';

import React, { useState } from 'react';
import NotFound from "@/app/gallery/(overview)/not-found";
import Image from "next/image";
import parse from 'html-react-parser';
import type { Artwork } from "@/app/lib/definitions";


const Artwork = ({ artwork }: {
    artwork: Artwork
}) => {
    const source = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`

    const [imgSrc, setImgSrc] = useState(source);

    if (!artwork) {
        return <NotFound />
    }

    return (
        <div className="h-screen p-10 bg-zinc-50">
            <section aria-labelledby="artwork-heading">
                <h2 id="artwork-heading" className="sr-only">
                    Artwork
                </h2>
            </section>
            <section aria-labelledby="artwork-content">
                <div className="flex flex-col items-center pb-20">
                    <Image
                        src={imgSrc}
                        alt={artwork.title}
                        width="843"
                        height="843"
                        className="w-full max-w-md rounded-lg shadow-xl"
                        onError={() => setImgSrc("/placeholder.svg")}

                    />
                    <h3 className="mt-6 font-bold px-2 md:px-8 w-auto md:max-w-128">{artwork.title}</h3>
                    <dl className="flex flex-col items-start mt-4 w-auto md:w-xl px-2 md:px-8">
                        <div className="mt-2 flex items-center gap-2">
                            <dt className="text-base font-bold">Artist:</dt>
                            <dd className="text-base text-zinc-600">{artwork.artist_title || "Unknown"}</dd>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                            <dt className="text-base font-bold">Place of origin:</dt>
                            <dd className="text-base text-zinc-600">{artwork.place_of_origin || 'Unknown'}</dd>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                            <dt className="text-base font-bold">Material:</dt>
                            <dd className="text-base text-zinc-600">{artwork.artwork_type_title || 'Unknown'}</dd>
                        </div>
                        {
                            (artwork.description || artwork.short_description) && <div className="mt-2 flex flex-col items-baseline gap-2">
                                <dt className="text-base font-bold">Details:</dt>
                                <dd className="text-base text-zinc-600">{parse(artwork.description || '') || parse(artwork.short_description || '')}</dd>
                            </div>
                        }
                    </dl>
                </div>
            </section>
        </div>
    )
}

export default Artwork;
