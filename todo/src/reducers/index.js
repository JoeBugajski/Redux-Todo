import { 
  VisibilityFilters, 
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from '../actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      }
    default: 
      return state;
  }  
}

export default todoReducer;