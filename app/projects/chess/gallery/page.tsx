import ProjectGallery from "@/components/ProjectGallery";

const images = [
  { src: "/chess/list.png", alt: "CLI" },
  { src: "/chess/game.png", alt: "Multiplayer Game" }
];

export default function ChessGallery() {
  return <ProjectGallery images={images} title="Chess Gallery" />;
}
