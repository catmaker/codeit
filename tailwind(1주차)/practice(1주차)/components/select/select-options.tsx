import { useSelectContext } from "./select-context";
import { Option } from "./types";

interface SelectOptionsProps {
  options: Option[];
  onOptionClick?: (value: string) => void;
}

export const SelectOptions = ({
  options,
  onOptionClick,
}: SelectOptionsProps) => {
  const { isOpen, value, onChange, setIsOpen } = useSelectContext();

  if (!isOpen) return null;

  return (
    <div className="absolute w-full mt-1 bg-white border rounded-t-lg shadow-lg">
      {options.map((option) => (
        <div
          key={option.value}
          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
            value === option.value ? "bg-blue-50 text-blue-600" : ""
          }`}
          onClick={() => {
            onChange(option.value);
            setIsOpen(false);
            onOptionClick?.(option.value);
          }}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};
