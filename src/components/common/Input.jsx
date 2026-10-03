/**
 * Input
 * ----------------------------------------------------------------------------
 * Reusable form field matching the styling already established in
 * ContactForm.jsx. Renders a text input, textarea, or select depending on
 * the `as` prop, with a shared label + error treatment.
 *
 *   <Input label="Full Name" name="name" value={v} onChange={fn} required />
 *   <Input as="textarea" label="Message" rows={5} ... />
 *   <Input as="select" label="Topic" options={["A", "B"]} ... />
 */
export default function Input({
  as = "input",
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  required = false,
  options = [],
  rows = 4,
  className = "",
  ...rest
}) {
  const fieldId = id || name;
  const baseClasses = `w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-royal-500 transition-colors ${
    error ? "border-red-400" : "border-slate-200"
  } ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={fieldId}
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          {label} {required && <span className="text-royal-500">*</span>}
        </label>
      )}

      {as === "textarea" && (
        <textarea
          id={fieldId}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          className={`${baseClasses} resize-none`}
          {...rest}
        />
      )}

      {as === "select" && (
        <select
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          className={`${baseClasses} bg-white`}
          {...rest}
        >
          {options.map((opt) => (
            <option key={typeof opt === "string" ? opt : opt.value} value={typeof opt === "string" ? opt : opt.value}>
              {typeof opt === "string" ? opt : opt.label}
            </option>
          ))}
        </select>
      )}

      {as === "input" && (
        <input
          id={fieldId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          className={baseClasses}
          {...rest}
        />
      )}

      {error && (
        <p id={`${fieldId}-error`} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
