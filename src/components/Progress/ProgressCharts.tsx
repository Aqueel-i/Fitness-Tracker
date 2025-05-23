import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CalendarIcon, ScaleIcon, TrendingUpIcon } from 'lucide-react';
interface ProgressChartsProps {
  compact?: boolean;
}
export const ProgressCharts = ({
  compact = false
}: ProgressChartsProps) => {
  const [activeTab, setActiveTab] = useState('weight');
  // Mock data
  const weightData = [{
    day: 'Mon',
    weight: 185
  }, {
    day: 'Tue',
    weight: 184
  }, {
    day: 'Wed',
    weight: 184.5
  }, {
    day: 'Thu',
    weight: 183.5
  }, {
    day: 'Fri',
    weight: 183
  }, {
    day: 'Sat',
    weight: 182
  }, {
    day: 'Sun',
    weight: 181.5
  }];
  const workoutData = [{
    day: 'Mon',
    minutes: 45
  }, {
    day: 'Tue',
    minutes: 0
  }, {
    day: 'Wed',
    minutes: 60
  }, {
    day: 'Thu',
    minutes: 30
  }, {
    day: 'Fri',
    minutes: 0
  }, {
    day: 'Sat',
    minutes: 90
  }, {
    day: 'Sun',
    minutes: 45
  }];
  const calorieData = [{
    day: 'Mon',
    calories: 2200
  }, {
    day: 'Tue',
    calories: 2350
  }, {
    day: 'Wed',
    calories: 1980
  }, {
    day: 'Thu',
    calories: 2150
  }, {
    day: 'Fri',
    calories: 2400
  }, {
    day: 'Sat',
    calories: 2700
  }, {
    day: 'Sun',
    calories: 2100
  }];
  const tabs = [{
    id: 'weight',
    label: 'Weight',
    icon: ScaleIcon
  }, {
    id: 'workouts',
    label: 'Workouts',
    icon: TrendingUpIcon
  }, {
    id: 'calories',
    label: 'Calories',
    icon: CalendarIcon
  }];
  const renderChart = () => {
    switch (activeTab) {
      case 'weight':
        return <ResponsiveContainer width="100%" height={compact ? 150 : 250}>
            <AreaChart data={weightData} margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0
          }}>
              <defs>
                <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tick={{
              fontSize: 12
            }} />
              <YAxis domain={['dataMin - 1', 'dataMax + 1']} tick={{
              fontSize: 12
            }} />
              <Tooltip />
              <Area type="monotone" dataKey="weight" stroke="#8884d8" fillOpacity={1} fill="url(#weightGradient)" isAnimationActive={true} animationDuration={1000} animationEasing="ease-out" />
            </AreaChart>
          </ResponsiveContainer>;
      case 'workouts':
        return <ResponsiveContainer width="100%" height={compact ? 150 : 250}>
            <BarChart data={workoutData} margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0
          }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tick={{
              fontSize: 12
            }} />
              <YAxis tick={{
              fontSize: 12
            }} />
              <Tooltip />
              <Bar dataKey="minutes" fill="#4f46e5" radius={[4, 4, 0, 0]} isAnimationActive={true} animationDuration={1000} animationEasing="ease-out" />
            </BarChart>
          </ResponsiveContainer>;
      case 'calories':
        return <ResponsiveContainer width="100%" height={compact ? 150 : 250}>
            <AreaChart data={calorieData} margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0
          }}>
              <defs>
                <linearGradient id="calorieGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tick={{
              fontSize: 12
            }} />
              <YAxis tick={{
              fontSize: 12
            }} />
              <Tooltip />
              <Area type="monotone" dataKey="calories" stroke="#f97316" fillOpacity={1} fill="url(#calorieGradient)" isAnimationActive={true} animationDuration={1000} animationEasing="ease-out" />
            </AreaChart>
          </ResponsiveContainer>;
      default:
        return null;
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
    delay: 0.3
  }} className={`bg-white rounded-2xl shadow-md p-6 ${compact ? 'col-span-1' : 'col-span-2'}`}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">Progress</h2>
          <p className="text-gray-500 text-sm">Track your fitness journey</p>
        </div>
      </div>
      <div className="flex space-x-2 mb-4">
        {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return <motion.button key={tab.id} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setActiveTab(tab.id)} className={`px-3 py-2 rounded-lg flex items-center gap-2 ${isActive ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
              <Icon className="h-4 w-4" />
              {!compact && <span>{tab.label}</span>}
            </motion.button>;
      })}
      </div>
      <motion.div key={activeTab} initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.3
    }}>
        {renderChart()}
      </motion.div>
    </motion.div>;
};