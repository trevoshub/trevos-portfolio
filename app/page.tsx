
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold">
            TOCHI<span className="text-blue-400">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-400">
            TOCHI • SOFTWARE DEVELOPER & AI AUTOMATION SPECIALIST
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            I build software and AI-powered systems that solve real business
            problems.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I design and build web applications, AI assistants, and business
            automation systems that help companies reduce manual work, improve
            customer engagement, and operate more efficiently.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              View My Work
            </a>

            <a
              href="https://github.com/trevoshub"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              About
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Building technology around real business needs.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I&apos;m Tochi, a software developer and AI automation specialist
              focused on building practical technology for businesses. My work
              combines modern web development, databases, APIs, AI, and
              automation to turn repetitive business processes into efficient
              digital workflows.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              I enjoy taking a business problem, understanding how the process
              currently works, and turning that process into a useful software
              solution.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Selected Work
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Projects I&apos;ve built
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            A selection of software and automation projects demonstrating my
            experience across web applications, SaaS, AI, and desktop
            development.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Trevos Assistant */}
            <a
              href="https://github.com/trevoshub/trevos-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <p className="text-sm font-semibold text-blue-400">
                AI AUTOMATION
              </p>

              <h3 className="mt-3 text-xl font-bold group-hover:text-blue-400">
                Trevos Assistant
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                An AI-powered website assistant designed to interact with
                visitors, answer questions about a business, capture potential
                leads, and improve customer engagement.
              </p>

              <p className="mt-5 text-sm text-slate-500">
                Next.js • TypeScript • React • Prisma • PostgreSQL • AI
              </p>

              <p className="mt-6 text-sm font-semibold text-blue-400">
                View project →
              </p>
            </a>

            {/* Trevos Suite 360 */}
            <a
              href="https://trevos-suite-360-production.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <p className="text-sm font-semibold text-blue-400">
                SAAS APPLICATION
              </p>

              <h3 className="mt-3 text-xl font-bold group-hover:text-blue-400">
                Trevos Suite 360
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                A multi-tenant SaaS platform that helps businesses track
                renewals, subscriptions, contracts, domains, hosting,
                insurance, and other recurring business assets.
              </p>

              <p className="mt-5 text-sm text-slate-500">
                Next.js • TypeScript • Prisma • PostgreSQL • NextAuth
              </p>

              <p className="mt-6 text-sm font-semibold text-blue-400">
                View project →
              </p>
            </a>

            {/* Trevos Watch */}
            <a
              href="https://github.com/trevoshub/trevos-watch"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <p className="text-sm font-semibold text-blue-400">
                DESKTOP SOFTWARE
              </p>

              <h3 className="mt-3 text-xl font-bold group-hover:text-blue-400">
                Trevos Watch
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                An offline desktop application for tracking inbound and
                outbound services, expiry dates, and business records with
                automated expiry notifications.
              </p>

              <p className="mt-5 text-sm text-slate-500">
                Electron • JavaScript • SQLite • Windows
              </p>

              <p className="mt-6 text-sm font-semibold text-blue-400">
                View project →
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Technical Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Tools I work with
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "TypeScript",
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "Prisma",
              "PostgreSQL",
              "NextAuth",
              "OpenAI API",
               "n8n",
              "AI Automation",
              "REST APIs",
              "Git & GitHub",
              "SQLite",
              "Electron",
              "HTML",
              "CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            What I Do
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-bold">Web Applications</h3>

              <p className="mt-4 leading-7 text-slate-400">
                Building modern, responsive applications using React, Next.js,
                TypeScript, databases, authentication, and APIs.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-bold">AI Automation</h3>

              <p className="mt-4 leading-7 text-slate-400">
                Designing AI-powered workflows that help businesses automate
                customer interactions, lead capture, and repetitive processes.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-bold">Business Software</h3>

              <p className="mt-4 leading-7 text-slate-400">
                Turning real-world business processes into software systems
                that organize information and improve operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 py-24">
  <div className="mx-auto max-w-6xl px-6">
    <div className="max-w-2xl">
      <p className="mb-4 text-sm font-medium tracking-[0.2em] text-white/50">
        CONTACT
      </p>

      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Let&apos;s build something useful.
      </h2>

      <p className="mt-5 text-base leading-7 text-white/60">
        I&apos;m open to opportunities involving full-stack development,
        AI automation, and software solutions that solve real business
        problems.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="mailto:tochi@trevoslimited.com"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/tochieleazar/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/trevoshub"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Tochi. Built with Next.js and
          TypeScript.
        </div>
      </footer>
    </main>
  );
}

