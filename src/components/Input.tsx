import React, { useId } from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  label?: string;
  type? : string;
  className?: string;
  ref?: any;
 
}

const Input = React.forwardRef(
  ({ label, type, className, ref, ...props }:Props) => {
    const id: any = useId();
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="inline-block mb-1 pl-1">
            {label}
          </label>
        )}
        <input
          className={`px-2 py-2 rounded-lg bg-white text-black outline-none
           focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          type={type}
          ref={ref}
          {...props}
          id={id}
        ></input>
      </div>
    );
  }
);

export default Input;
