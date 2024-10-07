import React from 'react'
import { Calendar } from 'lucide-react'

const WeekView = ({ onWorkoutClick }) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const currentDate = new Date()
  const currentDay = currentDate.getDay()
  const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay
  const weekStart = new Date(currentDate)
  weekStart.setDate(currentDate.getDate() + mondayOffset)

  const workouts = [
    { day: 'Mon', workout: '5K Easy Run', description: 'A light 5K run to start the week.', distance: '5K', pace: '9:30/mile', type: 'easy' },
    { day: 'Wed', workout: 'Interval Training', description: '6x400m repeats with 90 sec rest.', distance: '4 miles', pace: 'Varies', type: 'interval' },
    { day: 'Fri', workout: 'Tempo Run', description: '20 minutes at half marathon pace.', distance: '5 miles', pace: '8:00/mile', type: 'tempo' },
    { day: 'Sat', workout: 'Long Run', description: 'Steady-paced long run to build endurance.', distance: '10 miles', pace: '9:45/mile', type: 'long' },
  ]

  const isToday = (date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear()
  }

  return (
    <div className="modern-card">
      <h2 className="text-2xl font-semibold mb-4 flex items-center text-black">
        <Calendar className="mr-2 text-black" size={24} />
        This Week's Workouts
      </h2>
      <div className="space-y-4">
        {daysOfWeek.map((day, index) => {
          const date = new Date(weekStart)
          date.setDate(weekStart.getDate() + index)
          const workout = workouts.find(w => w.day === day)
          const today = isToday(date)
          return (
            <div 
              key={day} 
              className={`workout-item rounded-lg transition-all duration-200 hover:shadow-lg ${today ? 'border-4 border-black' : ''} ${workout ? getWorkoutColor(workout.type) : 'bg-white border border-gray-200'}`}
              onClick={() => workout && onWorkoutClick({...workout, date: date.toDateString()})}
            >
              <div className="flex items-center p-3">
                <div className="w-16 text-center">
                  <p className="font-semibold text-black">{day}</p>
                  <p className="text-sm text-black">{date.getDate()}</p>
                </div>
                {workout && (
                  <div className="ml-4 flex-grow">
                    <p className="text-lg font-medium text-black">
                      {workout.workout}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const getWorkoutColor = (type) => {
  switch (type) {
    case 'easy': return 'bg-arc-green text-black'
    case 'interval': return 'bg-arc-yellow text-black'
    case 'tempo': return 'bg-arc-orange text-black'
    case 'long': return 'bg-arc-blue text-black'
    default: return 'bg-gray-500 text-black'
  }
}

export default WeekView