import React, { useId } from "react";

interface Props {
  options: string[]
  label: string;
  className: string;
  ref?: any;
}

const Select: React.FC<Props> = React.forwardRef(
  ({ options, label, className, ref, ...props }) => {
    const id: any = useId;
    return (
      <div>
        {label && (
          <label htmlFor={id} className="inline-block mb-1 pl-1">
            {label}
          </label>
        )}
        <select
          {...props}
          id={id}
          ref={ref}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none
         focus:bg-gray-50 duration-200 border
          border-gray-200 w-full ${className}`}
        >
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
