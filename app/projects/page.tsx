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
          Click to expand projects. School, systems programming, and personal projects from CS coursework.
        </p>

      <section className="space-y-4">
        <ProjectAccordionItem
          title="CFB Analytics Toolkit"
          languages={[
            { name: "Python", percent: 68, color: "#ff7b72" },
            { name: "Jupyter Notebook", percent: 22, color: "#f37626" },
            { name: "Shell", percent: 6, color: "#89e051" },
            { name: "Dockerfile", percent: 4, color: "#384d54" },
          ]}
          summary="Command-line toolkit for college football drive analysis."
          details="Ingests NCAA play-by-play CSV → validates schemas → computes EPA/drive, success rate, explosive plays → SQLite export."
          tech="Python · Pandas · SQLite · GitHub Actions"
          codeUrl="https://github.com/jbrockbank/cfb"
        />

        <ProjectAccordionItem
          title="TCP Chat Server"
          languages={[
            { name: "C", percent: 92, color: "#a8b9cc" },
            { name: "Makefile", percent: 5, color: "#8957a8" },
            { name: "Dockerfile", percent: 3, color: "#384d54" },
          ]}
          summary="Concurrent multi-client chat server (CS 324)."
          details="POSIX sockets + epoll event loop, channels, basic auth, handles 20+ clients with clean shutdowns."
          tech="C · POSIX sockets · epoll · Docker"
          codeUrl="https://github.com/jbrockbank/tcp-chat"
        />

        <ProjectAccordionItem
          title="Developer Portfolio"
          languages={[
            { name: "TypeScript", percent: 65, color: "#3178c6" },
            { name: "JavaScript", percent: 20, color: "#f1e05a" },
            { name: "CSS", percent: 10, color: "#563d7c" },
            { name: "JSON", percent: 5, color: "#5d90cd" },
          ]}
          summary="This portfolio site you're viewing."
          details="Next.js 15 app router + Tailwind CSS, responsive design, semantic HTML, optimized for performance."
          tech="Next.js · TypeScript · Tailwind · Vercel"
          codeUrl="https://github.com/jbrockbank/portfolio"
          liveUrl="https://your-portfolio.com"
        />

        <ProjectAccordionItem
          title="Concurrent Job Scheduler"
          languages={[
            { name: "C", percent: 95, color: "#a8b9cc" },
            { name: "Makefile", percent: 5, color: "#8957a8" },
          ]}
          summary="Unix-style background job manager (CS 324)."
          details="pthreads concurrency, process groups, SIGCHLD handling, priority queues, TUI monitor interface."
          tech="C · pthreads · Signals · Unix APIs"
          codeUrl="https://github.com/jbrockbank/job-scheduler"
        />

        <ProjectAccordionItem
          title="Network Packet Sniffer"
          languages={[
            { name: "C", percent: 88, color: "#a8b9cc" },
            { name: "Python", percent: 8, color: "#ff7b72" },
            { name: "Makefile", percent: 4, color: "#8957a8" },
          ]}
          summary="libpcap packet analyzer with protocol dissection."
          details="Live capture + offline pcap parsing, TCP/UDP/ICMP dissection, real-time stats dashboard."
          tech="C · libpcap · pthreads · ncurses"
          codeUrl="https://github.com/jbrockbank/packet-sniffer"
        />

        <ProjectAccordionItem
          title="Task Manager API"
          languages={[
            { name: "TypeScript", percent: 55, color: "#3178c6" },
            { name: "SQL", percent: 25, color: "#f1e05a" },
            { name: "JavaScript", percent: 15, color: "#563d7c" },
            { name: "Dockerfile", percent: 5, color: "#384d54" },
          ]}
          summary="REST API + React dashboard for task management."
          details="PostgreSQL + Express server, JWT auth, React frontend, Docker compose deployment."
          tech="Next.js · PostgreSQL · Prisma · Docker"
          codeUrl="https://github.com/jbrockbank/task-manager"
          liveUrl="https://tasks.jordanbrockbank.com"
        />
      </section>
    </main>
  );
}
