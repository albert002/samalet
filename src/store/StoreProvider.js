import React, { useReducer } from 'react';
import propTypes from 'prop-types';
import reducer from './reducer';
import { StoreContext } from './storeContext';

const initialState = {
  data: [],
  loading: false,
  loaded: false,
  error: '',
};

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: propTypes.node.isRequired,
};
