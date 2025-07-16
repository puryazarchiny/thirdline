// #############################################################################
// # Imports
// #############################################################################

// node_modules
import { ComponentProps, forwardRef } from "react";

// #############################################################################
// # Types
// #############################################################################

type InputProps = ComponentProps<"input"> & {
  id: string;
  label: string;
};

// #############################################################################
// # Components
// #############################################################################

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="font-medium">
          {label}
        </label>

        <input
          ref={ref}
          id={id}
          className="placeholder-text-darker focus:border-primary-400 w-full rounded-lg border-2 border-gray-600 p-4"
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
