"use client";

import { useState, useRef, useEffect } from "react";
import { Option } from "./types";

export default function useSelect(options: Option[], value: string) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const option = options.find((option) => option.value === value);
    setSelectedLabel(option?.label || "선택해주세요");
  }, [options, value]);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const closeSelect = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedLabel,
    selectRef,
    toggleSelect,
    closeSelect,
  };
}
