function Form({ children }) {
  return (
    <form className="overflow-hidden rounded-md border border-slate-100 bg-slate-50 px-10 py-6 text-2xl">
      {children}
    </form>
  );
}

export default Form;
