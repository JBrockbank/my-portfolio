export default function AboutPage() {
  return (
    <main className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-100">About Me</h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-200">Personal Life</h2>
        <p className="text-sm text-slate-300">
          I have been married 3 years to my lovely wife and best friend, Morgan, who currently
          works at a periodontal office. I come from a family of 6 siblings, who
          all currently live in Utah.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-200">
          Education & Work
        </h2>
        <p className="text-sm text-slate-300">
          I am earning my Bachelor's in Computer Science at BYU (graduating
          2026). Professionally, I spent 2 years at Life Sciences College IT:
          first at the help desk troubleshooting hardware/software, then on the
          Web Development team building/maintaining apps with Next.js, Typescript, React,
          and C# with PostgreSQL and MySQL databases. Shortly after being hired, I was promoted
          to team lead. As such, I oversee student devs, manag projects, and
          mentor on deadlines/quality—building my leadership, collaboration, and communication
          skills.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-200">
          Interests & Hobbies
        </h2>
        <p className="text-sm text-slate-300">
          I enjoy playing board games, reading, and watching movies together.
          Recently, I've been enjoying the Brandon Sanderson Cosmere book
          universe and the Wheel of Time books. I also love both playing and
          watching all kind of sports. I'm a big Utah Jazz fan and enjoy going
          to and watching games when I can. I also like playing basketball,
          golf, and pickleball. On top of that, I enjoy being in the outdoors to
          balance out the office work I do. Recently, I've been interested in
          combining my love for board games with my programming skills and hope
          to create some digital versions of my own games in the future.
        </p>
      </section>
    </main>
  );
}
