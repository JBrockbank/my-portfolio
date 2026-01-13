"use client";

import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type ProjectGalleryProps = {
  title: string;
  images: GalleryImage[];
};

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="max-w-6xl mx-auto px-6 py-16"> 
        <h1 className="text-4xl font-bold mb-12 text-center">
          {title} Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] overflow-hidden rounded-2xl border-2 border-slate-800 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
