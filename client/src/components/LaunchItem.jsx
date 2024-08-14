import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function LaunchItem({ launch }) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-10">
          <h4>
            Mission:{' '}
            <span
              className={launch.launch_success ? 'text-success' : 'text-danger'}>
              {launch.mission_name}
            </span>
          </h4>
          <p>
            Date: <Moment format="DD-MM-YYYY">{launch.launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-2">
          <Link to={`/launch/${launch.flight_number}`} className="btn btn-secondary">
            Launch Details
          </Link>
          <br />
          <br />
          <span className={launch.launch_success ? 'text-success' : ''}>Success</span> 
          <span className={launch.launch_success ? '' : 'text-danger'}> - Failed</span> 
        </div>
          <hr />
      </div>
    </div>
  );

}
