"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
};

export function FloatingInput({
  label,
  name,
  type = "text",
  required,
  className,
}: BaseProps & { type?: string }) {
  const id = useId();
  const [filled, setFilled] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        onChange={(e) => setFilled(e.target.value.length > 0)}
        placeholder=" "
        className="peer w-full border-b border-current/25 bg-transparent py-3 text-base outline-none transition-colors focus:border-current"
      />
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-0 top-3 text-base text-current/50 transition-all duration-200",
          "peer-focus:-top-3 peer-focus:text-xs peer-focus:text-current/70",
          filled && "-top-3 text-xs text-current/70"
        )}
      >
        {label}
        {required && " *"}
      </label>
    </div>
  );
}

export function FloatingTextarea({ label, name, required, className }: BaseProps) {
  const id = useId();
  const [filled, setFilled] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={4}
        onChange={(e) => setFilled(e.target.value.length > 0)}
        placeholder=" "
        className="peer w-full resize-none border-b border-current/25 bg-transparent py-3 text-base outline-none transition-colors focus:border-current"
      />
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-0 top-3 text-base text-current/50 transition-all duration-200",
          "peer-focus:-top-3 peer-focus:text-xs peer-focus:text-current/70",
          filled && "-top-3 text-xs text-current/70"
        )}
      >
        {label}
        {required && " *"}
      </label>
    </div>
  );
}

export function FloatingSelect({
  label,
  name,
  options,
  className,
}: BaseProps & { options: string[] }) {
  const id = useId();
  const [filled, setFilled] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <select
        id={id}
        name={name}
        onChange={(e) => setFilled(e.target.value.length > 0)}
        defaultValue=""
        className="peer w-full border-b border-current/25 bg-transparent py-3 text-base outline-none transition-colors focus:border-current"
      >
        <option value="" disabled hidden />
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-ink">
            {opt}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-0 top-3 text-base text-current/50 transition-all duration-200",
          "peer-focus:-top-3 peer-focus:text-xs peer-focus:text-current/70",
          filled && "-top-3 text-xs text-current/70"
        )}
      >
        {label}
      </label>
    </div>
  );
}
