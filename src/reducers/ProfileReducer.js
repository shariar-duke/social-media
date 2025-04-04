import { actions } from "../actions";

const initialState = {
  user: null,
  posts: [],
  loading: false,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.profile.DATA_FETCHING:
      return {
        ...state,
        loading: true,
        error: null, // Reset error on new fetch
      };

    case actions.profile.DATA_FETCHED:
      return {
        ...state,
        loading: false,
        user: action.payload.user, // Assuming payload contains user data
        posts: action.payload.posts, // Assuming payload contains posts
      };

    case actions.profile.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error, // Set error message
      };

    default:
      return state; // Return current state if action type is unknown
  }
};

export { initialState, profileReducer };
