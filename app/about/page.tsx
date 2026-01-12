"use client";

import { useState } from "react";

const sections = [
  {
    id: "personal",
    title: "Personal Life",
    content: `I have been married 3 years to my lovely wife and best friend, Morgan, who currently
    works at a periodontal office. I come from a family of 8, who
    all currently live in Utah.`,
  },
  {
    id: "education",
    title: "Education & Work",
    content: `I am earning my Bachelor's in Computer Science at BYU (graduating
    2026). Professionally, I have spent nearly 3 years at Life Sciences College IT:
    first at the help desk troubleshooting hardware/software, then on the
    Web Development team building/maintaining apps with Next.js, Typescript, React,
    and C# with PostgreSQL and MySQL databases. Shortly after being hired, I was promoted
    to team lead. As such, I oversee student devs, manage projects, and
    mentor new team members. This has helped me build my leadership, collaboration, and communication
    skills.`,
  },
  {
    id: "interests",
    title: "Interests & Hobbies",
    content: `I enjoy playing board games, reading, and watching movies together.
    Recently, I've been enjoying the Brandon Sanderson Cosmere book
    universe and the Wheel of Time books. I also love both playing and
    watching all kind of sports. I'm a big Utah Jazz fan and enjoy going
    to and watching games when I can. I also like playing basketball,
    golf, and pickleball. On top of that, I enjoy being in the outdoors to
    balance out the office work I do. Recently, I've been interested in
    combining my love for board games with my programming skills and hope
    to create some digital versions of my own games in the future.`,
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <main className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          About Me
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-300 rounded-full mx-auto" />
      </header>

      <section className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-1">
        <nav className="flex flex-wrap gap-1 -m-1">
          {sections.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`${
                activeTab === id
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              } px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-100`}
            >
              {title}
            </button>
          ))}
        </nav>

        <div className="mt-8 p-8 rounded-xl bg-slate-900/40 border border-slate-700/50">
          <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
            <div className="h-px bg-gradient-to-r from-slate-600/50 to-transparent" />
            <p className="text-sm text-slate-300 leading-relaxed">
              {sections.find((s) => s.id === activeTab)?.content}
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { label: "Years Married", value: 3 },
          { label: "CS Graduation", value: "2026" },
          { label: "Dev Work Experience", value: "1 year" },
        ].map(({ label, value }, i) => (
          <div
            key={label}
            className="group p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-400/50 hover:bg-slate-900/80 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="text-center text-2xl font-black text-slate-100 group-hover:text-indigo-400 transition-colors">
              {value}
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-mono mt-1 text-center">
              {label}
            </div>
          </div>
        ))}
      </section>

      <section className="relative">
        <h2 className="text-xl font-semibold text-slate-200 mb-8 text-center">
          Work History
        </h2>
        <div className="space-y-8 max-w-2xl mx-auto">
          {[
            {
              year: "25",
              title: "Team Lead Promotion",
              desc: "Lead web dev team at BYU Life Sciences IT",
            },
            {
              year: "25",
              title: "Web Development",
              desc: "Built Next.js/React apps with PostgreSQL",
            },
            {
              year: "23",
              title: "Help Desk",
              desc: "IT Support - Hardware/Software",
            },
          ].map((milestone, i) => (
            <div
              key={milestone.year}
              className="group flex items-center space-x-6 hover:bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50 hover:border-indigo-400/50 transition-all duration-300 hover:translate-x-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border-2 border-indigo-400/30 shadow-lg group-hover:scale-110 transition-all">
                <span className="text-indigo-400 font-bold text-lg">
                  {milestone.year}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-slate-200 group-hover:text-indigo-300">
                  {milestone.title}
                </h4>
                <p className="text-sm text-slate-400 mt-1">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
