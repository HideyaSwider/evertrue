export const selected = (state = {}, action) => {
  if(action.type === "SELECT_OBJECT") {
  	return action.payload
  } else return state
}
