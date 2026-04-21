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
          Built an AI-powered web application that helps developers understand
          complex technical documentation through structured explanations,
          real-time streaming responses, and persistent chat history.
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
          content and receive structured explanations with real-time streaming
          responses. To improve usability and move beyond a simple demo into a product-like experience, I implemented persistent chat history and a sidebar-based navigation system.
        </p>
      </section>

      {/* FEATURES */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Real-time streaming responses</li>
          <li>Persistent chat history with sidebar navigation</li>
          <li>Context-aware follow-up questions</li>
          <li>Responsive UI for desktop and mobile</li>
          <li>Structured explanations for readability</li>
        </ul>
      </section>

      {/* TECH STACK */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer">
            Next.js
          </span>
          <span className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer">
            React 19
          </span>
          <span className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer">
            TypeScript
          </span>
          <span className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer">
            Tailwind CSS
          </span>
          <span className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer">
            ShadCN
          </span>
          <span className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer">
            OpenAI API
          </span>
          <span className="inline-block bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer">
            Vercel{" "}
          </span>
        </div>
      </section>

      {/* CONCEPTS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Concepts</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>State Management</li>
          <li>Async Data Fetching</li>
          <li>API Integration</li>
          <li>Performance Optimization</li>
        </ul>
        
      </section>

      {/* CHALLENGES */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Technical Challenges</h2>

        <div className="space-y-6 text-gray-400">
          <div>
            <h3 className="font-semibold text-white">
              Streaming UI and Data Synchronization
            </h3>
            <p>
              Implemented streaming responses while also capturing full response
              text for persistence. Designed a dual-state system separating UI
              rendering from stored conversation data
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Persistent Chat History (SaaS Feature)
            </h3>
            <p>
              Built localStorage-based persistence for chat sessions. Designed a
              sidebar UI to navigate previous queries and reload conversations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              State Management for AI Workflows
            </h3>
            <p>
              Managed multiple async states (initial query + follow-ups).
              Maintained conversation context without breaking UI
              responsiveness.
            </p>
          </div>
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">What I Learned</h2>
        <p className="text-gray-400">
        This project deepened my understanding of how to design frontend systems around asynchronous, streaming data, and how to structure UI for AI-driven workflows in a way that improves usability. I also learned the importance of separating system state from user-facing product state, which made it easier to manage real-time interactions while maintaining a consistent and intuitive user experience.
        </p>
      </section>

      {/* FUTURE */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Future Improvements</h2>
        <p className="text-gray-400">
        In the future, I would extend the application by adding authentication and saved user sessions, enabling users to persist their data across visits. I would also introduce support for multi-threaded conversations to allow more complex workflows, along with backend persistence to enable cross-device access and a more fully realized product experience.
        </p>
      </section>
    </div>
  );
}
