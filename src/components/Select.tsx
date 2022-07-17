import React from "react";

interface SelectProps {
  options: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  label: string;
}

const Select = ({ options, onChange, label }: SelectProps) => {
  return (
    <label>
      {label}
      <select onChange={onChange}>
        {options.map((option, id) => (
          <option key={id} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
