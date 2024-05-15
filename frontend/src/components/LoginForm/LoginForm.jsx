import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "..//Button/Button";
import { ROUTES } from "../../routes/consts";
import styles from "./LoginForm.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login Attempt:", email, password);
    navigate(ROUTES.NEWCLIENT);
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}>Login</div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.fullWidth}
            required
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.fullWidth}
            required
          />
          <Button type="submit" className={styles.loginButton}>
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
