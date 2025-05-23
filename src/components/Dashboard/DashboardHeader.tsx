import React from 'react';
import { motion } from 'framer-motion';
import { ActivityIcon, CalendarIcon, HomeIcon, UserIcon, BoxIcon } from 'lucide-react';
interface DashboardHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
export const DashboardHeader = ({
  activeTab,
  setActiveTab
}: DashboardHeaderProps) => {
  const tabs = [{
    id: 'overview',
    name: 'Overview',
    icon: HomeIcon
  }, {
    id: 'workouts',
    name: 'Workouts',
    icon: ActivityIcon
  }, {
    id: 'meals',
    name: 'Meal Planner',
    icon: CalendarIcon
  }, {
    id: 'progress',
    name: 'Progress',
    icon: BoxIcon
  }];
  return <header className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-purple-600 rounded-full p-3">
          <motion.div whileHover={{
          rotate: 10
        }} whileTap={{
          scale: 0.9
        }}>
            <ActivityIcon className="h-8 w-8 text-white" />
          </motion.div>
        </div>
        <h1 className="text-2xl font-bold text-purple-900">FitTrack</h1>
      </div>
      <nav className="bg-white rounded-full shadow-md p-2 w-full md:w-auto">
        <ul className="flex justify-between">
          {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return <li key={tab.id}>
                <button onClick={() => setActiveTab(tab.id)} className={`relative px-4 py-2 rounded-full flex items-center gap-2 ${isActive ? 'text-purple-700' : 'text-gray-500 hover:text-purple-600'}`}>
                  {isActive && <motion.div layoutId="activeTab" className="absolute inset-0 bg-purple-100 rounded-full" initial={false} transition={{
                type: 'spring',
                duration: 0.5
              }} />}
                  <span className="relative">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="relative hidden md:inline">{tab.name}</span>
                </button>
              </li>;
        })}
        </ul>
      </nav>
      <motion.button whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }} className="flex items-center gap-2 bg-white p-2 rounded-full shadow-sm">
        <div className="bg-purple-100 rounded-full p-1">
          <UserIcon className="h-6 w-6 text-purple-700" />
        </div>
        <span className="font-medium mr-2">Aqueel Ishak</span>
      </motion.button>
    </header>;
};