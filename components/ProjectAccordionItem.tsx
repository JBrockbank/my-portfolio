// app/components/ProjectAccordion.tsx - Updated with compact text sizing
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Language = { name: string; percent: number; color: string };

type ProjectCardProps = {
  title: string;
  languages: Language[];
  summary: string;
  details: string;
  wip?: string;
  tech: string;
  codeUrl?: string;
  liveUrl?: string;
  galleryUrl?: string;
  expanded?: boolean;
};

export function ProjectAccordionItem({
  title,
  languages,
  summary,
  details,
  wip,
  tech,
  codeUrl,
  liveUrl,
  galleryUrl,
  expanded = false,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(expanded);
  const contentRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      heightRef.current = contentRef.current.scrollHeight;
    }
  }, [title, languages, summary, details, wip]);

  return (
    <section className="border border-slate-800 rounded-xl bg-slate-900/60 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-2xl hover:border-indigo-400/70 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 pr-12 relative group hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        aria-expanded={isOpen}
        aria-controls={`${title.replace(/\s+/g, "-").toLowerCase()}-content`}
      >
        <h3 className="text-xl font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <div
          className={`absolute top-6 right-6 w-7 h-7 rounded-lg bg-slate-800/50 group-hover:bg-indigo-500/20 transition-all duration-200 flex items-center justify-center shadow-lg ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <div
        ref={contentRef}
        id={`${title.replace(/\s+/g, "-").toLowerCase()}-content`}
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-[2000px] opacity-100 p-6 pt-0" : "max-h-0 opacity-0 p-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <p></p>
            <p className="text-lg text-slate-00 leading-relaxed">{summary}</p>
            <p>Details:</p>
            <p className="text-sm text-slate-300 leading-relaxed">{details}</p>
            {wip && <p className="text-sm text-slate-400 italic">{wip}</p>}
          </div>

          <p className="text-xs uppercase tracking-widest text-slate-500 font-mono bg-slate-800/50 px-3 py-1.5 rounded-full inline-block border border-slate-700/50">
            {tech}
          </p>

          <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-700/50">
            {codeUrl && (
              <Link
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-all font-semibold text-sm py-2.5 px-4 border-2 border-indigo-400/40 bg-indigo-500/10 rounded-xl hover:bg-indigo-500/20 hover:border-indigo-400/70 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
              >
                <span>View code</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            )}

            {galleryUrl && (
              <Link
                href={galleryUrl}
                target="_self" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-all font-semibold text-sm py-2.5 px-4 border-2 border-pink-400/40 bg-pink-500/10 rounded-xl hover:bg-pink-500/20 hover:border-pink-400/70 hover:shadow-lg hover:shadow-pink-500/25 hover:-translate-y-0.5"
              >
                <span>View gallery</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4-4 4 4m0 0l4-4 4 4M4 8h16"
                  />
                </svg>
              </Link>
            )}

            {/* {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-all font-semibold text-sm py-2.5 px-4 border-2 border-emerald-400/40 bg-emerald-500/10 rounded-xl hover:bg-emerald-500/20 hover:border-emerald-400/70 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
              >
                <span>Live demo</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
}
