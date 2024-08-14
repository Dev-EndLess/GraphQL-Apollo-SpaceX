import { useQuery, gql } from "@apollo/client"

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export const useLaunch = (flight_number) => {

  const {loading, error, data} = useQuery(LAUNCH_QUERY, {
    variables: {flight_number}
  })

  return {
    loading,
    error,
    data
  }
}
