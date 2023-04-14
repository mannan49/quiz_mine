import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import loginPhoto from "../assets/pic-1.jpg";

function LoginForm() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();
     
  const handleSubmit = () =>{
    navigate("/")
    toast.success("User Logged In Successfully");
  }
    const data = {
      email: email,
      password: password,
    }
  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <img src={loginPhoto} className="image-login" alt="quiz-mine" />
      </div>

      <div className="right-container">
        <form className="input-field" onSubmit={handleSubmit}>
          <h1 className="heading-1">Quiz Mine</h1>
          <h2>Welcome to Quizzes World </h2>

          <div className="input-section">
            <label htmlFor="email">Email</label>
            <input
              className="input-email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Your E-mail"
            />
          </div>

          <div className="input-section">
            <label htmlFor="password">Password</label>
            <input
              className="input-password"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Your Password"
            />
          </div>
          <div className="input-section">
            <button className="button-login" type="submit">
              Login
            </button>
            <button className="button-create-account" onClick={handleSignUp}>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
