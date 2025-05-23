import React from 'react';
import { motion } from 'framer-motion';
import { AwardIcon, FlameIcon, HeartIcon, TrendingUpIcon } from 'lucide-react';
import { StatCard } from '../UI/StatCard';
export const ProfileSummary = () => {
  return <motion.div initial={{
    opacity: 0,
    scale: 0.95
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.3
  }} className="bg-white rounded-2xl shadow-md p-6 col-span-2 md:col-span-1">
    <div className="flex items-center gap-4 mb-6">
      <motion.div whileHover={{
        scale: 1.05,
        rotate: 5
      }} className="relative">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" alt="User profile" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-green-500 p-1 rounded-full">
          <TrendingUpIcon className="h-3 w-3 text-white" />
        </div>
      </motion.div>
      <div>
        <h2 className="text-xl font-bold">Welcome back, Aqueel!</h2>
        <p className="text-gray-500">
          You're making great progress this week
        </p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <StatCard title="Calories" value="1,840" subtitle="Daily goal: 2,200" icon={FlameIcon} color="orange" percentage={84} />
      <StatCard title="Active Days" value="5/7" subtitle="Current streak" icon={AwardIcon} color="blue" percentage={71} />
      <StatCard title="Heart Rate" value="68" subtitle="Resting BPM" icon={HeartIcon} color="red" percentage={100} />
      <StatCard title="Sleep" value="7.3" subtitle="hrs/night" icon={HeartIcon} color="purple" percentage={91} />
    </div>
  </motion.div>;
};