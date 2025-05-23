import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, CheckIcon, PlusIcon } from 'lucide-react';
import { WorkoutCard } from './WorkoutCard';
import { WorkoutForm } from './WorkoutForm';
interface WorkoutTrackerProps {
  compact?: boolean;
}
export const WorkoutTracker = ({
  compact = false
}: WorkoutTrackerProps) => {
  const [showForm, setShowForm] = useState(false);
  const [workouts, setWorkouts] = useState([{
    id: 1,
    title: 'Morning Run',
    type: 'Cardio',
    duration: '30 min',
    calories: 320,
    completed: true,
    date: new Date().toISOString()
  }, {
    id: 2,
    title: 'Upper Body Strength',
    type: 'Strength',
    duration: '45 min',
    calories: 280,
    completed: false,
    date: new Date().toISOString()
  }]);
  const addWorkout = (workout: any) => {
    setWorkouts([...workouts, {
      ...workout,
      id: Date.now(),
      date: new Date().toISOString()
    }]);
    setShowForm(false);
  };
  const toggleComplete = (id: number) => {
    setWorkouts(workouts.map(w => w.id === id ? {
      ...w,
      completed: !w.completed
    } : w));
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.3,
    delay: 0.1
  }} className={`bg-white rounded-2xl shadow-md p-6 ${compact ? 'col-span-1' : 'col-span-2'}`}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">Workouts</h2>
          <p className="text-gray-500 text-sm">Track your fitness activities</p>
        </div>
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} onClick={() => setShowForm(!showForm)} className="bg-purple-600 text-white p-2 rounded-lg flex items-center gap-2">
          {showForm ? <CheckIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}
          <span className={compact ? 'hidden' : 'inline'}>
            {showForm ? 'Done' : 'Add Workout'}
          </span>
        </motion.button>
      </div>
      <AnimatePresence>
        {showForm && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="overflow-hidden mb-6">
            <WorkoutForm onAdd={addWorkout} />
          </motion.div>}
      </AnimatePresence>
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {workouts.length === 0 ? <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="text-center py-10 text-gray-500">
            <CalendarIcon className="h-12 w-12 mx-auto mb-2 text-gray-300" />
            <p>No workouts scheduled. Add one to get started!</p>
          </motion.div> : <AnimatePresence>
            {workouts.map((workout, index) => <motion.div key={workout.id} initial={{
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
                <WorkoutCard workout={workout} onToggleComplete={() => toggleComplete(workout.id)} compact={compact} />
              </motion.div>)}
          </AnimatePresence>}
      </div>
    </motion.div>;
};