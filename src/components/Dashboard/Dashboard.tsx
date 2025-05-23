import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DashboardHeader } from './DashboardHeader';
import { ProfileSummary } from './ProfileSummary';
import { WorkoutTracker } from '../Workouts/WorkoutTracker';
import { MealPlanner } from '../Nutrition/MealPlanner';
import { ProgressCharts } from '../Progress/ProgressCharts';
import { ActivityFeed } from '../Activity/ActivityFeed';
export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const renderContent = () => {
    switch (activeTab) {
      case 'workouts':
        return <WorkoutTracker />;
      case 'meals':
        return <MealPlanner />;
      case 'progress':
        return <ProgressCharts />;
      case 'overview':
      default:
        return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileSummary />
            <WorkoutTracker compact />
            <MealPlanner compact />
            <ProgressCharts compact />
            <ActivityFeed />
          </div>;
    }
  };
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <DashboardHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <motion.div key={activeTab} initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} transition={{
      duration: 0.3
    }} className="mt-8">
        {renderContent()}
      </motion.div>
    </div>;
};