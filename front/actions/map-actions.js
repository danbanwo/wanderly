export const test = () => (
  (dispatch) => {
    dispatch({type: 'test', payload: 'test payload'})
  }
);
