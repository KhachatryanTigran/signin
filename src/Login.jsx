import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./hook/useAuth";
function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const fromPage = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const user = form.email.value;

    signin(user, () => {
      return navigate(fromPage, { replace: true });
    });
  };

  return (
    <>
      <div className="author-form-continer">
        <h2>Login</h2>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="youreemail@gmail.com"
            id="email"
            name="email"
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            type="password"
            placeholder="***********"
            id="password"
            name="password"
          />
          <button type="submit">Log in</button>
        </form>
        <Link className="link-btn" to="/register">
          Don't have an account? Register here.{" "}
        </Link>
      </div>
    </>
  );
}

export default Login;
