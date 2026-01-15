import { ProjectAccordionItem } from "@/components/ProjectAccordionItem";

export default function ProjectsPage() {
  return (
    <main className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          Projects
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-300 rounded-full mx-auto" />
      </header>
      <p className="text-sm text-slate-300 max-w-2xl">
        Click to expand projects. Combination of personal and school projects. Galleries showcase more images where available.
      </p>

      <section className="space-y-4">
        <ProjectAccordionItem
          title="CFB 🏈"
          languages={[
            { name: "Typescript", percent: 71, color: "#ff7b72" },
            { name: "C#", percent: 21, color: "#f37626" },
            { name: "Javascript", percent: 7, color: "#89e051" },
            { name: "CSS", percent: 0.3, color: "#384d54" },
          ]}
          summary="Personal Project: A web application that combines a season-long college football imperialism game with a rich data hub for fans."
          details="A custom hub for college football fans featuring a custom imperialism game with persistent leagues, a scoreboard dashboard showing all games and live scores, team history pages, and a map of all FBS teams. Built with a Next.js frontend, C# ASP.NET backend, CFB Data API for the data, and MongoDB database."
          wip="Work in progress: Automated pipeline for updating imperialism data weekly during the season. Adding user profiles and social features. Improving mobile responsiveness. Live hosting and deployment."
          tech="Next.js · React · MongoDB · ASP.NET"
          codeUrl="https://github.com/jbrockbank/cfb"
          galleryUrl="/projects/cfb/gallery"
        />

        <ProjectAccordionItem
          title="Chess Project ♟️"
          languages={[
            { name: "Java", percent: 97, color: "#a8b9cc" },
            { name: "HTML", percent: 1.6, color: "#8957a8" },
            { name: "Other", percent: 1.2, color: "#384d54" },
          ]}
          summary="School project: A CLI-based chess server and client application."
          details="CLI-based chess platform with a networked client/server architecture supporting multiple concurrent games and authenticated player sessions. The server exposes HTTP and WebSocket endpoints, persists users and games in a MySQL database, and supports reconnecting to in-progress matches. Designed to highlight clean software architecture, robust serialization, database persistence, unit testing, and secure login flows."
          tech="Java · HTTP · WebSocket · MySQL · JUnit"
          codeUrl="https://github.com/jbrockbank/chess"
          wip="Work in progress: Implementing a web-based frontend using React. Adding AI opponent. "
          galleryUrl="/projects/chess/gallery"
        />

        <ProjectAccordionItem
          title="Tweeter - Social Media Platform 🐦"
          languages={[
            { name: "TypeScript", percent: 95, color: "#a8b9cc" },
            { name: "CSS", percent: 2, color: "#8957a8" },
          ]}
          summary="School Project: Full-stack social media platform rebuilt from educational template."
          details="Refactored monolithic starter code into production-ready social platform with real user auth, dynamic feeds, friend networks, and full post CRUD. Consolidated multiple similar components into a few base components using render props and custom hooks, and eliminating all code duplication. Added infinite scroll, proper error handling, loading states, and responsive design."
          tech="React · TypeScript · Custom Hooks · Render Props"
          codeUrl="https://github.com/jbrockbank/tweeter"
        />

      </section>
    </main>
  );
}
