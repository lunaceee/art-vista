'use client';

import { useEffect } from 'react';
import Button from '@/app/ui/button';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="h-screen flex flex-col items-center justify-center gap-4">
            <ExclamationTriangleIcon className="w-10 text-zinc-400" />
            <h2 className="text-center">Something went wrong!</h2>
            <p className="text-center">
                {error.message}
            </p>
            <Button onClick={reset}>
                Try again
            </Button>
        </main>
    );
}