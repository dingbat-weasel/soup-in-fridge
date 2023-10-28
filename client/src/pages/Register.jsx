import SignupForm from "../features/authentication/SignupForm";

function Register() {
  return (
    <main className="grid min-h-screen grid-cols-[48rem] items-center justify-center gap-12 bg-slate-400">
      <h1 className="text-5xl font-semibold">Create an account</h1>
      <SignupForm />
    </main>
  );
}

export default Register;
