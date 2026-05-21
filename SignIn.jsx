import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignIn() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if(email && password){

      localStorage.setItem("user", email);

      navigate("/dashboard");
    }
  };

  return (
    <div className="auth-container">

      <form className="auth-form" onSubmit={handleLogin}>

        <h2>Sign In</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </form>

    </div>
  );
}

export default SignIn;