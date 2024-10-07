import React from 'react'
import { X, Activity, Clock, MapPin, TrendingUp } from 'lucide-react'

const ActivityDetails = ({ activity, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{activity.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <p><strong>Date:</strong> {activity.date}</p>
          <p className="flex items-center"><Activity size={16} className="mr-2" /> <strong>Distance:</strong> {activity.distance}</p>
          <p className="flex items-center"><Clock size={16} className="mr-2" /> <strong>Time:</strong> {activity.time}</p>
          <p className="flex items-center"><MapPin size={16} className="mr-2" /> <strong>Location:</strong> {activity.location}</p>
          <p className="flex items-center"><TrendingUp size={16} className="mr-2" /> <strong>Pace:</strong> {activity.pace}</p>
          {activity.elevation && <p><strong>Elevation:</strong> {activity.elevation}</p>}
          {activity.calories && <p><strong>Calories:</strong> {activity.calories}</p>}
        </div>
      </div>
    </div>
  )
}

export default ActivityDetails