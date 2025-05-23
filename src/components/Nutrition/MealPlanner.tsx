import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, PlusIcon } from 'lucide-react';
import { MealCard } from './MealCard';
interface MealPlannerProps {
  compact?: boolean;
}
export const MealPlanner = ({
  compact = false
}: MealPlannerProps) => {
  const [meals, setMeals] = useState([{
    id: 1,
    title: 'Breakfast',
    time: '8:00 AM',
    calories: 450,
    protein: 22,
    carbs: 45,
    fat: 15,
    foods: ['Oatmeal', 'Blueberries', 'Protein Shake']
  }, {
    id: 2,
    title: 'Lunch',
    time: '12:30 PM',
    calories: 650,
    protein: 35,
    carbs: 60,
    fat: 25,
    foods: ['Grilled Chicken', 'Brown Rice', 'Broccoli']
  }]);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.3,
    delay: 0.2
  }} className={`bg-white rounded-2xl shadow-md p-6 ${compact ? 'col-span-1' : 'col-span-2'}`}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">Meal Planner</h2>
          <p className="text-gray-500 text-sm">Track your nutrition</p>
        </div>
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="bg-green-600 text-white p-2 rounded-lg flex items-center gap-2">
          <PlusIcon className="h-5 w-5" />
          <span className={compact ? 'hidden' : 'inline'}>Add Meal</span>
        </motion.button>
      </div>
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {meals.length === 0 ? <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="text-center py-10 text-gray-500">
            <CalendarIcon className="h-12 w-12 mx-auto mb-2 text-gray-300" />
            <p>No meals planned. Add one to get started!</p>
          </motion.div> : <AnimatePresence>
            {meals.map((meal, index) => <motion.div key={meal.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.2,
          delay: index * 0.05
        }}>
                <MealCard meal={meal} compact={compact} />
              </motion.div>)}
          </AnimatePresence>}
      </div>
    </motion.div>;
};