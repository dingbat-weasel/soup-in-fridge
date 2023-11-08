import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <main className="grid min-h-screen grid-cols-[48rem] items-center justify-center gap-12 bg-slate-400">
      <h1 className="text-5xl font-semibold">Log in to your account</h1>
      <LoginForm />
    </main>
  );
}

export default Login;
