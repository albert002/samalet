import { getData } from '../api';
export const GET_DATA = 'GET_USER_DATA';
export const GET_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_USER_DATA_FAILURE';

const getDataLoading = () => ({
  type: GET_DATA,
});

const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload,
});

const getDataFailure = (error) => ({
  type: GET_DATA_FAILURE,
  error,
});

export const gettingData = async ({ dispatch }) => {
  dispatch(getDataLoading());
  try {
    const data = await getData();
    dispatch(getDataSuccess(data));
  } catch (e) {
    dispatch(getDataFailure('Ошибка подключения'));
  }
};


