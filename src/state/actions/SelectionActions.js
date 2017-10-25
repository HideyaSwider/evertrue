export const selectObject = index => {
  return {
    type: 'SELECT_OBJECT',
    payload: { selected: index }
  }
}
