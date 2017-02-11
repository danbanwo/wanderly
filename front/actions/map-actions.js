import axios from 'axios';

const markerData = (markers) => ({
    type: 'ADD_MARKERS', payload: markers
  })

export const addMarkers = () => (
  (dispatch) => {
    axios.get('/api/destination')
    .then((markers) => {
      dispatch(markerData(markers))
    })
  }
);
