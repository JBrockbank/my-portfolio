import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-10">
      {/* Hero */}
      <section className="space-y-6">
        <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
          Graduating CS student · BYU · 2026
        </p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Hi, I&apos;m <span className="text-indigo-400">Jordan Brockbank</span>
          .
          <br />
          <span className="text-slate-100">I build wep apps and software.</span>
        </h1>

        <p className="text-base text-slate-300 sm:text-lg">
          I am a graduating computer science student at Brigham Young
          University. I am 24 years old and have a passion for building things
          and solving problems through code. My main experience in the workforce
          has been in full-stack web development, but I also enjoy exploring
          other areas of software development.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            View all projects
          </Link>
          <a
            href="/Jordan-Brockbank-Resume.pdf"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Download resume
          </a>
        </div>

        <dl className="mt-4 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
          <div>
            <dt className="font-medium text-slate-200">Focus</dt>
            <dd>Other cool stuff · Like · Full‑stack</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-200">Tools</dt>
            <dd>Add · Tools · Next.js · Here</dd>
          </div>
          <div>
            <dt className="font-medium text-slate-200">Location</dt>
            <dd>Provo, UT</dd>
          </div>
        </dl>
      </section>

      {/* Latest project */}
      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-slate-100">
            Latest project
          </h2>
          <Link
            href="/projects"
            className="text-sm text-indigo-300 hover:text-indigo-200"
          >
            View all projects
          </Link>
        </div>

        <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="text-lg font-semibold text-slate-100">CFB</h3>
          <p className="mt-2 text-sm text-slate-300">Description</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-slate-400">
            What · was · used placeholder
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <Link
              href="https://github.com/jbrockbank/cfb"
              className="text-indigo-300 hover:text-indigo-200"
            >
              View code
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
