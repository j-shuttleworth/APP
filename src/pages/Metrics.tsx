import React from 'react'
import { BarChart2, TrendingUp, Activity, Heart } from 'lucide-react'

const Metrics = () => {
  const metricCards = [
    { title: 'Total Distance', value: '120 miles', icon: Activity },
    { title: 'Average Pace', value: '8:30 min/mile', icon: TrendingUp },
    { title: 'Workouts Completed', value: '15', icon: BarChart2 },
    { title: 'Average Heart Rate', value: '145 bpm', icon: Heart },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-black">Metrics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCards.map((card, index) => (
          <div key={index} className="modern-card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-black">{card.title}</h2>
              <card.icon className="text-black" size={24} />
            </div>
            <p className="text-3xl font-bold text-black">{card.value}</p>
          </div>
        ))}
      </div>
      <div className="modern-card">
        <h2 className="text-2xl font-semibold mb-4 text-black">Performance Over Time</h2>
        <div className="w-full h-64 bg-black rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 flex items-end justify-around p-4">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-8 bg-opacity-80 rounded-t" style={{
                height: `${Math.random() * 80 + 20}%`,
                backgroundColor: ['#4fd1c5', '#9f7aea', '#f687b3'][i % 3]
              }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Metrics