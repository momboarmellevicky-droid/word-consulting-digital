import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const cardRef = useRef(null);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  }

  function handleLeave() {
    const card = cardRef.current;
    if (card) card.style.transform = "rotateY(0deg) rotateX(0deg)";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) {
      setError("Email ou mot de passe incorrect.");
      return;
    }
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-abyss-950 bg-grid-glow flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Layered depth backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-azure-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-md relative z-10 perspective-container">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-azure-400 to-cyan-400 shadow-glow" />
            <span className="font-display font-semibold text-mist-100 text-lg tracking-tight">
              Word Consulting Digital
            </span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-mist-100 mb-2">
            Espace collaborateurs
          </h1>
          <p className="text-mist-500 text-sm">Accès réservé à l'équipe</p>
        </div>

        <div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="tilt-card bg-abyss-800/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-depth2 p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-mist-300 mb-2">
                Adresse e-mail
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-abyss-900 border border-white/10 rounded-xl px-4 py-3 text-mist-100 placeholder:text-mist-500/60 focus:outline-none focus:ring-2 focus:ring-azure-500 focus:border-transparent transition"
                placeholder="prenom@wordconsulting.digital"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-mist-300">
                  Mot de passe
                </label>
                <a href="#" className="text-xs text-azure-400 hover:text-azure-300 transition">
                  Mot de passe oublié
                </a>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-abyss-900 border border-white/10 rounded-xl px-4 py-3 text-mist-100 placeholder:text-mist-500/60 focus:outline-none focus:ring-2 focus:ring-azure-500 focus:border-transparent transition"
                placeholder="••••••••••"
              />
            </div>

            {error && (
              <div className="text-sm text-red-300 bg-red-950/40 border border-red-500/20 rounded-lg px-4 py-2.5">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-azure-500 to-cyan-400 text-abyss-950 font-display font-semibold rounded-xl py-3 shadow-glow hover:brightness-110 active:scale-[0.98] transition disabled:opacity-60"
            >
              {loading ? "Connexion en cours..." : "Se connecter"}
            </button>
          </form>
        </div>

        <p className="text-center text-mist-500 text-xs mt-8">
          Plateforme privée — Word Consulting Digital
        </p>
      </div>
    </div>
  );
}
