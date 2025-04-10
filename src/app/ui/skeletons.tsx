// Loading animation
export function CardSkeleton() {
  return (
    <div
      className={`animate-pulse relative overflow-hidden rounded-xl p-2 w-80`}
    >
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-60 w-80 rounded-md bg-gray-200" />
      </div>
      <div className="flex flex-col px-4 pb-8 gap-4">
        <div className="h-5 w-40 rounded-md bg-gray-200" />
        <div className="h-5 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 mx-auto">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}

export function CardWithDetails() {
  return (
    <div
      className={`animate-pulse relative overflow-hidden rounded-xlp-2 w-96`}
    >
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-96 w-80 rounded-md bg-gray-200" />
      </div>
      <div className="flex flex-col px-4 pb-8 gap-4">
        <div className="h-5 w-40 rounded-md bg-gray-200" />
        <div className="h-5 w-16 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="h-5 w-full rounded-md bg-gray-200 text-sm font-medium" />
        <div className="h-5 w-full rounded-md bg-gray-200 text-sm font-medium" />
        <div className="h-5 w-full rounded-md bg-gray-200 text-sm font-medium" />
      </div>
    </div>
  );
}

export function GallerySkeleton() {
  return (
    <>
      <div
        className={`animate-pulse relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </>
  );
}

export function ArtworkSkeleton() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-10">
      <div
        className={`animate-pulse relative mb-4 h-48 w-full max-w-md overflow-hidden rounded-lg bg-gray-100`}
      />
      <div className="flex flex-col items-start gap-2">
        <div className={`h-6 w-1/2 rounded-md bg-gray-100`} />
        <div className={`h-4 w-1/3 rounded-md bg-gray-100`} />
        <div className={`h-4 w-full rounded-md bg-gray-100`} />
      </div>
    </div>
  );
}