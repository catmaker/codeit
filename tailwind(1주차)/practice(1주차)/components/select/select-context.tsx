import { createContext, useContext } from "react";
import { Option } from "./types";

type SelectContextType = {
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  selectedOption: Option | undefined;
  buttonClassName: string;
};

export const SelectContext = createContext<SelectContextType | undefined>(
  undefined
);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelectContext must be used within a SelectProvider");
  }
  return context;
};
