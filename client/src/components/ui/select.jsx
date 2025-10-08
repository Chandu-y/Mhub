
import React from 'react';
import { cn } from '@/lib/utils';

export function Select({ children, onValueChange, value, defaultValue, ...props }) {
  // Controlled select: value comes from parent, fallback to defaultValue
  const [open, setOpen] = React.useState(false);
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState(defaultValue || "");
  const selected = isControlled ? value : internalValue;
  const handleSelect = (val) => {
    if (!isControlled) setInternalValue(val);
    if (onValueChange) onValueChange(val);
    setOpen(false);
  };
  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full border rounded px-3 py-2 text-left"
        onClick={() => setOpen((o) => !o)}
      >
        {React.Children.toArray(children).find(opt => opt.props.value === selected)?.props.children || "Select..."}
      </button>
      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="absolute z-10 mt-1 w-full bg-white border rounded shadow"
        >
          {React.Children.map(children, (opt) => (
            <li
              key={opt.props.value}
              role="option"
              aria-selected={opt.props.value === selected}
              className={`px-3 py-2 cursor-pointer ${opt.props.value === selected ? "bg-blue-100" : ""}`}
              onClick={() => handleSelect(opt.props.value)}
            >
              {opt.props.children}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SelectTrigger({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function SelectContent({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function SelectItem({ className, children, value, ...props }) {
  return (
    <option
      value={value}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </option>
  );
}

export function SelectValue({ placeholder, ...props }) {
  return <span className="pointer-events-none" {...props}>{placeholder}</span>;
}
