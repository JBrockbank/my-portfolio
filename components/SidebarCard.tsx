import Link from "next/link";

export function SidebarCard() {
  return (
    <aside className="w-full max-w-sm rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
      <h2 className="text-sm font-semibold text-slate-200">
        What you&apos;ll find here
      </h2>
      <ul className="mt-4 space-y-3 text-sm text-slate-300">
        <li>• Concise write‑ups of selected school and personal projects.</li>
        <li>• Systems and networking work in C, plus full‑stack Next.js apps.</li>
        <li>• Occasional notes on debugging, performance, and tech ethics.</li>
      </ul>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <Link href="/" className="text-indigo-300 hover:text-indigo-200">
          Home
        </Link>
        <span className="text-slate-600">•</span>
        <Link href="/about" className="text-indigo-300 hover:text-indigo-200">
          About
        </Link>
        <span className="text-slate-600">•</span>
        <Link href="/projects" className="text-indigo-300 hover:text-indigo-200">
          Projects
        </Link>
        <span className="text-slate-600">•</span>
        <Link href="/contact" className="text-indigo-300 hover:text-indigo-200">
          Contact
        </Link>
      </div>
    </aside>
  );
}