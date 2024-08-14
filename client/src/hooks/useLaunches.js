import { useQuery, gql } from "@apollo/client"

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export const useLaunches = () => {
  const {loading, error, data} = useQuery(LAUNCHES_QUERY)

  return {
    loading,
    error,
    data
  }
}
