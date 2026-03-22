import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
import "../../styles/login.css";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-card__title">Flexx</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form__group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@flexx.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="login-form__group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoComplete="current-password"
              required
            />
          </div>

          {error && <p className="login-form__error">{error}</p>}

          <button
            type="submit"
            className="login-form__button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}