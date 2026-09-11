import { useAuth } from "../context/AuthContext";

function Block({ title, children }) {
  return (
    <div className="bg-abyss-800/70 backdrop-blur-xl border border-white/5 rounded-2xl shadow-depth1 p-6">
      <h2 className="font-display text-sm font-semibold text-mist-300 uppercase tracking-wide mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function Dashboard() {
  const { profile, session, signOut } = useAuth();
  const prenom = profile?.prenom || session?.user?.email?.split("@")[0] || "";

  return (
    <div className="min-h-screen bg-abyss-950 bg-grid-glow">
      <header className="border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-azure-400 to-cyan-400 shadow-glow" />
          <span className="font-display font-semibold text-mist-100">
            Word Consulting Digital
          </span>
        </div>
        <button
          onClick={signOut}
          className="text-sm text-mist-500 hover:text-mist-100 transition"
        >
          Déconnexion
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="font-display text-2xl font-semibold text-mist-100 mb-8">
          Bonjour {prenom}
        </h1>

        <div className="grid gap-5 md:grid-cols-2">
          <Block title="Réunion prochaine">
            <p className="text-mist-500 text-sm">Aucune réunion planifiée.</p>
          </Block>
          <Block title="Documents récents">
            <p className="text-mist-500 text-sm">Aucun document pour l'instant.</p>
          </Block>
          <Block title="Projets en cours">
            <p className="text-mist-500 text-sm">Aucun projet actif.</p>
          </Block>
          <Block title="Tâches">
            <p className="text-mist-500 text-sm">Aucune tâche assignée.</p>
          </Block>
        </div>
      </main>
    </div>
  );
}
