export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  onOptionClick?: (value: string) => void;
  buttonClassName?: string;
}
