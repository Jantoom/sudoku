
import { Button } from "@/components/ui/button";
import { Difficulty } from "../../lib/types";
import React from "react";
import { useSudokuState } from "@/states/sudokuState";

interface DifficultyButtonsProps {
  reset: (difficulty: Difficulty) => void;
}

export const DifficultyButtons: React.FC<DifficultyButtonsProps> = ({ reset }) => {
  const { difficulty } = useSudokuState();
  
  return (
  <div className="flex justify-between w-[50%] min-w-[200px]">
    {(['easy', 'medium', 'hard'] as const).map((diff) => (
      <Button
        key={diff}
        onClick={() => reset(diff)}
        variant='outline'
        className={`w-[32%] rounded-full border-border hover:bg-secondary transition-colors duration-300 ease-in-out ${difficulty === diff ? 'bg-primary text-background' : ''}`}
      >
        {diff.charAt(0).toUpperCase() + diff.slice(1)}
      </Button>
    ))}
  </div>
);
};