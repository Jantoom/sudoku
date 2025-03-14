
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Eraser } from "lucide-react";
import { getMatchingCells } from '@/lib/sudoku';
import { Grid } from '@/lib/types';

export interface NumberButtonsHandles {
  getSelectedNumber: () => number;
  setSelectedNumber: (num: number) => void;
}

interface NumberButtonsProps {
  grid: Grid;
  selectedNumber: number;
  setSelectedNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const NumberButtons = forwardRef<NumberButtonsHandles, NumberButtonsProps>(({
  grid,
  selectedNumber,
  setSelectedNumber,
}, ref) => {

  return (
    <div className="grid grid-rows-2 grid-cols-5 gap-[min(2vh,2vw)] justify-items-center w-2/3">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => {
        const isSelected = selectedNumber === num;
        const remainingCount = 9 - getMatchingCells(grid, num).length;
        return (
        <Button
          key={num}
          variant="outline"
          onClick={() => setSelectedNumber(prev => prev !== num ? num : null)}
          className={`w-full min-h-[w-full] h-full aspect-square relative rounded-full transition-colors duration-300 ease-in-out hover:bg-secondary ${isSelected ? 'bg-primary text-background' : ''}`}
        >
          {num ? (
            <>
              <span className="text-[min(5vw,2.5vh)] font-medium">{num}</span>
              <span className="text-[min(2.5vw,1.25vh)] font-medium absolute pt-[65%]">{remainingCount ? remainingCount : ''}</span>
            </>
          ) : (
            <Eraser className="h-full w-full" />
          )}
        </Button>
      )})}
    </div>
  );
});
