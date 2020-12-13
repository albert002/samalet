import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE } from './actions';

export default function reducer(state, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: '',
      };
    case GET_DATA_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        loaded: true,
        error: '',
      };
    case GET_DATA_FAILURE:
      return {
        data: [],
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
}
