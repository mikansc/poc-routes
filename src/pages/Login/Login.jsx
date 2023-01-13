import React from "react";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { authenticate } = useAuth();
  return (
    <div>
      Login
      <button onClick={authenticate}>Sign In</button>
    </div>
  );
}
