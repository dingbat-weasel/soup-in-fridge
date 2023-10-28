function Input({ children }) {
  return (
    <input className="rounded-sm border border-slate-300 bg-slate-50 px-5 py-3 shadow-sm">
      {children}
    </input>
  );
}

export default Input;
