export default function AICaseStudy({ onBack }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-white">
      {/* BACK BUTTON */}
      <button
        onClick={onBack}
        className="mb-8 text-sm text-gray-400 hover:text-white transition"
      >
        ← Back to Projects
      </button>

      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">AI Documentation Assistant</h1>

        <p className="text-lg text-gray-400 mb-6">
          AI-powered tool that simplifies complex technical documentation
          through structured explanations and interactive Q&A.
        </p>

        <p className="text-sm text-gray-500 italic mb-6">
          Built to solve my own frustration with understanding dense technical
          documentation quickly.
        </p>

        <div className="flex gap-4">
          <a
            href="https://documentation-explainer-pd6p.vercel.app/"
            target="_blank"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 hover:translate-y-0.5 transition"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/jerryshano/Documentation-Explainer"
            target="_blank"
            className="border border-gray-600 px-4 py-2 rounded-lg hover:border-gray-400 hover:translate-y-0.5 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Problem</h2>
        <p className="text-gray-400 leading-relaxed">
          Developers often struggle to quickly understand dense or poorly
          structured documentation, which slows down learning and productivity.
          Traditional documentation doesn’t adapt to user-specific questions and
          requires significant time to parse.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Solution</h2>
        <p className="text-gray-400 leading-relaxed">
          I built an AI-driven interface that allows users to input technical
          content and receive structured explanations, along with the ability to
          ask follow-up questions in real time. This creates a more interactive
          and efficient way to consume technical information.
        </p>
      </section>

      {/* FEATURES */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Real-time streaming responses</li>
          <li>Context-aware follow-up questions</li>
          <li>Responsive UI for desktop and mobile</li>
          <li>Structured explanations for readability</li>
        </ul>
      </section>

      {/* TECH STACK */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer">Next.js</span>
          <span className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer">React 19</span>
          <span className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer">Tailwind CSS</span>
          <span className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer">ShadCN</span>
          <span className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer">OpenAI API</span>
          <span className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer">Vercel </span>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Technical Challenges</h2>

        <div className="space-y-6 text-gray-400">
          <div>
            <h3 className="font-semibold text-white">Streaming responses</h3>
            <p>
              Implemented incremental rendering of AI responses to improve
              perceived performance and avoid blocking the UI.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">State management</h3>
            <p>
              Designed state handling for dynamic queries and follow-up
              interactions while maintaining context.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Performance</h3>
            <p>
              Minimized unnecessary re-renders and ensured smooth UI updates
              during async operations.
            </p>
          </div>
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">What I Learned</h2>
        <p className="text-gray-400">
          This project deepened my understanding of building UI around async
          data flows and reinforced the importance of user experience when
          working with AI-driven applications.
        </p>
      </section>

      {/* FUTURE */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Future Improvements</h2>
        <p className="text-gray-400">
          Add authentication and saved history, improve context retention, and
          expand the interface to support more advanced multi-step interactions.
        </p>
      </section>
    </div>
  );
}
