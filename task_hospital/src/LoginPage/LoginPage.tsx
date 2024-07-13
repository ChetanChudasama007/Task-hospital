import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  // Container,
  LoginForm,
  Title,
  Input,
  Button,
  ErrorMessage,
} from "./LoginPageStyles";
import styled from "@emotion/styled";
import BgImage from "./wallpaper.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: url(${BgImage}) no-repeat center center;
  background-size: cover;
  background-position: center;
`;

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    setError("");

    const userLogin = { email, password };
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
    navigate("/app");
    console.log("Login successful");
  };

  return (
    <Container>
      <LoginForm>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </LoginForm>
    </Container>
  );
};

export default LoginPage;
