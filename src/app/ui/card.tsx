'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type CardProps = {
    source: string;
    title: string;
    artist?: string;
    width?: number;
    height?: number;
};

const Card: React.FC<CardProps> = ({ source, title, artist, width, height }) => {
    const [imgSrc, setImgSrc] = useState(source);

    return (
        <>
            <div className="break-inside-avoid mb-8">
                <Image
                    alt={`Image for ${title}`}
                    src={imgSrc}
                    width={width || 800}
                    height={height || 800}
                    className="object-cover h-auto max-w-full rounded-lg"
                    onError={() => setImgSrc("/placeholder.svg")}

                />
                <button type="button" className="absolute inset-0 focus:outline-hidden">
                    <span className="sr-only">View details for {title}</span>
                </button>
            </div>
            <h3 className="mt-2">{title}</h3>
            {artist && <p>{artist}</p>}
        </>
    );
};

export default Card;
