export const db = (state = {}, action) => {
  if(action.type === "LOAD_DB") {
  	return action.payload
  } else return state
}
