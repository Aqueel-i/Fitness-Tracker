import React from 'react';
import { motion } from 'framer-motion';
import { ActivityIcon, AwardIcon, FlameIcon, TrendingUpIcon } from 'lucide-react';
export const ActivityFeed = () => {
  const activities = [{
    id: 1,
    type: 'workout',
    title: 'Completed a workout',
    description: 'Upper Body Strength - 45 min',
    time: '2 hours ago',
    icon: ActivityIcon
  }, {
    id: 2,
    type: 'achievement',
    title: 'New achievement unlocked',
    description: 'Workout Streak: 5 days',
    time: '5 hours ago',
    icon: AwardIcon
  }, {
    id: 3,
    type: 'nutrition',
    title: 'Calorie goal reached',
    description: 'You hit your protein goal today!',
    time: '8 hours ago',
    icon: FlameIcon
  }, {
    id: 4,
    type: 'progress',
    title: 'New weight record',
    description: 'Down 5 lbs this month',
    time: '2 days ago',
    icon: TrendingUpIcon
  }];
  const getActivityColor = (type: string) => {
    switch (type) {
      case 'workout':
        return 'bg-blue-100 text-blue-600';
      case 'achievement':
        return 'bg-purple-100 text-purple-600';
      case 'nutrition':
        return 'bg-orange-100 text-orange-600';
      case 'progress':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.3,
    delay: 0.4
  }} className="bg-white rounded-2xl shadow-md p-6 col-span-2 md:col-span-1">
      <h2 className="text-xl font-bold mb-6">Activity Feed</h2>
      <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
        {activities.map((activity, index) => {
        const Icon = activity.icon;
        return <motion.div key={activity.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.3,
          delay: index * 0.1
        }} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
              <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{activity.title}</h3>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </motion.div>;
      })}
      </div>
    </motion.div>;
};