import React from 'react';
import Moment from 'react-moment';
import { useLaunch } from '../hooks/useLaunch';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Launch() {
  let { flight_number } = useParams()
  flight_number = parseInt(flight_number)

  const {loading, error, data} = useLaunch(flight_number)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>


  const {
    mission_name,
    launch_year,
    launch_success,
    launch_date_local,
    rocket: {
      rocket_id,
      rocket_name,
      rocket_type
    }
  } = data.launch
  
  return (
    <div>
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission: {mission_name}</span>
      </h1>
      <h4 className="mb-3">Launch Details</h4> 
      <ul className="list-group">
        <li className="list-group-item">
          Flight Number: {flight_number}
        </li>
        <li className="list-group-item">
          Launch Year: {launch_year}
        </li>
        <li className="list-group-item">
          Date Year: <Moment format="Do MMMM - h:mm a">{launch_date_local}</Moment>
        </li>
        <li className="list-group-item">
          Launch Successful:
          <span className={launch_success ? 'text-success' : 'text-danger'}>{launch_success ? ' Success' : ' Failed'}</span>
        </li>
      </ul>

      <h4 className="my-3">Rocket Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Rocket ID: {rocket_id}</li>
        <li className="list-group-item">Rocket Name: {rocket_name}</li>
        <li className="list-group-item">Rocket Type: {rocket_type}</li>
      </ul>
      <hr />
      <Link to="/" className="btn btn-secondary mb-5">
        Back to Home
      </Link>
    </div>
  );
}

export default Launch
