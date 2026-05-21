import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {

    e.preventDefault();

    if(name && email && password){

      localStorage.setItem("user", name);

      navigate("/dashboard");
    }
  };

  return (
    <div className="auth-container">

      <form className="auth-form" onSubmit={handleSignup}>

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
          Register
        </button>

        <p>
          Already have an account?
          <Link to="/signin"> Sign In</Link>
        </p>

      </form>

    </div>
  );
}

export default SignUp;