"use client";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Lightbox = dynamic(
  () => import("yet-another-react-lightbox"),
  { ssr: false }
);

interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-8 max-w-[960px] mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative aspect-video overflow-hidden rounded-2xl border-2 border-slate-800 hover:border-indigo-400/70 hover:shadow-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-medium text-white bg-black/50 px-2 py-1 rounded-lg">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={images.map((img) => ({
          src: img.src,
          alt: img.alt,
        }))}
        render={{
          slide: ({ slide }) => (
            <img
              src={slide.src}
              alt={slide.alt}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          ),
        }}
      />
    </>
  );
}
