import React, { useState } from 'react';
import { motion } from 'framer-motion';
interface WorkoutFormProps {
  onAdd: (workout: any) => void;
}
export const WorkoutForm = ({
  onAdd
}: WorkoutFormProps) => {
  const [workout, setWorkout] = useState({
    title: '',
    type: 'Cardio',
    duration: '',
    calories: '',
    completed: false
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setWorkout({
      ...workout,
      [name]: value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...workout,
      calories: parseInt(workout.calories) || 0
    });
  };
  return <motion.form initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Workout Name
          </label>
          <input type="text" id="title" name="title" value={workout.title} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g. Morning Run" />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select id="type" name="type" value={workout.type} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option value="Cardio">Cardio</option>
            <option value="Strength">Strength</option>
            <option value="Flexibility">Flexibility</option>
            <option value="Balance">Balance</option>
          </select>
        </div>
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
            Duration (minutes)
          </label>
          <input type="text" id="duration" name="duration" value={workout.duration} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g. 30 min" />
        </div>
        <div>
          <label htmlFor="calories" className="block text-sm font-medium text-gray-700 mb-1">
            Calories Burned
          </label>
          <input type="number" id="calories" name="calories" value={workout.calories} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g. 250" />
        </div>
      </div>
      <div className="flex justify-end">
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-lg">
          Add Workout
        </motion.button>
      </div>
    </motion.form>;
};