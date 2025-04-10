import { Eraser } from 'lucide-react';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useSudokuState } from '@/sudoku/state';
import { getMatchingCells } from '@/sudoku/utils';

const NumberButtons: React.FC = () => {
  const { isActive, grid, selectedNumber, optRemainingCounts, setState } =
    useSudokuState();

  useEffect(() => {
    if (optRemainingCounts) setState({ usedRemainingCounts: true });
  }, [optRemainingCounts, setState]);

  return (
    <div className="grid grid-cols-5 grid-rows-2 justify-items-center gap-2 max-w-full">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
        const isSelected = selectedNumber === num;
        const remainingCount = Math.max(
          9 - getMatchingCells(grid, num).length,
          0,
        );
        return (
          <Button
            key={num}
            variant="outline"
            onClick={() =>
              setState((prevState) => ({
                selectedNumber:
                  (isActive && prevState.selectedNumber !== num && num) ||
                  undefined,
              }))
            }
            className={`relative aspect-square h-[6svh] w-[6svh] max-w-full max-h-full rounded-full py-0 hover:bg-secondary ${isSelected ? 'bg-primary text-background' : ''}`}
          >
            {num ? (
              <>
                <span className="text-[2.5svh] font-medium leading-none">
                  {num}
                </span>
                <span className="absolute pt-[65%] text-[1.25svh] font-medium">
                  {(optRemainingCounts && remainingCount) || ''}
                </span>
              </>
            ) : (
              <Eraser className="h-1/2" />
            )}
          </Button>
        );
      })}
    </div>
  );
};

export default NumberButtons;
