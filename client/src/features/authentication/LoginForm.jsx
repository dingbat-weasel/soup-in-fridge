import { useState } from "react";
import FormRowVertical from "../../components/FormRowVertical";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  return (
    <form className="overflow-hidden rounded-md border border-slate-100 bg-slate-50 px-16 py-10 text-2xl">
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
    </form>
  );
}

export default LoginForm;
