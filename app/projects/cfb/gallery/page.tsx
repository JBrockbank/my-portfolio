"use client";
import ProjectGallery from "@/components/ProjectGallery";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/cfb/home.png", alt: "Home screen" },
  { src: "/cfb/games.png", alt: "Games view" },
  { src: "/cfb/imperialism.png", alt: "Custom Imperialsim Game" },
  { src: "/cfb/conferences.png", alt: "Conferences page" },
  { src: "/cfb/rankings.png", alt: "Rankings page" },
  { src: "/cfb/map.png", alt: "FBS Map page" },
];

export default function CFBGallery() {
  return <ProjectGallery images={images} title="CFB App Gallery" />;
}
