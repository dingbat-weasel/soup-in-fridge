function FormRowVertical({ label, error, children }) {
  return (
    <div className="flex flex-col gap-3 px-0 py-5">
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

export default FormRowVertical;
