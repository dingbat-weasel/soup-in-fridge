function FormRow({ label, error, children }) {
  return (
    <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-10 border-b border-b-slate-100 px-0 py-5 first:pt-0 last:pb-0">
      {label && (
        <label className="font-semibold" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-2xl text-red-700">{error}</span>}
    </div>
  );
}

export default FormRow;
