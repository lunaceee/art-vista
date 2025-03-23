
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Art Vista</h1>

          <section aria-labelledby="artworks-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Artworks
            </h2>

            {/* Filter component */}
          </section>
        </div>

        {/* Artwork grid placeholder */}
        <div className="lg:col-span-3">
          {/* Here you can render your artwork items based on the selected filters */}
        </div>
      </main>
    </div>
  );
}
