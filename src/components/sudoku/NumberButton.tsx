import React from 'react';
import { Button } from "@/components/ui/button";
import { Eraser } from "lucide-react";
interface NumberButtonProps {
  number: number | 'eraser';
  isSelected: boolean;
  remainingCount?: number;
  onClick: () => void;
}
export const NumberButton: React.FC<NumberButtonProps> = ({
  number,
  isSelected,
  remainingCount,
  onClick
}) => {
  return <Button variant="outline" onClick={onClick} className={`
        w-[50px] h-[50px] p-0 relative rounded-full
        border-game-gridline text-game-gridline 
        hover:bg-game-highlight
        ${isSelected ? 'bg-blue-100' : 'bg-white'}
      `}>
      <div className="absolute inset-0 flex flex-col items-center justify-center py-0">
        {number === 'eraser' ? <Eraser className="h-6 w-6" /> : <>
            <span className="text-2xl font-medium py-0">{number}</span>
            {remainingCount !== undefined && remainingCount > 0 && <span className="text-xs absolute bottom-1 px-0 my-0 mx-0 py-px">{remainingCount}</span>}
          </>}
      </div>
    </Button>;
};