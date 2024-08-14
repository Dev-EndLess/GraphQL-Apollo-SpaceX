import React from 'react';
import { useLaunches } from '../hooks/useLaunches';
import LaunchItem from './LaunchItem'

function Launches() {
  const {loading, error, data} = useLaunches()
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>

  const allLaunches = data.launches.map(launch => 
    <LaunchItem 
    key={launch.mission_name} 
    launch={launch}/>)
  
  return (
    <div>
      <h1 className="display-4 mt-5 mb-4 text-center">Launches</h1>
      {allLaunches}
    </div>
  )
}

export default Launches