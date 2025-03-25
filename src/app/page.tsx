"use client";
import MatrixBackground from "./ui/matrix-background";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-7xl h-screen flex flex-col justify-center items-center">
        {/* Background animation */}
        <MatrixBackground text="Art Vista" fontSize={20} />
        <div className="p-10 mb-4 bg-violet-100/30 rounded-lg shadow-md animate-fadeIn">
          <h1 className="font-bold">Art Vista</h1>
        </div>
        <div className="text-white">
          <Link
            href="/gallery"
            className="rounded-md bg-violet-600 px-20 py-2 text-sm text-white transition-colors hover:bg-violet-500 no-underline"
          >
            Enter
          </Link>
        </div>
      </div>
    </main >
  );
}
