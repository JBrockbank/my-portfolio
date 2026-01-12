export default function ContactPage() {
  return (
    <main className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-12">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          Contact
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-300 rounded-full mx-auto" />
      </header>
      <p className="text-sm text-slate-300">
        The best ways to reach me for roles, collaborations, or questions.
      </p>
      <ul className="space-y-2 text-sm text-slate-300">
        <li>Email: <a className="text-indigo-300 hover:text-indigo-200" href="brockbankjordan@gmail.com">brockbankjordan@gmail.com</a></li>
        <li>GitHub: <a className="text-indigo-300 hover:text-indigo-200" href="https://github.com/JBrockbank">github.com/JBrockbank</a></li>
        <li>LinkedIn: <a className="text-indigo-300 hover:text-indigo-200" href="https://www.linkedin.com/in/jordan-brockbank-399344354/">linkedin.com/in/jordan-brockbank-399344354</a></li>
      </ul>
    </main>
  );
}
