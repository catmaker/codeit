import { useSelectContext } from "./select-context";

export const SelectButton = () => {
  const { selectedOption, setIsOpen, isOpen, buttonClassName } =
    useSelectContext();

  return (
    <button
      className={`
        w-full px-4 py-2 text-left bg-white border
        ${isOpen ? "rounded-t-lg" : "rounded-lg"}
        ${buttonClassName}
      `}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <span>{selectedOption?.label || "선택하세요"}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </button>
  );
};
