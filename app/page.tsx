export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-slate-50">
      <div className="max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/60 p-10 shadow-2xl shadow-slate-950/40">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-400">Nexora</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Build smarter with a modern stack.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-300">
          Next.js 15, React 19, TypeScript, Tailwind CSS, Prisma, and PostgreSQL are ready for your project.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
          <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1">Next.js</span>
          <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1">React 19</span>
          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1">TypeScript</span>
          <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1">Tailwind</span>
          <span className="rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-3 py-1">Prisma</span>
          <span className="rounded-full border border-rose-500/40 bg-rose-500/10 px-3 py-1">PostgreSQL</span>
        </div>
      </div>
    </main>
  );
}
