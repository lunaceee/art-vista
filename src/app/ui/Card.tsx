import React from 'react';
import Image from 'next/image';

type CardProps = {
    source: string;
    title: string;
    artist?: string;
    width?: number;
    height?: number;
}

const Card: React.FC<CardProps> = ({ source, title, artist, width = 800, height = 540 }) => {
    return (
        <>
            {/* <div className="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"> */}
            <div className="break-inside-avoid mb-8 group">
                <Image
                    alt={`Image for ${title}`}
                    src={source}
                    layout="responsive"
                    width={width} // Replace with appropriate width
                    height={height} // Replace with appropriate height
                    className="object-cover group-hover:opacity-75 h-auto max-w-full rounded-lg cursor-pointer"
                />
                <button type="button" className="absolute inset-0 focus:outline-hidden">
                    <span className="sr-only">View details for {title}</span>
                </button>
            </div>
            {/* </div> */}
            <h3 className="mt-2">{title}</h3>
            {
                artist && <p>{artist}</p>
            }
        </>
    );
};

export default Card;