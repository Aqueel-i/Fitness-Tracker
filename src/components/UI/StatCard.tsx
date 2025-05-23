import React from 'react';
import { motion } from 'framer-motion';
import { BoxIcon } from 'lucide-react';
interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: BoxIcon;
  color: string;
  percentage: number;
}
export const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
  percentage
}: StatCardProps) => {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    red: 'bg-red-100 text-red-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600'
  };
  const bgColor = colorMap[color as keyof typeof colorMap] || colorMap.blue;
  return <motion.div whileHover={{
    y: -5
  }} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
      <div className="flex justify-between items-start mb-2">
        <div className={`${bgColor} p-2 rounded-lg`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="text-xs text-gray-500">{percentage}%</div>
      </div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="flex items-end gap-1">
        <div className="text-xl font-bold">{value}</div>
        <div className="text-xs text-gray-500 mb-1">{subtitle}</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
        <motion.div initial={{
        width: 0
      }} animate={{
        width: `${percentage}%`
      }} transition={{
        duration: 1,
        delay: 0.2
      }} className={`h-1.5 rounded-full ${color === 'blue' ? 'bg-blue-600' : color === 'red' ? 'bg-red-600' : color === 'green' ? 'bg-green-600' : color === 'purple' ? 'bg-purple-600' : 'bg-orange-600'}`} />
      </div>
    </motion.div>;
};