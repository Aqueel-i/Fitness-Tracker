import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, FlameIcon, XCircleIcon } from 'lucide-react';
interface WorkoutCardProps {
  workout: {
    id: number;
    title: string;
    type: string;
    duration: string;
    calories: number;
    completed: boolean;
    date: string;
  };
  onToggleComplete: () => void;
  compact?: boolean;
}
export const WorkoutCard = ({
  workout,
  onToggleComplete,
  compact = false
}: WorkoutCardProps) => {
  const typeColors = {
    Cardio: 'bg-red-100 text-red-700',
    Strength: 'bg-blue-100 text-blue-700',
    Flexibility: 'bg-purple-100 text-purple-700',
    Balance: 'bg-green-100 text-green-700'
  };
  const typeColor = typeColors[workout.type as keyof typeof typeColors] || 'bg-gray-100 text-gray-700';
  return <motion.div whileHover={{
    scale: 1.02
  }} className={`border ${workout.completed ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'} rounded-xl p-4 flex justify-between`}>
      <div className="flex items-start gap-3">
        <motion.button whileHover={{
        scale: 1.1
      }} whileTap={{
        scale: 0.9
      }} onClick={onToggleComplete} className="mt-1">
          {workout.completed ? <CheckCircleIcon className="h-6 w-6 text-green-500" /> : <XCircleIcon className="h-6 w-6 text-gray-300" />}
        </motion.button>
        <div>
          <h3 className="font-medium">{workout.title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-xs px-2 py-1 rounded-full ${typeColor}`}>
              {workout.type}
            </span>
            {!compact && <>
                <div className="flex items-center text-xs text-gray-500">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  {workout.duration}
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <FlameIcon className="h-3 w-3 mr-1" />
                  {workout.calories} cal
                </div>
              </>}
          </div>
        </div>
      </div>
      {!compact && <motion.button whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }} className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
          Details
        </motion.button>}
    </motion.div>;
};