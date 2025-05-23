import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, FlameIcon } from 'lucide-react';
interface MealCardProps {
  meal: {
    id: number;
    title: string;
    time: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    foods: string[];
  };
  compact?: boolean;
}
export const MealCard = ({
  meal,
  compact = false
}: MealCardProps) => {
  return <motion.div whileHover={{
    scale: 1.02
  }} className="border border-gray-200 rounded-xl p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{meal.title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center text-xs text-gray-500">
              <ClockIcon className="h-3 w-3 mr-1" />
              {meal.time}
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <FlameIcon className="h-3 w-3 mr-1" />
              {meal.calories} cal
            </div>
          </div>
        </div>
        {!compact && <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
            Details
          </motion.button>}
      </div>
      {!compact && <>
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="bg-blue-50 p-2 rounded-lg text-center">
              <div className="text-xs text-gray-500">Protein</div>
              <div className="font-medium text-blue-700">{meal.protein}g</div>
            </div>
            <div className="bg-orange-50 p-2 rounded-lg text-center">
              <div className="text-xs text-gray-500">Carbs</div>
              <div className="font-medium text-orange-700">{meal.carbs}g</div>
            </div>
            <div className="bg-yellow-50 p-2 rounded-lg text-center">
              <div className="text-xs text-gray-500">Fat</div>
              <div className="font-medium text-yellow-700">{meal.fat}g</div>
            </div>
          </div>
          <div className="mt-3">
            <div className="text-xs text-gray-500 mb-1">Foods:</div>
            <div className="flex flex-wrap gap-1">
              {meal.foods.map((food, index) => <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {food}
                </span>)}
            </div>
          </div>
        </>}
    </motion.div>;
};