const executeLoadDB = (json) => {
  console.log(json)
  return {
    type: 'LOAD_DB',
    payload: { props: 'content' }
  }
}

export const loadDB = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(executeLoadDB({props: 'content'}));
    }, 3000);
  };
}
