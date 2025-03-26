'use client';

import Card from "@/app/ui/card";
import { fetchArtworks } from "@/app/lib/api";
import { Artwork } from "@/app/lib/definitions";
import { useState, useEffect, useCallback } from "react";
import { useInView } from 'react-intersection-observer'
import Link from "next/link";
import Loading from "@/app/ui/loading";
import { ScrollToTop } from "@/app/lib/utils";
import { notFound } from "next/navigation";


const limit = 50; // Number of artworks to fetch per page

const Artworks = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false); // Local loading state

    if (!artworks) {
        notFound();
    }

    const { ref, inView } = useInView()

    const loadArtworks = useCallback(async () => {
        if (loading) return; // Stop if a request is already in flight
        setLoading(true);
        const { artworks: newArtworks } = await fetchArtworks(limit, offset);
        setArtworks(prev => [...prev, ...newArtworks]);
        setOffset(prev => prev + limit);
        setLoading(false);
    }, [loading, offset]);

    useEffect(() => {
        if (inView) {
            loadArtworks();
        }
    }, [inView, loadArtworks]);

    return <div className="p-4 md:pb-8">
        <header>
            <div className="flex border-b border-gray-200 pt-24 pb-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">Art Vista</h1>
                <div className="">
                    <hr />
                </div>
            </div>
            <p className="pb-8">
                Welcome to Art Vista, your destination for exploring a diverse collection of stunning artworks from talented artists worldwide. Whether you&apos;re an enthusiast, collector, or simply appreciate creativity, our gallery offers curated pieces to suit all tastes. Discover vibrant colors, intricate details, and thought-provoking works that inspire and connect.
            </p>
        </header>
        <section aria-labelledby="artworks-heading" >
            <h2 id="products-heading" className="sr-only">
                Artworks
            </h2>
        </section>
        <section aria-labelledby="artworks-content">
            {loading && artworks.length === 0 ? (
                <Loading />
            ) : (
                <>
                    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {
                            artworks.map((item) => (
                                // the ID from the API is not unique
                                // Using built-in browswer crypto to generate unique keys as an alternative to database UUIDs
                                <li key={crypto.randomUUID()} className="cursor-pointer">
                                    <Link href={`/gallery/${item.id}`}>
                                        <Card
                                            title={item.title}
                                            source={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                                            artist={item.artist_title || 'Unknown'.replace(/'/g, "&apos;")}
                                        />
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div ref={ref} className="text-sm text-center py-4">
                        {artworks.length > 0 && <p>Loading more artworks...</p>}
                    </div>
                </>
            )}
            <ScrollToTop />
        </section>
    </div>
}

export default Artworks;