import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Calendar, Clock, MapPin } from 'lucide-react'
import WorkoutDetails from '../components/WorkoutDetails'

const TrainingCalendar = () => {
  const [workouts, setWorkouts] = useState([
    { id: '1', day: 'Mon', workout: '5K Easy Run', description: 'A light 5K run to start the week.', distance: '5K', pace: '9:30/mile', type: 'easy' },
    { id: '2', day: 'Wed', workout: 'Interval Training', description: '6x400m repeats with 90 sec rest.', distance: '4 miles', pace: 'Varies', type: 'interval' },
    { id: '3', day: 'Fri', workout: 'Tempo Run', description: '20 minutes at half marathon pace.', distance: '5 miles', pace: '8:00/mile', type: 'tempo' },
    { id: '4', day: 'Sat', workout: 'Long Run', description: 'Steady-paced long run to build endurance.', distance: '10 miles', pace: '9:45/mile', type: 'long' },
  ])

  const [selectedWorkout, setSelectedWorkout] = useState(null)

  const onDragEnd = (result) => {
    if (!result.destination) {
      return
    }

    const newWorkouts = Array.from(workouts)
    const [reorderedItem] = newWorkouts.splice(result.source.index, 1)
    newWorkouts.splice(result.destination.index, 0, reorderedItem)

    setWorkouts(newWorkouts)
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

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-black">Training Calendar</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="workouts">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
              {workouts.map((workout, index) => (
                <Draggable key={workout.id} draggableId={workout.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`workout-item p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-lg ${getWorkoutColor(workout.type)}`}
                      onClick={() => setSelectedWorkout(workout)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold">{workout.day}: {workout.workout}</h3>
                          <p className="text-sm">{workout.description}</p>
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            <span>{workout.distance}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock size={16} className="mr-1" />
                            <span>{workout.pace}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {selectedWorkout && (
        <WorkoutDetails
          workout={selectedWorkout}
          onClose={() => setSelectedWorkout(null)}
        />
      )}
    </div>
  )
}

export default TrainingCalendar