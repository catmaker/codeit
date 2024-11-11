import { useState } from "react";
import { SelectContext } from "./select-context";
import { SelectProps } from "./types";
import { SelectButton } from "./select-button";
import { SelectOptions } from "./select-options";

const Select = ({
  options,
  value,
  onChange,
  className = "",
  buttonClassName = "",
  onOptionClick,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  return (
    <SelectContext.Provider
      value={{
        value,
        onChange,
        isOpen,
        setIsOpen,
        selectedOption,
        buttonClassName,
      }}
    >
      <div className={`relative w-72 ${className}`}>
        <SelectButton />
        <SelectOptions options={options} onOptionClick={onOptionClick} />
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
