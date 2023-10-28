import { useState } from "react";
import FormRowVertical from "../../components/FormRowVertical";
import { useLogin } from "./useLogin";

import Form from "../../components/Form";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  return (
    <Form>
      <FormRowVertical label="Email Address">
        <input
          className="rounded-sm border border-slate-300 bg-slate-50 px-5 py-3 shadow-sm"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <input
          className="rounded-sm border border-slate-300 bg-slate-50 px-5 py-3 shadow-sm"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <button>{!isLoading ? "Log in" : "Loading..."}</button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
